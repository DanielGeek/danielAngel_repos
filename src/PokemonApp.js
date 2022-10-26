import React, { useState } from 'react'
import { AddPokemon } from './components/AddPokemon';
import { PokemonGrid } from './components/PokemonGrid';

export const PokemonApp = ({ defaultPokemon = ['bulbasaur'] }) => {

  const [pokemones, setPokemones] = useState(defaultPokemon);

  return (
    <>
      <h2 className='header-title'>Listado de Pokemon</h2>
      <AddPokemon setPokemones={setPokemones} />

      <ol className='container'>
      {
        pokemones.map( pokemonNameOrId => (
            <PokemonGrid
                key={ pokemonNameOrId }
                pokemonNameOrId={pokemonNameOrId}
            />
        ))
      }
      </ol>
    </>
  )
}
