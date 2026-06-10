import CardVehiculo from './CardVehiculo'

function ListaVehiculos({ vehiculos }) {
  return (
    <div className="lista-vehiculos">
      {vehiculos.map((vehiculo) => (
        <CardVehiculo
          key={vehiculo.patente}
          vehiculo={vehiculo}
        />
      ))}
    </div>
  )
}

export default ListaVehiculos