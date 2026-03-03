import React from 'react'
import { ExcuseProvider } from './context/ExcuseProvider'
import ExcuseCard from './components/ExcuseCard'
import GenerateBtn from './components/GenerateBtn'

const App = () => {
  return (
    <ExcuseProvider>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <ExcuseCard />
        <GenerateBtn />
      </div>
    </ExcuseProvider>
  )
}

export default App
