import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/contact'
import Navigation from './components/layout/Navigation';
import Notfound from './components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Addpost from './components/posts/AddPost';
import EditPost from './components/posts/EditPosts';
import Post from './components/posts/Post';

function App() {

  return (
    <Router>

      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts/add" component={Addpost} />
          <Route exact path="/posts/edit/:i" component={EditPost} />
          <Route exact path="/posts/:id" component={Post} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
