import React,{useState} from 'react'

import styled from 'styled-components'


const InputForm = styled.div`
  width:100%;
  height:50vh;
  max-width:400px;
  padding:10px;
  background:rgba(0, 100, 100 , 1);
`

const InputBlogs = styled.input`
  width:50%;
  display:block;
`
const InputTextarea = styled.textarea`
  width:100%;
  max-width:380px;
  max-height:200px;
  margin-bottom:5px;
`

const InputButton = styled.input`
    display:block;
    padding: 5px 20px;
`



function FormBlogs({addBlogs}) {

  const inicializeState = {
    title : "",
    descripBlogs : "",
    id : "",
    categoria : "",
    color : "",
    imgBlogs : "",
    linkBlogs : "",
  }

  const [state, setState] = useState(inicializeState)

  const handleCaptureInputs = (e) =>{
    const titleValue = e.target.value;
    setState({...state, [e.target.name] : titleValue})
  }


  return (
    <>

      <InputForm >
        <h1>Hola Blogs</h1>

        <InputBlogs type = "text" name='title' placeholder = "Titulo del Blogs"
        onChange={handleCaptureInputs}
        />
        <InputTextarea type = "text" name='descripBlogs' placeholder = "Contenido del blogs"
        onChange={handleCaptureInputs}
        />
        <hr/>
        <input type="number" placeholder='id Blogs' name = 'id' onChange={handleCaptureInputs}/>
        <input type="text" name="categoria" id="" placeholder='Categoria' onChange={handleCaptureInputs} />
        <input type="color" name="color" onChange={handleCaptureInputs}/>
        {/* <input type="file" src="" alt="" /> */}
        <input type="text" name="linkBlogs" id="" placeholder='link blog' onChange={handleCaptureInputs}/>
        <InputButton type="submit" onClick = {()=> addBlogs(state)}/>
      </InputForm>
    </>
  )
}

export default FormBlogs