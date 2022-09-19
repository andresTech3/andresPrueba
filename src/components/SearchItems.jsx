import React from 'react'

import styled from 'styled-components'
import "../styles/searchItems.css"

const ContainerInputSearch = styled.div`
    position:relative;
    width:100%;
    margin:10px 0px;
`

const InputSearch = styled.input`
    width:100%;
    padding:10px ;
    border:1px solid #08fdd0;
    background:transparent;
    border-radius:5px;
    color:#fff;
    outline:none;
    font-size:1em;
`

const SpanSearch = styled.span`
    position:absolute;
    left:0;
    padding:8px;
    pointer-events:none;
    font-size:1em;
    color:#ccca;
    text-transform:uppercase;
    transition: 0.5s;
`


function SearchItems({search,setSearch}) {

    const handleSearch = (e)=>{
        setSearch(e.target.value);
    }

    return (
        <>
            <ContainerInputSearch className="inputBox">
                <InputSearch
                className='inputSearch'
                type="text"
                onChange={handleSearch}
                value={search}
                />
                <SpanSearch className="spanPlaceHolder">Buscar Blogs</SpanSearch>
            </ContainerInputSearch>
        </>
    )
}

export default SearchItems