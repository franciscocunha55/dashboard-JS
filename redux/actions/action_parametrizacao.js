import {
    FETCH_PARAMET_FAILURE,
    FETCH_PARAMET_REQUEST,
    FETCH_PARAMET_SUCESS
} from "../actions";

import axios from "axios";

export const fetchParamet_request = () => {
    return{
        type:FETCH_PARAMET_REQUEST
    }
}

export const fetchParamet_failure=(error) => {
    return{
        type:FETCH_PARAMET_FAILURE,
        payload:error
    }
}

export const fetchParamet_sucess = () =>{
    return(dispatch)=>{
        dispatch({type:"FETCH_PARAMET_REQUEST"});
        return axios.get("/app/parametrizacoes")
            .then((response)=>{
                dispatch({type:"FETCH_PARAMET_SUCESS",payload:response.data})
            })
            .catch((error)=>{
                dispatch({type:"FETCH_PARAMET_FAILURE",payload:error})
            })
    }
}