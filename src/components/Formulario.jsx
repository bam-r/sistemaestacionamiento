import { useState } from 'react';
import app from './App';

function Formulario() {
    

    return(
        <>
        <h2>Registrar vehículo</h2>
        <form>
            <label htmlFor="patente">Patente:</label>
            <input type="text" id="patente" name="patente" required />
            </form>

        
        </>
    )
}