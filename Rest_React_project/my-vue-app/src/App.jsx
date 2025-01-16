import './App.css'
import Axios from './Call_Rest/axios'
import Persona from './Call_Rest/perosna'
import Assenza from './Call_Rest/assenza'

function App() {

  return (
    <>
    
    <div>
      <Axios></Axios>
    </div>
    <div>
      <Persona></Persona>
    </div>
    <div>
      <Assenza></Assenza>
    </div>

  </>
  )
}

export default App;
