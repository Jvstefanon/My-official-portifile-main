import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import About from "./containers/About";
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Footer from './containers/Footer';
import MyGlobalStyle from './styles/globasStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyle/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
  </React.StrictMode>
)
