
import React, {useState} from 'react';
import { Modal, Button} from 'antd';
import 'antd/dist/antd.css';
//import PdfGen from './PdfGen.jsx';
import Post from './Post';


function Modales() {
    
    const [modal, setModal] =useState(false);
   const abrirModal=()=>(
       setModal(true)
   )

   const cerrarModal=()=>(
    setModal(false)
)
function info() {
Modal.info({
  width:600,
  shape:"round",
  title: 'Documento de resguardo',
  content: (
  //<PdfGen></PdfGen>
  <Post></Post>
  ),
  onOk() {},
});

}
      
    return (
    <>
     <Button  shape="round" onClick={info}>
     📋
      </Button>
     
 

    </>
  );
}
export default Modales;