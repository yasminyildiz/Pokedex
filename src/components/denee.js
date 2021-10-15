import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
   const navUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
   
    return (
       <div className='topnav'>
            <nav><Link  to="/">My pokemons
               <div className="logo-image">
                  <img className="nav-image" alt='' src= {navUrl + "25.png"}/>
               </div>
            </Link></nav>

            <nav><Link className to="/favs">Favorites
               <div className="logo-image">
                  <img className="nav-image" alt='' src= {navUrl + "7.png"}/>
               </div>
            </Link></nav>

            <nav><Link to="/pokedex">Pokedex
               <div className="logo-image">
                  <img className="nav-image" alt='' src= {navUrl + "4.png"}/>
               </div>
            </Link></nav>
            
            <img className="nav-big-image" alt='' src= {navUrl + "1.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "4.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "7.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "10.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "13.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "14.png"}/>  
            <img className="nav-big-image" alt='' src= {navUrl + "17.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "20.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "23.png"}/>  
            <img className="nav-big-image" alt='' src= {navUrl + "25.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "31.png"}/>
            <img className="nav-big-image" alt='' src= {navUrl + "37.png"}/> 
       </div>
       
    );
}
 
export default Navigation;