import React, { Component } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import Comment from './Comment'


//create a mutation for gathering info
//This is a List

export const FEED_QUERY = gql`
  query FEED_QUERY {
    feed {
      id
      comments {
        id
        descriptionC
        postedBy {
          id
          name
        }
        createdAt
      }
      count
    }
  }
`;


const getCommentsToRender = (data) => {
    return data.feed.comments;
};


const CommentList = () => {
    //This line determines whether the page is new

    const {
      data,
      loading,
      error,
    } = useQuery(FEED_QUERY);
  
  
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
        {data && (
          <>
            {getCommentsToRender(data).map(
              (comment, index) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  index={index}
                />
              )
            )}
          </>
        )}
      </>
    );
};


export default CommentList