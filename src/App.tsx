import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <section>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handleClickPrevious}>
          précédent
        </button>
      ) : (
        <p> </p>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleClickNext}>
          suivant
        </button>
      ) : (
        <p> </p>
      )}
    </section>
  );
}

export default App;
