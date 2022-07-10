import React from "react";
// Style
import '../../assets/scss/header.scss';
import Logo from './logo'
import Navigation from "./Navigation";
const index: React.FunctionComponent = () => (
    <header className={'header'}>
        <div className="header__wrapper">
            <Logo />
            <Navigation />
        </div>
    </header>
)

export default index