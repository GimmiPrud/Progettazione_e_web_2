import { useState } from 'react'
import './App.css'
import Navb from './Components/Nav'
import Content_box from './Components/Content_box'
import Card from './Components/Card'

function App() {

  return (
    <>
    <div>
      <Navb></Navb>
      <Content_box></Content_box>
      <section style={{backgroundColor:"grey", padding:"6pc", display:"flex"}}>
        <Card title={"Gestione Database"} img ={"https://images.unsplash.com/photo-1659974708151-e90f42518dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRhdGFiYXNlfGVufDB8fDB8fHww"}></Card>
        <Card title = {"Programmazione e Sviluppo"} img = {"https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxkYXRhYmFzZXxlbnwwfHwwfHx8MA%3D%3D"}></Card>
        <Card title = {"Problem Solving"} img = {"https://images.unsplash.com/photo-1611329857530-61d261e393e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2JsZW0lMjBzb2x2aW5nfGVufDB8fDB8fHww"}></Card>
        <Card title = {"Cloud Computing"} img = {"https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Card>
      </section>
      <section style={{padding:"10pc" }}>

      </section>
    </div>
    </>
  )
}

export default App
