import styled from 'styled-components';

export const WagonHeader = styled.div`
    position:relative;
    width:100%;
    height:450px;
    margin:0px 0px 8em 0px;
`

export const ImgBg = styled.img`
    position:absolute;
    width:100%;
    height:540px;
    box-sizing:border-box;
    opacity :0.5;
`;

export const TitleGreat = styled.h1`
    font-size : ${props => props.Size};
    position:relative;
    top:150px;
    text-align:center;
    color:#08fdd0;
`

export const DescTitle = styled.p`
    font-size :1.2em;
    position:relative;
    top:150px;
    color :#fff;
    text-align:center;
`

