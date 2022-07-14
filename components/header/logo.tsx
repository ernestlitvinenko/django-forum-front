import Col from "react-bootstrap/Col";
import Image from "next/image";
import imageSrc from '/img/Logo.svg';

export function Logo () {
    return (
        <Col sm={4} className={'header__logo py-2'}>
            <Image src={imageSrc} alt={'Logo'} width={150}/>
        </Col>
    )
}