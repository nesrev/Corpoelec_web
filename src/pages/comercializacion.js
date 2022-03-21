import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"



import Layout from "../components/layout"
import SEO from "../components/seo"

const Comercializacion =() => (
    <Layout>
        <SEO title="Comercialización"/>
        <div className="section is-medium">
            <h1 className="title">Comercialización</h1>
            <StaticImage
                className="mb-2"
                src="../images/comercializacion.jpg"
                alt="Comercialización"
                placeholder="blurred"
                quality={70}
                layout="fullWidth"
            />
            <div className="content has-text-justified">
                <strong>CORPOELEC </strong>impulsa un proceso de comercialización eficiente con la finalidad de ofrecer diversas ventanas de atención: oficinas comerciales; atención telefónica, y oficinas virtuales; esto con el fin de velar por la comodidad y bienestar de nuestros usuarios y usuarias.
                <br/>
                Para satisfacer los altos estándares de eficiencia que el pueblo venezolano exige y merece, CORPOELEC ofrece un conjunto de soluciones que permite agilizar la contratación del servicio eléctrico en todo el país, con criterio de comodidad y bienestar.
                <br/>  
                A través de los enlaces de nuestra oficina virtual, los usuarios pueden conocer el saldo de su factura, realizar su pago a tiempo; obtener información de cualquier requerimiento o solicitud; efectuar reclamos comerciales; reportar emergencias y averías; y realizar denuncias sobre el hurto de materiales, conexiones ilegales, actitudes vandálicas y manipulación ilegal de equipos de medición.
            </div>
        </div>
    </Layout>
)

export default Comercializacion