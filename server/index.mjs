import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.mjs';
import resolvers from './resolvers.mjs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*', // Permite solicitudes desde cualquier origen
    credentials: true
  }
});


server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
