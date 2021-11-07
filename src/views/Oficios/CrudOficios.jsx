import React from 'react'
import { Form, Input, Button, Upload,Space } from 'antd';

 const CrudOficios = () => {

    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="content">
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Tipo de Documento"
        name="tdocumento"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Fecha"
        name="fecha"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Dependencia"
        name="dependecia"
        rules={[{ required: false, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>

      <Form.Item
        label="Asunto"
        name="asunto"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      
      <Form.Item
        label="A quien va dirigido"
        name="dirigidoA"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      <Form.Item
        label="Nota"
        name="nota"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      <Form.Item
        label="Quién firma
        "
        name="firma"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
     
      <button type="submit" class="btn btn-success">Registrar</button>
    </Form>
    
   
        </div>
    )
}
export default CrudOficios
