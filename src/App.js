import React, { Component } from 'react';
import logo from './logo.svg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faCoffee, faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faTimes, faTwitter, faGithub, faCoffee, faEnvelope, faSpinner)

import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Featured from "./components/Featured/Featured";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Intro />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
