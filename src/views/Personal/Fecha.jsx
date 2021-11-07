import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class Fecha extends Component {
    state = {
        fecha: new Date('2018','02','14')
    }
    onChange = fecha => {
        this.setState({fecha:fecha});
       
    }
    mostrarFecha = fecha =>{
        alert(fecha);
    }
    render(){
        return(
            <>
            <DatePicker selected={this.state.fecha} onChange={this.onChange}/>
            <br /><br />
// <input type='button' value='Mostrar fecha' onClick={()=>this.mostrarFecha(this.state.fecha)}/>
          
            </>
             
        )
    }

}
    export default Fecha;