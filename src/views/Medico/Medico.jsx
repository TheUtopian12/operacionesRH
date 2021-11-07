import React, { Component } from 'react'

import { Row, Col, Divider, Upload, Button, message, Select,Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import ModalIMSS from './ModalIMSS';
import ModalConsulta from './ModalConsulta';
import DividerEmpleado from './DividerEmpleado';
import ModalVacunas from './ModalVacunas';


import Principal from '../Principal'

const { Text } = Typography;

const { Option } = Select;




class Medico extends Component{
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
}
back = (e) => {
    e.preventDefault();
    this.props.prevStep();
}
  

render(){
  const { values, handleChange } = this.props;
  const { values: { domicilio,
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
    telefonoem2,tiposangre, Error } } = this.props;
  
  return (
    <>
          <div className="content">
    <Principal></Principal>
        <Divider orientation="center">Expediente Clínico</Divider>
        <Row align="right">
          <Divider orientation="center"></Divider>
          <Row justify="start">
                  <Col span={24}>                
                      <Text strong>Empleado:{nombre} </Text>
                      <Text disabled> </Text>
                      <br></br>
  
                      <Text strong>Fecha de Nacimiento: {nacimiento} </Text>
                      <Text disabled> </Text>
                      <br></br>
  
                      <Text strong>Edad: {edad} </Text>
                      <Text disabled> </Text>
                      <br></br>
                  </Col>
              </Row>
          
  
  
  
          <Divider orientation="center"></Divider>
          <br />
          <br />
          <Col span={4} align="right">
            Tipo de sangre &nbsp;&nbsp;
            <br />
            <br />
            <br />
            <br />
            <br />
  
            Enfermedades importantes &nbsp;&nbsp;
            <br />
            <br />
            <br />
            <br />
            <br />
  
            Medicamentos que está tomando &nbsp;&nbsp;
            <br />
            <br />
            <br />
            <br />
            <br />
  
          </Col>
  
          <Col span={4} align="left">
            
          

                            <select
                            class="form-control" 
                            onChange={handleChange('tiposangre')}
                            >
                              <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option selected value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
                      
                          </select>
      


            <br />
            <br />
            <br />
            <input
                            floatingLabelText="Last Name"
                            onChange={handleChange('enfermedades')}
                            defaultValue={values.enfermedades}
                            class="form-control" /><br />
            <br />
            <br />
            <input
                            floatingLabelText="Last Name"
                            onChange={handleChange('medicamentos')}
                            defaultValue={values.medicamentos}
                            class="form-control" /><br />
            <br />
            <br />
          </Col>
  
          <Col span={1} align="right">
          </Col>
  
          <Col span={3} align="right">
            Pruebas psicométricas &nbsp;&nbsp;
            <br />
            <br />
            <br />
            <br />
            <br />
  
          Cirugías &nbsp;&nbsp;
            <br />
            <br />
            <br />
            <br />
            <br />
            Alergias &nbsp;&nbsp;
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
  
            <button
                            class="btn btn-danger"
                            onClick={this.back} >Regresar</button>
                       <button
                          class="btn btn-success"
                            onClick={this.continue} >Continuar</button>
          </Col>
  
          <Col span={4} align="left">
            <Upload >
              <Button icon={<UploadOutlined />}>Subir Documento 📄</Button>
            </Upload>
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <input
                            floatingLabelText="Last Name"
                            onChange={handleChange('cirugias')}
                            defaultValue={values.cirugias}
                            class="form-control" /> <br />
            <br />
            <br />
            <input
                            floatingLabelText="Last Name"
                            onChange={handleChange('alergias')}
                            defaultValue={values.alergias }
                            class="form-control" /> <br />
            <br />
            <br />
          </Col>
  
  
          <Col span={8} align="right">
  
            Accidentes en la empresa &nbsp;&nbsp;
          <Upload >
              <Button icon={<UploadOutlined />}>Subir Documento 📄</Button>
            </Upload>
            <br />
            <br />
  
            Valoración médica por la empresa &nbsp;&nbsp;
        <Upload >
              <Button icon={<UploadOutlined />}>Subir Documento 📄</Button>
            </Upload>
            <br />
            <br />
  
            Consultas médicas &nbsp;&nbsp;
        <ModalConsulta></ModalConsulta>
            <br />
            <br />
            <br />
  
      Programa IMSS &nbsp;&nbsp;
        <ModalIMSS></ModalIMSS>
            <br />
            <br />
            <br />
  
        Vacunas atemporales &nbsp;&nbsp;
        <ModalVacunas></ModalVacunas>
  
          </Col>
        </Row>
  
        </div>
        </>
  
    );
}
  
  
  

}
export default Medico;