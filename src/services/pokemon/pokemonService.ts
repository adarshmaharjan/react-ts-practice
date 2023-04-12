import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "./pokemonTypes";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
