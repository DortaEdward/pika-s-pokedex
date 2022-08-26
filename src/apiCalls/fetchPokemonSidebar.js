export async function fetchPokemonSidebar(setSidebarPokemon,setIsLoading,setError){
  setIsLoading(true);
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const res = await fetch(url);
    const data = await res.json();
    setSidebarPokemon(data);
  } catch (error) {
    setError(error.message);
  }
  setIsLoading(false);
}