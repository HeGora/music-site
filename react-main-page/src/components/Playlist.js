import React from "react";
import {observer} from "mobx-react";
import Audiolist from "components/Audiolist.js";
import "css/Playlist.css";

import {ReactComponent as SortIcon} from "material/icons/buttons/sort_btn_icon.svg";

class Playlist extends React.Component
{
	constructor(props){
		super(props);
	}

	colors = {
		"--playlist-audiolist-background-color": this.props.colorTheme.audiolistColor,
		"--playlist-background-color": this.props.colorTheme.playlistColor,
	}

	render()
	{
		return(
			<div className = "playlist" style = {this.colors}>
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
					<div className = "audiolist-header">
						<div className = "th-cover"></div>
						<div className = "th-name">Название</div>
						<div className = "th-artist">Исполнитель</div>
						<div className = "th-album">Альбом</div>
						<div className = "th-sort"><SortIcon fill = "white" /></div>
					</div>
					<div className = "audiolist-wrapper">
						<Audiolist audios = {this.props.audios} id = {this.props.id}/>
					</div>
				</div>
			</div>
		)
	}
}

export default observer(Playlist);