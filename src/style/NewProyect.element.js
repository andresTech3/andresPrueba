import styled from 'styled-components';

export const ContainerProyectItems = styled.div`
    width:100%;
    display :flex;
    flex-direction : row;
    flex-wrap:wrap;
`
export const ProyectCont = styled.div`
    width:20%;
    height:40vh;
    margin:2em 0px;
    display :flex;
    justify-content:center;
    align-items :center;
    position:relative;
    opacity:0.6;
    &:hover{
        opacity:1;
    }

    @media screen and (max-width:968px){
        width : 100%;
        height:50%;
    }
`

export const ImgProyect = styled.img`
    display :absolute;
    width:100%;
    height:100%;
`

export const ModalProyect = styled.div`
    display:flex;
    justify-content:center;
    align-items :center;
    position:absolute;
    opacity :0;
    z-index:999;
    width:100%;
    height:100%;
    background: transparent;
    color:#111;
    transition :all 500ms cubic-bezier(.17,.67,.91,.17);
    &:hover{
        opacity :1;
    }
`

export const ModalVisible = styled.a`
    width:50%;
    height:50%;
    padding:1em;
    text-align:center;
    background:#08fdd8;
    border-radius: 100%;
    display:flex;
    justify-content:center;
    align-items :center;
    text-decoration:none;
    color:#111;
`


