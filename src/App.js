import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Intro />
      <Projects />
      <Education />
      <Skills />
    </div>
    <Footer />
  </div>
);

export default App;
