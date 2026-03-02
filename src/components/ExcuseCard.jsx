import React, { useContext} from 'react'
import { ExcuseContext } from '../context/ExcuseContext'
import CopyToClip from './CopyToClip'

const ExcuseCard = () => {
  const { lastExcuse } = useContext(ExcuseContext)
  return (
    <div className='min-w-md min-h-[7vh] max-w-lg p-2 content-center shadow-md rounded-md relative'>
      { lastExcuse.length > 0 && <CopyToClip /> }
      {
        lastExcuse.length > 0 ? (
          <p className='w-4/5 text-center mx-auto'>{lastExcuse[lastExcuse.length - 1]}</p>
        ) : (
          <p className='w-4/5 text-center mx-auto'>No excuses generated yet. Click the button to generate one!</p>
        )
      }
    </div>
  )
}

export default ExcuseCard
