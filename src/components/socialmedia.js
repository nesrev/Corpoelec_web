import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faYoutube,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () =>(
    <section className="section box">
        <div className="columns is-mobile">
            <div className="column">
                <h1 className="title">Siguenos:</h1>
            </div>
            <div className="column">
                <a src="https://twitter.com" className="title"><FontAwesomeIcon className="has-text-info" icon={faTwitter} /> Twitter</a>
            </div>
            <div className="column">
                <a src="https://instagram.com" className="title"><FontAwesomeIcon className="has-text-danger" icon={faInstagram} /> Instagram</a>
            </div>
            <div className="column">
            <a src="https://youtube.com" className="title"><FontAwesomeIcon className="has-text-corpo-red" icon={faYoutube} /> Youtube</a>
            </div>
        </div>
    </section>
) 
export default SocialMedia