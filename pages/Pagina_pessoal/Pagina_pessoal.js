import React, { useState } from "react";
import "./pagina_pessoal.css"
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import * as Icons from "@material-ui/icons";

// styles
import useStyles from "./styles";

import avatar from "./51f6fb256629fc755b8870c801092942.png"

// components
import PageTitle from "../../components/PageTitle/PageTitle";

import "font-awesome/css/font-awesome.min.css";

export default function Pagina_pessoal () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  var classes = useStyles();

  // local
  var [activeTabId, setActiveTabId] = useState(0);

  return (
  <>
    <div style={{marginRight:'690px'}}>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>

    <Paper className={classes.iconsContainer}>
      <div className="wrapper bg-white mt-sm-5">
        <h4 className="pb-4 border-bottom">Definições de Conta</h4>
        <div className="d-flex align-items-start py-3 border-bottom"><img
            src={avatar}
            className="img" alt="avatar"/>
          <div className="pl-sm-4 pl-2" id="img-section"><b>Foto de Perfil</b>
            <p>Aceita ficheiros .jpg ,  .png. Menores de 1MB</p>
            <button className="btn button border"><b>Upload</b></button>
          </div>
        </div>
        <div className="py-2">
          <div className="row py-2">
            <div className="col-md-6"><label htmlFor="firstname">Primeiro Nome</label> <input type="text"
                                                                                           className="bg-light form-control"
                                                                                           placeholder="Mário"/></div>
            <div className="col-md-6 pt-md-0 pt-3"><label htmlFor="lastname">Ultimo Nome</label> <input type="text"
                                                                                                      className="bg-light form-control"
                                                                                                      placeholder="Pinto"/>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-6"><label htmlFor="email">Endereço de Mail</label> <input type="text"
                                                                                          className="bg-light form-control"
                                                                                          placeholder="mariopinto@gmail.com"/>
            </div>
            <div className="col-md-6 pt-md-0 pt-3"><label htmlFor="phone">Número de telemóvel</label> <input type="tel"
                                                                                                      className="bg-light form-control"
                                                                                                      placeholder="+351 944 444 444 " />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-6"><label htmlFor="country">País</label> <select name="country" id="country"
                                                                                       className="bg-light">
              <option value="india" selected>Portugal</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="uae">UAE</option>
            </select></div>
            <div className="col-md-6 pt-md-0 pt-3" id="lang"><label htmlFor="language">Linguagem</label>
              <div className="arrow"><select name="language" id="language" className="bg-light">
                <option value="portuguese" selected>Português </option>
                <option value="english_us">English (United States)</option>
                <option value="enguk">English UK</option>
              </select></div>
            </div>
          </div>
          <div style={{marginLeft:'110px'}}>
          <div className="py-3 pb-4 ">
            <button className="btn btn-primary mr-3">Guardar Alterações</button>
            <button className="btn border button">Cancelar</button>
          </div>
          </div>

          <div className="d-sm-flex align-items-center pt-3 border-top" id="deactivate">
            <div><b>Desativar conta</b>

            </div>
            <div className="ml-auto">
              <button className="btn danger">Desativar</button>
            </div>
          </div>
        </div>
      </div>

          </Paper>
    </div>
  </>
);}
