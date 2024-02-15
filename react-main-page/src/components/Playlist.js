import React from "react";
import {observer} from "mobx-react";
import Audiolist from "components/Audiolist.js";
import {calculateUnits} from 'helpers/PlayerHelperFunctions.js';
import "css/Playlist.css";

class Playlist extends React.Component
{
	constructor(props){
		super(props);
	}

	styleVariables = {
		"--playlist-name-font": this.props.nameFontSize,
		"--playlist-background-color": this.props.colorTheme.playlistBackgroundColor,
		"--playlist-text-color": this.props.colorTheme.textColor,
		"--playlist-artist-text-color": this.props.colorTheme.artistTextColor
	}

	audiolistColorTheme = {
		backgroundColor: this.props.colorTheme.audiolistBackgroundColor,
		audioSelectedColor: this.props.colorTheme.audioSelectedColor,
		textColor: this.props.colorTheme.textColor
	}

	audioListFontSize = calculateUnits(this.props.nameFontSize, (value) => value*0.625);

	render()
	{
		return(
			<div className = "playlist" style = {this.styleVariables}>
				<div className = "playlist-header">
					<div className = "header-image">
						<img src = {this.props.playlistInfo.imageSrc} />
					</div>
					<div className = "header-info">
						<div className = "playlist-title">
							<div className = "playlist-name">{this.props.playlistInfo.name}</div>
							<div className = "playlist-artist">{this.props.playlistInfo.artist}</div>
						</div>
						<div className = "num-time">
							{this.props.audios.length} tracks, {this.props.playlistInfo.duration}
						</div>
						<div className = "tags">
							
						</div>
					</div>
				</div>
				<div className = "playlist-body">
					<Audiolist audios = {this.props.audios} id = {this.props.id}
					audioNameFontSize = {this.audioListFontSize} 
					colorTheme = {this.audiolistColorTheme}/>
				</div>
			</div>
		)
	}
}

export default observer(Playlist);