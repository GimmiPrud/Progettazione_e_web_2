import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const cities = [
    {
      id:0,
      name:"Tokyo",
      desc:"Tokyo è una bella città",
      imgURL:"https://images.unsplash.com/photo-1536768139911-e290a59011e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW98ZW58MHx8MHx8fDA%3D",
      is_visit:true,
    },
    {
      id:1,
      name:"Roma",
      desc: "Roma è una b ella città",
      imgURL:"https://images.unsplash.com/photo-1542820229-081e0c12af0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvbWV8ZW58MHx8MHx8fDA%3D",
      is_visit : false
    },
    {
      id:1,
      name:"London",
      desc:"Londra è una bella città",
      imgURL:"https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fHww",
      is_visit: true
    }
  ]

  return (
    <>
    {
    cities.map((city) =>(
      <Card key = {city.id}
        titolo = {city.name}
        imgURL = {city.imgURL}
        is_visit = {city.is_visit} 
      > {city.desc}
      </Card>
      
    ))}
      <div>
        <Card
        imma = {cities[2].name}
        i = {cities[2].imgURL}
        M = {cities[2].desc}
        ></Card>
        <Card 
        imma = {cities[1].name}
        i = {cities[1].imgURL}
        M = {cities[1].desc}
        ></Card>
        <Card
        imma = "Ciaoooo"
         i = "https://images.unsplash.com/photo-1731978009363-21fa723e2cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 "
        ></Card>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
