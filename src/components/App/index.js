import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../Nav';
import Home from '../../pages/Home'
import './App.css'
import Footer from '../Footer';

const App = () => {
  return (
    <Router>
      <div className="">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
