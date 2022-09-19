import styled from 'styled-components';

export const ContainerTemplateBLogs = styled.div`
    width:100%;
    padding:2em;
    display:flex;
`

export const ContainerInfoBlogs = styled.div`
    width:70%;
    padding:1em;
    text-align:justify;
`

export const ContainerSection = styled.div`
    width: 30%;
    padding:1.5em;
    display:flex;
    flex-direction:column;
`

export const TitleBlogs = styled.h1`
    font-size :3em;
    color:#08fdd8;
    margin:10px 0px;
`

export const CategoriaBlogs = styled.p`
    font-size :1em;
    color:#fff;
    opacity:0.7;
    margin:10px 0px;
`
export const LayoutBlogs = styled.div`
    width:100%;
    margin:10px 0px;
`

export const SectionBlogsResent = styled.a`
    text-decoration : none;
    margin:10px 0px;
    font-size:1.1em;
    color:#08fdd8;
    &:hover{
        text-decoration :underline;
        opacity:0.6;
    }
`