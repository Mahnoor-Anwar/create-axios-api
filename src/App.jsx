
import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Createuser from './Createuser'
import Home from './Home'


function App() {
  

  return (
    <>
     <Routes>
       <Route index element={<Home />}/>
       <Route path="/create" element={<Createuser  />}/>
     </Routes>
    </>
  )
}

export default App
