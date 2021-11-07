
import React, { Component } from 'react'
// react plugin used to create charts
import 'antd/dist/antd.css';
import Modal from './ModalPermisos'
import ModalV from './ModalVacaciones'

import Principal from '../Principal'
// reactstrap components


import { Row, Col, Divider, Upload, Button, message,Checkbox } from 'antd';


class Dashboard extends Component { 
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

    return (
      <>
        <div className="content">
        <Principal></Principal>
        <Divider orientation="center">Expediente Laboral</Divider>
        <Row align='left'>
          <Col span={8} align="right"> 
        Alta de personal IMSS &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    
   
    
    
    Contrato de confidencialidad  &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Reglamento interior de trabajo &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Contrato de comisión mercantil &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
      <Checkbox
      >Cuenta con Infonavit</Checkbox>
      

      <br/>
      <br/>
      Carta de número de crédito  &nbsp;&nbsp;
      <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>

      
      <br/>
      <br/>
     
    Carta de retención 

    Contrato individual de trabajo &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>

    <br></br>
    <button
                            class="btn btn-danger"
                            onClick={this.back} >Regresar</button>
                       <button
                          class="btn btn-success"
                            onClick={this.continue} >Continuar</button>
                       
    <br/>
    
      
      </Col>
      <Col span={8} align="right">
      Renuncia voluntaria &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Acuerdo de finiquito &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Baja de personal &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Reglamento de vehículos &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Pago de utilidades &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>

      </Col>
      <Col span={2}>
   </Col>
   
      <Col span={6} align="left">
        {/*
      Recibos de nómina  &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Actas administrativas &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Aguinaldos  &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
      */}
    <br/>
    Permisos &nbsp;&nbsp;
    <Modal/>
   <br/>
    <br/>{/*
    Equipos en resguardo &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    Incapacidades laborales &nbsp;&nbsp;
      <Upload >
    <Button >Subir Documento <span role="img" aria-label="">📃</span></Button>
    </Upload>
    <br/>
    <br/>
    */}
    Vacaciones  &nbsp;&nbsp;
      
      <ModalV></ModalV>
    <br/>
    <br/>
      </Col>


          </Row>
        </div>
      </>
    );

  }

  
 
    
  
}

export default Dashboard;
