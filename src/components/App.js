import React, { Component } from 'react'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Search from './Search'
import Hi from './Hi'
import UsersList from './UsersList'
import Comments from './Comments'


class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/new/1' />} />
            <Route exact path="/" component={LinkList} />
            <Route exact path='/new/:page' component={LinkList} />

            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path='/top' component={LinkList} />

            <Route exact path='/hi' render={() => <Redirect to='/hi/1' />} />
            <Route exact path='/hi' component={Hi} />
            <Route exact path='/hi/:page' component={Hi} />

            <Route exact path='/users' component={UsersList} />

            <Route exact path='/comments' component={Comments} />
            
          </Switch>
        </div>
      </div>
    )
  }
}

export default App