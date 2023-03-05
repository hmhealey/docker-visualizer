const http = require('http');

const express = require('express');

function fetchFromDocker(socketPath, path) {
    return new Promise((resolve) => {
        http.get(
            {
                path,
                socketPath,
            },
            (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            }
        );
    });
}

function transformContainers(containers, services) {
    return containers.map((container) => {
        const serviceName = container.Labels['com.docker.swarm.service.name'];
        const service =
            serviceName &&
            services.find((service) => service.Spec.Name === serviceName);

        return {
            createdAt: container.created,
            id: container.Id,
            image:
                container.Image.substring(0, container.Image.indexOf(':')) ??
                container.Image,
            name: container.Names[0],
            state: container.State,
            status: container.Status,
            url: service?.Spec.Labels['ca.hmhealey.visualizer.url'],
        };
    });
}

function runServer() {
    const socketPath =
        process.env.VISUALIZER_SOCKET_PATH ?? '/var/run/docker.sock';
    const port = parseInt(process.env.VISUALIZER_PORT, 10) || 3000;
    const enableDebugging = Boolean(process.env.VISUALIZER_ENABLE_DEBUGGING);

    const app = express();

    app.use(express.static('build'));

    app.get(/^(?!\/api\/)/, (request, response) => {
        response.sendFile('index.html', {root: 'build'});
    });

    app.get('/api/containers', async (request, response) => {
        const [containers, services] = await Promise.all([
            fetchFromDocker(socketPath, '/containers/json'),
            fetchFromDocker(socketPath, '/services'),
        ]);

        response.json(transformContainers(containers, services));
    });

    if (enableDebugging) {
        app.get('/api/debug/containers', async (request, response) => {
            const containers = await fetchFromDocker(
                socketPath,
                '/containers/json'
            );
            response.json(containers);
        });

        app.get('/api/debug/services', async (request, response) => {
            const services = await fetchFromDocker(socketPath, '/services');
            response.json(services);
        });
    }

    app.listen(port);
}

runServer();
