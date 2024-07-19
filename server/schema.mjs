import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getARandomPokemon: Pokemon 
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    weight: Int
    power: Int
    frontImage: String
  }
`;

export default typeDefs;
