import React, { Component } from "react";
import { Card } from "antd";
class Confimation extends Component {
  continue = (e) => {
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
    } = this.props.values;
    e.preventDefault();
    // we will process form here to firebase
    this.props.submit(
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
    );
    // this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <div className="content">
        <React.Fragment>

        <Card
              hoverable="50"
              display="flex"
              style={{
                margin: "10px",
                width: "95%",
                textAlign: "left",
                borderColor: "#ff9e9e",
              }}
              shape="round"
              cover={
                <img
                  color="F01159"
                  alt=""
                  src="https://www.colorhexa.com/f01159.png"
                  height="20"
                />
              }
            >
                 <ul>
             <h4>Información Personal</h4> 
            
            
             Nombre:       
            <li>{nombre}</li>
          
              Apellido Paterno
            <li>{apellidop}</li>
              Apellido Materno
            <li>{apellidom}</li>
            Fecha de Nacimiento
            <li>{nacimiento}</li>

            Edad:
            <li>{edad}</li>
            Telefono:
            <li>{telefono}</li>
            Domicilio:
            <li>{domicilio}</li>
            Contacto de emergencia:
            <li>{nombreem1}</li>
            Telefono de emergencia:
            <li>{telefonoem1}</li>
            Parentesco:
            <li>{parentesco}</li>
            Contacto de emergencia:
            <li>{nombreem2}</li>
            Telefono de emergencia:
            <li>{telefonoem2}</li>
            Parentesco:
            <li>{parentesco2}</li>

            <h4>Información Medica</h4>
            Tipo de sangre:
            <li>{tiposangre}</li>
            Enfermedades:
            <li>{enfermedades}</li>
            Cirugias:
            <li>{cirugias}</li>
            Alergias:
            <li>{alergias}</li>
            
          </ul>

            </Card>
          <br />
         
          <button
                            class="btn btn-danger"
                            onClick={this.back} >Regresar</button>
                       <button
                          class="btn btn-success"
                            onClick={this.continue} >Continuar y Registrar </button>
         
          <br />
          <div className="err-msg">{Error}</div>
        </React.Fragment>
      </div>
    );
  }
}

export default Confimation;
