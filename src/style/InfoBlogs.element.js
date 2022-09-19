import styled from 'styled-components';

export const ContainerInfo = styled.div`
    display:flex;
    justify-content:center;
    padding:0px 2em;
    @media screen and (max-width:1188px){
        padding:0px;
    }
    
`;

export const ImgInfo = styled.img`
    width : 20%;
    border-radius:50%;
    
`;

export const ContainerInfoTags = styled.div`
    width:80%;
`;

export const TitleInfo = styled.h4`
    font-size:1.2em;
`

export const TagsInfo = styled.a`
    text-decoration : none;
    color:#29d;
    &:hover{
        text-decoration :underline;
    }
`;

export const HrInfo = styled.hr`
    opacity : 0.6;
    margin:1em 0px;
`