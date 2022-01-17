import React from 'react'
import UserLink from './UserLink'
import { useQuery } from 'react-apollo'
import { useHistory } from 'react-router';
import gql from 'graphql-tag'
import { LINKS_PER_PAGE } from '../constants';


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


//this one wont work
const getUsersToRender = (isNewPage, data) => {
  return data.feed.users;
};
  
const getQueryVariables = (isNewPage) => {
    //there is no need for skip and it had to be undefined for no pagination
    const skip = undefined;
    const take = isNewPage ? LINKS_PER_PAGE : 100;
    const orderBy = { name: 'desc' };
    return { take, skip, orderBy };
};


const UserList = () => {
    const history = useHistory();
    //This line determines whether the page is new
    const isNewPage = history.location.pathname.includes(
      'users'
    );
    const pageIndexParams = history.location.pathname.split(
      '/'
    );
    const page = parseInt(
      pageIndexParams[pageIndexParams.length - 1]
    );
  
    const pageIndex = page ? (page - 1) * LINKS_PER_PAGE : 0;
  
    const {
      data,
      loading,
      error,
    } = useQuery(FEED_QUERY, {
      variables: getQueryVariables(isNewPage, page)
    });
  
  
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
                  index={index + pageIndex}
                />
              )
            )}
          </>
        )}
      </>
    );
};

export default UserList;