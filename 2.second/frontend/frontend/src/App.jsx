import { useState } from 'react'
import axios from "axios"
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/jokes')
    .then((res)=>{
      console.log(res.data)
      setJokes(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  ,[])
  
  return (
    <>
      <h1>Jokes website</h1>
      <div className="card">
        <button >
          jokes : {jokes.length}
        </button>
      </div>
      {
        jokes.map((joke)=>(
          <><h3>{joke.type}</h3>
          <p>{joke.joke}</p></>
        ))
      }
    </>
  )
}

export default App
