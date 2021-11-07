import React from 'react'
import { Form, Input, Button, Upload,Space } from 'antd';

const CrudEstudiantes = () => {

  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>

<div className="content">

    <Space direction="vertical" >
          <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Apellido Paterno"
        name="apellidop"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Apellido Materno"
        name="apellidom"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>

      <Form.Item
        label="Telefono"
        name="telefono"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      
      <Form.Item
        label="Correo Electronico"
        name="email"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      <Form.Item
        label="Asesor Interno"
        name="asesori"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      <Form.Item
        label="Maestros"
        name="maestros"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>
      <Form.Item
        label="Nombre del proyecto"
        name="proyecto"
        rules={[{ required: true, message: 'Este campo no debe estar vacio' }]}
      >
        <Input />


      </Form.Item>


      <Form.Item
        name="upload"
        label="Carta de presentación"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>Subir archivo</Button>
        </Upload>
      </Form.Item>


      <Form.Item
        name="upload"
        label="Carta de aceptación"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>Subir archivo</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="upload"
        label="Carta de liberación"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>Subir archivo</Button>
        </Upload>
      </Form.Item>



      <Form.Item
        name="upload"
        label="Seguro,"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>Subir archivo</Button>
        </Upload>
      </Form.Item>

      
      

      

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>



    </Form>
    
    </Space>
        </div>
        </>
    )
}

export default CrudEstudiantes
