import React from 'react'
import { Table,Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom'


const HomeEstudiantes = () => {
  
  const [equipo, setEquipo] = React.useState([])  



React.useEffect(() => {
  obtenerDatos()
}, [])


const obtenerDatos = async () => {
  const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
  const users = await data.json()
  setEquipo(users.civilizations)
}


    return (
        <div className="content">
             
          <NavLink
          to={"/admin" + "/regestudiantes"}
          className="nav-link"
          activeClassName="active"
        >
          <Button color="success">Registrar nuevo estudiante</Button>
        </NavLink>  
           <h2>Registro de Estudiantes en Estadias</h2>
          
        


          <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {  equipo.map(item=>(<tr>
              <th scope="row" key={item.id}>{item.id}</th>
              
              <td >{item.name}</td>          
              <td >{item.expansion}</td>
              <td >{item.army_type}</td>
        </tr>  ))
}
      </tbody>
    </Table>

        </div>



    )
}
export default HomeEstudiantes