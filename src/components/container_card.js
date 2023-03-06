import Card from '@mui/joy/Card';
// import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';

export default function ContainerCard(props) {
    let link;
    if (props.container.url) {
        link = (
            <Link
                href={props.container.url}
                target='_blank'
                rel='noopener noreferrer'
            >
                {'Link'}
            </Link>
        );
    }

    return (
        <Card variant='outlined' sx={{width: 320}}>
            <h2>{props.container.name}</h2>
            <ul>
                <li>{'ID: ' + props.container.id}</li>
                <li>{'Image: ' + props.container.image}</li>
            </ul>
            <hr />
            <ul>
                <li>{'State: ' + props.container.state}</li>
                <li>{'Status: ' + props.container.status}</li>
            </ul>
            {link}
        </Card>
    );
}
