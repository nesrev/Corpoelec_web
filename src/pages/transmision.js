import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"



import Layout from "../components/layout"
import SEO from "../components/seo"

const Transmision =() => (
    <Layout>
        <SEO title="Transmisión"/>
        <div className="section is-medium">
            <h1 className="title">Transmisión</h1>
            <StaticImage
                className="mb-2"
                src="../images/transmision.jpg"
                alt="Transmision"
                placeholder="blurred"
                quality={60}
                layout="fullWidth"
            />
            <div className="content has-text-justified">
                Dado que en Venezuela se ha aprovechado eficiente y sosteniblemente el potencial hidroeléctrico de las aguas del poderoso río Caroní, al sur del país, esta zona se ha convertido en el principal punto geográfico que surte de energía a casi todo el territorio nacional. Ello ha obligado a desarrollar sistemas de transmisión capaces de transportar grandes bloques de energía a largas distancias y en niveles de voltaje muy elevados, utilizando subestaciones y líneas de alta tensión.
                <br/>
                <strong>CORPOELEC </strong>posee una extendida red eléctrica del país. Durante el 2013 al 2015 se construyeron <strong>862 kilómetros de nuevas líneas.</strong>
                <ul>
                    <li>2013: El Sitio – Curupao en las zonas Guarenas y Guatire.</li>
                    <li>2014: Cable Submarino Chacopata- Margarita <strong>230kV 40Km / LT 230kV </strong>para asegurar conexión al sistema de Fabricio Ojeda <strong>148Km.</strong></li>
                    <li>2015: <strong>LT 115kV </strong>Tablazo-Mene Mauroa- Dabajuro <strong>115Km.</strong></li>
                </ul>

                <div className="is-divider"></div>
            </div>
            <StaticImage
                src="../images/maplogrotransmis2.png"
                alt="Banner"
                placeholder="blurred"
                quality={60}
                layout="fullWidth"
            />
        </div>
    </Layout>
)

export default Transmision