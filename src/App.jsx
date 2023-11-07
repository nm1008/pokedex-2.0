import axios from "axios";
import "./App.css";
import Cards from "./components/Cards";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { usePokemonStore } from "./zustand/store";

import { useEffect } from "react";

const App = () => {

  //Zustand states
  const {
    pokemons,
    setPokemons,
    currentPageUrl,
    setCurrentPageUrl,
    nextPageUrl,
    setNextPageUrl,
    prevPageUrl,
    setPrevPageUrl,
    loading,
    setLoading,
    selectedPokemon,
    setSelectedPokemon,
  } = usePokemonStore();

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);

      const pokemonPromises = res.data.results.map((pokemon) => {
        return axios.get(pokemon.url).then((res) => res.data);
      });

      Promise.all(pokemonPromises).then((pokemonData) => {
        setPokemons(pokemonData);
        setLoading(false);
      });
    });
  }, [currentPageUrl, setLoading, setNextPageUrl, setPokemons, setPrevPageUrl]);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    console.log(selectedPokemon.name);
    console.log(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="bg-zinc-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <Cards
              key={pokemon.name}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              onClick={() => handleCardClick(pokemon)}
            />
          ))
        ) : (
          <p>No Pokémon data available yet</p>
        )}
        <Modal
          isOpen={selectedPokemon !== null}
          onClose={closeModal}
          pokemon={selectedPokemon}
        />
      </div>
      <div className="bg-zinc-600 text-center p-2 flex justify-center gap-5">
        {prevPageUrl !== null && (
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="Previous"
            onClick={() => {
              setPokemons([]);
              setCurrentPageUrl(prevPageUrl);
            }}
          />
        )}
        {nextPageUrl && (
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="Next"
            onClick={() => {
              setPokemons([]);
              setCurrentPageUrl(nextPageUrl);
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
