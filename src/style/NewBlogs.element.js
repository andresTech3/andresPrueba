import styled from 'styled-components'

export const ContentDataBlog = styled.div`
    width:26%;
    min-width:26%;
    margin:0.6em;
    padding:2em;
    box-shadow:2px 2px 10px 0px #000;
    border-top: 10px solid ${props => props.primary};
    @media screen and (max-width:968px){
        width : 100%;
    }
`;



export const TextCategoriaBlogs = styled.h3`
    color:${props => props.primary};
    margin:0.6em 0px;
`;

export const TextBlogs = styled.a`
    color:#fff;
    text-decoration:none;
    font-size:1.5em;
    margin:0.6em 0px;
    &:hover{
        color:#08dff0;
        cursor:pointer;
    }
`;

export const DescBlogs = styled.p`
    color:#ddd;
    margin:0.6em 0px;
`

export const ImgBlogs = styled.img`
    width:100%;
    height:auto;
`

