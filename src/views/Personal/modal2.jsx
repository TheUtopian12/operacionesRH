
import React, {useState} from 'react';
import { Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import Post2 from './Post2';



function Modales2() {
    
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
 <Post2></Post2>
  ),
  onOk() {},
});

}
      
    return (
    <>
     <Button shape="round"onClick={info}>
     📋
      </Button>
     
 

    </>
  );
}
export default Modales2;