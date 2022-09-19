import React from 'react'
import { ContainerProyectItems, ImgProyect, ModalProyect, ModalVisible, ProyectCont } from "../style/NewProyect.element"
import useGetFetch from "../hook/useGetFetch";


// import useGetNewProyect from '../hook/useGetNewProyect.js'


function NewProyect() {
  // const arrProyect = useGetNewProyect();
  const dataBlogs = useGetFetch("https://api-andrestech-blogs.herokuapp.com/blogs","proyects");
  
  return (
    <>
      <ContainerProyectItems>
        {
          dataBlogs.map(itemProyect => (
            <ProyectCont key={itemProyect.id}>
              <ImgProyect src={itemProyect.img} />
              <ModalProyect>
                <ModalVisible href={itemProyect.link}>
                  <h4>Visitar Proyecto</h4>
                </ModalVisible>
              </ModalProyect>
            </ProyectCont>
          ))
        }
      </ContainerProyectItems>
    </>
  )
}

export default NewProyect