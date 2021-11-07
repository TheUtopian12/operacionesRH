import React,{useState} from 'react'

import { Modal, Button,Upload, message,DatePicker, Space } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import moment from 'moment';


const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const { Dragger } = Upload;


function ModaleVacaciones() {

    const [modal, setModal] = useState(false);

    const abrirModal=()=>(

        setModal(true)

    )
    const cerrarModal=()=>(

        setModal(false)

    )



  return (

    <>

        <Button type="default" onClick={abrirModal}>
        📃
      </Button>

      <Modal
        title="Vacaciones de empleado"
        centered
        visible={modal}
        onOk={cerrarModal}
        onCancel={cerrarModal}
        width={500}
      >
        <Dragger >
    <p className="ant-upload-drag-icon">
    </p>
    
    <p className="ant-upload-text">Click o arrastra archivos para cargar</p>
    <p className="ant-upload-hint">
    📃
    </p>

    
  </Dragger>
  <h6>Periodo vacacional</h6>
  <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      onChange={onChange}
    />
    
        
      
      
      </Modal>
    
    </>
  );

}

export default ModaleVacaciones;
