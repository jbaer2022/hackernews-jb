function links(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .links();
}

function comments(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .comments();
}


function pics(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .pics();
}

module.exports = {
  links,
  comments,
  pics
};
