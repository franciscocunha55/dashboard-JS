import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Graficos from "../../pages/graficos";


import Tables from "../../pages/tables";
import Icons from "../../pages/parametrizacoes";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

import HL7Envia_Table from "../../pages/tables/HL7_Envia";
import HL7Recebe_Table from "../../pages/tables/HL7_Recebe";
import LABActivos_Table from "../../pages/tables/LAB_Activos";
import Parametrizacoes from "../../pages/parametrizacoes/Parametrizacoes";
import Pagina_pessoal from "../../pages/Pagina_pessoal/Pagina_pessoal";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/graficos" component={Graficos} />
              <Route path="/app/hl7_recebe" component={HL7Recebe_Table} />
              <Route path="/app/hl7_envia" component={HL7Envia_Table} />
              <Route path="/app/lab_activos" component={LABActivos_Table} />
              <Route path="/app/parametrizacoes" component={Parametrizacoes} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/icons" component={Pagina_pessoal} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              <div>


              </div>

            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
