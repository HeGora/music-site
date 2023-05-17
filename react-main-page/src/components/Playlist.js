import React from "react";
import {AudioTag} from "components/AudioTag.js";

class Playlist extends React.Component
{
	constructor(props)
	{
		super(props);
		console.log("Playlist");
	}

	

	render()
	{
		return(
			<div className = "playlist">
			<div className = "list-header">
				<div className = "header-image"></div>
				<div className = "header-info">
					<div className = "audio-title">
						<div className = "audio-name">{this.props.name}</div>
						<div className = "audio-artist">{this.props.artist}</div>
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
				{this.props.audios.map((audioInfo)=> <AudioTag key={audioInfo.audioNum} audioInfo={audioInfo} playBtnClick={(e)=>{console.log("playBtnClick");}} />)}
				
			</div>
		</div>




		)
	}
}

export { Playlist };