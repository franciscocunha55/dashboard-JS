import { combineReducers } from 'redux'
import reducer_hl7_recebe from "./reducer_hl7_recebe";
import reducer_hl7_envia from "./reducer_hl7_envia";
import reducer_lab_activo from "./reducer_lab_activo"
import reducer_parametrizacao from "./reducer_parametrizacao";
import reducer_update_paramet from "./reducer_update_paramet";


export default combineReducers({
    reducer_hl7_recebe, reducer_hl7_envia,reducer_lab_activo, reducer_parametrizacao, reducer_update_paramet
})