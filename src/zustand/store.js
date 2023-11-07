import { create } from "zustand";

export const usePokemonStore = create((set) => ({
  pokemon: [],
  setPokemons: (data) => set({ pokemons: data }),
  currentPageUrl: "https://pokeapi.co/api/v2/pokemon",
  setCurrentPageUrl: (url) => set({ currentPageUrl: url }),
  nextPageUrl: null,
  setNextPageUrl: (url) => set({ nextPageUrl: url }),
  prevPageUrl: null,
  setPrevPageUrl: (url) => set({ prevPageUrl: url }),
  loading: true,
  setLoading: (isLoading) => set({ loading: isLoading }),
  selectedPokemon: null,
  setSelectedPokemon: (pokemon) => set({ selectedPokemon: pokemon }),
}));
