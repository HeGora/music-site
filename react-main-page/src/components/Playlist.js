import React from "react";
import {observer} from "mobx-react";
import AudioTag from "components/AudioTag.js";
import playerState from "stores/PlayerState.js"
import {ReactComponent as SortIcon} from 'material/icons/sort_btn_icon.svg';

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
		let audioIndex = 0;
		let result = this.props.audios.map((audioInfo)=> {
						audioIndex++;
						return (<AudioTag key={audioIndex} audioInfo={audioInfo} audioIndex = {audioIndex}/>);
					});
		return result;
	}


	

	render()
	{
		return(
			<div className = "playlist">
				<div className = "list-header">
					<div className = "header-image">
						<img src = {this.props.playlistInfo.imageSrc} />
					</div>
					<div className = "header-info">
						<div className = "audio-title">
							<div className = "audio-name">{this.props.playlistInfo.name}</div>
							<div className = "audio-artist">{this.props.playlistInfo.artist}</div>
						</div>
						<div className = "num-time">
							{this.props.audios.length} tracks, {this.props.playlistInfo.duration}
						</div>
						<div className = "tags">
							
						</div>
					</div>
				</div>
				<div className = "table-header">
						<div className = "th-num">#</div>
						<div className = "th-cover"></div>
						<div className = "th-title">Название</div>
						<div className = "th-album">Альбом</div>
						<div className = "th-sort"><SortIcon fill = "white" /></div>
				</div>
				<div className = "audio-list">
					{this.createAudioList()}		
				</div>
			</div>
		)
	}
}

export default observer(Playlist);