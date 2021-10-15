import '../App.css';
import React, {Component} from "react";
import { Navbar, Nav, Button, FormControl,Form } from 'react-bootstrap';

const Navigation = () => {
   const navUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
   
    return (
      <div className="header-bg">
      <Navbar expand="lg">
        <Navbar.Brand href="/pokedex">Pokedex</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            
              
            <Nav.Link href="/pokedex">Pokemons</Nav.Link>

            <Nav.Link href="/favs">Favorites</Nav.Link>

            <Nav.Link href="/">Captured</Nav.Link>

           
            
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
        </div>
       
    );
}
 
export default Navigation;