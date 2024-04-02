import React from "react";
import {useState, useEffect} from "react";
import {Outlet, Link} from "react-router-dom";
import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import screenSizeState from "stores/ScreenSizeState.js";
import OpenedLeftMenu from "components/OpenedLeftMenu.js";
import NavBar from "components/NavBar.js";
import HorizontalPlayer from "components/HorizontalPlayer.js";

import "css/AppLayout.css";

import {ReactComponent as BackArrowIcon} from "material/icons/back_arrow_btn_icon.svg";
import {ReactComponent as ClosedMenuIcon} from "material/icons/three_line_menu_icon.svg";

function AppLayout() 
{

  const [isMenuOpened, setMenuOpened] = useState(true);
  const [isHorizontalPlayerOpened, setHorizontalPlayerOpened] = useState(false);

  const isHorizontalPlayerRender = ()=>{
    return !isOpenedMenuRender() 
      || isHorizontalPlayerOpened 
      || !screenSizeState.isDesktopHeightSize;
  }

  const isOpenedMenuRender = ()=>{
    return isMenuOpened && screenSizeState.isDesktopWidthSize;
  }

  const handleVerticalPlayerSwitch = (isVerticalPlayerOpened)=>{
    setHorizontalPlayerOpened(!isVerticalPlayerOpened);
  }

  const leftMenuSwitchClick = (event)=>{
    setMenuOpened(!isMenuOpened);
  }

  const styleVariables = {
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

    "--app-menu-font": "24px",
    "--app-left-menu-width": (isOpenedMenuRender() ? 
      "var(--app-left-menu-opened-width)" : "var(--app-left-menu-closed-width)"),
  }

  return (
    <div className = "app-area-wrapper" style = {styleVariables}>
      {
        screenSizeState.isDesktopWidthSize &&
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
      }
      <div className = "app-header"></div>
      <div className = "main-area">
        {
        !screenSizeState.isMobileWidthSize &&
          <div className = "left-menu-area">
            { 
              isOpenedMenuRender() ?
                <OpenedLeftMenu fontSize = {styleVariables["--app-menu-font"]}
                  handleVerticalPlayerSwitch = {handleVerticalPlayerSwitch}
                  isVerticalPlayerOpened = {!isHorizontalPlayerOpened}/>
                :
                <NavBar/>
            }
          </div>
        }
        <div className = "router-area">
          <Outlet/>
        </div>
      </div>
      {
        isHorizontalPlayerRender() &&
          <div className = "horizontal-player-wrapper">
            <HorizontalPlayer/>
          </div>
      }
    </div>
  );
}

export default observer(AppLayout);