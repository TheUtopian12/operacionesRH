import React, { } from 'react';
import { Row, Col, Typography, Form } from 'antd';
//import '../App.css';
import 'antd/dist/antd.css';

const { Text } = Typography;

function DividerEmpleado() {

    return (
        <>
            <Row justify="start">
                <Col span={24}>                
                    <Text strong>Empleado:  </Text>
                    <Form.Item
                        name="nombre">                                  
                    </Form.Item>
                    <br></br>

                    <Text strong>Fecha de Nacimiento:  </Text>
                    <Form.Item 
                        name="fechanacimiento">          
                    </Form.Item>
                    <br></br>

                    <Text strong>Edad:  </Text>
                    <Form.Item
                        name="edad">          
                    </Form.Item>
                    <br></br>
                </Col>
            </Row>
        </>
    );
}
export default DividerEmpleado;
