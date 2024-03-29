/* eslint-disable import/prefer-default-export */

import { INamedAPIResource, IName } from './commonTypes';

interface IPokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: INamedAPIResource;
}

interface IPalParkEncounterArea {
  base_score: number;
  rate: number;
  area: INamedAPIResource;
}

interface IFlavorText {
  flavor_text: string;
  language: INamedAPIResource;
  version: INamedAPIResource;
}

interface IDescription {
  description: string;
  language: INamedAPIResource;
}

interface IGenus {
  genus: string;
  language: INamedAPIResource;
}

interface IPokemonSpeciesVariety {
  is_default: boolean;
  pokemon: INamedAPIResource;
}

export interface IPokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: INamedAPIResource;
  pokedex_numbers: IPokemonSpeciesDexEntry[];
  egg_groups: INamedAPIResource[];
  color: INamedAPIResource;
  shape: INamedAPIResource;
  evolves_from_species: INamedAPIResource;
  evolution_chain: INamedAPIResource;
  habitat: INamedAPIResource;
  generation: INamedAPIResource;
  names: IName[];
  pal_park_encounters: IPalParkEncounterArea[];
  flavor_text_entries: IFlavorText[];
  form_descriptions: IDescription[];
  genera: IGenus[];
  varieties: IPokemonSpeciesVariety[];
}
