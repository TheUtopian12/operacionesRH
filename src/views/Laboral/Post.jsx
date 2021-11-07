import React, { Component } from "react";
import {
    Button,
    Form,
    Input
  } from "antd";
import Pdf from "./Pdf";

class Post extends Component {
  state = {
    nombre: "",
    horainicial: "",
    horafinal: "",
    observaciones:"",
    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  sunmitPost = (e) => {
    if (!this.state.nombre) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
         
                    <Form method="post">
                        <fieldset>
                      <Form.Item label="Nombre">
                        <Input
                          name="nombre"
                          onChange={this.onChange("nombre")}
                          placeholder="Nombre"
                        />
                      </Form.Item>

                      <Form.Item label="Hora de inicio">
                        <Input
                          name="horainicial"
                          onChange={this.onChange("horainicial")}
                          placeholder="Hora de inicio"
                        />
                      </Form.Item>
                      <Form.Item label="Hora de final">
                        <Input
                          name="horafinal"
                          onChange={this.onChange("horafinal")}
                          placeholder="Hora de final"
                        />
                      </Form.Item>

                      <Form.Item label="Observaciones">
                        <Input
                          name="observaciones"
                          onChange={this.onChange("observaciones")}
                          placeholder="Observaciones"
                        />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" danger onClick={this.sunmitPost}>
                          Generar Permiso
                        </Button>
                      </Form.Item>
                      </fieldset>
                    </Form>

                    
                  
        ) : (
          <Pdf
            nombre={this.state.nombre}
            horafinal={this.state.horafinal}
            horainicial={this.state.horainicial}
            observaciones={this.state.observaciones}
          />
        )}
      </>
    );
  }
}

export default Post;
