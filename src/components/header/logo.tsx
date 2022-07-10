import React from "react";
import home from '../../assets/img/Home.svg'
const logo: React.FC = () => (
    <div className={'header__logo'}>
        <img src={home} alt="Logo"/>
        Django Forum
    </div>
)

export default logo;
