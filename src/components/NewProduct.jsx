import React from 'react'
import { ContanerPost, ImgPost,LinkPost,ModalPost, TitlePost } from "../style/NewPost.element"

//importar imagenes

import useDriver from '../hook/useDriver'

const productosAll = (imgProduct,titleProduct, linkProduct) =>{
  return(
      <ContanerPost>
        <ImgPost src={imgProduct}/>
            <ModalPost>
                <TitlePost>{titleProduct}</TitlePost>
                <LinkPost href={linkProduct}>Ver Mas</LinkPost>
            </ModalPost>
      </ContanerPost>
  )
  
}


function NewProduct() {
  return (
    <>
        {productosAll(useDriver('1tbhFxQuydr81NbfPbgtRExa-W97Az8_F'),"Aprende en sólo 15 días a diseñar la página web de tu negocio sin usar códigos ni programación... ", "https://go.hotmart.com/I70987366H")}
    </>
  )
}

export default NewProduct