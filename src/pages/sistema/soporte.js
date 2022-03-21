import React,{ useState } from "react"


import Layout from "../../components/layout"
import TabsLoad from "../../components/tabsload"
import SEO from "../../components/seo"


export default class Soporte extends React.Component{
    state = {
        activeForm: "",
        activeAten: "",
        activeTwit: "",
        show: false
    }
    activeTabForm = () => {
        this.setState({
            activeForm: "is-active",
            activeAten: "",
            activeTwit: "",
            show:"Form"
        })
    }
    activeTabAten = () => {
        this.setState({
            activeForm: "",
            activeAten: "is-active",
            activeTwit: "",
            show:"Aten"
        })
    }
    activeTabTwit = () => {
        this.setState({
            activeForm: "",
            activeAten: "",
            activeTwit: "is-active",
            show: "Twit"
        })
    }
    render (){
        return(
            <Layout>
                <SEO title="Soporte"/>
                <div className="conteiner">
                    <section className="section">
                        <h1 className="title">Si presenta alguna falla en el servicio</h1>
                        <p className="subtitle">Siga alguna de las siguientes opciones</p>
                        <div className="tabs is-large is-boxed is-centered">
                            <ul>
                                <li className={`${this.state.activeForm }`}><a onClick={this.activeTabForm}>Formulario En Linea</a></li>
                                <li className={`${this.state.activeAten}`}><a onClick={this.activeTabAten}>Atención Telefonica</a></li>
                                <li className={`${this.state.activeTwit}`}><a onClick={this.activeTabTwit}>Twitter</a></li>
                            </ul>
                        </div>
                    </section>
                    <TabsLoad show={this.state.show}/>
                </div>
            </Layout>
        );
    }
}