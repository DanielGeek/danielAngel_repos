import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLette';

export const PokemonGridItem = ({ name, url, id }) => {

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={ url } alt={ name } />
      <p># { id }</p>
      <p>{ capitalizeFirstLetter(name) }</p>
    </div>
  )
}

PokemonGridItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
