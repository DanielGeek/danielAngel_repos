import React from 'react';
import { shallow } from "enzyme";
import { PokemonGridItem } from "../../components/PokemonGridItem";

describe('Pruebas en <PokemonGridItem />', () => {

  const name = 'un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<PokemonGridItem name={name} url={url} />)

  test('debe de mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(name);
  });

  test('debe de tener animate_fadeIn', () => {

    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });
})