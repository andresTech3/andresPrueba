import styled from 'styled-components';

export const ContanerPost = styled.div`
    width:33%;
    display : flex;
    position:relative;
    @media screen and (max-width:968px){
        width : 100%;
        margin:1em 0px;
    }
`

export const ImgPost = styled.img`
    width:100%;
    height:50vh;
    cursor:pointer;
    transition:all 500ms ease-out;
    @media screen and (max-width:960px){
        height:auto;
    }
`

export const ModalPost = styled.div`
    position:absolute;
    background:#111;
    opacity:0;
    top:0px;
    width:100%;
    height:100%;
    padding:1em;
    text-align:justify;
    transition:all 500ms ease-out;
    &:hover{
        opacity :0.8;
    }
`

export const TitlePost = styled.h3`
    text-align:center;
    color:#fff;
    font-size:1.4em;
`


export const LinkPost = styled.a`
    text-decoration : none;
    padding:0.7em;
    border : 1px solid #08fdd8;
    color:#fff;
    cursor:pointer;
    display:block;
    position:relative;
    bottom :0;
    margin:4em 0px;
    text-align:center;
    &:hover{
        background:#08fdd8;
        color:#fff;
        transition:all 500ms ease-in;
    }
`  