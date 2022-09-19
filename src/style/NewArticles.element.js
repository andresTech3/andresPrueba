import styled from 'styled-components'

export const ContainerNewArticle = styled.div`
    width:100%;
    padding:0px 15%;
    display : flex;
    margin:1em 0px;
    @media screen and (max-width: 960px){
        flex-direction:column;
        padding:0px 20px;
    }
`;

export const ContainerData = styled.div`
    width:30%;
    @media screen and (max-width: 960px){
        width:100%
        margin:0.9em 0px;
    }
`;
export const DataArticle = styled.h3`
    opacity :0.8;

`;


export const ContainerFetch = styled.div`
    width:70%;
    @media screen and (max-width: 960px){
        width:100%
    }
`;

export const LinkArticle = styled.a`
    text-decoration : none;
    color:#ddd;
    font-size:2em;

    &:hover{
        text-decoration :underline;
    }
`



