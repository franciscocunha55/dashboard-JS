import {
    FETCH_LABACTIVOS_SUCESS, FETCH_LABACTIVOS_REQUEST, FETCH_LABACTIVOS_FAILURE
} from "../actions"
import axios from "axios";

export const fetchLab_Activo_request =()=>{
    return{
        type:FETCH_LABACTIVOS_REQUEST,

    }
}

export const fetchLab_Activo_failure =(error)=>{
    return{
        type:FETCH_LABACTIVOS_FAILURE,
        payload:error
    }
}

export const fetchLab_Activo_sucess = () =>{
    return(dispatch)=>{
        dispatch({type:"FETCH_LABACTIVOS_REQUEST"});
        return axios.get("/app/lab_activos")
            .then((response)=>{
                dispatch({type:"FETCH_LABACTIVOS_SUCESS",payload:response.data})
            })
            .catch((error)=>{
                dispatch({type:"FETCH_LABACTIVOS_FAILURE",payload:error})
            })
    }
}