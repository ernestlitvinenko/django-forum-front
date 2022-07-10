import React from 'react';
import Home from './Home'


interface Route {
    route: string,
    element: () => React.ReactNode
}

const pages : Array<Route> = [
    {route: '/', element: Home}
];

export default pages