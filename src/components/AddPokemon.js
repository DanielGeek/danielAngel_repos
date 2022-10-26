import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddPokemon = ({ setPokemones }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setPokemones( pokemones => {
        const newpokemones = pokemones.filter( pokemon => pokemon !== inputValue)
        return [ inputValue, ...newpokemones]
      });
      setInputValue('');
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
        <input
          type="text"
          placeholder='Buscar'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}

AddPokemon.propTypes = {
  setPokemones: PropTypes.func.isRequired
}
