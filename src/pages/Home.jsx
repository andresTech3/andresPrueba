import React from 'react'
import Header from '../containers/Header';
import ContainerProyect from '../containers/ContainerProyect'
import ContainerPasionTech from '../containers/ContainerPasionTech';
import ContainerHeaderBlogs from '../containers/ContainerHeaderBlogs';
import ContainerCanal from '../containers/ContainerCanal';
import Form from '../components/Form';
// import ContainerPost from '../containers/ContainerPost';

function Home() {
  return (
    <div>
        <Header/>
        {/* <ContainerPost/> */}
        <ContainerProyect/>
        <ContainerPasionTech/>
        <ContainerHeaderBlogs/>
        <ContainerCanal/>
        <Form/>
    </div>
  )
}

export default Home