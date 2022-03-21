import * as React from "react"
import { Link } from "gatsby"
import {
  faFileInvoice,
  faCreditCard,
  faPhone,
  faLightbulb,
  faFileContract,
  faBalanceScale,
  faHandshake,
  faLandmark
} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import News from "../components/news"
import Hero from "../components/hero"
import SEO from "../components/seo"
import SocialMedia from "../components/socialmedia"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero/>
    <SocialMedia/>
    <section className="section">
      <div className="columns is-desktop">
        <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-icon">
                <FontAwesomeIcon className="has-text-corpo-green" icon={faFileInvoice} size="5x" />
              </div>
              <p className="card-header-title is-centered">
                Mira tu Factura
              </p>
            </header>
            <div className="card-content my-3">
              Accede a tu ultima factura y tus facturas anteriores
            </div>
            <footer className="card-footer">
              <Link to="/sistema/login" className="card-footer-item">Ingresa</Link>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-icon">
                <FontAwesomeIcon className="has-text-corpo-green" icon={faCreditCard} size="5x" />
              </div>
              <p className="card-header-title is-centered">
                Como Pagar
              </p>
            </header>
            <div className="card-content my-3">
              Conoce los lugares y medios de pago habilitados.
            </div>
            <footer className="card-footer">
              <Link to="/pago" className="card-footer-item">Ingresa</Link>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-icon">
                <FontAwesomeIcon className="has-text-corpo-green" icon={faPhone} size="5x" />
              </div>
              <p className="card-header-title is-centered">
                Llamanos
              </p>
            </header>
            <div className="card-content my-3">
              Conoce nuestro contactos y llamanos.
            </div>
            <footer className="card-footer">
              <Link to="/atencion-al-cliente" className="card-footer-item">Ingresa</Link>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <div className="card-header-icon">
                <FontAwesomeIcon className="has-text-corpo-green" icon={faLightbulb} size="5x" />
              </div>
              <p className="card-header-title is-centered">
                Fallas de Luz
              </p>
            </header>
            <div className="card-content">
              Haz aqui tu reclamo en linea si estas presentando fallas de luz.
            </div>
            <footer className="card-footer">
              <Link to="/sistema/soporte" className="card-footer-item">Ingresa</Link>
            </footer>
          </div>
        </div>
      </div>
    </section>
    <Link to="/#">
      <StaticImage
        src="../images/conciencia-activa-1900x300.jpg"
        alt="Banner"
        placeholder="blurred"
        quality={95}
        layout="fullWidth"
      />
    </Link>
    <News />
    <section className="section has-background-link-dark">
      <div className="columns is-desktop has-background-link-dark">
        <div className="column">
          <div className="card has-background-link">
            <div className="card-content has-text-centered">
              <Link to="/#">
                <FontAwesomeIcon className="title has-text-white" icon={faFileContract} size="4x"/>
                <br />
                <p className="subtitle has-text-white">
                  Contrataciones Publicas
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card has-background-link">
            <div className="card-content has-text-centered">
              <Link to="/#">
                <FontAwesomeIcon className="title has-text-white" icon={faBalanceScale} size="4x"/>
                <br />
                <p className="subtitle has-text-white">
                  Catalogo de Leyes
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card has-background-link">
            <div className="card-content has-text-centered">
              <Link to="/#">
                <FontAwesomeIcon className="title has-text-white" icon={faHandshake} size="4x"/>
                <br />
                <p className="subtitle has-text-white">
                  Contratistas
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card has-background-link">
            <div className="card-content has-text-centered">
              <Link to="/#">
                <FontAwesomeIcon className="title has-text-white" icon={faLandmark} size="4x"/>
                <br />
                <p className="subtitle has-text-white">
                  Acuerdos de Interrupción
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
