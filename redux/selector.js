
export const getHL7_tables=(store)=>(store && store.reducer_hl7_recebe && store.reducer_hl7_recebe.data) ? store.reducer_hl7_recebe.data : [];
export const getHL7_Recebe_table=(store)=>(store && store.reducer_hl7_envia && store.reducer_hl7_envia.data) ? store.reducer_hl7_envia.data : [];
export const getLAB_Activo_table=(store)=>(store && store.reducer_lab_activo && store.reducer_lab_activo.data) ? store.reducer_lab_activo.data : [];
export const getParamet_table=(store)=>(store && store.reducer_parametrizacao && store.reducer_parametrizacao.data) ? store.reducer_parametrizacao.data : [];