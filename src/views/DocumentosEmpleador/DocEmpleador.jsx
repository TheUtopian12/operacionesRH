import React, {useState} from 'react';
import {Row,Col,Divider, Upload, message} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;



const  DocGenarales=()=>{
return ( 

  <div className="content">
   <Divider style={{ width: 240 }}>Documentos Empleador</Divider>

  <Row>
  <Col span={1}>
         </Col>
       <Col span={7}>
       <Divider style={{ width: 240 }}>Constancia de empleador </Divider>
         <Dragger style={{width: 340 }} >
  <p className="ant-upload-drag-icon">
    <InboxOutlined />
  </p>
  <p className="ant-upload-text">Click para subir archivo</p>
  <p className="ant-upload-hint">
  Constancia de empleador 
  </p>
</Dragger>
  </Col>
 
       <Col span={1}>
         </Col>
  <Col span={7}>
  <Divider
  style={{ width: 40 }}>Oficio de actualización</Divider>
         <Dragger style={{ width: 340, alignContent:'center' }}>
  <p className="ant-upload-drag-icon">
    <InboxOutlined />
  </p>
  <p className="ant-upload-text">Click para subir archivo</p>
  <p className="ant-upload-hint">
  Oficio de actualización
  </p>
</Dragger>
  </Col>
  
  </Row>
  
  </div>
)
}
 
 
export default DocGenarales;