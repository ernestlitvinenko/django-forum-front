import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Categories from "../components/categories";
import { useLogged } from '../hooks/uselogged';

const HomePage = () => {
    const location = useLocation();
    const logged = useLogged();
    return (
    <>
        <main>
            <Categories />
        </main>
    </>
)}


export default HomePage;