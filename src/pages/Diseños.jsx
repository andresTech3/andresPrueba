import React from 'react';
import NewDiseño from "../components/NewDiseño"
import { ContainerPostAll, HrTitlePost, TitlePostAll } from "../style/Article.element.js"

function Diseños() {
  return (
    <>
      <TitlePostAll>DISEÑOS WEB</TitlePostAll>
        <HrTitlePost/>
        <ContainerPostAll>
          <NewDiseño/>
        </ContainerPostAll>
    </>
  )
}

export default Diseños