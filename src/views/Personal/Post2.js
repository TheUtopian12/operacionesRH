import React, { Component } from 'react';
import PDF2 from './PDF2';
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
        compañia: '',
        numerotel: '',
        equipo: '',
        modelo:'',
        ns:'',
        sim:'',
        imei:'',
        contenidocaj:'',
        entrego:'',
        recibio:'',
        fecha2: new Date(),
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }
    onChange2 = fecha2 => {
        this.setState({
           fecha2:fecha2
        });
    }

    sunmitPost = (e) => {
        notify();
        if(!this.state.fecha2){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
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
                                                <DatePicker   style ={{margin:'5px',width:'100%'}} selected={this.state.fecha2}  onChange={this.onChange2} placeholder="FECHA"  name='fecha2' locale="es" className="pickers" dateFormat="dd 'de' MMMM 'de' yyyy"/>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input  label="Compañia" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('compañia')} name="compañia" type="text" placeholder="Compañia" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input  label="Numero teléfonico" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('numerotel')} name="numerotel" type="text" placeholder="Numero teléfonico" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input  label="Equipo" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('equipo')} className="form-control" name="equipo" placeholder="Equipo" rows="4"></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input  label="Modelo" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('modelo')} className="form-control" name="modelo" placeholder="Modelo" rows="7"></input>
                                                </div>
     
                                                 <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input  label=" N/S" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('ns')} className="form-control" name="ns" placeholder="N/S" rows="7"></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input  label=" SIM" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('sim')} className="form-control" name="sim" placeholder="SIM" rows="7"></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input  label=" IMEI" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('imei')} className="form-control" name="imei" placeholder=" IMEI" rows="7"></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea  label="Contenido caja" style ={{margin:'5px',width:'100%'}} onChange={this.onChange('contenidocaj')} className="form-control" name="contenidocaj" placeholder=" Contenido caja" rows="7"></textarea>
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
                                                    <Button style ={{borderColor:'blueviolet',background:'white'}}shape="round" type="button" onClick={this.sunmitPost} >Crear</Button>
                                                </div>
                                                
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                         
                         
                        <PDF2 fecha2={this.state.fecha2.toString()} compañia={this.state.compañia} numerotel={this.state.numerotel} equipo={this.state.equipo} modelo={this.state.modelo} ns={this.state.ns} sim={this.state.sim}imei={this.state.imei}contenidocaj={this.state.contenidocaj} entrego={this.state.entrego} recibio={this.state.recibio}/>
                    )
                }
            </>
        );
    }
}

export default Post;