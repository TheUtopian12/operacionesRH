
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "./apple-icon.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
        
      >
        <div className="logo">
          <a
            href="/admin/land"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
         
        </div>
       
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            
                <li
                 
                >
                  <NavLink
                    to={"/admin" + "/home"}
                    className=""
                    activeClassName="active"
                  >
                      
                    <p>🙎‍♂️ Registro de Personal </p>
                  </NavLink>

                  
                </li>
              <li>
                <NavLink
                    to={"/admin" + "/estudiantes"}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <p>🎓 Registro de Estadias</p>
                  </NavLink>
                  </li>
                  <li>
                <NavLink
                    to={"/admin" + "/oficios"}
                    className="nav-link"
                    activeClassName="active"
                  
                  >
                    <p>🗒️ Registro de Oficios</p>
                  </NavLink>
                  </li>

                  <li>
                <NavLink
                    to={"/admin" + "/docgenerales"}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <p>📑 Registro de Documentos</p>
                  </NavLink>
                  </li>
                  <li>
                <NavLink
                    to={"/admin" + "/docempleador"}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <p>📑 Documentos de Empleador</p>
                  </NavLink>
                  </li>
            
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
