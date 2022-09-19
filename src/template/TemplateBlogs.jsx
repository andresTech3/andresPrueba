import React from 'react'
import { CategoriaBlogs, ContainerInfoBlogs, ContainerSection, ContainerTemplateBLogs, LayoutBlogs, SectionBlogsResent, TitleBlogs } from '../style/TemplateBlogs.element'

import useGetNewBlogs from "../hook/useGetNewBlogs.js"

// crea un interpretador de blogs global

function TemplateBlogs({ titleBlogs, categoriaBlogs, Children }) {
    const {
        blogsNew
    } = useGetNewBlogs();

    const arrBlogsNew = blogsNew.slice(0,3)
    return (
        <>
            <ContainerTemplateBLogs>
                <ContainerInfoBlogs>
                    <TitleBlogs>{titleBlogs}</TitleBlogs>
                    <CategoriaBlogs>{categoriaBlogs}</CategoriaBlogs>
                    <hr />
                    <LayoutBlogs>
                        {Children}
                    </LayoutBlogs>
                </ContainerInfoBlogs>
                <ContainerSection>
                        <h1>Blogs Recientes</h1>
                    {
                        arrBlogsNew.map(items => (
                            <SectionBlogsResent key={items.id} href={items.linkBlogs}>{items.title}</SectionBlogsResent>
                        ))
                    }
                </ContainerSection>
            </ContainerTemplateBLogs>
        </>
    )
}

export default TemplateBlogs