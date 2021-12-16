import {
    UPDATE_PARAMET_FAILURE,
    UPDATE_PARAMET_REQUEST,
    UPDATE_PARAMET_SUCESS
} from "../actions";

import axios from "axios";

export const updateParamet_request = () => {
    return{
        type:UPDATE_PARAMET_REQUEST
    }
}

export const updateParamet_failure=(error) => {
    return{
        type:UPDATE_PARAMET_FAILURE,
        payload:error
    }
}

export const updateParamet_sucess = (newState,newName) => {

    return (dispatch) => {
        dispatch({type: "UPDATE_PARAMET_REQUEST"});
        console.log('entrei')
        axios({method: "post", url: "/app/parametrizacoes/", headers: {'Content-Type': 'application/json'}, data: {
                'state': newState,
                'name': newName
            },})
            .then(() => {
                console.log('entrei222')
                dispatch({type: "UPDATE_PARAMET_SUCESS"})
                //console.log('entrei222')
                console.log(newState, newName)
            })
            .catch((error) => {
                dispatch({type: "UPDATE_PARAMET_FAILURE", payload: error})
            })
    }
}
/*
    axios.post("/app/parametrizacoes/", JSON.stringify(data))
        .then((response)=>{
            dispatch({type:"UPDATE_PARAMET_SUCESS"})
            console.log('entrei222')
            console.log(newState, newName)
        })
        .catch((error)=>{
            dispatch({type:"UPDATE_PARAMET_FAILURE",payload:error})
        })

 */