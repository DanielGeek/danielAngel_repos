import React from 'react'
import PropTypes from 'prop-types';

import { useFetchPokemon } from '../hooks/useFetchPokemon'
import { PokemonGridItem } from './PokemonGridItem';

export const PokemonGrid = ({ pokemonNameOrId }) => {

  const { data: images, loading, error } = useFetchPokemon( pokemonNameOrId );

  let imagesFilters = images.filter(image => image.id !== pokemonNameOrId);

  return (
    <>

      { loading && <p className='animate__animated animate__flash'>Cargando</p>}
      { !error &&
          <div className='card-grid'>
          {
            imagesFilters.map( img => (
              <PokemonGridItem
                  key={ img.id }
                  { ...img }
              />
            ))
          }
        </div>
      }
    </>
  )
}

PokemonGrid.propTypes = {
  pokemonNameOrId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}