import * as React from "react"


import Layout from "../components/layout"

const Logros = () => (
    <Layout>
        <h1 className="title">Logros</h1>
        <p className="is-size-3 has-text-corpo-blue">2021</p>
        <div className="block">
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Mantenimientos a Hidroeléctrica <br/>y Termoeléctricas</p>
                    <p className="title has-text-corpo-green">29</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Potencia incorporada</p>
                    <p className="title has-text-corpo-green">3.354 MW</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Lineas de Transmisión<br/> Rehabilitadas</p>
                    <p className="title has-text-corpo-green">378 KM</p>
                    </div>
                </div>
            </nav>
        </div>
        <div className="block">
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Trabajos de Control <br/>de Vegetación</p>
                    <p className="title has-text-corpo-green">26.717,20 Hectareas</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Sustitución protecciones <br/>y equipos de potencia</p>
                    <p className="title has-text-corpo-green">177 Equipos</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Incorporación de transformadores <br/>y autotransformadores</p>
                    <p className="title has-text-corpo-green">+ 2.787 MVA</p>
                    </div>
                </div>
            </nav>
        </div>
        <div className="block">
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Vehiculos Recuperados</p>
                    <p className="title has-text-corpo-green">839</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Unidades de Producción <br/>Recuperadas</p>
                    <p className="title has-text-corpo-green">9</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Luminarias Instaladas</p>
                    <p className="title has-text-corpo-green">+ 2.173.437</p>
                    </div>
                </div>
            </nav>
        </div>
        <div className="block mb-3">
            <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Bombillos LED Entregados</p>
                    <p className="title has-text-corpo-green">+ 1.500</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading">Transformadores de Distribución <br/> Recuperados</p>
                    <p className="title has-text-corpo-green">2.550</p>
                    </div>
                </div>
            </nav>
        </div>
    </Layout>
)

export default Logros