import React from 'react'
import {ContentInfoAbout, HrAbout, TextPort,PressHeader,PressInfo, ImgHeader, HrLinea} from '../style/About.element'
import Redsocial from "../components/RedSocial"
// importando imagenes

import useDriver from '../hook/useDriver'

function About() {
  return (
    <div>
      <TextPort>¿QUIEN ES ANDRES NARVAEZ?</TextPort>
      <HrAbout/>
      <ContentInfoAbout>
        <PressHeader>
            <ImgHeader src={useDriver('1iQ-6QUGOyXQUJ2I0T6nk654RU9S5Cd6y')}/>
            <h2>@AndresTech</h2>
            <p>Programador y Diseñador Web - conocimiento en diseño grafico y produccion audiovisual #web #react #javaScript #next</p>
            <br />
            <Redsocial/>
        </PressHeader>
        <HrLinea/>
        <PressInfo>
          <h3>Quien Soy</h3>
          <p>Colombiano, nacido en Montelibano Cordoba, Trabajo con proyectos personales, construccion de proyectos web en la parte front-end y apacionado por aprender cada dia mas, enseñar mis conocimiento , y construir una comunida tech
          <br /><br />
          tambien cuento con capacidades de desarrollo como diseño graficos y produccion de multimedia, marketing digital, etc
          </p>

          <br />
          <h3>Especialidades</h3>
          <br />
          <p>Javascript,React, nextJs, Html, Css, GitHub, Git, typescript </p>
          <br />
          <h3>Especialidades complementarias</h3>
          <br />
          <p>Diseño grafico, Marketing Digital, Produccion Multimedia</p>
          <br />
          <h3>Proyectos Recientes</h3>
          <br />
          <p>Creo contenidos tech en mis cuenta de instagram, linkedin y twitter, Tambien estoy trabajando en mis blogs personales en la seccion de #Articulos, creando diferentes proyectos tech de compañias locales entre muchas cosas </p>
        </PressInfo>
      </ContentInfoAbout>
    </div>
  )
}

export default About