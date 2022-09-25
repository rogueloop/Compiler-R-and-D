// import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Slide from './components/Slide';
import Randd from './components/Randd'
import Socials from './components/Socials'

import Contact from './components/Contact'

function App() {
  // sconst [signedIn,setSignedIn]=useState(false)
  return (
    <div className="App">
    <Header />
    <Intro />
    <div className="gradient"></div>
    <Slide />
    <div className="gradient"></div>
    <Randd />
    <div className="gradient"></div>
    <Contact />
    <div className="gradient"></div>
    <Socials />
    </div>
  );
}

export default App;
