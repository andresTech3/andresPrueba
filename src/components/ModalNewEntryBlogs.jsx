import React from 'react'

import styled from 'styled-components'
import "../styles/ModalBlogsAnim.css"

const ContainerModalEntry = styled.div`
  width:100%;
  height:100vh;
  position:fixed;
  background: rgba(0, 100, 100 , 0.7);
  display:${props => props.onModal ? "flex" : "none"};
  top:0;
  left:0;
  justify-content:center;
  align-items:center;
  z-index:99;
`

function ModalNewEntryBlogs({children, onModal}) {
  return (
    <>
      <ContainerModalEntry className="animModal" onModal = {onModal}>
        {children}
      </ContainerModalEntry>
    </>
  )
}

export default ModalNewEntryBlogs