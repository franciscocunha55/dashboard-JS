import{
    FETCH_HL7ENVIA_REQUEST,FETCH_HL7ENVIA_SUCESS,FETCH_HL7ENVIA_FAILURE
} from "../actions"

const initialState = {
    loading:false,
    data:[],
    error:''
}


const HL7Envia_Reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_HL7ENVIA_REQUEST:
            return{
                ...state,
                loading:true,
                data: []

            }
        case FETCH_HL7ENVIA_SUCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case FETCH_HL7ENVIA_FAILURE:
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

export default HL7Envia_Reducer