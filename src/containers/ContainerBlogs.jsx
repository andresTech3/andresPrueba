import React from 'react'
import SearchItems from '../components/SearchItems'
import NewBlogs from '../components/NewBlogs'
import FormBlogs from '../components/FormBlogs'
import useGetNewBlogs from '../hook/useGetNewBlogs'
import ModalNewEntryBlogs from '../components/ModalNewEntryBlogs'
import {FaPenFancy} from "react-icons/fa"
import {TiDelete} from "react-icons/ti"
import { ContainerNewBlogs, ContainerBlogsInfo, ContainerRegisterBlogs, TitleCategoriaBlogs,ButtonNewEntryBlog } from '../style/ContainerBlogs.element'


function ContainerBlogs() {
  const {
    search,
    setSearch,
    searchArr,
    modalEntryBlog,
    setModalEntryBlog,
  } = useGetNewBlogs();

  // const handleOpenModal = () =>{
  //   setModalEntryBlog(!modalEntryBlog);
  // }

  return (
    <>
        <ContainerNewBlogs>
            <ContainerRegisterBlogs>
                <TitleCategoriaBlogs>BLOGS</TitleCategoriaBlogs>
                <SearchItems
                  search = {search}
                  setSearch = {setSearch}
                />

                {/* funcionalidad para crear mas blogs */}
                {/* <ModalNewEntryBlogs onModal = {modalEntryBlog}>
                  <FormBlogs addBlogs = {addBlogs}/>
                </ModalNewEntryBlogs> */}
                
                {/* <ButtonNewEntryBlog
                  onClick={handleOpenModal}
                >
                  {modalEntryBlog ? <TiDelete style={{"font-size" : "2em", "transition" : "1s" }}/> : <FaPenFancy/>}
                  
                </ButtonNewEntryBlog> */}
                {/* <LinkCategoriaBlogs>JavaScript</LinkCategoriaBlogs>  */}
                {/* <ContainerForm/> */}
            </ContainerRegisterBlogs>
            <ContainerBlogsInfo>
                <NewBlogs
                  searchArr = {searchArr}
                />
            </ContainerBlogsInfo>
        </ContainerNewBlogs>
    </>
  )
}

export default ContainerBlogs;