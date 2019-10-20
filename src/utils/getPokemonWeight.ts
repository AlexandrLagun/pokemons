import { IPokemon } from 'types/pokemonTypes';

const getPokemonWeight = ({ weight }: IPokemon) => `${weight / 10} kg`;

export default getPokemonWeight;
