import React from 'react';
import { ContainerBlogsItems, ContainerItemsNewBlogs, TextProyectBlogs, LinkAllBlogs } from '../style/ContainerHeaderBlogs.element'
import NewBlogsHome from "../components/NewBlogsHome"
import useGetNewBlogs from '../hook/useGetNewBlogs';

function ContainerHeaderBlogs() {
  const {
    dataBlogs
  } = useGetNewBlogs();

  return (
    <>
        <ContainerBlogsItems>
          <TextProyectBlogs>New Blogs </TextProyectBlogs>
          <ContainerItemsNewBlogs>
            <NewBlogsHome
              blogsNew = {dataBlogs}
            />
          </ContainerItemsNewBlogs>
          <LinkAllBlogs href={"/Blogs"}>Todos los Blogs...</LinkAllBlogs>
        </ContainerBlogsItems>
    </>
  )
}

export default ContainerHeaderBlogs