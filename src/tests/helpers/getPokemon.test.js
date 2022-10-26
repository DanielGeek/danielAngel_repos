import { getPokemon } from "../../helpers/getPokemon";

describe('Pruebas con getPokemon Fetch', () => {

  test('debe de traer 1 pokemon', async() => {

    const pokemon = await getPokemon('Bulbasaur');

    expect(pokemon.length).toBe(1);
  })

  test('debe de traer un array vacio', async() => {

    const pokemon = await getPokemon('');
    const emptyObj = [{id: undefined, name: undefined, url: undefined}];

    expect(pokemon).toEqual(emptyObj);

  })
})