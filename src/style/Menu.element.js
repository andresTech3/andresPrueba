import styled from 'styled-components';


export const NavabarContainer = styled.div`
    width : 100%;
    height : 80px ;
    position : sticky;
    top : 0;
    z-index : 99;
    background-color : #181818;
    z-index:99999;
`;

export const NavbarWrapper = styled.div`
    margin : auto;
    width : 100%;
    max-width: 1300px;
    height : 100%;
    align-items :center;
    display : flex;
    flex-wrap:wrap;
    justify-content : space-between;
`;

export const IconLogo = styled.div`
    display:flex;
    flex-wrap : wrap;
    justify-content: flex-start;
    font-family:"Oswald";
    font-size : 1.2em;
    color:#fff;
`;

export const MenuUl = styled.ul`
    height : 100%;
    display : flex;
    justify-content:center;
    align-items :center;
    @media screen and (max-width:968px){
        width:100%;
        height:90vh;
        position:absolute;
        top:80px;
        left:${({modal})=> modal ? 0 : "-100%"};
        flex-direction:column;
        transition:0.5s all ease-in;
        background:#181818;
    }
`;

export const MenuItem = styled.li`
    height :100%;
    padding:0.5rem 1.5rem;
    display : flex;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    font-family:"Oswald";
    font-weight: 400;
    &:hover{
        background:#08fdd8;
        border-bottom: 0.3rem solid #fff;
        transition:0.4s ease-in;
    }

    
    @media screen and (max-width:968px){
            width : 100%;
            height:80px;
        }
    

    
`;

export const MenuItemLink = styled.a`
    text-decoration : none;
    color:#aaa;
    &:hover{
        color:#000;
        transition:0.4s ;
    }
`;

export const IconLogoMobile = styled.div`
    display :none;

    @media screen and (max-width:968px){
        display : flex;
        color:#fff;
        font-size:2rem;
    }
`;

export const LinkUrl = styled.a`
    text-decoration :none;
`
