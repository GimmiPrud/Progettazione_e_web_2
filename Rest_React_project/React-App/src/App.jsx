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
        <Card title={"ciao"} img ={"https://images.unsplash.com/photo-1659974708151-e90f42518dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRhdGFiYXNlfGVufDB8fDB8fHww"}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <section style={{padding:"10pc" }}>

      </section>
    </div>
    </>
  )
}

export default App
