
import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Createuser from './Createuser'
import Edit from './Edit'
import Home from './Home'


function App() {
  

  return (
    <>
     <Routes>
       <Route index element={<Home />}/>
       <Route path="/create" element={<Createuser  />}/>
       <Route path="/edit/:id" element={<Edit  />}/>
     </Routes>
    </>
  )
}

export default App
