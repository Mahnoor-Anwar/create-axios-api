import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Tables from './Tables'

const Home = () => {
     const navigate = useNavigate()
    const [getData , setgetData] = useState([])
    console.log(getData);

    useEffect(()=>{
        axios.get('http://localhost:3000/users').then((response)=>{
            // console.log(response);
            setgetData(response.data)
        })
    },[])
  return (
    <div>
      <div className="btndiv">
        <button className="createuserbtn" onClick={()=>{
            navigate('/create')
        }}>create user</button>
      </div>
      <div style={{marginLeft:'20px' ,marginRight:'20px'}}>
      <Tables userdata={getData}/>
      </div>
    </div>
  )
}

export default Home
