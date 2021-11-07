import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,Link
} from 'react-router-dom'
import firebase from "./Firebase.js"
import {Button } from 'reactstrap';

import { Nav } from "reactstrap";
import {Breadcrumb, Layout, Menu } from 'antd'
import Home from './Home'

const { Header, Content, Footer } = Layout;




class Bread extends React.Component {


  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('personal');
    this.unsubscribe = null;
    this.state = {
      personal: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    
    const personal = [];
    querySnapshot.forEach((doc) => {
      const { domicilio,edad,empresaalta,nacimiento,nombre,nombreem1,nombreem2,parentesco,parentesco2,telefono,telefonoem1,telefonoem2,apellidop,apellidom } = doc.data();
      personal.push({
        key: doc.id,
        doc, // DocumentSnapshot
        domicilio,
        edad,
        empresaalta,
        nacimiento,
        nombre,
        apellidop,
        apellidom,
        nombreem1,
        nombreem2,
        parentesco,
        parentesco2,
        telefono,
        telefonoem1,
        telefonoem2
      });
    });
    this.setState({
      personal
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  delete(id){
    firebase.firestore().collection('personal').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/admin/personal")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  render() {

    return (
      <div className="content">
      <div class="panel panel-default">
       
        <div class="panel-body">
          <Link to="/admin/personal"><Button color="success" >Registrar Empleado</Button></Link>
          <br></br>
          

          <table class="table table-stripe">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Teléfono</th>
                <th>Edad</th>
                <th>Empresa dada de alta</th>
              </tr>
            </thead>
            <tbody>
              {this.state.personal.map(Coment =>
                <tr>
                  <td>{Coment.nombre}</td>
                  <td>{Coment.apellidop} {Coment.apellidom}</td>
                  <td>{Coment.telefono}</td>
                  <td>{Coment.edad}</td>
                  <td>{Coment.empresaalta}</td>
                  <td><Link to={`/admin/showperfil/${Coment.key}`}><Button color="warning">Ver Perfil</Button></Link></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  }
}

export default Bread