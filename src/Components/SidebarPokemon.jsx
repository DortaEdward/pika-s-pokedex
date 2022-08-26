import PokemonCards from "./PokemonCard"

function SidebarPokemon({pokemons}) {
  return (
    <div className='overflow-y-auto mb-12'>
        {
        pokemons.map((pokemon) => {
          return <PokemonCards key={pokemon.id} data ={pokemon}/>
        })
      }
    </div>
  )
}

export default SidebarPokemon