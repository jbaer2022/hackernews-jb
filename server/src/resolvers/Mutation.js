const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

function post(parent, args, context, info) {
  const { userId } = context;

  const newLink = context.prisma.link.create({
    data: {
      url: args.url,
      tag: args.tag,
      description: args.description,
      postedBy: { connect: { id: userId } }
    }
  });
  context.pubsub.publish('NEW_LINK', newLink);

  return newLink;
}

function postcomment(parent, args, context, info) {
  const { userId } = context;

  const newComment = context.prisma.comment.create({
    data: {
      descriptionC: args.descriptionC,
      postedBy: { connect: { id: userId } }
    }
  });
  context.pubsub.publish('NEW_COMMENT', newComment);

  return newComment;
}

function postpic(parent, args, context, info) {
  const { userId } = context;

  const newPic = context.prisma.comment.create({
    data: {
      description: args.description,
      url: args.url,
      tag: args.tag,
      postedBy: { connect: { id: userId } }
    }
  });
  context.pubsub.publish('NEW_PIC', newPic);

  return newPic;
}

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: { ...args, password }
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email }
  });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(
    args.password,
    user.password
  );
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function vote(parent, args, context, info) {
  const { userId } = context;
  const vote = await context.prisma.vote.findUnique({
    where: {
      linkId_userId: {
        linkId: Number(args.linkId),
        userId: userId
      }
    }
  });

  if (!Boolean(vote)) {
    const newVote = context.prisma.vote.create({
      data: {
        user: { connect: { id: userId } },
        link: { connect: { id: Number(args.linkId) } }
      }
    });
    context.pubsub.publish('NEW_VOTE', newVote);
  
    return newVote;
  }


}

module.exports = {
  post,
  signup,
  login,
  postcomment,
  postpic,
  vote
};