
import { UilImageSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Input() {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4 mr-4'>
                <input type='text'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                    placeholder='search for city...'
                />
                <UilImageSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            </div>

            <div className='flex flex-row w-1/4 items-center justify-centre  space-x-2'>
                <button name='metric' className='text-xl text-white'>°C</button>
                <p className='text-xl text-white mx-1'> | </p>
                <button name='imperial' className='text-xl text-white'>°F</button>
            </div>

        </div>
    )
}

export default Input
