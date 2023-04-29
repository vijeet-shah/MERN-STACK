import React from "react";
import "./App.css";
import Particles from 'react-particles-js';
import particles from './particles.js'

const App = () => {

  return (

    <div className="App">

<Particles
            params={particles}
            className="particle"
            height='100vh'
        
            />

    </div>

    

    
  
  );
};

export default App;