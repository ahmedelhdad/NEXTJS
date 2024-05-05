import React from 'react'

const Header = () => {
    return (
        <header className=' h-[97px] shadow-xl  flex items-center' >
            <div className='container mx-auto flex items-center justify-between px-8'>
                <h1 className=' font-bold text-3xl tracking-widest'>Logo</h1>
                <div className='space-x-4 '>
                    <button className='px-2  font-bold w-[101px] h-[36px] rounded-lg'>Register</button>
                    <button className='  bg-btnBlue px-2 font-bold text-white w-[101px] h-[36px] rounded-lg'>Singn in</button>
                </div>
            </div>
        </header>
    )
}

export default Header
