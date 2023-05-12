import React from "react";
import Audio from "components/Audio.js"

class Playlist extends React.Component
{
	constructor(props)
	{
		super(props);
		audioNum = 1;
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
			<div className = "audio-list">
				<div className = "table-header">
					<div className = "th-num">#</div>
					<div className = "th-title">Название</div>
					<div className = "th-album">Альбом</div>
					<div className = "th-sort">i</div>
				</div>
				
				
			</div>
		</div>




		)
	}
}