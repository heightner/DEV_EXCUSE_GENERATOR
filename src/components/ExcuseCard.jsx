import React, { useContext} from 'react'
import { ExcuseContext } from '../context/ExcuseContext'

const ExcuseCard = () => {
  const { lastExcuse } = useContext(ExcuseContext)
  return (
    <div className='w-fit max-w-md p-2 shadow-md rounded-md'>
      {
        lastExcuse.length > 0 ? (
          <p>{lastExcuse[lastExcuse.length - 1]}</p>
        ) : (
          <p>No excuses generated yet. Click the button to generate one!</p>
        )
      }
    </div>
  )
}

export default ExcuseCard
