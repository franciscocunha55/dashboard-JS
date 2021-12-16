import {
    UPDATE_PARAMET_FAILURE,
    UPDATE_PARAMET_REQUEST,
    UPDATE_PARAMET_SUCESS
} from "../actions";


const initialState = {
    loading:false,
    data:[],
    error:''
}

const update_Paramet_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_PARAMET_REQUEST:
            return{
                ...state,
                loading:true,
                data: []

            }
        case UPDATE_PARAMET_SUCESS:
            return {
                ...state,
                loading:false,
                message:'Alteracao concluida com sucesso'
            }
        case UPDATE_PARAMET_FAILURE:
            return{
                ...state,
                loading:false,
                error:'erro',
            }
        default: // need this for default case
            return state
    }

}

export default update_Paramet_Reducer