import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Switch, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import Form from './car';

import Home from './navigations/home';
import About from './navigations/about';
import Contact from './navigations/contact';

import reportWebVitals from './reportWebVitals';

const Navcontrols =()=>{

 return (
  <Router>

  <div className="links-div">
    
    <Link to = "/"> Home</Link>
  </div>

  <div className="links-div">

    <Link to = "/about">About us</Link>

  </div>

  <div className="links-div">

    <Link to = "/contact">Conatct info</Link>

  </div>
    
    



  <Switch>

    <Route path ='/' exact>

      <Home />

    </Route>

    <Route path = '/about'>

      <About />

    </Route>

    <Route path = "/contact">

      <Contact />
      
    </Route>

  </Switch>




</Router>

 );


}


ReactDOM.render(
  <React.StrictMode>

<Navcontrols />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
