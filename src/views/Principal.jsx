import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

import { Nav } from "reactstrap";
import {Breadcrumb, Layout, Menu } from 'antd'
import Home from './Home'

const { Header, Content, Footer } = Layout;




class Bread extends React.Component {
  render() {
    return (
      <div className="content">
      <Nav>
            
     
        <NavLink
          to={"/admin" + "/personal"}
          className="nav-link"
          activeClassName="active"
        >
          <p>👷 Registro de Personal</p>
        </NavLink>
        <NavLink
          to={"/admin" + "/laboral"}
          className="nav-link"
          activeClassName="active"
        >
          <p>📝 Registro Laboral</p>
        </NavLink>
        
        <NavLink
          to={"/admin" + "/medico"}
          className="nav-link"
          activeClassName="active"
        >
          <p> 💊Registro Medico</p>
        </NavLink>
     
    <div>
     
    </div>
  
  
</Nav>        
</div>
    )
  }
}

export default Bread