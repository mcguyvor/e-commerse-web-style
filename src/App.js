import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route} from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hatts Page</h1>
  </div>
)
 

function App() {
  return (
    
      <div>

        <Route exact path='/' component={HomePage}/>
        
        <Route exact path='/hats' component={HatPage}/>
       
      </div>

  );
}

export default App;
