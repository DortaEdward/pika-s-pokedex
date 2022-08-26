
function PokemonCards({data}) {
  return (
    <div className='flex items-center p-4 border hover:bg-gray-100 cursor-pointer'>
    <img
      src={data.img}
      alt="Pokemon Sprite"
      className='w-16 h-16 m-2 mr-4'
      />
    <div>
      <p className='text-gray-400'>
        # {data.id.toString().padStart(3,'00')}
      </p>
      <p className='capitalize text-2xl'>
        {data.name}
      </p>  
      <div className='flex gap-2'>
        {data.types.map((type) => {
          return <img
          key={data.id}
          src={`${type.toLowerCase()}Type.png`}
          alt='Pokemon'
          className='w-20'
          />
        })}
      </div>
    </div> 
  </div>
  )
}

export default PokemonCards