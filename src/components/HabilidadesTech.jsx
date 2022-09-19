import React from 'react'
import { ContainerTechItems, ModalColorTechItems } from '../style/HabilidadesTech.element'

function HabilidadesTech({titleContent, learning, col}) {
  return (
    <ContainerTechItems>
        <h3>{titleContent}</h3>
        <ModalColorTechItems col = {col} learning = {learning}/>
    </ContainerTechItems>
  )
}

export default HabilidadesTech