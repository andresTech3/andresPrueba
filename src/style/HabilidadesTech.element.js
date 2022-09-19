import styled from 'styled-components';

export const ContainerTechItems = styled.div`
    width:100%;
    text-align:center;
    background:transparent;
    color:#fff;
    border-bottom:5px solid #fff;
    margin-bottom:0.5em;
    position:relative;
`;

export const ModalColorTechItems = styled.div`
    width:${props => props.learning};
    height:100%;
    z-index:-9;
    background:${props => props.col};
    position:absolute;
    top:0px;
    opacity :0.8;
`

export const TextProyectOculto = styled.h2`
    font-size :10em;
    color:#fff;
    position:absolute;
    right:0px;
    bottom:0;
    opacity :0.2;
    z-index:-1;
`