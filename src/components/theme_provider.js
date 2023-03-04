import '@fontsource/public-sans';
import CssBaseline from '@mui/joy/CssBaseline';
import {CssVarsProvider} from '@mui/joy/styles';

export default function ThemeProvider(props) {
    return (
        <CssVarsProvider>
            <CssBaseline />
            {props.children}
        </CssVarsProvider>
    );
}
