import styled from 'styled-components'

export const SubTitle = styled.h2`
    font-size :1.5em;
    margin:10px 0px;
    color:${props => props.color};
    text-align :${props => props.textAlign};
    `

export const ParrText = styled.p`
    font-size :1.2em;
    margin:10px 0px;
    color:${props => props.color};
`

export const LinkText = styled.a`
    color:${props => props.color};
    text-decoration:none;
    font-size:1.2em;
    &:hover{
        text-decoration :underline;
    }
`

export const ContainerSection = styled.div`
    width:${props => props.width};
    height:${props => props.height};
    background:${props => props.background};
    color:${props => props.color};
    padding:1em;
`

export const ContainerImg = styled.div`
    width:${props => props.width};
    height:${props => props.height};
    background:${props => props.background};
    position:relative;
    margin:10px 0px;
`

export const ImgSection = styled.img`
    width :${props => props.width};
    height:${props => props.height};
    position:absolute;
    z-index:${props => props.zIndex} ;
    opacity:${props => props.opacity};
`
export const HrSection = styled.hr`
    width :${props => props.width};
    color:${props => props.color};
`