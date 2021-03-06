import React, { Component } from "react"
import "./App.css"
import Routes from "./Routes"
import { NavLink } from "react-router-dom"
import axios from "axios"

class App extends Component {
  render() {
    return (
      <div className="card">
        <nav>
          <NavLink to="/">Inicio</NavLink>
          {" | "}
          <NavLink to="/signup">Registrate</NavLink>
          {" | "}
          <NavLink to="/edit">Profile</NavLink>
          {" | "}
          <NavLink to="/login">Inicia sesión</NavLink>
          <button
            onClick={() => {
              axios
                .get("http://localhost:3000/auth/logout", {
                  withCredentials: true
                })
                .then(res => {
                  console.log(res)
                })
            }}
          >
            Cerrar sesión
          </button>
        </nav>
        <Routes />
      </div>
    )
  }
}

export default App
