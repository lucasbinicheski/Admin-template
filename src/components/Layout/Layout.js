import { Box } from '@material-ui/core';
import classnames from "classnames";
import React from "react";
import {
  Redirect, Route,
  Switch, withRouter
} from "react-router-dom";

//icons

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Charts from "../../pages/charts";
import Dashboard from "../../pages/dashboard/Dashboard";
import Icons from "../../pages/icons/Icons";
import Maps from "../../pages/maps/Maps";

// context
import { useLayoutState } from "../../context/LayoutContext";
import Pagina1 from "../../pages/Pagina1/Pagina1";
import Pagina2 from '../../pages/Pagina2/Pagina2';
import Pagina3 from '../Pagina3/Pagina3';

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
              <Route path="/app/pagina1" component={Pagina1} />
              <Route path="/app/pagina2" component={Pagina2} />
              <Route path="/app/pagina3" component={Pagina3} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              
              {/* <div>
                <Link
                  href={'https://www.facebook.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="facebook">
                    <Icon
                      path={FacebookIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://twitter.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="twitter">
                    <Icon
                      path={TwitterIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://github.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton
                    aria-label="github"
                    style={{marginRight: -12}}
                  >
                    <Icon
                      path={GithubIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
              </div> */}
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
