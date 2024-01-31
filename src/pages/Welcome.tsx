import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Table from './Table';

function Welcome() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <Link
            className="App-link"
            to='/Table'
          >
            Go to this page!
          </Link>
          <Routes>
            <Route path='/Table' Component={Table}></Route>
          </Routes>
        </header>
      </div>
    );
}

export default Welcome;