import Link from '@mui/joy/Link';

import Body from './components/layout/body';
import Header from './components/layout/header';
import ThemeProvider from './components/theme_provider';

import Body from './components/body';

export default function App() {
    return (
        <ThemeProvider>
            <Header />
            <Body>
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
