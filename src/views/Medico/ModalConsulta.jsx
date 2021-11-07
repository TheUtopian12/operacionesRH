import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input, Row, Col } from 'antd';
import moment from 'moment';
//import '../App.css';
import 'antd/dist/antd.css';
import HistoricoConsulta from './HistoricoConsulta';

function ModalConsulta() {

    const [modal, setModal] = useState(false);
    const abrirModal = () => (
        setModal(true)
    )

    const cerrarModal = () => (
        setModal(false)
    )
    const dateFormat = 'YYYY/MM/DD';
    const { TextArea } = Input;

    return (
        <>
            <Button onClick={abrirModal}>
                Registro de Consultas
      </Button>

            <Modal
                title="Registro de Consulta Médica"
                centered
                visible={modal}
                onOk={cerrarModal}
                onCancel={cerrarModal}
                width={1000}
            >
                <Row align="right">
                    <Col span={6} align="left">

                        <Form.Item
                            label="Fecha"
                            name="fechaconsulta"
                            rules={[
                                {
                                    required: true,
                                    message: 'subelo',
                                },
                            ]}>
                            <DatePicker align="left" defaultValue={moment('2020/04/22', dateFormat)} format={dateFormat} />
                        </Form.Item>
                        <br />
                        <br />

                        Control de Peso
                        <br />
                        <br />
                        <Form.Item
                            label="Peso"
                            name="pesoconsulta"
                            rules={[
                                {
                                    required: true,
                                    message: 'especifica el peso'
                                }
                            ]}>
                            <Input placeholder="Peso en kg" />
                        </Form.Item>

                        <Form.Item
                            label="Estatura"
                            name="estaturaconsulta"
                            rules={[
                                {
                                    required: true,
                                    message: 'especifica la estatura'
                                }
                            ]}>
                            <Input placeholder="Estatura en cm" />
                        </Form.Item>

                        <Form.Item
                            label="Cintura"
                            name="cinturaconsulta"
                            rules={[
                                {
                                    required: true,
                                    message: 'especifica la cintura'
                                }
                            ]}>
                            <Input placeholder="Cintura en cm" />
                        </Form.Item>

                    </Col>

                    <Col span={2} align="left"></Col>

                    <Col span={6} align="left">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    Control de Presión y Glucosa
                    <br />
                        <br />
                        <Form.Item
                            label="Presión"
                            name="presionconsulta"
                            rules={[
                                {
                                    required: true,
                                    message: 'presión arterial'
                                }
                            ]}>
                            <Input placeholder="Presión mm HG" />
                        </Form.Item>

                        <Form.Item
                            label="Glucosa"
                            name="glucosaconsulta"
                            rules={[
                                {
                                    required: true,
                                    message: 'glucosa'
                                }
                            ]}>
                            <Input placeholder="Niveles de glucosa mg/dl" />
                        </Form.Item>
                    </Col>

                    <Col span={2} align="left"></Col>

                    <Col span={8} align="left">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <HistoricoConsulta></HistoricoConsulta>
                        
                        <br />
                        <br />
                        <br />
                        <br />
                        Observaciones:
                        <br />
                        <br />
                        <TextArea name="observacionesconsulta" style={{ width: 500 }} rows={7} placeholder="Anotaciones" />
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
export default ModalConsulta;
