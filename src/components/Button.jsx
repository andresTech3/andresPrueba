import React from 'react'

// import styled from "styled-components";

import "../styles/styleButton.css"



function Button(linkBoton, textBoton) {
  return (
    <>
      <a className="linkButton" style={{"--clr" : "#08fdd9" }} href={linkBoton}><span>{textBoton}</span><i></i></a>
    </>
  )
}

export default Button