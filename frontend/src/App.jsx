import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
const [users, setUsers] = useState([])
    axios.get('/api').then((response) => {

        setUsers(response.data.name)
    }).catch((e) => console.log(e))



  return (
    <>
     <h1>Hello </h1>
       <h2>{users}</h2>
    </>
  )
}

export default App
