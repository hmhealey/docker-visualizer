import Link from '@mui/joy/Link';

import ThemeProvider from './components/theme_provider';

import './App.css';

export default function App() {
    return (
        <ThemeProvider>
            <div className='App'>
                <header className='App-header'>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Link
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </Link>
                </header>
            </div>
        </ThemeProvider>
    );
}
