import * as React from "react";
import {graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Hero = () => {
    const data = useStaticQuery(
      graphql`
        query {
          guri: file(relativePath: { eq: "Guri-Venezuela-2-1200x720.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          ener: file(relativePath: { eq: "Electricity-Computer-Wallpaper-1.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          eoli: file(relativePath: { eq: "eolico-paraguana.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          covid: file(relativePath: { eq: "blue-covid-banner.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )
const imageGuri = data.guri.childImageSharp.fluid
const imageEner = data.ener.childImageSharp.fluid
const imageEoli = data.eoli.childImageSharp.fluid
const imageCovid = data.covid.childImageSharp.fluid

return (
  <Carousel showThumbs={false} interval={9000} showStatus={false} showArrows={false} infiniteLoop={true} emulateTouch={true} autoPlay={true}>
    <BackgroundImage Tag="section" className="hero is-halfheight" fluid={imageGuri} fadeIn="soft" >
      <div className="hero-body is-gradient">
        <div className="content has-text-left">
          <p className="title has-text-corpo-green">
            No seas Complise Denuncia
          </p>
          <br/>
          <p className="has-text-white">
            El SEN tambien depende de ti.
          </p>
          <button class="button is-link is-rounded is-large">Ingresa Aqui</button>
        </div>
      </div>
    </BackgroundImage>
    <BackgroundImage Tag="section" className="hero is-halfheight" fluid={imageEner} fadeIn="soft" >
      <div className="hero-body is-gradient">
        <div className="content has-text-left">
          <p className="title has-text-corpo-green">
            Bienvenidos al Camino de la Electricidad
          </p>
          <br/>
          <p className="has-text-white">
            ven y disfruta con nosotros de como se distribulle la electricidad por todo el pais
          </p>
          <button class="button is-link is-rounded is-large">Ingresa Aqui</button>
        </div>
      </div>
    </BackgroundImage>
    <BackgroundImage Tag="section" className="hero is-halfheight" fluid={imageEoli} fadeIn="soft" >
      <div className="hero-body is-gradient">
        <div className="content has-text-left">
          <p className="title has-text-corpo-green">
            CORPOELEC tambien hace uso de <br/> las energias renobables
          </p>
          <p className="has-text-white">
            conoce mas de nuestro proyectos ecologicos.
          </p>
          <button class="button is-link is-rounded is-large">Ingresa Aqui</button>
        </div>
      </div>
    </BackgroundImage>
    <BackgroundImage Tag="section" className="hero is-halfheight" fluid={imageCovid} fadeIn="soft" >
      <div className="hero-body is-gradient">
        <div className="content has-text-left">
          <p className="title has-text-corpo-green">
            Quitale la Corona al Virus
          </p>
          <br/>
          <p className="has-text-white">
            Para saber mas informacion hacerca del COVID-19.
          </p>
          <button class="button is-link is-rounded is-large">Ingresa Aqui</button>
        </div>
      </div>
    </BackgroundImage>
  </Carousel>
  );
};

export default Hero;
