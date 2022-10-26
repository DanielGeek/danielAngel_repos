import { useEffect, useState } from "react"
import { getPokemon } from "../helpers/getPokemon";

export const useFetchPokemon = ( pokemonName ) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {

    getPokemon( pokemonName )
      .then( imgs => {

        setState({
          data: imgs,
          loading: false,
          error: false,
        });

      }).catch(error => {
        setState({
          data: [],
          loading: false,
          error:error
        });
      });


  }, [pokemonName])


  return state;
}