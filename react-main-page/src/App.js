import React from "react";
import {useState} from "react";
import "./App.css";
import Playlist from "components/Playlist.js";
import OpenedLeftMenu from "components/OpenedLeftMenu.js";
import ClosedLeftMenu from "components/ClosedLeftMenu.js";

import {ReactComponent as BackArrowIcon} from "material/icons/buttons/back_arrow_btn_icon.svg";
import {DEMO_PAGE_DATA} from "helpers/PlayerConstants.js"; 

function App() {

  const [isMenuOpened, setMenuOpened] = useState(true);

  const leftMenuSwitchClick = (event)=>{
    setMenuOpened(!isMenuOpened);
  }

  const appColorTheme = {
    "--app-primary-background-color": "#303030",
    "--app-secondary-background-color": "#2D2D2D",
    "--app-header-color": "#404040",
    "--app-blank-background-color": "#1E1E1E",
    
    "--app-primary-icon-color": "#ffffff",
    "--app-secondary-icon-color": "#000000",

    "--app-primary-text-color": "#ffffff",
    "--app-secondary-text-color": "#808080",

    "--app-light-select-color": "#505050",
    "--app-dark-select-color": "#2A2A2A",
  } 

  const playlistColorTheme = {
    audiolistColor: appColorTheme["--app-secondary-background-color"],
    playlistColor: appColorTheme["--app-primary-background-color"],
  }

  const leftMenuColorTheme = {
    playerColor: appColorTheme["--app-secondary-background-color"],
    menuColor: appColorTheme["--app-primary-background-color"],
    menuHoverColor: appColorTheme["--app-light-select-color"],
  }

  return (
    <div className = "app-area-wrapper" style = {appColorTheme}>
      <div className = "left-menu-switch-wrapper">
        <div className = "left-menu-switch" onClick = {leftMenuSwitchClick}>
          <div className = "arrow-icon-wrapper">
            <BackArrowIcon/>
          </div>
        </div>
      </div>
      <div className = "app-header"></div>
      <div className = "main-area">
        <div className = "left-menu-area">
          { 
            isMenuOpened ?
              <OpenedLeftMenu colorTheme = {leftMenuColorTheme}/>
              :
              <ClosedLeftMenu colorTheme = {leftMenuColorTheme}/>
          }
        </div>
        <div className = "router-area">
          <div className = "playlist-wrapper">
            <Playlist audios = {DEMO_PAGE_DATA.audios} 
             playlistInfo = {DEMO_PAGE_DATA.playlistInfo}
             colorTheme = {playlistColorTheme}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
