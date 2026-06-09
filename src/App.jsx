import { useState } from 'react'

function App() {
  const[vehiculos, setVehiculos] = useState([]) 

  const agregarVehiculo = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo])
  }

  const cupos = 10 - vehiculos.length

  return(
    <>
    <h1>Gestión de estacionamientos</h1>
    <p> cupos diponibles : {cupos}</p>

    </>
  )
    
    
  


}

export default App
