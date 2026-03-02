import React, { useContext } from 'react'
import { ExcuseContext } from '../context/ExcuseContext'

const GenerateBtn = () => {
    const { generateExcuses } = useContext(ExcuseContext)
    return (
        <div>
            <button className='p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-110 hover:font-semibold transition-all ease-in-out duration-300' onClick={generateExcuses}>Generate Excuse</button>
        </div>
    )
}

export default GenerateBtn
