import React, { Component } from 'react'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Search from './Search'
import Hi from './Hi'
import UsersList from './UsersList'
import CommentList from './CommentList'
import CreateComment from './CreateComment'
import PicList from './PicList'
import CreatePic from './CreatePic'


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

            <Route exact path='/makecomment' component={CreateComment} />
            <Route exact path='/comments' component={CommentList} />

            <Route exact path='/makepic' component={CreatePic} />
            <Route exact path='/pics' component={PicList} />
            
          </Switch>
        </div>
      </div>
    )
  }
}

export default App