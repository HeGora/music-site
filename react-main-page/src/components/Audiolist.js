import React from "react";
import {observer} from "mobx-react";
import AudioTag from "components/AudioTag.js";
import playerState from "stores/PlayerState.js";
import 'css/AudioList.css';

class AudioList extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			audioNum: 0,
		};
		this.checkAudioListChange = this.checkAudioListChange.bind(this);
	}

	checkAudioListChange()
	{
		if(this.props.id != playerState.getAudioListId){
			playerState.changePlayerData(this.props.audios, this.props.id);
		}
	}

	createAudioList()
	{
		let audioIndex = -1;
		let result = this.props.audios.map((audioInfo)=> {
						audioIndex++;
						return (<AudioTag key={audioIndex} audioInfo={audioInfo} audioIndex = {audioIndex} 
										checkAudioListChange ={this.checkAudioListChange}/>);
					});
		return result;
	}

	render()
	{
		return(
			<div className = "audiolist">
				<div className = "audiolist-body">
					{this.createAudioList()}		
				</div>
			</div>
		)
	}
}

export default observer(AudioList);