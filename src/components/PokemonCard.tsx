function PokemonCard({pokemon}) {
    console.log(pokemon);
  return (
    <div>
      <figure>{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </div>
  );
}


export default PokemonCard;
