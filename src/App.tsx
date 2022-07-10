import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Pages from './pages';
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  return (
  <Routes>
    {Pages.map(elem => <Route path={elem.route} element={elem.element()} />)}
  </Routes>

);
}

export default App;
