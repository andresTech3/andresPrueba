import React from 'react';
import ContainerProducto from "../containers/ContainerProducto"

import { ContainerPostAll, HrTitlePost, TitlePostAll } from "../style/Article.element.js"

function Productos() {
  return (
    <>
        <TitlePostAll>PRODUCTOS</TitlePostAll>
        <HrTitlePost/>
        <ContainerPostAll>
          <ContainerProducto/>
        </ContainerPostAll>
    </>
  )
}

export default Productos