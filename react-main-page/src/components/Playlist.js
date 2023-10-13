import React from "react";
import {observer} from "mobx-react";
import AudioTag from "components/AudioTag.js";
import PlaylistState from "stores/PlaylistState.js"

class Playlist extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			audioNum: 0,
		};
	}

	createAudioList()
	{
		let audioNum = 0;
		let result = this.props.audios.map((audioInfo)=> {
						audioNum++;
						return (<AudioTag key={audioNum} audioInfo={audioInfo} audioNum = {audioNum}/>);
					});
		PlaylistState.audioNum = audioNum;
		return result;
	}


	

	render()
	{
		return(
			<div className = "playlist">
				<div className = "list-header">
					<div className = "header-image"></div>
					<div className = "header-info">
						<div className = "audio-title">
							<div className = "audio-name">{this.props.playlistInfo.name}</div>
							<div className = "audio-artist">{this.props.playlistInfo.artist}</div>
						</div>
						<div className = "num-time"></div>
						<div className = "tags">
							
						</div>
					</div>
				</div>
				<div className = "table-header">
						<div className = "th-num">#</div>
						<div className = "th-title">Название</div>
						<div className = "th-album">Альбом</div>
						<div className = "th-sort">i</div>
				</div>
				<div className = "audio-list">
					{this.createAudioList()}		
				</div>
			</div>
		)
	}
}

export default observer(Playlist);