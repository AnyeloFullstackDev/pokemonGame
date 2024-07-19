import { gql } from '@apollo/client';

const GET_RANDOM_POKEMON = gql`
  query GetARandomPokemon {
    getARandomPokemon {
      id
      name
      height
      weight
      power
      frontImage
    }
  }
`;

const GET_RANDOM_POKEMON_OPPONENT = gql`
  query GetARandomPokemon {
    getARandomPokemon {
      id
      name
      height
      weight
      power
      frontImage
    }
  }
`;

export { GET_RANDOM_POKEMON };
