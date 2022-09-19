import styled from 'styled-components';

export const ContainerBlogsItems = styled.div`
    width:100%;
    text-align:center;
    position:relative;
`;

export const ContainerItemsNewBlogs = styled.div`
    display:flex;
    padding-top:14em;
    justify-content:center;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
`

export const TextProyectBlogs = styled.h2`
    font-size :15em;
    color:#fff;
    position:absolute;
    top:0px;
    left:0px;
    opacity :0.2;
    z-index:-1;
    
`
export const LinkAllBlogs = styled.a`
    text-decoration : none;
    color:#08fdd8;
    font-size:1.2em;
    opacity :1;
    &:hover{
        opacity:0.6;
    }
`