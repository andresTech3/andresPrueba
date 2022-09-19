import React,{useState} from 'react'
import { ContainerFormItems, DescForm, InputForm, InputFormButtom, TitleForm } from '../style/Form.element'

// import appAndresTech from "../credenciales";
import {getFirestore, collection,addDoc } from "firebase/firestore"
import app from "../lib/firebase"

const db = getFirestore(app);

function Form() {

    const valorInicial = {
        title : "",
        email : ""
    }

    const [formData, setFormData] = useState(valorInicial);

    const changeHandle = e => {
        const {name, value} = e.target;
        setFormData({...formData,[name] : value })
    }

    const handleSaveData = async (e) =>{
        e.preventDefault();
        try {
            if(formData.title !== "" && formData.email !== ""){
                await addDoc(collection(db,"Usuarios"), {
                    ...formData
                })
                alert ("Formulario enviado correctamente")
            }else{
                alert ("Rellene los formularios")
            }
        } catch (error) {
            console.log("conexion fallida con la BD", error)
        }
        setFormData({...valorInicial})
    }

    
    
    return (
        <>
            <ContainerFormItems onSubmit={handleSaveData}>
                <TitleForm>Formulario</TitleForm>
                <DescForm>Mantente siempre atento a los nuevos Blogs, Diseños y mas</DescForm>
                <InputForm placeholder='Nombre Completo' name= "title" type="text" onChange={changeHandle} value={formData.title}/>
                <InputForm placeholder='Email Valido'  name='email' type="email" onChange={changeHandle} value ={formData.email}/>
                <InputFormButtom type="submit" value="Enviar"/>
            </ContainerFormItems>
        </>
    )
}

export default Form