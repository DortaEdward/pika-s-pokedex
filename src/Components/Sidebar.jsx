import { useRef } from "react";
import data from '../data';
import SidebarPokemon from "./SidebarPokemon";

function Sidebar({pokemon}) {
  const inputRef = useRef('');
  return (
    <div className='fixed top-0 left-0 h-screen w-4/12 m-0 flex flex-col bg-white text-black shadow-lg'>
      <div className='w-full flex flex-col items-center py-4'>
        <h2 className='pt-1 pb-4 text-2xl font-bold'>151 Pokemon</h2>
        <input
          type="text"
          placeholder="Search Pokemon"
          ref={inputRef}
          className='p-2 w-5/6 rounded bg-gray-100'
          />
      </div>
      <SidebarPokemon pokemons={data}/>
      <div className='fixed left-0 bottom-0 w-96 flex justify-evenly items-center bg-white'>
        <div
          className='hover:bg-gray-100 cursor-pointer text-center m-1 h-10 w-20 text-gray-400 flex items-center justify-center rounded'>
            Pokemon
        </div>
        <div className='hover:bg-gray-100 cursor-pointer text-center m-1 h-10 w-16 text-gray-400 flex items-center justify-center rounded'>
          Types
        </div>
        <div className='hover:bg-gray-100 cursor-pointer text-center m-1 h-10 w-16 text-gray-400 flex items-center justify-center rounded'>
          Filters
        </div>
      </div>
    </div>
  )
};

export default Sidebar