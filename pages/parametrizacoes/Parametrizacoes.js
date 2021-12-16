import React, {useEffect} from "react";
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    FormControlLabel, FormGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";


// components
import PageTitle from "../../components/PageTitle";


// data

import {getLAB_Activo_table, getParamet_table} from "../../redux/selector";
import {useDispatch, useSelector} from "react-redux";

import {fetchParamet_sucess} from "../../redux/actions/action_parametrizacao";
import Button_switch from "./Button_switch";
import {updateParamet_sucess} from "../../redux/actions/action_update_paramet";



const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))



export default function Parametrizacoes() {

    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Nome',

        },
        {
            id: 'status',
            numeric: true,
            disablePadding: false,
            label: 'Inativa/Activa',
        },]

    function Switch_button(props){

        let props_boolean = props.status === 'true'? true : false
        const [ativo, setActivo] = React.useState(
            props_boolean
        )
        console.log(ativo)

        const handleChange = ()=>{
            setActivo(!ativo)
            //dispatch(updateParamet_sucess(ativo,nome))
        }

        const dispatch = useDispatch()
        let nome = props.name
        console.log(nome , ativo )

        useEffect(()=>{
            dispatch(updateParamet_sucess(ativo,nome))
        },[dispatch,ativo])

        return(
            <FormGroup>
                <FormControlLabel
                    control={<Button_switch checked={ativo} onChange={() => handleChange()}  />}
                />
            </FormGroup>
        )
    }


  const dispatch = useDispatch()
  const rows = useSelector(getParamet_table)
  const classes = useStyles();

  useEffect(()=>{
    dispatch(fetchParamet_sucess())
  },[dispatch])




  return (
      <>
      <div style={{marginLeft:'100px'}}>
        <PageTitle title= "Parametrizações"/>
        <Grid container spacing={4}>

              <Grid item xs={8}>
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                      <TableHead>
                          <TableRow>
                              <TableCell align='center'>Nome</TableCell>
                              <TableCell align="center">Inativa/Activa</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {rows.map((row) => {
                              //console.log(row)
                              return(
                                  <TableRow tabIndex={-1} key={row.code} >
                                      {headCells.map((collumn) =>{
                                          const value = row[collumn.id]
                                          //console.log(collumn)

                                          return(
                                              <TableCell key = {collumn.id} align={'center'}>
                                                  {(value === 'true' || value === 'false')  ? <Switch_button  status = {value} name = {row["name"]}/> : value }
                                              </TableCell>

                                          )
                                      })}
                                  </TableRow>

                              )
                          }

                      )}</TableBody>


                  </Table>
              </TableContainer>
          </Grid>
        </Grid>
      </div>
      </>
  );
}

/*

<TableBody>
    {rows.map((row) => (
        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
    ))}
</TableBody>

 */