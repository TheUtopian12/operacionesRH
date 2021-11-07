import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "../Firebase";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = () =>
  toast("Se agrego nuevo Estudiante! 👍🏻", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Flip,
    progress: undefined,
  });
class CreateEstudiante extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("estudiantes");
    this.state = {
      nombre: "",
      apellidos: "",
      asesori: "",
      asesore: "",
      email: "",
      escuela: "",
      proyecto: "",
      telefono: "",
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    notify();
    const {
      nombre,
      apellidos,
      asesori,
      asesore,
      email,
      escuela,
      proyecto,
      telefono,
    } = this.state;

    this.ref
      .add({
        nombre,
        apellidos,
        asesori,
        asesore,
        email,
        escuela,
        proyecto,
        telefono,
      })
      .then((docRef) => {
        this.setState({
          nombre: "",
          apellidos: "",
          asesori: "",
          asesore: "",
          email: "",
          escuela: "",
          proyecto: "",
          telefono: "",
        });
        this.props.history.push("/admin/estudiantes");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const {
      nombre,
      apellidos,
      asesori,
      asesore,
      email,
      escuela,
      proyecto,
      telefono,
    } = this.state;

    return (
      <div className="content">
        <div class="panel panel-default">
          <div class="panel-body">
            <Link to="/admin/estudiantes">
              <Button color="info">Regresar a Estudiantes</Button>
            </Link>

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.onChange}
                  required="true"
                />
              </div>
              <div class="form-group">
                <label for="apellidos">Apellidos:</label>
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  value={this.state.apellidos}
                  onChange={this.onChange}
                />
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  value={this.state.telefono}
                  onChange={this.onChange}
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div class="form-group">
                <label for="asesori">Asesor Interno:</label>
                <input
                  type="text"
                  class="form-control"
                  name="asesori"
                  value={this.state.asesori}
                  onChange={this.onChange}
                />
              </div>

              <div class="form-group">
                <label for="asesore">Asesor Externo:</label>
                <input
                  type="text"
                  class="form-control"
                  name="asesore"
                  value={this.state.asesore}
                  onChange={this.onChange}
                />
              </div>

              <div class="form-group">
                <label for="escuela">Escuela:</label>
               
                <select
                  class="form-control"
                  name="escuela"
                  value={this.state.escuela}
                  onChange={this.onChange}
                >
                 
                  <option selected value="Tecnologico de Zacatecas">
                  Tecnologico de Zacatecas
                  </option>

                  <option value="Universidad Autonoma de Zacatecas">Universidad Autonoma de Zacatecas</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>
              <div class="form-group">
                <label for="proyecto">Nombre de proyecto:</label>
                <input
                  type="text"
                  class="form-control"
                  name="proyecto"
                  value={this.state.proyecto}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" class="btn btn-success">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEstudiante;
