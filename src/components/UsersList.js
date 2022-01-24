import React from 'react'
import UserLink from './UserLink'
import { useQuery } from 'react-apollo'
import { useHistory } from 'react-router';
import gql from 'graphql-tag'


export const FEED_QUERY = gql`
  query FeedQuery(
    $take: Int
    $skip: Int
    $userOrderBy: UserOrderByInput
  ) {
    feed(take: $take, skip: $skip, userOrderBy: $userOrderBy) {
      id
      users {
        id
        name
        email
      }
      count
    }
  }
`;


const getUsersToRender = (isNewPage, data) => {
  return data.feed.users;
};


const UserList = () => {
    const history = useHistory();
    //This line determines whether the page is new
    const isNewPage = history.location.pathname.includes(
      'users'
    );

  
  
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
            {getUsersToRender(isNewPage, data).map(
              (user, index) => (
                <UserLink
                  key={user.id}
                  user={user}
                  index={index}
                />
              )
            )}
          </>
        )}
      </>
    );
};

export default UserList;