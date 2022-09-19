import React from 'react'
import { ContainerFooter, TextFooter } from "../style/Footer.element"

const dateActual = () =>{
    const dateReturn = new Date()
    return dateReturn.getFullYear()
}

function Footer() {
  return (
    <>
        <ContainerFooter>
            <TextFooter>Andres Narvaez @AndresTech . Todos los derechos reservados © {dateActual()} </TextFooter>
        </ContainerFooter>
    </>
  )
}

export default Footer