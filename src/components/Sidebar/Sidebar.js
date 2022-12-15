import { Drawer, IconButton, List } from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon, BorderAll as TableIcon, FilterNone as UIElementsIcon, FormatSize as TypographyIcon, Home as HomeIcon,
  NotificationsNone as NotificationsIcon
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// components
import Dot from "./components/Dot";
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  toggleSidebar, useLayoutDispatch, useLayoutState
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Inicio", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Tela1",
    link: "/app/pagina1",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "pagina2", link: "/app/pagina2", icon: <TableIcon /> },
  {
    id: 3,
    label: "Tela3",
    link: "/app/pagina3",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "Tela4 dropdown",
    link: "/app/pagina4",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
  { id: 5, type: "divider" },
 /*  { id: 6, type: "title", label: "Informação" },
  { id: 7, label: "Tela5", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  { id: 8, label: "Tela6", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  { id: 9, label: "Tela7", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 10, type: "divider" }, */
  { id: 11, type: "title", label: "Informação 2" },
  {
    id: 12,
    label: "Botao1",
    link: "",
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 13,
    label: "Botao2",
    link: "",
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: "Botao3",
    link: "",
    icon: <Dot size="small" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
