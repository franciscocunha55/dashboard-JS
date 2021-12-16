import React, {useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";


// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import {getH, getLAB_Activo_table} from "../../redux/selector";
import {useDispatch, useSelector} from "react-redux";
import {fetchHL7Recebe_sucess} from "../../redux/actions/action_hl7_recebe";
import {fetchLab_Activo_sucess} from "../../redux/actions/action_lab_activos";



const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

export default function LABActivos_Table() {

    const dispatch = useDispatch()
    const items = useSelector(getLAB_Activo_table)
    const classes = useStyles();

    useEffect(()=>{
        dispatch(fetchLab_Activo_sucess())
    },[dispatch])

    const datatableData =
        items.map((item)=>(
            [item[0],item[1],item[2],item[3],item[4]]
        ))

    return (
        <>
            <PageTitle title="Tabela LAB Activos" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        data={datatableData}
                        columns={["NOME", "CODI", "DATA1", "DURAÇÃO","ACTIVO"]}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}
