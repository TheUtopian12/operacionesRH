import {React} from 'react';
import '../App.css';
import {Row,Col,Divider,Input, TimePicker,DatePicker, Space} from 'antd';
import "antd/dist/antd.css";
import {Form,Button, Checkbox } from 'antd';
import moment from 'moment';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Modales from './modal';
import Modales2 from './modal2';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 2,
      span: 7,
    },
  };
  const dateFormat = 'YYYY/MM/DD';


function Personal(){
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    
    return(
      
        <> <Divider>Personal</Divider>
         <Form

        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
         <Row>
              <Col span={12}>
        <Form.Item 
       
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input  style ={{margin:'5px',width:'100%'}}/>
        </Form.Item>
        <Form.Item
       
          label="Apellido paterno"
          name="apellidopaterno"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input  style ={{margin:'5px',width:'100%'}}/>
        </Form.Item>
        <Form.Item
       
          label="Apellido materno"
          name="apellidomaterno"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          < Input style ={{margin:'5px',width:'100%'}} />
        </Form.Item>
        <Form.Item 
       
         label="Fecha de nacimiento"
         name="fechanacimiento"
         rules={[
           {
             required: true,
             message: 'campo vacío!',
           },
         ]}>
        <DatePicker style ={{margin:'5px',width:'100%'}} align="left" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item
          label="Edad"
          name="edad"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input style ={{margin:'5px',width:'100%'}} />
          </Form.Item>
          <Form.Item
          
          label="Teléfono"
          name="telefono"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input style ={{margin:'5px',width:'100%'}}/>
          </Form.Item>
          <Form.Item 
         
          label="Teléfono de emergencia"
          name="telefono de emergencia"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input  style ={{margin:'5px',width:'100%'}}/>
          </Form.Item>
          <Form.Item
          
          label="Nombre contacto emergencia"
          name="Nombre emergencia"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input style ={{margin:'5px',width:'100%'}}/>
          </Form.Item>
          <Form.Item
         
          label="Parentesco"
          name="parentesco"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
          <Input  style ={{margin:'5px',width:'100%'}}/>
          </Form.Item>
          <Form.Item
          style ={{margin:'5px',width:'100%'}}
          label="Equipo de resguardo"
          name="resguardo"
          rules={[
            {
              required: true,
              message: 'campo vacío!',
            },
          ]}
        >
           <Modales></Modales>
        <Modales2></Modales2>
          </Form.Item>

        </Col>
        <Col span={12}>
        <Form.Item
        style ={{margin:'5px',width:'100%'}}
         label="Acta de nacimiento"
         name="actadenacimiento"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋 </Button>
  </Upload>
        </Form.Item>
       
        <Form.Item
         label="Curp"
         name="curp"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="RFC"
         name="rfc"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Identificación vigente"
         name="identificacion"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Comprobante de domicilio"
         name="comprobante de domicilio"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Solicitud de empleo"
         name="solicitud"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Carta de recomendación"
         name="carta"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Antecedentes no penales"
         name="nopenales"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Alta de personal (IMSS)"
         name="imss"
         rules={[
           {
             required: true,
             message: 'campo vacío!',
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Ultimo grado de estudios"
         name="estudios"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        
        <Form.Item {...tailLayout} name="remember" valuePropName="checked"style ={{margin:'5px',width:'100%'}}>
          <Checkbox>Es extranjero</Checkbox>
        </Form.Item>
        <Form.Item
         label="Pasaporte"
         name="pasaporte"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        <Form.Item
         label="Residencias"
         name="residencias"
         rules={[
           {
             required: true,
             message: 'campo vacío!'
           }
         ]}>
        <Upload {...props}>
    <Button style ={{margin:'5px',width:'100%'}} icon={<UploadOutlined />}>Subir archivo 📋</Button>
  </Upload>
        </Form.Item>
        
        <Form.Item {...tailLayout}>
          <Button  style ={{margin:'5px',color:'black'}} htmlType="submit">
            Submit
          </Button>
        </Form.Item>


        </Col>
        
         </Row>
      </Form>
     
      </>
    );
}
export default Personal;