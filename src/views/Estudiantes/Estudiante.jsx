import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../Firebase.js"
import {Button } from 'reactstrap';

import { Select } from 'antd';
import Search from 'antd/lib/input/Search';
class Estudiante extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('estudiantes');
    this.unsubscribe = null;
    this.state = {
      estudiantes: [],
      search:""
    };
  }
 
  onCollectionUpdate = (querySnapshot) => {
    
    const estudiantes = [];
    querySnapshot.forEach((doc) => {
      const { nombre, apellidos, asesori,asesore,email,escuela,proyecto,telefono } = doc.data();
      estudiantes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nombre,
        apellidos,
        asesori,
        asesore,
        email,
        escuela,
        proyecto,
        telefono
      });
    });
    this.setState({
      estudiantes
   });
  }
  updateSearch(event){
      this.setState({search:event.target.value.substr(0,20)})

  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  delete(id){
    firebase.firestore().collection('estudiantes').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/admin/estudiantes")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    
   let filteredComents= this.state.estudiantes.filter(
      (Coment)=>{
        if (this.state.search == "") {
          return Coment
        }else if(Coment.escuela.toLowerCase().includes(this.state.search.toLowerCase())){
          return Coment

        }

      }


   );

    const { Option } = Select;
    return (
      <div className="content">
        <div class="panel panel-default">
         
          <div class="panel-body">
            <Link to="/admin/create"><Button color="success" >Registrar nuevo Estudiante</Button></Link>
            <br></br>
            
            
           Filtrar por escuela: 
           <select
                  style={{width:200}}
                  class="form-control"
                  name="escuela"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                >
                   
                 
                   <option value="Tecnologico de Zacatecas">Tecnologico de Zacatecas</option>
                  <option value="Universidad Autonoma de Zacatecas">Universidad Autonoma de Zacatecas</option>
                 
                  <option value="">Sin filtro</option>
                  <option value="Otra">Otra</option>
                </select> 
           
          
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>Escuela</th>
                </tr>
              </thead>
              <tbody>
                {filteredComents.map(Coment =>
                  <tr>
                    <td>{Coment.nombre}</td>
                    <td>{Coment.apellidos}</td>
                    <td>{Coment.telefono}</td>
                    <td>{Coment.email}</td>
                    <td>{Coment.escuela}</td>
                    <td><Link to={`/admin/show/${Coment.key}`}><Button color="warning">Ver Perfil</Button></Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Estudiante;

