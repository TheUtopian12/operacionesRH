import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {Button } from 'reactstrap';
import { ToastContainer, toast,Slide, Zoom, Flip, Bounce  } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


toast.configure()

const notify = () => toast.info('Los datos se editaron con exito 📝', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Flip,
  progress: undefined,
  });

class EditEstudiante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nombre: '',
        apellidos: '',
        asesori: '',
        asesore: '',
        email: '',
        escuela: '',
        proyecto: '',
        telefono: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('estudiantes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Coment = doc.data();
        this.setState({
          key: doc.id,
          nombre: Coment.nombre,
          apellidos: Coment.apellidos,
          asesori: Coment.asesori,
          asesore: Coment.asesore,
          email:Coment.email,
          escuela:Coment.escuela,
          proyecto:Coment.proyecto,
          telefono:Coment.telefono
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({Coment:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre,
        apellidos,
        asesori,
        asesore,
        email,
        escuela,
        proyecto,
        telefono } = this.state;

    const updateRef = firebase.firestore().collection('estudiantes').doc(this.state.key);
    updateRef.set({
        nombre,
        apellidos,
        asesori,
        asesore,
        email,
        escuela,
        proyecto,
        telefono
    }).then((docRef) => {
      this.setState({
        key: '',
        nombre: '',
        apellidos: '',
        asesori: '',
        asesore: '',
        email: '',
        escuela: '',
        proyecto: '',
        telefono: ''
      });
      this.props.history.push("/admin/show/"+this.props.match.params.id)
      
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
        <div className="content">
        <div class="panel panel-default">
        <Link to="/admin/estudiantes"><Button color="info">Regresar a Estudiantes</Button></Link>
          <div class="panel-body">
        
            <form onSubmit={this.onSubmit}>
              <div class="form-group">


                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" name="nombre" value={this.state.nombre} onChange={this.onChange}  />
              </div>
              <div class="form-group">
                <label for="apellidos">Apellidos:</label>
                <input type="text" class="form-control" name="apellidos" value={this.state.apellidos} onChange={this.onChange}  />
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="text" class="form-control" name="telefono" value={this.state.telefono} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="asesori">Asesor Interno:</label>
                <input type="text" class="form-control" name="asesori" value={this.state.asesori} onChange={this.onChange} />
              </div>
              
              <div class="form-group">
                <label for="asesore">Asesor Externo:</label>
                <input type="text" class="form-control" name="asesore" value={this.state.asesore} onChange={this.onChange} />
              </div>
              
              <div class="form-group">
                <label for="escuela">Escuela:</label>
                <input type="text" class="form-control" name="escuela" value={this.state.escuela} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="proyecto">Nombre de proyecto:</label>
                <input type="text" class="form-control" name="proyecto" value={this.state.proyecto} onChange={this.onChange} />
              </div>
              <button type="submit" class="btn btn-success" onClick={notify}>Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditEstudiante;
