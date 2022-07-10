import React from "react";

const Search: React.FC = () => (
        <input type="text" className={'header__search'} placeholder="Поиск"/>
)

const navigation: React.FC = () => (
    <nav className={'header__navigation'}>
        <Search />
    </nav>
)

export default navigation