import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import Playlist from "components/Playlist.js";
import OpenedLeftMenu from "components/OpenedLeftMenu.js";
import ClosedLeftMenu from "components/ClosedLeftMenu.js";
import "css/PlaylistPage.css";

import {DEMO_PAGE_DATA} from "helpers/PlayerConstants.js"; 

function PlaylistPage(props) {
  
  const playlistColorTheme = {
    audiolistColor: colorThemeState.getSecondaryBackgroundColor,
    playlistColor: colorThemeState.getPrimaryBackgroundColor,
  }

  return (
    <div className = "playlist-page">
      <div className = "playlist-wrapper">
        <Playlist audios = {DEMO_PAGE_DATA.audios} 
         playlistInfo = {DEMO_PAGE_DATA.playlistInfo}
         colorTheme = {playlistColorTheme}/>
      </div>
    </div>
  );
}

export default observer(PlaylistPage);      