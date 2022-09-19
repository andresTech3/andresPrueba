import React from 'react'

import { ContanerPost, ImgPost,LinkPost,ModalPost, TitlePost } from "../style/NewPost.element"

function Newpost({post}) {
  return (
    <ContanerPost>
      <ImgPost src={post.urlToImage}/>
      <ModalPost>
        <TitlePost>{post.title}</TitlePost>
        <LinkPost href={post.url}>Ver Mas</LinkPost>
      </ModalPost>
    </ContanerPost>
  )
}



export default Newpost