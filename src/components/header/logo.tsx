import React from "react";
import {Link} from "react-router-dom";
import home from '../../assets/img/Home.svg'
const logo: React.FC = () => (
    <Link to="/" className={'header__logo'}>
        <img src={home} alt="Logo"/>
        <span className="header__logo-title">Django Forum</span>
    </Link>
)

export default logo;
