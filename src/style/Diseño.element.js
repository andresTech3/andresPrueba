import styled from 'styled-components';

export const ContainerDiseño = styled.div`
    width:100%;
    height:100vh;
    margin:1em 0px;
    position:relative;
`

export const BgDiseño = styled.div`
    position:absolute;
    top:10em;
    width:100%;
    height:65%;
    background:#08fdd8;
    z-index:-99;
`

export const ContainerTextDiseño = styled.div`
    width:40%;
    height:70%;
    padding:1em;
    background:#222;
    color:#fff;
    position:relative;
    left:55%;
    border-radius:3em;
    @media screen and (max-width:968px){
        left:0;
        width:100%;
        margin:auto;
    }
`

export const TitleDiseño = styled.h2`
    color:#08fdd8;
    font-size:2em;
    text-align:center;
`

export const ParagraphDiseño = styled.p`
    font-size :1.2em;
    color:#fff;
`

export const ContainerImgDiseño = styled.div`
    width:40%;
    height:80%;
    position:absolute;
    background:#567;
    top:10em;
    left:15%;
    transform: rotate(0.9turn);
    border-radius:10em;
    @media screen and (max-width:968px){
        transform:rotate(1turn);
        border-radius:0px;
        width:100%;
        height:100%;
        left:0px;
        top:40%;
    }
    @media screen and (max-width:600px){
        transform:rotate(1turn);
        border-radius:0px;
        width:100%;
        height:60%;
        left:0px;
        top:40%;
    }
`

export const ImgDiseño = styled.img`
    width:100%;
    height:100%;
    border-radius:10em;
    @media screen and (max-width:968px){
        border-radius:0px;
        
    }

`



