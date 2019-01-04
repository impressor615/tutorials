import React, { Component } from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Login from './Login';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
