import React, { useState } from 'react';
import { Modal, Button, Typography, Input, Row, Col, Divider } from 'antd';
//import '../App.css';
import 'antd/dist/antd.css';

const { Text } = Typography;
function HistoricoConsulta() {

    const [modal, setModal] = useState(false);
    const abrirModal = () => (
        setModal(true)
    )

    const cerrarModal = () => (
        setModal(false)
    )
    
    const { TextArea } = Input;

    return (
        <>
            <Button type="primary" onClick={abrirModal}>
                Histórico de Consultas
      </Button>

            <Modal
                title="Históricos de Consultas"
                centered
                visible={modal}
                onOk={cerrarModal}
                onCancel={cerrarModal}
                width={500}
            >
                <Row align="right">

                    <Col span={24} align="left">

                        Datos de la Consulta Anterior
                            <Divider orientation="center"></Divider>
                            <Text strong>Peso:  </Text>
                            <Text disabled> 64 Kg</Text>
                            <br />
                            <Text strong>Estatura:  </Text>
                            <Text disabled> 162 cm</Text>
                            <br />
                            <Text strong>Cintura:  </Text>
                            <Text disabled> 93 cm</Text>
                            <br />
                            <Text strong>Presión:  </Text>
                            <Text disabled> 120/80 mm</Text>
                            <br />
                            <Text strong>Glucosa:  </Text>
                            <Text disabled> 103 mg/dl</Text>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default HistoricoConsulta;
