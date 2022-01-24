import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { setContext } from 'apollo-link-context' //might not need but j in case
import { FEED_QUERY } from './CommentList'
import { LINKS_PER_PAGE } from '../constants'


const POST_MUTATION = gql`
  mutation PostMutation($descriptionC: String!) {
    postcomment(descriptionC: $descriptionC) {
      id
      createdAt
      descriptionC
    }
  }
`



class CreateComment extends Component {
  state = {
    descriptionC: '',
  }

  render() {
    const { descriptionC } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={descriptionC}
            onChange={e => this.setState({ descriptionC: e.target.value })}
            type="text"
            placeholder="Insert your comment here!"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ descriptionC}}
          onCompleted={() => this.props.history.push('/comments')}
          update={(store, { data: { post } }) => {
            const first = LINKS_PER_PAGE
            const skip = 0
            const orderBy = 'createdAt_DESC'
            const data = store.readQuery({
                query: FEED_QUERY,
                variables: { first, skip, orderBy }
            })
            //this is probably wrong because of links
            data.feed.comments.unshift(post)
            store.writeQuery({
              query: FEED_QUERY,
              data,
              variables: { first, skip, orderBy }
            })
          }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateComment