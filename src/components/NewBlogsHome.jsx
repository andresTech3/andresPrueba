import React from 'react';

import { ContentDataBlog, TextCategoriaBlogs, TextBlogs, DescBlogs, ImgBlogs } from '../style/NewBlogs.element'


function NewBlogsHome({blogsNew}) {
    const arrSlice = blogsNew.slice(0,3);
    return (
        <>
            {
                arrSlice.map((itemsBlogs) => (
                    <ContentDataBlog primary={itemsBlogs.color} key={itemsBlogs.id}>
                        <TextCategoriaBlogs primary={itemsBlogs.color}>{itemsBlogs.categoria}</TextCategoriaBlogs>
                        <TextBlogs href={itemsBlogs.linkBlogs}>{itemsBlogs.title}</TextBlogs>
                        <DescBlogs>{itemsBlogs.descripBlogs}</DescBlogs>
                        <ImgBlogs src={itemsBlogs.imgBlogs} />
                    </ContentDataBlog>
                ))}
        </>
    )
}

export default NewBlogsHome