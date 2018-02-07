var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require ('Weather');
var About = require ('About');
var Examples = require ('Examples');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('!style-loader!css-loader!applicationStyles')
ReactDOM.render(
  <Router history = {hashHistory}>
      <Route path="/" component = {Main}>
          <IndexRoute component = {Weather}></IndexRoute>
          <Route path= 'about'  component= {About}></Route>
          <Route path= 'examples' component={Examples}></Route>
      </Route>
  </Router>
  , document.getElementById('app'));
