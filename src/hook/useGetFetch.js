// import axios from 'axios'
import {useEffect,useState} from 'react';

const useGetFetch = (API,req) =>{
    const [post, setPost] = useState([]);

    const dataApi= async ()=>{
        try {
            const dataBD = await fetch(API);
            const jsonData = await dataBD.json()
            const concatData = await jsonData[req]
            const apiData = await concatData;
            setPost(apiData)
        } catch (error) {
            console.log("no hubo conexion", error);
        }
    }

    useEffect(()=>{
        dataApi()
    },[]);

    return post;

}

export default useGetFetch;