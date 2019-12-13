import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { from } from 'rxjs';

function App() {
  return (
    <div className="App">
      <Navbar dark color = "primary">
        <div className = "container">
          <NavbarBrand href = "/" >Restoronte Con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
