import{
    FETCH_HL7ENVIA_REQUEST,FETCH_HL7ENVIA_SUCESS,FETCH_HL7ENVIA_FAILURE
} from "../actions"
import axios from "axios";

export const fetchHL7Envia_request =()=>{
    return{
        type:FETCH_HL7ENVIA_REQUEST,

    }
}

export const fetchHL7Envia_failure =(error)=>{
    return{
        type:FETCH_HL7ENVIA_FAILURE,
        payload:error
    }
}

export const fetchHL7Envia_sucess = () =>{
    return(dispatch)=>{
        dispatch({type:"FETCH_HL7ENVIA_REQUEST"});
        return axios.get("/app/hl7_envia")
            .then((response)=>{
                dispatch({type:"FETCH_HL7ENVIA_SUCESS",payload:response.data})
            })
            .catch((error)=>{
                dispatch({type:"FETCH_HL7ENVIA_FAILURE",payload:error})
            })
    }
}