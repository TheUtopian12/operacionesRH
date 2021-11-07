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
   <Link to="/admin/docgeneralesreg"><Button color="success" >Registrar Documentos</Button></Link>
   
  <Row>
    {
      documentos.map(item =>(

        <Col span={6}>
        <Card
        hoverable='50'
        display= 'flex'
         style={{margin:'10px',width:'90%', textAlign:'center'}}shape="round"
        cover={<img color=" example" alt="" src="https://images5.alphacoders.com/351/351817.jpg"  height="20" />}
      
      >
        <Meta title={item.name} description={item.city} />
      </Card>
     </Col>
    
      ))  
    }
   </Row>



  </div>
)
}
 
 
export default Documentos;