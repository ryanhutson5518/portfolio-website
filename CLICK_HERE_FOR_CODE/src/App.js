import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/notFound';
import Home from './components/home/home';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import NavBar from './components/common/navBar';
import TypingTest from './components/typingTest/typingTest';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/dist/collapse';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import '../src/css/styles.min.css';
import '../src/css/alienButton.min.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/portfolio-website" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/typing-test" component={TypingTest} />
          <Redirect exact from="/" to="/portfolio-website" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
