import styled from 'styled-components'

export const TextPort = styled.h1`
    font-size :3em;
    color:#fff;
    text-align:center;
    margin:1.2em 0px 10px 0px;
`;

export const HrAbout = styled.hr`
    width:75%;
    background:#ccc;
    opacity:0.3;
    margin:auto;
`;

export const ContentInfoAbout = styled.div`
    width:100%;
    display : flex;
    @media screen and (max-width:968px){
        flex-direction:column;
    }
`;
export const PressHeader = styled.div`
    width:50%;
    text-align:center;
    padding:3em;
    @media screen and (max-width:968px){
        width : 100%;
    }
`;

export const ImgHeader = styled.img`
    border-radius: 50%;
    width:40%;
    margin-bottom:10px;
`;

export const PressInfo = styled.div`
    width:50%;
    text-align:justify;
    padding:3em;
    @media screen and (max-width:968px){
        width : 100%;
    }
`;

export const HrLinea = styled.hr`
    box-shadow: 0px 0px 15px 0px #08fdd0 ;
    
`;

