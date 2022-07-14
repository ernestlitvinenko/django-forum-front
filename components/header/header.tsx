import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import {Logo} from "./logo";
import {User} from "./user";



const Header = () => {

    return (
        <header className={'header'}>
            <Container className={'header__wrapper'}>
                <Row className={'header__inner align-items-center'}>
                    <Logo />
                    <User />
                </Row>
            </Container>

        </header>
    )
};

export default Header;