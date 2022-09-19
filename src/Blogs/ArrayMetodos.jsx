import React from 'react'
import TemplateBlogs from '../template/TemplateBlogs'
// import { LinkExt } from "../style/MetodologiaBasicaJs.element"



import { ContainerImg, ContainerSection, ImgSection, ParrText, SubTitle } from "../style/CreacionBlogs.element"

function ContainerInfo() {
  return (
    <>
      <ParrText>
        Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos
        para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el
        tipo de los elementos de un array son variables.
      </ParrText>
      <SubTitle >CREACION DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText >
          let nombres = ["Marta", "Sofia"] <br />
          console.log(nombres.length) // 2 <br />
          la propiedad Array.length - trae como resultado la cantidad de valores que hay en
          un array
        </ParrText>
      </ContainerSection>

      <SubTitle>HACEDER A UN INDICE EN CONCRETO DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText >
        let primero = nombres[0] <br />
        // Marta 
        let ultimo = nombres[nombres.length - 1] <br />
        // Sofia 
        los array comienzan a contar desde el indixe [0] <br />
        0 1 2 3 4 - posicion array <br/>
        [a,b,c,d,e]
        </ParrText>
      </ContainerSection>
      <SubTitle>RECORRER UN ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText>
          nombres.forEach(function(elemento, indice, array)  <br />
          console.log(elemento, indice);
          ) <br />
          // Marta 0 <br/>
          // Sofia 1
          </ParrText>
      </ContainerSection>
      <SubTitle>AÑADIR ELEMENTO AL FINAL DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText>
        let addNombre = nombre.push('Elena') // Añade "Elena" al final <br />
        // ["Marta", "Sofia", "Elena"]
        </ParrText>
      </ContainerSection>
      <SubTitle>ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText>
        let deleteNombre = nombres.pop() // Elimina "Elena" del final <br />
        // ["Marta", "Sofia"]
        </ParrText>
      </ContainerSection>
      <SubTitle>AÑADIR ELEMENTOS AL PRINCIPIO DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText>
        let addNombrePrincipio = nombres.unshift('Andres') // Añade "Andres" al inicio <br />
        // ["Andres" ,"Marta", "Sofia"]
        </ParrText>
      </ContainerSection>
      <SubTitle>ELEMINAR EL PRIMER ELEMENTO DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText>
        let primero = nombres.shift() // Elimina "Andres" del inicio <br />
        // ["Marta", "Sofia"]
        </ParrText>
      </ContainerSection>
      <SubTitle>ENCONTRAR EL INDIXE DE UN ELEMENTO DEL ARRAY</SubTitle>
      <ContainerSection background={"#019771"} color ={"#fff"} >
        <ParrText>
        nombres.push('Mariano') <br />
        // ["Marta", "Sofia", "Mariano"]
        let nom = nombres.indexOf('Mariano') // con indexOf encontramos el indice deseado <br />
        // 2
        </ParrText>
      </ContainerSection>

      <ContainerImg width={"100%"} height={"20%"}>
        <ImgSection src="https://www.ceupe.com/images/easyblog_articles/2459/la-programacin.jpg" opacity ={"0.5"} width={"100%"} height={"auto"} zIndex ={"-9"}/>
        <SubTitle textAlign = {"Center"}>Array y sus metodos</SubTitle>
      </ContainerImg>
    </>

  )
}

function ArrayMetodos() {

  

  return (
    <>
      <TemplateBlogs
        titleBlogs={"Array y sus metodos"}
        categoriaBlogs={"javascript"}
        Children={<ContainerInfo />}
      />
    </>
  )
}

export default ArrayMetodos