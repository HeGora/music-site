import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import screenSizeState from "stores/ScreenSizeState.js";
import Playlist from "components/Playlist.js";
import "css/PlaylistPage.css";

import {DEMO_PAGE_DATA} from "helpers/PlayerConstants.js"; 

function PlaylistPage(props) {

  const playlistColorTheme = {
    playlistBackgroundColor: colorThemeState.getPrimaryBackgroundColor,
    audiolistBackgroundColor: colorThemeState.getSecondaryBackgroundColor,
    audioSelectedColor: colorThemeState.getLightSelectColor,
    textColor: colorThemeState.getPrimaryTextColor,
    artistTextColor: colorThemeState.getSecondaryTextColor
  }

  return (
    <div className = "playlist-page">
      <div className = "playlist-wrapper">
        <Playlist audios = {DEMO_PAGE_DATA.audios} 
         playlistInfo = {DEMO_PAGE_DATA.playlistInfo}
         nameFontSize = {screenSizeState.isMobileWidthSize ? "28px" : "32px"}
         colorTheme = {playlistColorTheme}/>
      </div>
    </div>
  );
}

export default observer(PlaylistPage);      