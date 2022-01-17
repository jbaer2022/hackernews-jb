import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'



class UserLink extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    //const url = this.props.link.url
    //const description = this.props.link.url
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
        </div>
        <div className="ml1">
          <div>
            {this.props.user.name}
          </div>
          <div className="f6 lh-copy gray">
            {/** usually where boolean values are*/}
          </div>
        </div>
      </div>
    )
  }
}

export default UserLink;