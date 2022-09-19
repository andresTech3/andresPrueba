import React from 'react'
// import NewArticle from '../components/NewArticle'

import NewProyect from "../components/NewProyect"

import { ContainerPostAll, HrTitlePost, TitlePostAll } from "../style/Article.element.js"

function Proyect() {
  return (
    <>
        <TitlePostAll>TODOS LOS PROYECTOS</TitlePostAll>
        <HrTitlePost/>
        <ContainerPostAll>
          <NewProyect/>
        </ContainerPostAll>
    </>
    
  )
}

export default Proyect