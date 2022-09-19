import styled from 'styled-components';

export const ContainerNewProyect = styled.div`
    width:100%;
    padding:3em;
    position:relative;
`

export const TextProyectOculto = styled.h2`
    font-size :10em;
    color:#fff;
    position:absolute;
    right:10px;
    top:0;
    opacity :0.2;
    z-index:-1;
`

export const TextProyect = styled.h1`
    font-size :4em;
    color:#08fdd8;
    margin:0px 0px 0.3em 0px;
`

export const DescProyect = styled.p`
    color:#fff;
    font-size:1.3em;
    
`

export const LinkProyectText = styled.a`
    text-decoration : none;
    color:#08fdd8;
    cursor:pointer;
    &:hover{
        text-decoration :underline;
    }
`

