import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"



import Layout from "../components/layout"
import SEO from "../components/seo"

const Generacion =() => (
    <Layout>
        <SEO title="Generación"/>
        <div className="section is-medium">
            <h1 className="title">Generación</h1>
            <StaticImage
                className="mb-2"
                src="../images/generacion.jpg"
                alt="Generacion"
                placeholder="blurred"
                quality={60}
                layout="fullWidth"
            />
            <div className="content has-text-justified">
                El parque de generación del Sistema Eléctrico Nacional, asciende a unos <strong> 24.000 megavatios (MW) de capacidad instalada </strong>y está conformado por un significativo número de infraestructuras, localizadas en su mayoría, en la región de Guayana, donde funcionan los complejos hidroeléctricos más grandes del país. Éstos ofrecen más del 62% del potencial eléctrico que llega a hogares e industrias de toda la Nación.
                <br/>
                Otro 35% de la generación de electricidad proviene de plantas termoeléctricas, y casi un 3% corresponde al sistema de generación distribuida, conformada por grupos electrógenos. Esto ha sido posible, gracias al rescate del parque de generación por parte de <strong>CORPOELEC</strong>.
                <br/>
                Entre el 2013 a 2015 se incorporaron <strong>2.935 MW nuevos a través de plantas como:</strong>
                <br/>
                <div className="is-divider"></div>
                <p className="is-size-3 has-text-corpo-blue">2013</p>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">India Urquía</p>
                        <p className="title has-text-corpo-green">360MW</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Unidad 1 de Don Luis Zambrano</p>
                        <p className="title has-text-corpo-green">180MW</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Unidad 1 de Fabricio Ojeda</p>
                        <p className="title has-text-corpo-green">257MW</p>
                        </div>
                    </div>
                </nav>
                <div className="is-divider"></div>
                <p className="is-size-3 has-text-corpo-blue">2014</p>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Unidad 1 de Antonio José de Sucre</p>
                        <p className="title has-text-corpo-green">170MW</p>
                        </div>
                    </div>
                </nav>
                <div className="is-divider"></div>
                <p className="is-size-3 has-text-corpo-blue">2015</p>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Unidad 2 Don Luis Zambrano</p>
                        <p className="title has-text-corpo-green">180MW</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Unidad 3 Fabricio Ojeda</p>
                        <p className="title has-text-corpo-green">257MW</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Unidad 2 Antonio José de Sucre</p>
                        <p className="title has-text-corpo-green">170MW</p>
                        </div>
                    </div>
                </nav>
                <br/>
                También se convirtieron a gas <strong>1390 MW, equivalentes ahorrara 64 MBD. En plantas como India Urquía, Termocarabobo, Juan Bautista Arismendi y Luisa Cáceres de Arismendi</strong>.
            </div>
        </div>
    </Layout>
)

export default Generacion