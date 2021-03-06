function newLinkSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_LINK")
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload
  },
}

function newVoteSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_VOTE")
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  },
}

function newCommentSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_COMMENT")
}

const newComment = {
  subscribe: newCommentSubscribe,
  resolve: payload => {
    return payload
  },
}

function newPicSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_PIC")
}

const newPic = {
  subscribe: newPicSubscribe,
  resolve: payload => {
    return payload
  },
}


module.exports = {
  newLink,
  newComment,
  newVote,
  newPic
}