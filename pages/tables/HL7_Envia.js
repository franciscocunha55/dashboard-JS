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
import {getHL7_Recebe_table, getHL7_tables} from "../../redux/selector";
import {useDispatch, useSelector} from "react-redux";
import {fetchHL7Envia_sucess} from "../../redux/actions/action_hl7_envia";



const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))


export default function HL7Envia_Table() {

    const dispatch = useDispatch()
    const items = useSelector(getHL7_Recebe_table)
    const classes = useStyles();

    useEffect(()=>{
        dispatch(fetchHL7Envia_sucess())
    },[dispatch])

    const datatableData =
        items.map((item)=>(
            [item[0],item[1],item[2],item[3],item[4],item[5],item[6],item[7],item[8],item[9],item[10],item[11],item[12],item[13]]
        ))

    return (
        <>
            <PageTitle title="Tabela HL7 Envia" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        data={datatableData}
                        columns={["DESTINO", "MSGID", "EVN", "ORIGEM","DATAENV","DATAACK","IDACK","NOMEFICH","NOMEFICHACK","NUMENVIOS","ERROHL7","EPISODIO","MODULO","NUMEROPEDIDO"]}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}
