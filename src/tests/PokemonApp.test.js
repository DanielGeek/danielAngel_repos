import React from 'react';
import { shallow } from "enzyme"
import { PokemonApp } from "../PokemonApp"

describe('Pruebas en <PokemonApp />', () => {

  test('debe mostrarse correctamente', () => {

    const wrapper = shallow(<PokemonApp />)
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar una lista de pokemon', () => {

    const pokemones = ['Bulbasaur', 'Ivysaur'];
    const wrapper = shallow(<PokemonApp defaultPokemon={ pokemones } />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('PokemonGrid').length).toBe(pokemones.length);
  })
})