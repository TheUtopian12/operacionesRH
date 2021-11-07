import React from 'react'
import Fondo from '../assets/img/fondo.png'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <NavLink
                    to={"/admin" + "/home"}
                  >
                   <img src={Fondo}  />
                   </NavLink>
        </div>
    )
}

export default Landing
