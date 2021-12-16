import{
    FETCH_HL7RECEBE_REQUEST,FETCH_HL7RECEBE_SUCESS,FETCH_HL7RECEBE_FAILURE
} from "../actions"
import axios from "axios";

export const fetchHL7Recebe_request =()=>{
    return{
        type:FETCH_HL7RECEBE_REQUEST,

    }
}

export const fetchHL7Recebe_failure =(error)=>{
    return{
        type:FETCH_HL7RECEBE_FAILURE,
        payload:error
    }
}

export const fetchHL7Recebe_sucess = () =>{
    return(dispatch)=>{
        dispatch({type:"FETCH_HL7RECEBE_REQUEST"});
        return axios.get("/app/hl7_recebe")
        .then((response)=>{
            dispatch({type:"FETCH_HL7RECEBE_SUCESS",payload:response.data})
        })
        .catch((error)=>{
            dispatch({type:"FETCH_HL7RECEBE_FAILURE",payload:error})
        })
    }
}