import React, { useState } from 'react';
import { Row, Col, Modal, Button, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
//import '../App.css';
import 'antd/dist/antd.css';
import SelectorVacuna from "./SelectorVacuna";

function ModalVacunas() {

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
            <Button  onClick={abrirModal}>
                Aplicación de Vacunas
      </Button>

            <Modal
                title="Vacunas"
                centered
                visible={modal}
                onOk={cerrarModal}
                onCancel={cerrarModal}
                width={800}
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
                        Tipo de vacuna:
                        <br />
                        <br />
                        <SelectorVacuna></SelectorVacuna>
                        <br />
                        <br />
                        <br />
                    </Col>

                    <Col span={3}>

                    </Col>

                    <Col span={15}>
                        <br />
                    Observaciones:
                        <br />
                        <br />
                        <TextArea style={{ width: 700 }} rows={7} placeholder="Anotaciones" />
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
export default ModalVacunas;
