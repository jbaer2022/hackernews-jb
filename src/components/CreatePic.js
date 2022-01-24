import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { setContext } from 'apollo-link-context' //might not need but j in case
import { FEED_QUERY } from './PicList'


const POST_MUTATION = gql`
  mutation PostMutation($descriptionC: String!, $url: String!, $tag: String!) {
    postpic(description: $description, url: $url, tag: $tag) {
      id
      createdAt
      description
      url
      tag
    }
  }
`



class CreatePic extends Component {
  state = {
    description: '',
    url: '',
    tag: ''
  }

  render() {
    const { description, url, tag } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Insert your description here!"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="Insert your url here!"
          />
          <input
            className="mb2"
            value={tag}
            onChange={e => this.setState({ tag: e.target.value })}
            type="text"
            placeholder="Insert your tag here!"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url, tag}}
          onCompleted={() => this.props.history.push('/pics')}
          update={(store, { data: { post } }) => {
            const data = store.readQuery({
                query: FEED_QUERY
            })
            data.feed.pics.unshift(post)
            store.writeQuery({
              query: FEED_QUERY,
              data
            })
          }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreatePic