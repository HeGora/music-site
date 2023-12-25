import React from "react";
import {useState} from "react";
import {Outlet, Link} from "react-router-dom";
import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import OpenedLeftMenu from "components/OpenedLeftMenu.js";
import ClosedLeftMenu from "components/ClosedLeftMenu.js";
import "css/AppLayout.css";

import {ReactComponent as BackArrowIcon} from "material/icons/back_arrow_btn_icon.svg";
import {ReactComponent as ClosedMenuIcon} from "material/icons/three_line_menu_icon.svg";

function AppLayout() {

  const [isMenuOpened, setMenuOpened] = useState(false);

  const leftMenuSwitchClick = (event)=>{
    setMenuOpened(!isMenuOpened);
  }

  const appColorTheme = {
    "--app-primary-background-color": colorThemeState.getPrimaryBackgroundColor,
    "--app-secondary-background-color": colorThemeState.getSecondaryBackgroundColor,
    "--app-header-color": colorThemeState.getHeaderColor,
    "--app-blank-background-color": colorThemeState.getBlankBackgroundColor,
    
    "--app-primary-icon-color": colorThemeState.getPrimaryIconColor,
    "--app-secondary-icon-color": colorThemeState.getSecondaryIconColor,

    "--app-primary-text-color": colorThemeState.getPrimaryTextColor,
    "--app-secondary-text-color": colorThemeState.getSecondaryTextColor,

    "--app-light-select-color": colorThemeState.getLightSelectColor,
    "--app-dark-select-color": colorThemeState.getDarkSelectColor,

    "--app-left-menu-width": (isMenuOpened ? "var(--app-left-menu-opened-width)" : "var(--app-left-menu-closed-width)"),
  }

  return (
    <div className = "app-area-wrapper" style = {appColorTheme}>
      <div className = "left-menu-switch-wrapper">
        <div className = "left-menu-switch" onClick = {leftMenuSwitchClick}>
          <div className = "arrow-icon-wrapper">
            { 
              isMenuOpened ?
                <BackArrowIcon/>
                :
                <ClosedMenuIcon/>
            }
          </div>
        </div>
      </div>
      <div className = "app-header"></div>
      <div className = "main-area">
        <div className = "left-menu-area">
          { 
            isMenuOpened ?
              <OpenedLeftMenu/>
              :
              <ClosedLeftMenu/>
          }
        </div>
        <div className = "router-area">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default observer(AppLayout);