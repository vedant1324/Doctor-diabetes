import React from 'react'
import './App.css'
import Heading from './components/Heading'
import About from './components/About'
import Form from './components/Form'

function App() {
  

  return (
    <div className='bg-[#FEECE2] w-full h-full '>
     <Heading></Heading> 
     <About></About>
     <div className='flex flex-col justify-center items-center '>
     <Form></Form>
     </div>
     
    </div>
  )
}

export default App
