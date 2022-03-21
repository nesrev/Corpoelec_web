import React from 'react';
import {Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import {
  faAngleDown,
  faEnvelope,
  faLock
 } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CorpoElecLogo from '../images/corpoeleca.png';

const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
    activeButton:false
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  toggleButton = () => {
    this.setState({
      activeButton: !this.state.activeButton,
    })
  }
  navbarOpenDropdown = () => {
    this.setState({
      navbarIsActive: "navbar-item has-dropdown is-active"
    })
  }
  //This closes the navbar dropdown
  navbarCloseDropdown = () => {
    this.setState({
      navbarIsActive: "navbar-item has-dropdown is-hoverable"
    })
  }
  render() {
    return(
      <section className="hero is-small">
        <div className="hero-head">
          <StaticImage
          src="../images/cintillo_pagina_web-01.jpg"
          alt="MPPEE"
          placeholder="blurred"
          quality={95}
          layout="fullWidth"
          />
        </div>
        <div className="hero-footer">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link
                  className="navbar-item"
                  to="/"
                >
                  <img src={CorpoElecLogo} alt="CORPOELEC" />
                </Link>
                <NavbarBurger
                  active={this.state.activeMenu}
                  toggleMenu={this.toggleMenu}
                />
              </div>
              <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
                <div className="navbar-start">
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    onMouseEnter={this.navbarOpenDropdown}
                    onMouseLeave={this.navbarCloseDropdown}
                  >
                    <a className="navbar-link">
                      Institución
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="dropdown-item" to="/filosofia-de-gestion">Filosofia de Gestion</Link>
                      <Link className="dropdown-item" to="/estructura-operativa">Estructura Operativa</Link>
                      <Link className="dropdown-item" to="/estructura-nacional">Estructura Nacional</Link>
                      <Link className="dropdown-item" to="/logros">Logros</Link>
                    </div>
                  </div>
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    onMouseEnter={this.navbarOpenDropdown}
                    onMouseLeave={this.navbarCloseDropdown}
                  >
                    <a className="navbar-link">
                      Procesos Medulares
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="dropdown-item" to="/generacion">Generación</Link>
                      <Link className="dropdown-item" to="/transmision">Transmisión</Link>
                      <Link className="dropdown-item" to="/distribucion">Distribución</Link>
                      <Link className="dropdown-item" to="/comercializacion">Comercialización</Link>
                    </div>
                  </div>
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    onMouseEnter={this.navbarOpenDropdown}
                    onMouseLeave={this.navbarCloseDropdown}
                  >
                    <a className="navbar-link">
                      Hogares y Comercios
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="dropdown-item" to="/tarifas">Tarifas</Link>
                      <Link className="dropdown-item" to="/nuevosMedidores">Nuevos Medidores</Link>
                      
                    </div>
                  </div>
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    onMouseEnter={this.navbarOpenDropdown}
                    onMouseLeave={this.navbarCloseDropdown}
                  >
                    <a className="navbar-link">
                      Grandes Clientes
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="dropdown-item" to="/tarifas">Tarifas</Link>
                      <Link className="dropdown-item" to="/nuevosMedidores">Nuevos Medidores</Link>
                      <Link className="dropdown-item" to="/soporte">Soporte</Link>
                      <Link className="dropdown-item" to="/atencliente">Atención al Cliente</Link>
                    </div>
                  </div>
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    onMouseEnter={this.navbarOpenDropdown}
                    onMouseLeave={this.navbarCloseDropdown}
                  >
                    <a className="navbar-link">
                      Contactenos
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <Link className="dropdown-item" to="/sistema/soporte">Reporte de Fallas</Link>
                      <Link className="dropdown-item" to="/atencion-al-cliente">Atención al Cliente</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item">Activa la conciencia</a>
                  <div
                    className={` dropdown is-right ${this.state.activeButton ? 'is-active' : ''}`}
                  >
                    <div className="dropdown-trigger">
                      <a className="navbar-item is-medium" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.toggleButton}>
                        <StaticImage
                          src="../images/corpoelec-digital-logo.png"
                          alt="CORPOELEC"
                          placeholder="blurred"
                          width={200}
                          quality={95}
                          layout="fixed"
                        />
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                      </a>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <p className="subtitle has-text-link-dark has-text-centered">
                            Ingresa al nuevo sistemas CorpoelecDigital.
                          </p>
                        </div>
                        <hr className="dropdown-divider"/>
                        <Link type="button" to="/sistema/login" className="button is-link is-fullwidth">Ingresa</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
