import './theme/App.css';
import Header from './components/Header';
import React, { Component } from 'react'
import Counter from './components/Counter';
import Main from './screens/Main.screen';
import Detail from './screens/Detail.screen';
import { withRouter } from 'react-router';
import HeaderState from './state/header'
import { Provider } from 'mobx-react'

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    const { history } = this.props

    return (

      <div className='App'>
        <Switch>
          <Route exact history={history} path='/' component={Main} />
          <Route history={history} path='/book-:id' component={Detail} />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
