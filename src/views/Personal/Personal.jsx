import React, { Component } from "react";
import {
  Row,
  Col,
  Divider,
  Input,
  DatePicker,
  Form,
  Button,
  Checkbox,
  Upload,
  message,
} from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
import Modales from "./modal";
import Modales2 from "./modal2";
import { ToastContainer, toast } from "react-toastify";
import Principal from "../Principal";
import firebase from "../Firebase";
import Medico from "../Medico/Medico";

import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 7,
  },
};
const dateFormat = "YYYY/MM/DD";

const notify = () =>
  toast("Los datos han sido guardados con exito!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

class Personal extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <div className="content">
          <Principal></Principal>
          <Divider>Registro de Persona</Divider>

          <Link to="/admin/home">
            <Button color="info">Regresar a listado de empleados</Button>
          </Link>

          <Row>
            <Col span={11}>
              <div className="form-container">
                Nombre
                <input
                  type="text"
                  onChange={handleChange("nombre")}
                  defaultValue={values.nombre}
                  class="form-control"
                />
                <br />
                Apellido Paterno
                <input
                  floatingLabelText="Last Name"
                  onChange={handleChange("apellidop")}
                  defaultValue={values.apellidop}
                  class="form-control"
                />
                <br />
                Apellido Materno
                <input
                  onChange={handleChange("apellidom")}
                  defaultValue={values.apellidom}
                  class="form-control"
                />
                <br />
                Domicilio
                <input
                  onChange={handleChange("domicilio")}
                  defaultValue={values.domicilio}
                  class="form-control"
                />
                <br />
                Fecha de nacimiento
                <input
                  type="date"
                  onChange={handleChange("nacimiento")}
                  defaultValue={values.nacimiento}
                  class="form-control"
                />
                <br />
                Edad
                <input
                  onChange={handleChange("edad")}
                  defaultValue={values.edad}
                  class="form-control"
                />
                <br />
                Telefono
                <input
                  onChange={handleChange("telefono")}
                  defaultValue={values.telefono}
                  class="form-control"
                />
                <br />
                Telefono de emergencia
                <input
                  onChange={handleChange("telefonoem1")}
                  defaultValue={values.telefonoem1}
                  class="form-control"
                />
                <br />
                Nombre de Contacto de emergencia:
                <input
                  onChange={handleChange("nombreem1")}
                  defaultValue={values.nombreem1}
                  class="form-control"
                />
                <br />
                Parentesco:
                <input
                  onChange={handleChange("parentesco")}
                  defaultValue={values.parentesco}
                  class="form-control"
                />
                <br />
                Telefono de emergencia:
                <input
                  onChange={handleChange("telefonoem2")}
                  defaultValue={values.telefonoem2}
                  class="form-control"
                />
                <br />
                Nombre de Contacto de emergencia:
                <input
                  onChange={handleChange("nombreem2")}
                  defaultValue={values.nombreem2}
                  class="form-control"
                />
                <br />
                Parentesco:
                <input
                  onChange={handleChange("parentesco2")}
                  defaultValue={values.parentesco2}
                  class="form-control"
                />
                <br />
                Empresa alta:
                <select
                  class="form-control"
                  onChange={handleChange("empresaalta")}
                >
                  <option selected value="No">
                    No
                  </option>

                  <option value="Si">Si</option>
                </select>
                <br />
                <br />
                <button onClick={this.continue} class="btn btn-success">
                  Continuar
                </button>
                <br />
              </div>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item
                style={{ margin: "5px", width: "100%" }}
                label="Equipo de resguardo"
                name="resguardo"
                rules={[
                  {
                    required: false,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Modales></Modales>
                <Modales2></Modales2>
              </Form.Item>

              <Form.Item
                style={{ margin: "5px", width: "100%" }}
                label="Acta de nacimiento"
                name="actadenacimiento"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋{" "}
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item
                label="Curp"
                name="curp"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="RFC"
                name="rfc"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Identificación vigente"
                name="identificacion"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Comprobante de domicilio"
                name="comprobantedomicilio"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Solicitud de empleo"
                name="solicitud"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Carta de recomendación"
                name="carta"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Antecedentes no penales"
                name="nopenales"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Alta de personal (IMSS)"
                name="imss"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Ultimo grado de estudios"
                name="estudios"
                rules={[
                  {
                    required: true,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
                style={{ margin: "5px", width: "100%" }}
              >
                <Checkbox Checked="false">Es extranjero</Checkbox>
              </Form.Item>
              <Form.Item
                label="Pasaporte"
                name="pasaporte"
                rules={[
                  {
                    required: false,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Residencias"
                name="residencias"
                rules={[
                  {
                    required: false,
                    message: "campo vacío!",
                  },
                ]}
              >
                <Upload>
                  <Button
                    style={{ margin: "5px", width: "100%" }}
                    shape="round"
                    icon={<UploadOutlined />}
                  >
                    Subir archivo 📋
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Personal;
