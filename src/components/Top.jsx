import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const Top = () => {
    return (
        <div className='flex justify-end p-5'>
            <a href="#home" className='flex items-baseline text-xs text-transparent hover:text-gray-800 transition duration-400'>TOP<FaArrowUp size={20} className='text-gray-400 hover:text-gray-800 dark:hover:text-gray-300' /></a>
        </div>
    )
}

export default Top