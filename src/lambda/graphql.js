const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const dataSources = () => ({
});

const resolvers = {
  Query: {
    hello: () => 'hello!',
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler({
  //TODO: replace with new url
  cors: {
    origin: process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [''],
    credentials: true,
  }
});