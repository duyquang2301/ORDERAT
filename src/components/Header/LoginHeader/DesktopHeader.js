import { Box, Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useStyle from "./styles";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { useTheme } from "@emotion/react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";
import { Subheader } from "../../RestaurantComponent";
import LanguageToggle from "../../Language/LanguageToggle";

function LoginDesktopHeader({ title, showIcon, showCart = false }) {
  const { t } = useTranslation();
  const classes = useStyle();
  const theme = useTheme();
  const location = useLocation();

  return (
    <AppBar elevation={0} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box sx={{ display: "flex", justifyContent: "start", gap: 1 }}>
          <RouterLink
            to={location.pathname === "/checkout" ? "/restaurant-list" : "/"}
            className={classes.linkDecoration}
          >
            <Logo height={37} width={169} />
          </RouterLink>
          <Subheader />
        </Box>
        <Box className={classes.flex}>
          <LanguageToggle classes={classes} />
          {showIcon && (
            <>
              <Divider flexItem orientation="vertical" light />
              <RouterLink to={"/login"} className={classes.linkDecoration}>
                <Button aria-controls="simple-menu" aria-haspopup="true">
                  <PersonIcon style={{ color: theme.palette.common.black }} />
                  <Typography
                    variant="button"
                    color="textSecondary"
                    className={`${classes.ml} ${classes.font700}`}
                  >
                    {t("loginBtn")}
                  </Typography>
                </Button>
              </RouterLink>
              <Divider flexItem orientation="vertical" light />
            </>
          )}
          {showCart && (
            <Box style={{ alignSelf: "center" }}>
              <RouterLink to="/" className={classes.linkDecoration}>
                <Button>
                  <LocalMallIcon
                    style={{ color: theme.palette.common.black }}
                  />
                </Button>
              </RouterLink>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(LoginDesktopHeader);
