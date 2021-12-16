import {
    FETCH_PARAMET_FAILURE,
    FETCH_PARAMET_REQUEST,
    FETCH_PARAMET_SUCESS
} from "../actions";


const initialState = {
    loading:false,
    data:[],
    error:''
}

const Paramet_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_PARAMET_REQUEST:
            return{
                ...state,
                loading:true,
                data: []

            }
        case FETCH_PARAMET_SUCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case FETCH_PARAMET_FAILURE:
            return{
                ...state,
                loading:false,
                error:'erro',
                data: []
            }
        default: // need this for default case
            return state
    }

}

export default Paramet_Reducer