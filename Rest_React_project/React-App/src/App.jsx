import { useState } from 'react'
import './App.css'
import Content_box from './Components/Content_box'
import Card from './Components/Card'
import instagram_logo from './assets/instagram_logo.png';
import linkedin_logo from "./assets/linkedin_logo.png"

function App() {

  return (
    <>
    <div>
      <nav className='menu' style={{marginLeft:"25%", marginBlock:"3pc", marginRight:"25%"}}>
          <ul>
              <li>
                  <button>
                  <a href="#">Dipendenti</a>
                  </button>
              </li>
              <li>
                  <button>
                  <a href="#">Assenze</a>
                  </button>
              </li>
              <li>
                  <button>
                  <a href="#">Progetti</a>
                  </button>
              </li>
              <li style={{paddingLeft:"8cap"}}>
                  <span title='About'>
                  <a style={{fontSize:"3.5pc"}} href="#">🖧</a>
                  </span>
              </li>
          </ul>
      </nav>
      <Content_box></Content_box>
      <section style={{backgroundColor:"grey", padding:"6pc", display:"flex"}}>
        <Card title={"Gestione Database"} img ={"https://images.unsplash.com/photo-1659974708151-e90f42518dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRhdGFiYXNlfGVufDB8fDB8fHww"}></Card>
        <Card title = {"Programmazione e Sviluppo"} img = {"https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxkYXRhYmFzZXxlbnwwfHwwfHx8MA%3D%3D"}></Card>
        <Card title = {"Problem Solving"} img = {"https://images.unsplash.com/photo-1611329857530-61d261e393e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2JsZW0lMjBzb2x2aW5nfGVufDB8fDB8fHww"}></Card>
        <Card title = {"Cloud Computing"} img = {"https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Card>
      </section>
      <section style={{padding:"5pc", display:"inline-flex"}}>
        <h1 style={{paddingLeft:"10pc", color:"lightgrey"}}>Le nostre sedi:</h1>
        <ul style={{listStyleType:"circle",color:"lightgrey", paddingTop:"2pc"}}>
          <li><h2>Milano</h2></li>
          <li><h2>Roma</h2></li>
          <li><h2>Perugia</h2></li>
          <li><h2>Singapore</h2></li>
        </ul>
      </section>
      <section style={{display:"inline-flex"}}>
      <h1 style={{paddingLeft:"48pc"}}>Seguici su:</h1>
        <ul style={{listStyle:"none"}}>
          <li>
          <img style={{height:"4.5pc", width:"5pc", paddingTop:"5pc"}} src={instagram_logo} alt="Instagram" />
          </li>
          <li>
          <img style={{height:"4.5pc", width:"5pc", paddingTop:"1pc"}} src={linkedin_logo} alt="Linkedin" />
          </li>
        </ul>
      </section>
    </div>
    </>
  )
}

export default App
