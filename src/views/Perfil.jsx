import React from "react";
import firebase from "./Firebase";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, Divider, Row, Col } from "antd";
import Label from "reactstrap/lib/Label";
import { Component } from "react";

import { ToastContainer, toast,Slide, Zoom, Flip, Bounce  } from 'react-toastify';

const { Meta } = Card;

toast.configure()

const notify = () => toast.error('Se elimino el empleado! ❌', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Flip,
  progress: undefined,
  });
class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Coment: {},
      key: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("personal")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          Coment: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection("personal")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        notify();
        this.props.history.push("/admin/home");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col span={8}>
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
                  color=" example"
                  alt=""
                  src="https://www.colorhexa.com/ff9e9e.png"
                  height="20"
                />
              }
            >
              <div style={{ textAlign: "center", fontSize: 25 }}>
                Expediente Personal
              </div>
              <Card hoverable="80" style={{ borderColor: "#ff9e9e" }}>
                <div style={{ fontSize: 15 }}>
                  Nombre: {this.state.Coment.nombre}{" "}
                  {this.state.Coment.apellidop} {this.state.Coment.apellidom}
                </div>
                <div style={{ fontSize: 15 }}>
                  Domicilio: {this.state.Coment.domicilio}
                </div>
                <div style={{ fontSize: 15 }}>
                  Fecha de nacimiento: {this.state.Coment.nacimiento}{" "}
                </div>
                <div style={{ fontSize: 15 }}>
                  Edad: {this.state.Coment.edad}
                </div>
              </Card>
              <Card hoverable="80" style={{ borderColor: "#ff9e9e", top: 10 }}>
                <div style={{ fontSize: 15 }}>
                  Telefono: {this.state.Coment.telefono}
                </div>
                <div style={{ fontSize: 15 }}>
                  Telefono de emergencia: {this.state.Coment.telefonoem1}
                </div>
                <div style={{ fontSize: 15 }}>
                  Nombre de Contacto de Emergencia:{" "}
                  {this.state.Coment.nombreem1}
                </div>
                <div style={{ fontSize: 15 }}>
                  Parentesco: {this.state.Coment.parentesco}{" "}
                </div>
                <div style={{ fontSize: 15 }}>
                  Telefono de emergencia 2: {this.state.Coment.telefonoem2}
                </div>
                <div style={{ fontSize: 15 }}>
                  Nombre de Contacto de Emergencia 2:{" "}
                  {this.state.Coment.nombreem2}
                </div>
                <div style={{ fontSize: 15 }}>
                  Parentesco: {this.state.Coment.parentesco2}
                </div>
                <div style={{ fontSize: 15 }}>
                  Empresa dado de alta: {this.state.Coment.empresaalta}{" "}
                </div>
              </Card>
              <Row style={{ top: "10px" }}>
                <Col span={8}>
                  <Card
                    hoverable="50"
                    display="flex"
                    style={{
                      margin: "0px",
                      width: "95%",
                      textAlign: "left",
                      borderColor: "#ff9e9e",
                      top: 20,
                    }}
                    shape="round"
                  >
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Acta de nacimiento
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      CURP
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      RFC
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Identificacion vigente
                    </Link>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable="50"
                    display="flex"
                    style={{
                      margin: "0px",
                      width: "95%",
                      textAlign: "left",
                      borderColor: "#ff9e9e",
                      top: 20,
                    }}
                    shape="round"
                  >
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Comporbante de domicilio
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Solicitud de empleo
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Carta de recomendacion
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Antecedentes no penales
                    </Link>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable="50"
                    display="flex"
                    style={{
                      margin: "0px",
                      width: "95%",
                      textAlign: "left",
                      borderColor: "#ff9e9e",
                      top: 20,
                    }}
                    shape="round"
                  >
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      IMSS
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Ultimo grado de estudios
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Residencia
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Pasaporte
                    </Link>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              hoverable="50"
              display="flex"
              style={{
                margin: "10px",
                width: "95%",
                textAlign: "center",
                borderColor: "#72c3c1",
              }}
              shape="round"
              cover={
                <img
                  color=" example"
                  alt=""
                  src="https://htmlcolors.com/color-image/72cec1.png"
                  height="20"
                />
              }
            >
              <div style={{ textAlign: "center", fontSize: 25 }}>
                Expediente Laboral
              </div>

              <Row style={{ top: "10px" }}>
                <Col span={8}>
                  <Card
                    hoverable="50"
                    display="flex"
                    style={{
                      margin: "0px",
                      width: "95%",
                      textAlign: "left",
                      borderColor: "#72c3c1",
                      top: 20,
                    }}
                    shape="round"
                  >
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Alta de personal IMSS
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Contrato de confidencialidad
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Reglamento interno trabajo
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Contrato comision mercantil
                    </Link>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable="50"
                    display="flex"
                    style={{
                      margin: "0px",
                      width: "95%",
                      textAlign: "left",
                      borderColor: "#72c3c1",
                      top: 20,
                    }}
                    shape="round"
                  >
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Carta de numero de credito
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Carta de retencion
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Renuncia voluntaria
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Acuerdo de finiquito
                    </Link>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable="50"
                    display="flex"
                    style={{
                      margin: "0px",
                      width: "95%",
                      textAlign: "left",
                      borderColor: "#72c3c1",
                      top: 20,
                    }}
                    shape="round"
                  >
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Baja de personal
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Reglamento vehicular
                    </Link>
                    <Link>
                      {" "}
                      <img
                        color=" example"
                        alt=""
                        src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                      ></img>
                      Pago de utilidades
                    </Link>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              hoverable="50"
              display="flex"
              style={{ margin: "10px", width: "95%", textAlign: "left" }}
              shape="round"
              cover={
                <img
                  color=" example"
                  alt=""
                  src="https://www.colorhexa.com/56549e.png"
                  height="20"
                />
              }
            >
              <div style={{ textAlign: "center", fontSize: 25 }}>
                Expediente Medico
              </div>

              <Row>
                <Col span={24}>
                  <Card hoverable="80" style={{ borderColor: "#56549e" }}>
                    <div style={{ fontSize: 15 }}>
                      Tipo de sangre: {this.state.Coment.tiposangre}
                    </div>
                    <div style={{ fontSize: 15 }}>
                      Enfermedades importantes: {this.state.Coment.enfermedades}
                    </div>
                    <div style={{ fontSize: 15 }}>
                      Medicamentos que está tomando:
                      {this.state.Coment.medicamentos}
                    </div>
                    <div style={{ fontSize: 15 }}>
                      Cirugías : {this.state.Coment.cirugias}
                    </div>
                    <div style={{ fontSize: 15 }}>
                      Alergias : {this.state.Coment.alergias}
                    </div>
                  </Card>
                </Col>
                <Row/>
                <Row/>




                <Col span={24}>
                <Card hoverable="80" style={{ borderColor: "#56549e" }}>
                  <Link>
                    {" "}
                    <img
                      color=" example"
                      alt=""
                      width="100"
                      src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                    ></img>
                    <br></br>
                    Accidentes en la empresa
                    <br></br>
                  </Link>
                  <Link>
                    {" "}
                    <img
                      color=" example"
                      alt=""
                      width="100"
                      src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                    ></img>
                    <br></br>
                    Valoración médica por la empresa
                  </Link>
                  <Link>
                    {" "}
                    <br></br>
                    <img
                      color=" example"
                      alt=""
                      width="100"
                      src="https://image.freepik.com/vector-gratis/documentos-confirmados-o-documentos-aprobados_149152-439.jpg"
                    ></img>
                    
                    <br></br>
                    Pruebas psicométricas
                  </Link>
                  </Card>
                  <Link to={`/admin/editmedico/${this.state.key}`} class="btn btn-success">Editar</Link>&nbsp;
            
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Button onClick={this.delete.bind(this, this.state.key)} color="danger">Eliminar</Button>
      </div>
    );
  }
}

export default Perfil;
