import React from "react";
import {observer} from "mobx-react";
import AudioTag from "components/AudioTag.js";
import playerState from "stores/PlayerState.js";
import 'css/Audiolist.css';
import {ReactComponent as SortIcon} from 'material/icons/buttons/sort_btn_icon.svg';

class Audiolist extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			audioNum: 0,
		};
		this.changePlayerData = this.changePlayerData.bind(this);
	}

	changePlayerData()
	{
		playerState.changePlayerData(this.props.audios);
	}

	createAudioList()
	{
		let audioIndex = 0;
		let result = this.props.audios.map((audioInfo)=> {
						audioIndex++;
						return (<AudioTag key={audioIndex} audioInfo={audioInfo} audioIndex = {audioIndex} 
										onChangePlaylist ={this.changePlayerData}/>);
					});
		return result;
	}

	render()
	{
		return(
			<div className = "audiolist">
				<div className = "audiolist-header">
						<div className = "th-num">#</div>
						<div className = "th-cover"></div>
						<div className = "th-title">Название</div>
						<div className = "th-album">Альбом</div>
						<div className = "th-sort"><SortIcon fill = "white" /></div>
				</div>
				<div className = "audiolist-body">
					{this.createAudioList()}		
				</div>
			</div>
		)
	}
}

export default observer(Audiolist);