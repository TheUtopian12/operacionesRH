/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Laboral from "views/Laboral/LaboralForm.jsx";
import Steps from "views/StepsForm";
import Medico from "views/Medico/Medico"
import Principal from "views/Principal"
import Home from "views/Home"
import Estudiante from 'views/Estudiantes/Estudiante'
import EditEstudiante from 'views/Estudiantes/EditEstudiante'
import CreateEstudiante from 'views/Estudiantes/CreateEstudiante'
import ShowEstudiante from 'views/Estudiantes/ShowEstudiante'
import Oficios from 'views/Oficios/OficiosPrincipal'
import CrudOficios from 'views/Oficios/CrudOficios'
import DocGenerales from "views/DocumentosG/DocGenarales"
import Documentos from "views/DocumentosG/Documentos"
import Perfil from "views/Perfil"
import Empleador from "views/DocumentosEmpleador/ConsultaEmpleador"
import RegEmpleador from "views/DocumentosEmpleador/DocEmpleador"


import EditMedico from 'views/Medico/EditMedico'
import Landing from "views/Landing";
var routes = [

  
  {
    path: "/registro",
    name: "✔️Registro ",
    component: Principal,
    layout: "/admin",
    
  },
  {
    path: "/personal",
    name: "👷 Registro de Personal ",
    component: Steps,
    layout: "/admin",
    
  },
  {
    path: "/laboral",
    name: "📝 Registro Laboral ",
    component: Laboral,
    layout: "/admin",
    
  },
  {
    path: "/medico",
    name: "💊Registro Medico ",
    component: Medico,
    layout: "/admin",
    
  },
  {
    path: "/home",
    name: " Home ",
    component: Home,
    layout: "/admin",
    
  },
  {
    path: "/land",
    name: " Home ",
    component: Landing,
    layout: "/admin",
    
  },

  {
    path: "/oficios",
    name: "Registro de Oficios",
    component: Oficios,
    layout: "/admin",
    
  },
  {
    path: "/regoficios",
    name: "Registro de Oficios",
    component:CrudOficios,
    layout: "/admin",
    
  },
  {
    path: "/docgenerales",
    name: "Registro de Documentos",
    component: Documentos,
    layout: "/admin",
    
  },
  {
    path: "/docgeneralesreg",
    name: "Registro de Documentos",
    component: DocGenerales,
    layout: "/admin",
    
  },
  {
    path: "/estudiantes",
    name: "Estudiantes",
    component: Estudiante,
    layout: "/admin",
    
  },
  {
    path: "/edit/:id",
    name: "Editar Estudiante",
    component: EditEstudiante,
    layout: "/admin",
    
  },
  {
    path: "/editmedico/:id",
    name: "Editar Informacion",
    component: EditMedico,
    layout: "/admin",
    
  },
  {
    path: "/create",
    name: "Crear Estudiante",
    component: CreateEstudiante,
    layout: "/admin",
    
  },
  {
    path: "/show/:id",
    name: "Perfil Estudiante",
    component: ShowEstudiante,
    layout: "/admin",
    
  },
  {
    path: "/showperfil/:id",
    name: "Perfil de Empleado",
    component: Perfil,
    layout: "/admin",
    
  },


  {
    path: "/docempleador",
    name: "Registro de Documentos",
    component: Empleador,
    layout: "/admin",
    
  },
  {
    path: "/docempleadorreg",
    name: "Registro de Documentos",
    component: RegEmpleador,
    layout: "/admin",
    
  },


           

 
  
];
export default routes;
