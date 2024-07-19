import { getARandomPokemon } from './queryConsult/getARandomPokemon.js';

const resolvers = {
  Query: {
    getARandomPokemon
  },
};

export default resolvers;
