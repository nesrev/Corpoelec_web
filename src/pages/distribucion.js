import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"



import Layout from "../components/layout"
import SEO from "../components/seo"

const Distribucion =() => (
    <Layout>
        <SEO title="Distribución"/>
        <div className="section is-medium">
            <h1 className="title">Distribución</h1>
            <StaticImage
                className="mb-2"
                src="../images/distribucion.jpg"
                alt="Distribucion"
                placeholder="blurred"
                quality={70}
                layout="fullWidth"
            />
            <div className="content has-text-justified">
                Las redes de distribución son fundamentales dentro del proceso de transporte de la energía eléctrica, para lograr el suministro eficiente y confiable del servicio a las usuarias y usuarios, de todo el país.
                <br/>
                Los sistemas de distribución en Venezuela están conformados por líneas, transformadores y subestaciones eléctricas, que operan en diferentes niveles de voltaje. Estos sistemas están ubicados en todo el territorio nacional, lo que permite un alto porcentaje de electrificación de zonas urbanas y rurales, alcanzando un 98% de todo el país.  
                <br/>
                <div className="is-divider"></div>
            </div>
            <StaticImage
                src="../images/metasdistribucion2.png"
                alt="Banner"
                placeholder="blurred"
                quality={70}
                layout="fullWidth"
            />
        </div>
    </Layout>
)

export default Distribucion