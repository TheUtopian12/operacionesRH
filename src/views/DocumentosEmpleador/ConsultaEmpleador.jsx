import React, {useState} from 'react';
import { Card,Divider, Row,Col } from 'antd';
import Grid from 'antd/lib/card/Grid';
import {Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,Link
  } from 'react-router-dom'

const { Meta } = Card;


const  Documentos=()=>{
    const [documentos, setDocumentos]= React.useState([])
    React.useEffect(

        ()=>{
            obtenerDatos();
        }
        ,[]

    )
   const obtenerDatos = async()=>{
   //Declaras data para guardar datos desde api -hacemos fetcha una api (datos que no se pueden leer)
    const data=await fetch('https://api.mocki.io/v1/b043df5a')
   //Declaramos files para guardar datos tipo json - los datos de data los convertimos a json
    const files = await data.json()
    //Los objetos almacenados en files los asignamos al estado 'El estado en este caso es Documentos'
    setDocumentos(files)
   }

return ( 

    <div className="content">
   <Divider>DOCUMENTOS GENERALES</Divider>
   <Link to="/admin/docempleadorreg"><Button color="success" >Registrar Documentos</Button></Link>
   
  <Row>
    
     

        <Col span={6}>
        <Card
        hoverable='50'
        display= 'flex'
         style={{margin:'10px',width:'90%', textAlign:'center'}}shape="round"
        cover={<img color=" example" alt="" src="https://www.colorhexa.com/003458.png"  height="20" />}
      
      >
        <Meta title="Tramite de actualización" description="Formato para solicitar el tramite de actualización " />
      <a href="https://www.gob.mx/tramites/ficha/actualizacion-de-la-constancia-de-inscripcion-del-empleador/INM797" target="_blank"> <Button color="info"> Solicitar</Button></a>
      
      </Card>
     </Col>

     <Col span={6}>
        <Card
        hoverable='50'
        display= 'flex'
         style={{margin:'10px',width:'90%', textAlign:'center'}}shape="round"
        cover={<img color=" example" alt="" src="https://www.colorhexa.com/003458.png"  height="20" />}
      
      >
        <Meta title="Constancia del empleador" description="    " />

        <Button color="info">Descargar</Button>

      </Card>
     </Col>

     <Col span={6}>
        <Card
        hoverable='50'
        display= 'flex'
         style={{margin:'10px',width:'90%', textAlign:'center'}}shape="round"
        cover={<img color=" example" alt="" src="https://www.colorhexa.com/003458.png"  height="20" />}
      
      >
        <Meta title="Oficio de actualización" description="" />
        <Button color="info">Descargar</Button>
      </Card>
     </Col>
    
     
   </Row>



  </div>
)
}
 
 
export default Documentos;