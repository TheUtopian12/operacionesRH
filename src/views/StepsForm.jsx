import React, { Component } from "react";
import Personal from "./Personal/Personal";
import fire from "../views/Firebase";
import Laboral from "../views/Laboral/LaboralForm";
import Confirmation from "./Confimation";
import Medico from "../views/Medico/Medico";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import {Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();


const notify = () => toast('Los datos han sido guardados con exito!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
export class StepsForm extends Component {
  state = {
    step: 1,
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
    Error: "",
    LoginError: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // decreasing step by 1
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // creating user and submitting data to firebase
  submit = (
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
    alergias,
   
  ) => {
    return fire
      .firestore()
      .collection("personal")
      .doc()
      .set({
        domicilio: domicilio,
        edad: edad,
        empresaalta: empresaalta,
        nacimiento: nacimiento,
        nombre: nombre,
        apellidop: apellidop,
        apellidom: apellidom,
        nombreem1: nombreem1,
        nombreem2: nombreem2,
        parentesco: parentesco,
        parentesco2: parentesco2,
        telefono: telefono,
        telefonoem1: telefonoem1,
        telefonoem2: telefonoem2,
        tiposangre: tiposangre,
        enfermedades: enfermedades,
        medicamentos: medicamentos,
        cirugias: cirugias,
        alergias: alergias,
      })
      .then(() => {
        const { step } = this.state;
        this.setState({
          step: step + 1,
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

          Error: "",
          LoginError: "",
        });
            notify()
      })
      .catch((err) => {
        this.setState({
          Error: err.message,
        });
      });
  };

  render() {
    const { step } = this.state;
    const {
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
      alergias,
      Error,
      LoginError,
    } = this.state;
    const values = {
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
      alergias,
      Error,
      LoginError,
    };
    switch (step) {
      case 1:
        return (
          <Personal
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            gotologin={this.gotologin}
          />
        );
      case 2:
        return (
          <Laboral
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Medico
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            submit={this.submit}
          />
        );
      case 4:
        return (
          <Confirmation
            prevStep={this.prevStep}
            values={values}
            submit={this.submit}
          />
        );

      case 5:
        return <div className="content"><Link to="/admin/home"><Button color="info">Regresar a listado de empleados</Button></Link></div>;
    }
  }
}
export default StepsForm;
