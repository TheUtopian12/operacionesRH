
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
  title: 'Permiso',
  content: (
  
  <Post></Post>
  ),
  onOk(
    
  ) {
    

  },
  
})

}
      
    return (
    <>
     <Button  onClick={info}>
     📃
      </Button>
     
 

    </>
  );
}
export default Modales;