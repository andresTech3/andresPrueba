import React from 'react'
import {ContainerAllProduct} from "../style/ContainerProductos.element"
import NewProduct from "../components/NewProduct"
function ContainerProducto() {
  return (
    <>
        <ContainerAllProduct>
            <NewProduct/>
        </ContainerAllProduct>
    </>
  )
}

export default ContainerProducto