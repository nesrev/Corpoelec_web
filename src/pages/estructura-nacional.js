import React, { useState } from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Maps from "../components/maps"


const EstructuraNacional =() => {
    const [content, setContent] = useState(<br/>);
    return (
        <Layout>
            <SEO title="Estructura Nacional"/>
            <div>
                <h1 className="title">Estructura Nacional</h1>
                <div className="box">
                    {content}
                </div>
                <Maps setTooltipContent={setContent}/>                
            </div>
        </Layout>
    );
}

export default EstructuraNacional