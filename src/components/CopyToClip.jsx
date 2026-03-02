import React, { useContext } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { ExcuseContext } from '../context/ExcuseContext';

const CopyToClip = () => {
    const { lastExcuse } = useContext(ExcuseContext);
    const handleCopy = () => {
        navigator.clipboard.writeText(lastExcuse[lastExcuse.length - 1]);
        alert("Excuse copied to clipboard!");
    }
    return (
        <button onClick={handleCopy} className='absolute top-2 right-2 cursor-pointer'>
            <FaRegCopy />
        </button>
    )
}

export default CopyToClip
