import React from 'react'
import { ContentDataBlog, TextCategoriaBlogs, TextBlogs, DescBlogs, ImgBlogs } from '../style/NewBlogs.element'


function NewBlogs({searchArr}) {
  
  return (
    <>
      {searchArr.map((itemsBlogs) => (
        <ContentDataBlog primary = {itemsBlogs.color} key={itemsBlogs.id}>
          <TextCategoriaBlogs primary = {itemsBlogs.color}>{itemsBlogs.categoria}</TextCategoriaBlogs>
          <TextBlogs href={itemsBlogs.linkBlogs}>{itemsBlogs.title}</TextBlogs>
          <DescBlogs>
            {
              itemsBlogs.descripBlogs.length > 120
              ? itemsBlogs.descripBlogs.slice(0,120) + "..."
              : itemsBlogs.descripBlogs
            }
          </DescBlogs>
          <ImgBlogs src={itemsBlogs.imgBlogs} />
        </ContentDataBlog>
      ))}
    </>
  )
}

export default NewBlogs ;