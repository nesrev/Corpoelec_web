import * as React from "react"
import { Link } from "gatsby"

import {
    faUser,
    faLock
  } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Login = () => (
    <Layout>
        <SEO title="Log-in"/>
        <div className="container is-max-widescreen my-5">
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label">Nombre de Usuario</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="pedroperez@email.com"/>
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Contraseña</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" placeholder="Contraseña" value=""/>
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faLock} />                    
                            </span>
                        </div>
                    </div>
                    <Link to="/sistema/recuperar-contrasena">¿Olvidaste tu Contraseña?</Link>
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-link">Ingresar</button>
                        </div>
                        <div className="control">
                            <Link className="button is-link is-light" to="/sistema/registrate">Registrarte</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Login