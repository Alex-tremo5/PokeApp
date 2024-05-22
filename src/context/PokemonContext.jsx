import { createContext, useEffect, useState } from "react";


export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {

    const [getPoke, setGetPoke] = useState([]);

    async function getAPokemon(){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=22&limit=30")
        const data = await res.json()

        const promises = await Promise.all(data.results.map(async(pokemon) => {
            const NewRes = await fetch(pokemon.url)
            const NewData = await NewRes.json()

            return{
                id: NewData.id,
                name:NewData.name,
                imageURL: NewData.sprites.front_default,
                type: NewData.types[0].type.name,
                hp: NewData.stats[0].base_stat,
                attack: NewData.stats[1].base_stat,
                defense: NewData.stats[2].base_stat,
                spAttack: NewData.stats[3].base_stat,
                spDefense: NewData.stats[4].base_stat,
                speed: NewData.stats[5].base_stat
            }

        }))
        setGetPoke(promises)
    }

      useEffect (() => {
        getAPokemon()
      }, [])

    return (
        <PokemonContext.Provider value = {
            {getPoke}}> 
            {children}
        </PokemonContext.Provider>
    )
}