import React from 'react';
import Home from './Home'
import Thread from './Thread'
import {Route, Routes} from "react-router-dom";


const Pages = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/thread/:thread_id" element={<Thread />}/>,
    </Routes>
)

export default Pages