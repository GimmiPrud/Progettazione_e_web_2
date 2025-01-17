
import { useEffect , useState } from "react"

function Homepage(){
    const sfondo = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"

    return(
        <>
        <div>
            <img src= {sfondo} alt=""/>
        </div>
        </>
    )
}
export default Homepage