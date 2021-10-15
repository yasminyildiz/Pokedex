
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Navigation from './components/Navigation';
import ListFavoritePokemons from './components/ListFavoritePokemons';
import ListCatchedPokemons from './components/ListCatchedPokemons';
import ListPokemons from './components/ListPokemons';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div className='container'>
          <div className='row'>
          <Navigation />
            <Switch>
             <Route path="/" component={ListCatchedPokemons} exact/>
             <Route path="/favs" component={ListFavoritePokemons}/>
             <Route path="/pokedex" component={ListPokemons}/>
=           </Switch>
          </div>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
