import React from "react";
import {observer} from "mobx-react";
import Audiolist from "components/Audiolist.js";
import {calculateUnits} from 'helpers/PlayerHelperFunctions.js';
import "css/Playlist.css";

function Playlist(props)
{

	const styleVariables = {
		"--playlist-name-font": props.nameFontSize,
		"--playlist-background-color": props.colorTheme.playlistBackgroundColor,
		"--playlist-text-color": props.colorTheme.textColor,
		"--playlist-artist-text-color": props.colorTheme.artistTextColor
	};

	const audiolistColorTheme = {
		backgroundColor: props.colorTheme.audiolistBackgroundColor,
		audioSelectedColor: props.colorTheme.audioSelectedColor,
		textColor: props.colorTheme.textColor
	};

	const audioListFontSize = calculateUnits(props.nameFontSize, (value) => value*0.625);


	return(
		<div className = "playlist" style = {styleVariables}>
			<div className = "playlist-header">
				<div className = "header-image">
					<img src = {props.playlistInfo.imageSrc} />
				</div>
				<div className = "header-info">
					<div className = "playlist-title">
						<div className = "playlist-name">{props.playlistInfo.name}</div>
						<div className = "playlist-artist">{props.playlistInfo.artist}</div>
					</div>
					<div className = "num-time">
						{props.audios.length} tracks, {props.playlistInfo.duration}
					</div>
					<div className = "tags">
						
					</div>
				</div>
			</div>
			<div className = "playlist-body">
				<Audiolist audios = {props.audios} id = {props.playlistInfo.id}
				audioNameFontSize = {audioListFontSize} 
				colorTheme = {audiolistColorTheme}/>
			</div>
		</div>
	)
}

export default observer(Playlist);