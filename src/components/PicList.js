import React, { Component } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import Pic from './Pic'


//create a mutation for gathering info
//This is a List

export const FEED_QUERY = gql`
  query FEED_QUERY {
    feed {
      id
      pics {
        id
        description
        tag
        url
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


const getPicsToRender = (data) => {
    return data.feed.pics;
};


const PicList = () => {
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
            {getPicsToRender(data).map(
              (pic, index) => (
                <Pic
                  key={pic.id}
                  pic={pic}
                  index={index}
                />
              )
            )}
          </>
        )}
      </>
    );
};


export default PicList