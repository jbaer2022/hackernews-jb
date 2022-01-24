import React, { Component } from 'react'
import { timeDifferenceForDate } from '../utils'



class HiLink extends Component {
  render() {
    //const url = this.props.link.url
    //const description = this.props.link.url
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
        </div>
        <div className="ml1">
          <div>
            <a href={this.props.link.url} target="_blank" >{this.props.link.description}</a> ({this.props.link.url})
          </div>
          <div className="f6 lh-copy gray">
            By{' '}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : 'Unknown'}{' '}
            | tag: {this.props.link.tag}| by{' '}
            {timeDifferenceForDate(this.props.link.createdAt)}

            {/* ideas:
            maybe make line below: this.props.link.postedBy.group
            have the user set their social security info at the Login.js page
             */}
            
            {/* {this.props.link.votes[0]>this.props.link.votes[this.props.link.votes.length-1]
              ? "__vote ids: first " + this.props.link.votes[this.props.link.length-1].id + " last "+ his.props.link.votes[0].id
              : "__vote ids: first " + this.props.link.votes[0].id + " last "+ his.props.link.votes[this.props.link.votes.length-1].id}
            */}
          </div>
        </div>
      </div>
    )
  }
}

export default HiLink;
//