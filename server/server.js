const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const schema = fs.readFileSync('./schema.graphql').toString();
const typeDefs = gql(schema);

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    me: () => ({ firstName: 'Jake' }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
