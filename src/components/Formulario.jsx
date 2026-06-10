import { useState } from 'react';

const PATENTE_REGEX = /^[A-Z]{4}\d{2}$|^[A-Z]{2}\d{4}$/

function Formulario({ onAgregarVehiculo, cuposDisponibles }) {
  const [patente, setPatente] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const patenteFormateada = patente.trim().toUpperCase()

    if (!patenteFormateada) {
      setError('La patente no puede estar vacía.')
      return
    }

    if (!PATENTE_REGEX.test(patenteFormateada)) {
      setError('Formato invalido')
      return
    }

    const nuevoVehiculo = {
      patente: patenteFormateada
    }

    onAgregarVehiculo(nuevoVehiculo)
    setPatente('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="patente">Patente</label>
      <input
        id="patente"
        type="text"
        onChange={(e) => setPatente(e.target.value)}
        maxLength={6}
        disabled={cuposDisponibles === 0}
      />

      {error && <p>{error}</p>}

      <button type="submit" disabled={cuposDisponibles === 0}>
        Registrar
      </button>
    </form>
  )
}

export default Formulario
