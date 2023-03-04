import styled from '@emotion/styled';
import Sheet from '@mui/joy/Sheet';

const HeaderText = styled.h1`
    margin: 0;
    padding: 0.25em 0.5em;
`;

export default function Header() {
    return (
        <Sheet component='header' variant='soft' color='primary'>
            <HeaderText>Docker Visualizer</HeaderText>
        </Sheet>
    );
}
