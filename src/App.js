import {useEffect, useState} from 'react';
import Link from '@mui/joy/Link';

import Body from './components/layout/body';
import Header from './components/layout/header';
import ThemeProvider from './components/theme_provider';

// function mockContainers(n) {
//     const containers = [];

//     for (let i = 0; i < n; i++) {
//         containers.push({
//             createdAt: Date.now() - i * 6000,
//             id: `container${i}_1`,
//             image: `container${i}@${Math.random()
//                 .toString()
//                 .replace('0.', '')}`,
//             name: `container${i}`,
//             state: ['Running', 'Starting', 'Stopped'][
//                 Math.floor(Math.random() * 3)
//             ],
//             status: 'Just vibing',
//             url: `https://example.com/pages/${i}`,
//         });
//     }

//     return containers;
// }

export default function App() {
    const [containers, setContainers] = useState(mockContainers(8));

    useEffect(async () => {
        const response = await fetch('/api/containers');
        const data = await response.json();
        setContainers(data);
    }, []);

    return (
        <ThemeProvider>
            <Header />
            <Body>
                {containers.map((container) => (
                    <ContainerCard container={container} />
                ))}
                <p>Lorem ipsum something</p>
                <p>Lorem ipsum something</p>
                <p>Lorem ipsum something</p>
                <Link
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </Link>
            </Body>
        </ThemeProvider>
    );
}
