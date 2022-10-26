
export const getPokemon = async(pokemonNameOrId) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`;
  const resp = await fetch( url );
  const data = await resp.json();

  const pokemon = [{
    id: data.id,
    name: data.name,
    url: data.sprites?.other?.dream_world?.front_default
  }]

  return pokemon;
}