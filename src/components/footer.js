import * as React from "react"
import { Link } from "gatsby"
import {
  faEnvelope,
  faUser
 } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
<>
  <footer className="footer has-background-dark">
    <div className="content has-text-centered">
      <div className="columns is-mobile">
        <div className="column">
          <h6 className="title has-text-white">Institución</h6>
          <ul>
            <li><Link to="#">Filosofia de Gestion</Link></li>
            <li><Link to="#">Lineamientos y Resoluciones</Link></li>
            <li><Link to="#">Junta Directiva de CORPOELEC</Link></li>
            <li><Link to="#">Estructura Nacional</Link></li>
            <li><Link to="#">Logros</Link></li>
          </ul>
        </div>
        <div className="column">
          <h6 className="title has-text-white">Hogares y Comercios</h6>
          <ul>
            <li><Link to="#">Tarifas</Link></li>
            <li><Link to="#">Nuevos Medidores</Link></li>
            <li><Link to="#">Soporte</Link></li>
            <li><Link to="#">Atención al Cliente</Link></li>
          </ul>
        </div>
        <div className="column">
          <h6 className="title has-text-white">Grandes Clientes</h6>
          <ul>
            <li><Link to="#">Tarifas</Link></li>
            <li><Link to="#">Nuevos Medidores</Link></li>
            <li><Link to="#">Soporte</Link></li>
            <li><Link to="#">Atención al Cliente</Link></li>
          </ul>
        </div>
        <div className="column">
          <h6 className="title has-text-white">Otros</h6>
          <ul>
            <li><Link to="#">Contrataciones Publicas</Link></li>
            <li><Link to="#">Catalogo de Leyes</Link></li>
            <li><Link to="#">Contratistas</Link></li>
            <li><Link to="#">Acuerdos de Interupción</Link></li>
            <li><Link to="#">Formación Laboral</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div className="has-background-white has-text-black">
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
        <p>©CORPOELEC {new Date().getFullYear()}</p>
        </div>
        <div className="column">
          <nav className="level is-pulled-right">
            <div className="level-right">
              <FontAwesomeIcon className="level-item" size="x4" icon={faInstagram} />
              <FontAwesomeIcon className="level-item" size="x4" icon={faFacebook} />
              <FontAwesomeIcon className="level-item" size="x4" icon={faTwitter} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</>
)
export default Footer
