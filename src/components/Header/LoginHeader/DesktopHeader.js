import { Box, Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useStyle from "./styles";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { useTheme } from "@emotion/react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

function LoginDesktopHeader({ title, showIcon, showCart = false }) {
  const { t } = useTranslation();
  const classes = useStyle();
  const theme = useTheme();
  const location = useLocation();

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("enatega-language", lang);
  };

  return (
    <AppBar elevation={0} position="fixed">
      <Toolbar className={classes.toolbar}>
        <RouterLink
          to={location.pathname === "/checkout" ? "/restaurant-list" : "/"}
          className={classes.linkDecoration}
        >
          <Logo height={37} width={169} />
        </RouterLink>
        <Box className={classes.flex}>
          <Select
            value={i18n.language}
            onChange={handleLanguageChange}
            variant="standard"
            className={classes.languageSelect}
            sx={{
              "& .MuiMenuItem-root:hover": {
                color: "black",
              },
            }}
          >
            <MenuItem
              sx={{
                backgroundColor: "#8BC34A",
                "&:hover": {
                  color: "black",
                },
              }}
              value="en"
            >
              English
            </MenuItem>
            <MenuItem
              sx={{
                backgroundColor: "#8BC34A",
                "&:hover": {
                  color: "black",
                },
              }}
              value="ar"
            >
              عربي
            </MenuItem>
          </Select>
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
