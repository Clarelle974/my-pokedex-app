import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

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
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);
  if (pokemonIndex === 3) { alert("pika pikachu !!!");
  }
  return (
    <body>
      <div>
        <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      </div>
      <section>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </section>
    </body>
  );
}

export default App;
