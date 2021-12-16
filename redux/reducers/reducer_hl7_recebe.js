import{
    FETCH_HL7RECEBE_REQUEST,FETCH_HL7RECEBE_SUCESS,FETCH_HL7RECEBE_FAILURE
} from "../actions"

const initialState = {
    loading:false,
    data:[],
    error:''
}


const HL7Recebe_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_HL7RECEBE_REQUEST:
            return{
                ...state,
                loading:true,
                data: []

            }
        case FETCH_HL7RECEBE_SUCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case FETCH_HL7RECEBE_FAILURE:
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

export default HL7Recebe_Reducer