import React, { useState } from 'react';
import { Modal, Button, Form, Input, Row, Col } from 'antd';
//import '../App.css';
import 'antd/dist/antd.css';

function ModalGineco() {

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
                Registrar consulta
      </Button>

            <Modal
                title="Registro Ginecológico"
                centered
                visible={modal}
                onOk={cerrarModal}
                onCancel={cerrarModal}
                width={750}
            >
                <Row align="right">

                    <Col span={24} align="left">

                        Exploración Mamaria
                        <br />
                        <br />
                        <Form.Item
                            name="exmamaria"
                            rules={[
                                {
                                    required: true,
                                    message: 'Anotaciones'
                                }
                            ]}>
                            <TextArea name="anotacionesexpmamaria" style={{ width: 500 }} rows={5} placeholder="Anotaciones" />
                        </Form.Item>

                        Papanicolaou
                        <br />
                        <br />
                        <Form.Item

                            name="papanicolaou"
                            rules={[
                                {
                                    required: true,
                                    message: 'Anotaciones'
                                }
                            ]}>
                            <TextArea name="anotacionespapanicolaou" style={{ width: 500 }} rows={5} placeholder="Anotaciones" />
                        </Form.Item>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
export default ModalGineco;
