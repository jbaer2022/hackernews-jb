import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'




class Pic extends Component {
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
            <img src={
            this.props.pic.url
              ? this.props.pic.url
              : 'https://cdn.pixabay.com/photo/2017/09/19/08/10/dark-flowers-2764456_960_720.jpg'
            }/>
          </div>
          <div className="f6 lh-copy gray">
            {'By: '}
            {this.props.pic.postedBy
              ? this.props.pic.postedBy.name
              : 'Unknown'}{' '}
            {this.props.pic.description
              ? this.props.pic.description
              : 'Empty Comment'}{' '}
            {timeDifferenceForDate(this.props.pic.createdAt)}


          </div>
        </div>
      </div>
    )
  }
}

export default Pic