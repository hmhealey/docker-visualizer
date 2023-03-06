import styled from '@emotion/styled';
import Sheet from '@mui/joy/Sheet';

const BodyContainer = styled.main`
    padding: 2em;
`;

export default function Body(props) {
    return <Sheet component={BodyContainer}>{props.children}</Sheet>;
}
