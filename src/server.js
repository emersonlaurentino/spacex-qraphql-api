const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.cursorShape': 'line',
    },
  },
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`🚀 Server ready at ${url}`);
});
