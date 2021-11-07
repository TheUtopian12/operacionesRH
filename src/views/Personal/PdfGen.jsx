import React, { Component } from 'react';
import '../App.css';
import {Input,Button } from 'antd';
import jsPDF from 'jspdf';

class PdfGen extends Component{
 
  constructor(){
    super();
    this.state = {
      nomdoc:'',
      fecha:'YYYY/MM/DD',
      producto:11.69,
      marca:'08.27',
      caracteristica:'Lintang.pdf',
      gambar:'https://4.bp.blogspot.com/-89TxYwvuJyA/WxOWE4WkHPI/AAAAAAAAAiM/MBWeo995SbkEC6XQVJmtS_ZeKKZsG6MYgCLcBGAs/s400/lin.png'
    }
  }
  unduhPdf(e){
    e.preventDefault();

    var doc = new jsPDF({
      // orientation: 'landscape',
      unit: 'in',
      // format: [4, 2]  // tinggi, lebar
      format: [this.state.tinggi, this.state.lebar]
    })
   //doc.text(`PDF size: ${this.state.tinggi} x ${this.state.lebar} in`, 0.5, 0.5)
    doc.text(`PDF Nombre del documento: ${this.state.nomdoc}`, 0.5, 0.8)
    doc.text(`Fecha: ${this.state.fecha}`, 0.5, 1.1)
    doc.text(`Productos: ${this.state.producto}`, 0.5, 1.4)
    doc.text(`Marca: ${this.state.marca}`, 0.5, 1.6)
    doc.text(`Caracteristicas: ${this.state.caracteristica}`, 0.5, 1.8)
    doc.text(`Contenido: ${this.state.contenido}`, 0.5, 2.0)
    doc.text(`Entrego: ${this.state.entrego}`, 0.5, 2.4)
    doc.text(`Recicbio: ${this.state.recicbio}`, 0.5, 2.6)
     //format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)

    doc.save(`${this.state.nomdoc}`)
  };

render() {
  const { TextArea } = Input;
  
    return (
      <div style={{margin:'20px', fontFamily:'Roboto'}}>

      <p style={{width:'100%'}}>Selecciona tamaño del pdf: &nbsp;
        <select  ref="ukuran" style ={{margin:'5px',width:'100%'}}
        onChange={(x)=>this.setState({
          tinggi: x.target.value[0]+x.target.value[1]+x.target.value[2]+x.target.value[3]+x.target.value[4],
          lebar: x.target.value[6]+x.target.value[7]+x.target.value[8]+x.target.value[9]+x.target.value[10]
        })}>
         
         <option value={[11.69,'08.27']}> A4 (210mm x 297mm) </option>
          <option value={[46.81,33.11]}> A0 (841mm x 1189mm) </option>
          <option value={[33.11,23.39]}> A1 (594mm x 841mm) </option>
          <option value={[23.39,16.54]}> A2 (420mm x 594mm) </option>
          <option value={[16.54,11.69]}> A3 (297mm x 420mm) </option>
          <option value={['08.27','05.83']}> A5 (148mm x 210mm) </option>
          <option value={['05.83','04.13']}> A6 (105mm x 148mm) </option>
          <option value={['04.13','02.91']}> A7 (74mm x 105mm) </option>
          <option value={['02.91','02.05']}> A8 (52mm x 74mm) </option>
          <option value={['02.05','01.46']}> A9 (37mm x 52mm) </option>
          <option value={['01.46','01.02']}> A10 (26mm x 37mm) </option>
        </select>
        </p>

        <span style={{width:'100%'}}>
            <p>PDF Nombre del documento:
            <Input type="text" size="30" style ={{width:'100%',margin:'5px'}}
            placeholder="Nombre ..."
            onChange={(x)=>this.setState({nomdoc:x.target.value+'.pdf'})} />
            
            </p>
        </span>
        
        <span style={{width:'100%'}}> 
            <p>Fecha:
            <Input align="left" type="date" size="30" style ={{width:'100%',margin:'5px'}}
            placeholder="Fecha..."
            onChange={(x)=>this.setState({fecha:x.target.value})} />
            </p>
        </span>

        <span style={{width:'100%'}}>
            <p>Productos:
            <TextArea  id="pesan" type="text" size="30"style ={{width:'100%',margin:'5px'}}
            placeholder="Ingrese los productos..."
            onChange={(x)=>this.setState({producto: x.target.value})}/>
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Marca:
            <TextArea  id="pesan" type="text" size="30" style ={{width:'100%',margin:'5px'}}
            placeholder="Ingrese la marca..."
            onChange={(x)=>this.setState({marca: x.target.value})}/>
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Caracteristicas:
            <TextArea  id="pesan" type="text" size="30"  style ={{width:'100%',margin:'5px'}}
            placeholder="Ingrese la caracteristicas..."
            onChange={(x)=>this.setState({caracteristica: x.target.value})}/>
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Contenido:
            <TextArea  id="pesan" type="text" size="30"  style ={{width:'100%',margin:'5px'}}
            placeholder="Ingrese la contenido..."
            onChange={(x)=>this.setState({contenido: x.target.value})}/>
            </p>
        </span>
        
        <span style={{width:'100%'}}>
            <p>Entrego:
            <Input type="text" size="30"  style ={{width:'100%',margin:'5px'}}
            placeholder="Entrego..."
            onChange={(x)=>this.setState({entrego: x.target.value})} />
            </p>
        </span>
        <span style={{width:'100%'}}>
            <p>Recicbio:
            <Input type="text" size="30"  style ={{margin:'5px',width:'100%'}}
            placeholder="Recicbio..."
            onChange={(x)=>this.setState({recicbio: x.target.value})} />
            </p>
        </span>
        

        <center>
        <Button onClick={this.unduhPdf.bind(this)}
        variant="raised" color="secondary" style={{margin:'5px'}}>
          Descargar PDF
        </Button>
        </center>

      </div>      
    )
}
}
export default PdfGen;