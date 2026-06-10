import { useState } from 'react'
import Formulario from './components/Formulario'
import ListaVehiculos from './components/ListaVehiculos'
import './App.css'


function App() {
  const [vehiculos, setVehiculos] = useState([])

  const agregarVehiculo = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo])
  }

  const cupos = 10 - vehiculos.length

  return (
    <>
      <header>
        <h1>Gestión de Estacionamientos</h1>
      </header>

      <main>
        <p>Cupos disponibles: {cupos}</p>

        <Formulario
          onAgregarVehiculo={agregarVehiculo}
          cuposDisponibles={cupos}
        />

        <ListaVehiculos vehiculos={vehiculos} />
      </main>
    </>
  )
}

export default App