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

class EditMedico extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      domicilio: "",
    edad: "",
    empresaalta: "",
    nacimiento: "",
    nombre: "",
    apellidop: "",
    apellidom: "",
    nombreem1: "",
    nombreem2: "",
    parentesco: "",
    parentesco2: "",
    telefono: "",
    telefonoem1: "",
    telefonoem2: "",
    tiposangre: "",
    enfermedades: "",
    medicamentos: "",
    cirugias: "",
    alergias: "",
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('personal').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Coment = doc.data();
        this.setState({
          key: doc.id,
          domicilio: Coment.domicilio,
          edad: Coment.edad,
          empresaalta: Coment.empresaalta,
          nacimiento: Coment.nacimiento,
          nombre: Coment.nombre,
          apellidop: Coment.apellidop,
          apellidom: Coment.apellidom,
          nombreem1: Coment.nombreem1,
          nombreem2: Coment.nombreem2,
          parentesco: Coment.parentesco,
          parentesco2: Coment.parentesco2,
          telefono: Coment.telefono,
          telefonoem1: Coment.telefonoem1,
          telefonoem2: Coment.telefonoem2,
          tiposangre: Coment.tiposangre,
          enfermedades: Coment.enfermedades,
          medicamentos: Coment.medicamentos,
          cirugias: Coment.cirugias,
          alergias: Coment.alergias,
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

    const {  domicilio,
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
        telefonoem2,
        tiposangre,
        enfermedades,
        medicamentos,
        cirugias,
        alergias } = this.state;

    const updateRef = firebase.firestore().collection('personal').doc(this.state.key);
    updateRef.set({
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
        telefonoem2,
        tiposangre,
        enfermedades,
        medicamentos,
        cirugias,
        alergias
    }).then((docRef) => {
      this.setState({
        key: '',
         domicilio: "",
          edad: "",
          empresaalta: "",
          nacimiento: "",
          nombre: "",
          apellidop: "",
          apellidom: "",
          nombreem1: "",
          nombreem2: "",
          parentesco: "",
          parentesco2: "",
          telefono: "",
          telefonoem1: "",
          telefonoem2: "",
          tiposangre: "",
          enfermedades: "",
          medicamentos: "",
          cirugias: "",
          alergias: ""
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
        <Link to="/admin/home"><Button color="info">Regresar listado de empleados</Button></Link>
          <div class="panel-body">
        
            <form onSubmit={this.onSubmit}>
              <div class="form-group">

              <h4>Información Personal</h4> 
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" name="nombre" value={this.state.nombre} onChange={this.onChange}  />
              </div>
              <div class="form-group">
                <label for="apellidop">Apellido Paterno:</label>
                <input type="text" class="form-control" name="apellidop" value={this.state.apellidop} onChange={this.onChange}  />
              </div>
              <div class="form-group">
                <label for="apellidom">Apellido Materno:</label>
                <input type="text" class="form-control" name="apellidom" value={this.state.apellidom} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="edad">Edad:</label>
                <input type="text" class="form-control" name="Edad" value={this.state.edad} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="domicilio">Domicilio:</label>
                <input type="text" class="form-control" name="domicilio" value={this.state.domicilio} onChange={this.onChange} />
              </div>
              
              <div class="form-group">
                <label for="nacimiento">Fecha de nacimiento:</label>
                <input type="date" class="form-control" name="nacimiento" value={this.state.nacimiento} onChange={this.onChange} />
              </div>
              
              <div class="form-group">
                <label for="nombreem1">Nombre de emergencia:</label>
                <input type="text" class="form-control" name="nombreem1" value={this.state.nombreem1} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="telefonoem1">Telefono de emergencia:</label>
                <input type="text" class="form-control" name="telefonoem1" value={this.state.telefonoem1} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="parentesco">Parentesco:</label>
                <input type="text" class="form-control" name="parentesco" value={this.state.parentesco} onChange={this.onChange} />
              </div>


              <div class="form-group">
                <label for="nombreem2">Nombre de emergencia:</label>
                <input type="text" class="form-control" name="nombreem2" value={this.state.nombreem2} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="telefonoem2">Telefono de emergencia:</label>
                <input type="text" class="form-control" name="telefonoem2" value={this.state.telefonoem2} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="parentesco2">Parentesco:</label>
                <input type="text" class="form-control" name="parentesco2" value={this.state.parentesco2} onChange={this.onChange} />
              </div>





              <div class="form-group">
                <label for="empresaalta">Empresa Alta:</label>
                <input type="text" class="form-control" name="empresaalta" value={this.state.empresaalta} onChange={this.onChange} />
              </div>

              <h4>Información médica</h4> 
              <div class="form-group">
                <label for="tiposangre">Tipo de sangre:</label>
                <input type="text" class="form-control" name="tiposangre" value={this.state.tiposangre} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="enfermedades">Enfermedades:</label>
                <input type="text" class="form-control" name="enfermedades" value={this.state.enfermedades} onChange={this.onChange} />
              </div>


              <div class="form-group">
                <label for="cirugias">Cirugias:</label>
                <input type="text" class="form-control" name="cirugias" value={this.state.cirugias} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="medicamentos">Medicamentos:</label>
                <input type="text" class="form-control" name="medicamentos" value={this.state.medicamentos} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="alergias">Alergias:</label>
                <input type="text" class="form-control" name="medicalergiasamentos" value={this.state.alergias} onChange={this.onChange} />
              </div>
              <button type="submit" class="btn btn-success" onClick={notify}>Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMedico;
