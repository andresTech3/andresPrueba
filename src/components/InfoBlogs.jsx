import React from 'react'

import andres from "../assets/image/andres.jpg"
import {ContainerInfo, ImgInfo,TitleInfo,ContainerInfoTags, TagsInfo, HrInfo} from "../style/InfoBlogs.element.js"
import Redsocial from './RedSocial'

function InfoBlogs() {
  return (
    <>
        <ContainerInfo>
            <ImgInfo src = {andres}  />
            <ContainerInfoTags>
                <TitleInfo>Andres Narvaez</TitleInfo>
                <TagsInfo href='https://twitter.com/Andres_Tech3'>AndresTech</TagsInfo>
            </ContainerInfoTags>
        </ContainerInfo>
        <HrInfo/>

        <p>Ultimo blog</p>
        <br />
        <TagsInfo href="/metodologia-basica-js">Metodologia para aprender JavaScript Basica</TagsInfo>
        <br />
        <Redsocial/>
    </>
  )
}

export default InfoBlogs