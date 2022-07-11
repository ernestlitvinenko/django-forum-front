import React from "react";
import {Link} from "react-router-dom";

const Search: React.FC = () => (
        <input type="text" className={'header__search'} placeholder="Поиск"/>
)

const navigation: React.FC = () => (
    <nav className={'header__navigation'}>
        <Search />
        <div className="header__auth"   >
            <Link to="/login">Войти</Link>
            <Link to="/sign-up">Зарегистрироваться</Link>
        </div>
    </nav>
)

export default navigation