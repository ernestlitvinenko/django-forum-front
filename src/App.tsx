import React from 'react';
import Pages from './pages';
import './App.css';
import Header from "./components/header";
function App() {

  return (
      <div className="app-wrapper">
        <Header />
          <Pages />
      </div>


);
}

export default App;
