import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'




class Comment extends Component {
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
            <p>
            {this.props.comment.descriptionC
              ? this.props.comment.descriptionC
              : 'Empty Comment'}
            </p>
          </div>
          <div className="f6 lh-copy gray">
            {'By: '}
            {this.props.comment.postedBy
              ? this.props.comment.postedBy.name
              : 'Unknown'}{' '}
            {timeDifferenceForDate(this.props.comment.createdAt)}


          </div>
        </div>
      </div>
    )
  }
}

export default Comment