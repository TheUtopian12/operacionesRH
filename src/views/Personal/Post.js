import React, { Component } from 'react';
import PDF from './PDF';
import { DatePicker,Button } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; 

const notify = () => toast('Creando PDF!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
class Post extends Component {
    state = {
        producto: '',
        marca: '',
        caracteristica: '',
        contenido:'',
        entrego:'',
        recibio:'',
        fecha: new Date(),
        postSubmitted: false
    }


    onChange = input => e => {
        this.setState({
            [input]: e.target.value

        });
       
    }
    onChange2 = fecha => {
        this.setState({
           fecha:fecha
        });
    }

    sunmitPost = (e) => {
        notify();
        if(!this.state.fecha){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true,
                
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal"  method="post" >
                                            <fieldset>
                                                <legend className="text-center header">Documento nuevo</legend>
                                                <div className="form-group">
                                               
                                                <DatePicker style ={{margin:'5px',width:'100%'}}  selected={this.state.fecha}  onChange={this.onChange2} placeholder="Fecha"  name='fecha' locale="es" className="pickers" dateFormat="dd 'de' MMMM 'de' yyyy"/>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input  label="Producto" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('producto')} name="producto" type="text" placeholder="Producto" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input  label="Marca" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('marca')} name="marca" type="text" placeholder="Marca" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea  label="Caracteristica" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('caracteristica')} className="form-control" name="caracteristica" placeholder="Caracteristica" rows="4"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea  label="Contenido" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('contenido')} className="form-control" name="contenido" placeholder="Contenido" rows="7"></textarea>
                                                </div>
                                               
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input  label="Entregó" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('entrego')} name="entrego" type="text" placeholder="Entregó" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input  label="Recibió" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('recibio')} name="recibio" type="text" placeholder="Recibió" className="form-control" />
                                                </div>
                                              
                                                <div className="form-group" align='center'>
                                                    <Button style ={{borderColor:'blueviolet',background:'white'}}shape="round" type="button" onClick={this.sunmitPost} notify >Crear</Button>
                                                  
                                                </div>
                                                
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF  fecha={this.state.fecha.toString()} producto={this.state.producto} marca={this.state.marca} caracteristica={this.state.caracteristica} contenido={this.state.contenido} entrego={this.state.entrego} recibio={this.state.recibio}/>
                    )
                }
            </>
        );
    }
}

export default Post;