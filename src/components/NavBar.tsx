interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
//bien observer comment appliquer le typage avec plusieurs props
function NavBar(
  { setPokemonIndex, pokemonList }: NavBarProps,
) {
    
  return (
    <nav>
      {pokemonList.map((pokemon: Pokemon, i) => (
        <button
          onClick={() => setPokemonIndex(i)}
        //   value={pokemon.name}
          key={pokemon.name}
          type="button"
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
