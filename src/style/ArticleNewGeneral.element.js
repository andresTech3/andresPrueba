import styled from 'styled-components'

export const ContainerBlogs = styled.div`
    width:100%;
    padding:2em;
`;
export const FechaBlogs = styled.h4`
    opacity : 0.8;
    text-align:center;
`;

export const TitleBlogs = styled.h1`
    text-align :center;
    font-size:4em;
`;

export const HrBlogs = styled.hr`
    width:75%;
    opacity :0.6;
    margin:0px auto;

`;

export const ContainerInfoBlogs = styled.div`
    display :flex;
    justify-content:center;
    @media screen and (max-width: 960px){
        flex-direction:column;
    }
`;

export const ContainerGenericoBlogs = styled.div`
    width:30%;
    padding:1em 3em;
    text-align :center;
    display:block;
    @media screen and (max-width: 960px){
        width:100%;
        display:none;
    }
`;

export const ContainerInfoPropio = styled.div`
    padding:1em;
    width:70%;
    @media screen and (max-width: 960px){
        width:100%
    }
`
