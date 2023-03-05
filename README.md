# Docker Visualizer

This is an attempt to make a slightly nicer Docker visualizer than the one I was using previously. It's using React and Joy UI.

## Configuration

-   `VISUALIZER_ENABLE_DEBUGGING` - Whether or not to enable the debugging API. Defaults to `false`.
-   `VISUALIZER_PORT` - The port that the server runs on. Defaults to `3000`.
-   `VISUALIZER_SOCKET_PATH` - The path to the Docker socket. Defaults to `/var/run/docker.sock`.

## Usage

### "Production"

1. `docker compose build` - Build/rebuild the Docker image
2. `docker compose up` - Start the Docker container
    1. `docker compose up --build` - Rebuild and start the Docker container
3. `docker compose down` - Stop the Docker container

### Development

1. `npm run build` - Rebuild the web app
2. `node scripts/server.js` - Start a server that will serve the web app plus the API
