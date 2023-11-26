import React from 'react'

function Forecast({title}) {
    return (
        <div>
            <div className='flex items-center justify-start mt-6 '>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-between text-white'>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>4:30 p.m.</p>
                    <img src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-orange.png'
                        className='w-12 my-1 ' />
                    <p className='font-medium'>22 °</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>4:30 p.m.</p>
                    <img src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-orange.png'
                        className='w-12 my-1 ' />
                    <p className='font-medium'>22 °</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>4:30 p.m.</p>
                    <img src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-orange.png'
                        className='w-12 my-1 ' />
                    <p className='font-medium'>22 °</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>4:30 p.m.</p>
                    <img src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-orange.png'
                        className='w-12 my-1 ' />
                    <p className='font-medium'>22 °</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>4:30 p.m.</p>
                    <img src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-rempli-orange.png'
                        className='w-12 my-1 ' />
                    <p className='font-medium'>22 °</p>
                </div>


            </div>
            


        </div>
    )
}

export default Forecast
