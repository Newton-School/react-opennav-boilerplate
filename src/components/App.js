import React from 'react'
import '../styles/App.css';
import { Nav } from './Nav';

const App = () => {

  return (
    <div id="main">
        <Nav isOpen={isOpen} />
        <button id="nav-opener" style={{zIndex:100}}>Toggle Nav</button>
    </div>
  )
}


export default App;
