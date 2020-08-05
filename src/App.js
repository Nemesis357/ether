import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';

// Pages
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Login from './pages/LogIn/LogIn';

class App extends Component {
  constructor(props) {
    super(props);
  }

  signInHandler = () => {
    console.log('%c signInHandler', 'color:#bada55;', );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Gde Jesti</h1>        
            <div className="btn-actions">
              <Link to={{ pathname: '/'}}>Home</Link>
              <Link to={{ pathname: '/signin'}}>Sign in</Link>
              <Link to={{ pathname: '/login'}}>Log in</Link>
            </div>
          </header>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/login" component={Login} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
