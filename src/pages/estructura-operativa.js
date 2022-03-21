import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"



import Layout from "../components/layout"
import SEO from "../components/seo"

const EstructuraOperativa =() => (
    <Layout>
        <SEO title="Estructura Operativa"/>
        <div className="content">
            <h1 className="title">Estructura Operativa</h1>
            <StaticImage
                src="../images/estructura-operativa.png"
                alt="Banner"
                placeholder="blurred"
                quality={50}
                layout="fullWidth"
            />
        </div>
    </Layout>
)

export default EstructuraOperativa