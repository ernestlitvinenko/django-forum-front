import React from 'react';
import Home from './Home'
import Thread from './Thread'
import {Route, Routes} from "react-router-dom";
import Login from './Login';
import {Operations} from './Login'

const Pages = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/thread/:thread_id" element={<Thread />}/>,
        <Route path="/login" element={<Login operation={Operations.LOGIN}/>}/>,
        <Route path="/sign-up" element={<Login operation={Operations.SIGN_UP}/>}/>,
    </Routes>
)

export default Pages