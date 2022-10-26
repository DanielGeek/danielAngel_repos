import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddPokemon } from "../../components/AddPokemon";

describe('Pruebas en <AddPokemon />', () => {

  const setPokemones = jest.fn();
  let wrapper = shallow(<AddPokemon setPokemones={setPokemones} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddPokemon setPokemones={setPokemones} />);
  });

  test('debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('debe de cambiar la caja de texto', () => {

    const input = wrapper.find('input');
    const value = '1';

    input.simulate('change', { target: { value }});

    expect(wrapper.find('p').text().trim()).toBe(value);

  });

  test('No debe de postear la información con submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setPokemones).not.toHaveBeenCalled()

  });

  test('debe de llamar el setPokemones y limpiar la caja de texto', () => {

    const value = '1';

    wrapper.find('input').simulate('change', { target: { value }});

    wrapper.find('form').simulate('submit', { preventDefault(){}});

    expect(setPokemones).toHaveBeenCalled();
    expect(setPokemones).toHaveBeenCalledTimes(1);
    expect(setPokemones).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});