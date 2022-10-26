import React from 'react';
import '@testing-library/jest-dom';

import {PokemonGrid} from '../../components/PokemonGrid';
import { shallow } from 'enzyme';
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
jest.mock('../../hooks/useFetchPokemon');

describe('Tests for PokemonGrid component', () => {
    const pokemonNameOrId = 'Bulbasaur';
    // const wrapper = shallow(<PokemonGrid pokemonNameOrId={pokemonNameOrId}/>);

    test('debe de mostrarse correctamente', () => {

        useFetchPokemon.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<PokemonGrid pokemonNameOrId={pokemonNameOrId}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchPokemon', () => {

        const pokemon = [{
            id: '1',
            url: 'https://google.com',
            name: 'Bulbasaur'
        }]

        useFetchPokemon.mockReturnValue({
            data: pokemon,
            loading: false,
            error: false,
        });

        const wrapper = shallow(<PokemonGrid pokemonNameOrId={pokemonNameOrId}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('PokemonGridItem').length).toBe(pokemon.length);


    });
})