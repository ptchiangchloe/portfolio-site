import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from 'containers/App/App';
import Home from 'containers/Home/Home';
import About from 'containers/About/About';
import Design from 'containers/Design/Design';
import FindMe from 'containers/Design/FindMe/FindMe';
import Udacity from 'containers/Design/Udacity/Udacity';
import TShirt from 'containers/Design/TShirt/TShirt';
import Art from 'containers/Art/Art';
import Art1 from 'containers/Art/Art1/Art1';
import Code from 'containers/Code/Code';
import Connect from 'containers/Connect/Connect';


export default (
  <Router history={hashHistory}>
    <Route path="portfolio-site/" component={App}>
      <IndexRoute path="" component={Home}/>
    </Route>
    <Route path="portfolio-site/about" component={About}></Route>
    <Route path="portfolio-site/design" component={Design}></Route>
    <Route path="portfolio-site/design/01" component={FindMe}></Route>
    <Route path="portfolio-site/design/02" component={Udacity}></Route>
    <Route path="portfolio-site/design/03" component={TShirt}></Route>
    <Route path="portfolio-site/art" component={Art}></Route>
    <Route path="portfolio-site/art/01" component={Art1}></Route>
    <Route path="portfolio-site/code" component={Code}></Route>
    <Route path="portfolio-site/connect" component={Connect}></Route>
  </Router>
);
