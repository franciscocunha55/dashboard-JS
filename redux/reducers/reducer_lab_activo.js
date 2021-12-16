import{
    FETCH_LABACTIVOS_REQUEST, FETCH_LABACTIVOS_FAILURE,FETCH_LABACTIVOS_SUCESS
} from "../actions"

const initialState = {
    loading:false,
    data:[],
    error:''
}


const LAB_Activo_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_LABACTIVOS_REQUEST:
            return{
                ...state,
                loading:true,
                data: []

            }
        case FETCH_LABACTIVOS_SUCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case FETCH_LABACTIVOS_FAILURE:
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

export default LAB_Activo_Reducer