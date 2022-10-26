

import { renderHook, waitFor } from '@testing-library/react';
import { useFetchPokemon } from '../../hooks/useFetchPokemon';


describe('Pruebas en el kook useFetchPokemon', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchPokemon('') );
        const { data, loading, error } = result.current;

        expect( data.length ).toBe(0);
        expect( loading ).toBeTruthy();
        expect( error ).toBeFalsy();

    });

    test('debe de retornar un arreglo de pokemon, loading false y error false', async() => {

        const { result } = renderHook( () => useFetchPokemon('Ekans') );

        await waitFor(
            () => expect( result.current.data.length ).toBeGreaterThan(0)
        );

        const { data, loading, error } = result.current;

        expect( data.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();
        expect( error ).toBeFalsy();

    });

});