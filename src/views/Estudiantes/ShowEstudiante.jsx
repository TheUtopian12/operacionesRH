import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {Button } from 'reactstrap';
import { ToastContainer, toast,Slide, Zoom, Flip, Bounce  } from 'react-toastify';
import { Card } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
const { Meta } = Card;



toast.configure()

const notify = () => toast.error('Se elimino el estudiante! ❌', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Flip,
  progress: undefined,
  });
class ShowEstudiante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Coment: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('estudiantes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          Coment: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('estudiantes').doc(id).delete().then(() => {
      notify();
      console.log("Document successfully deleted!");
      this.props.history.push("/admin/estudiantes")
    }).catch((error) => {
      
      console.error("Error removing document: ", error);
     
    });
  }

  render() {
    return (
        <div className="content">
        <div class="panel panel-default">
          <div class="panel-heading">
          <Link to="/admin/estudiantes"><Button color="info">Regresar a Estudiantes</Button></Link>

          </div>
          <Card
    hoverable
    style={{ width: 600 }}
    cover={<img alt="example" src="https://www.colorhexa.com/ff7f2d.png" height="25"/>}
  >
    <Meta title="Informacion del Estudiante" description= ""/>
    <dl>
    <dt>Nombre:</dt>
    <dd>{this.state.Coment.nombre} {this.state.Coment.apellidos}</dd>
            <dt>Email:</dt>
            
              <dd>{this.state.Coment.email}</dd>
              <dt>Escuela:</dt>
              <dd>{this.state.Coment.escuela}</dd>
              <dt>Nombre de proyecto:</dt>
              <dd>{this.state.Coment.proyecto}</dd>
              <dt>Teléfono:</dt>
              <dd>{this.state.Coment.telefono}</dd>
      
              <dt>Asesor Interno:</dt>
              <dd>{this.state.Coment.asesori}</dd>
              <dt>Asesor Externo:</dt>
              <dd>{this.state.Coment.asesore}</dd>
            </dl>
        <div class="panel-body">
            
            <Link to={`/admin/edit/${this.state.key}`} class="btn btn-success">Editar</Link>&nbsp;
            <Button onClick={this.delete.bind(this, this.state.key)} color="danger">Eliminar</Button>
          </div>
    
        </Card>
          
        </div>
      </div>
    );
  }
}

export default ShowEstudiante;
