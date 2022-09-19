import React from 'react'
import './creativeCss.css'

import styled from 'styled-components'

const Badge = styled.div`
  background: url(${props => props.bgUrl}) no-repeat 100% 50%;
  background-size: ${props => props.sizeImg ? props.sizeImg : '170%'};
`

function CreativeCss({titleStyles , bgUrl, sizeImg, linkCss}) {
  return (
    <Badge className='badge' bgUrl = {bgUrl} sizeImg = {sizeImg}>
        <div className='text'><a href={linkCss}>{titleStyles}</a></div>
    </Badge>
  )
}

export default CreativeCss