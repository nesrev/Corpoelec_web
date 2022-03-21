import * as React from "react"


const TabLoad = ({show}) => {
    if (show=="Form"){
        return (
            <section className="section">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                        </span>
                    </p>
                    </div>
                    <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <div className="field">
                    <p className="control">
                        <button className="button is-success">
                        Login
                        </button>
                    </p>
                </div>
            </section>
        )
    }
    else if(show=="Aten"){
        return(
            <section className="section">
                <h1 className="title">Nuestros Números de Reclamo son:</h1>
                <div className="content">
                    <p>0212 - 123 4567</p>
                    <p>0212 - 123 4567</p>
                    <p>0212 - 123 4567</p>
                    <p>0212 - 123 4567</p>
                </div>
            </section>
        )
    }
    else if(show=="Twit"){
        return(
            <section className="section">
                <h1 className="title">Quieres Realizar un reclamo por la Red Social Twitter</h1>
                <div className="content">
                    <p className="subtitle has-text-corpo-blue">Paso 1</p>
                    <p>Ingresa en tu cuenta personal de Twitter</p>
                    <div className="divider"></div>
                    <p className="subtitle has-text-corpo-blue">Paso 2</p>
                    <p>Redacta un mensaje y mensiona a <strong className="has-text-link">@corpoelecinfo</strong></p>
                    <div className="divider"></div>
                    <p className="subtitle has-text-corpo-blue">Paso 3</p>
                    <p>En el mensaje coloca el <strong>Estado y el Municipio de donde esta ocurriendo la falla</strong>, seguido del Hashtag <strong className="has-text-link">#ReporteDeFallaCorpoelec.</strong></p>
                    <div className="divider"></div>
                    <p className="subtitle has-text-corpo-blue">Paso 4</p>
                    <p>Ahora dale al boton de Públicar.<br/> Una Vez ejecutado esto nuestro sistema captara su Twitt Publicado para atender la falla.</p>
                    <div className="divider"></div>
                </div>
            </section>
        )
    }
    else{
        return(
            <section className="section">
                
            </section>
        )
    }
}

export default TabLoad