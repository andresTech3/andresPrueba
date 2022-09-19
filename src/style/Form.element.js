import styled from 'styled-components'

export const ContainerFormItems = styled.form`
    width:95%;
    padding:1em 2em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items :center;
    margin:auto;
    background:#101010;
    border:1px solid #08fdd8;
`
export const TitleForm = styled.h2`
    color:#08fdd8;
    font-size:3em;
    text-align:center;
    margin:10px 0px;
`
export const DescForm = styled.p`
    font-size :1.2;
    text-align:center;
    color:#fff;
    margin:10px 0px;
`

export const InputForm = styled.input`
    width:50%;
    padding:1em;
    background:#222;
    border:none;
    outline:none;
    border-bottom:2px solid #08fdd8;
    color:#fff;
    margin:5px 0px;
`
export const InputFormButtom = styled.input`
    width:25%;
    padding:1em;
    background:#222;
    border:none;
    outline:none;
    border:2px solid #08fdd8;
    color:#fff;
    margin:5px 0px;
    transition:500ms ease-in;
    cursor:pointer;
    &:hover{
        background:#08fdd8;
        color:#000;
        transition:500ms ease-in;
    }
`

export const ValidateForm = styled.div`
    width: 25%;
    height:25vh;
    margin:10px 0px;
    background:${props => props.background};
    padding:1em;
    font-size :1.3em;
`