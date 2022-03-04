import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NavBar from '../componenst/Nav';
import BoardDetails from '../pages/BoardDetails';
 
const RouterTrello = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/board/:boardId' element={<BoardDetails />} />
            <Route path='/about' element = {<About />} />
        </Routes>
        </BrowserRouter>);
};
export default RouterTrello