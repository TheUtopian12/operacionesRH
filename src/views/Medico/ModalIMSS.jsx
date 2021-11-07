import React, { useState } from 'react';
import { Row, Col, Modal, Button, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
//import '../App.css';
import 'antd/dist/antd.css';
import SelectorVacuna from './SelectorVacuna';
import ModalGineco from './ModalGineco';
import HistoricoConsulta from './HistoricoConsulta';

function ModalIMSS() {
    
    const { TextArea } = Input;

    const [modal, setModal] = useState(false);
    const abrirModal = () => (
        setModal(true)
    )

    const cerrarModal = () => (
        setModal(false)
    )
    const dateFormat = 'YYYY/MM/DD';

    return (

        <>
            <Button onClick={abrirModal}>
                Registrar Información
      </Button>

            <Modal
                title="Programa Anual de Vacunación del IMSS"
                centered
                visible={modal}
                onOk={cerrarModal}
                onCancel={cerrarModal}
                width={1000}
            >

                <Row align="right">
                    <Col span={6} align="left">

                        <Form.Item
                            label="Fecha de vacunación"
                            name="fechavacuna"
                            rules={[
                                {
                                    required: true,
                                    message: 'subelo',
                                },
                            ]}>
                            <DatePicker align="left" defaultValue={moment('2015/04/22', dateFormat)} format={dateFormat} />
                        </Form.Item>
                        <br />
                        <br />

                        Control de Peso
                        <br />
                        <br />
                        <Form.Item
                            label="Peso"
                            name="pesoimss"
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
                            name="estaturaimss"
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
                            name="cinturaimss"
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

                    Control de Presión, Glucosa y Colesterol
                    <br />
                        <br />
                        <Form.Item
                            label="Presión"
                            name="presionimss"
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
                            name="glucosaimss"
                            rules={[
                                {
                                    required: true,
                                    message: 'glucosa'
                                }
                            ]}>
                            <Input placeholder="Niveles de glucosa mg/dl" />
                        </Form.Item>

                        <Form.Item
                            label="Colesterol"
                            name="colesterolimss"
                            rules={[
                                {
                                    required: true,
                                    message: 'colesterol'
                                }
                            ]}>
                            <Input placeholder="Niveles de clesterol mg/dl" />
                        </Form.Item>
                    </Col>

                    <Col span={2} align="left"></Col>

                    <Col span={7} align="left">
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
                        Vacuna:
                        <br />
                        <TextArea name="vacuna" style={{ width: 500 }} rows={1} placeholder="Ingrese la vacuna aplicada" />
                        <br />
                        <br />
                        <br />                        
                        Consulta Ginecológica y Obstétrica:
                        <br />
                        <br />
                        <ModalGineco></ModalGineco>
                        <br />
                        <br />
                        <br />
                        <br />
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
export default ModalIMSS;
