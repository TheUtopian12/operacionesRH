import React from 'react'

import { Table,Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom'



function OficiosPrincipal() {
    return (
       
        
      <div className="content">
          <NavLink
          to={"/admin" + "/regoficios"}
          className="nav-link"
          activeClassName="active"
        >
          <Button color="success">Nuevo Oficio</Button>
        </NavLink>  
           <h2>Hola a todos</h2>
           <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Tipo de Documento</th>
          <th>Dependecia</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Carta</td>
          <td>Ingenieria</td>
          <td>20 /Enero / 2021</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Carta</td>
          <td>Ingenieria</td>
          <td>20 /Enero / 2021</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Carta</td>
          <td>Ingenieria</td>
          <td>20 /Enero / 2021</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}
export default OficiosPrincipal
