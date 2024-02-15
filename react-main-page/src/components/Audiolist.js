import React from "react";
import {observer} from "mobx-react";
import AudioTag from "components/AudioTag.js";
import playerState from "stores/PlayerState.js";
import {calculateUnits} from 'helpers/PlayerHelperFunctions.js';
import 'css/AudioList.css';

import {ReactComponent as SortIcon} from "material/icons/buttons/sort_btn_icon.svg";


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

	styleVariables = {
		"--audio-tag-name-font": this.props.audioNameFontSize,
		"--audiolist-header-text-color": this.props.colorTheme.textColor,
		"--audiolist-background-color": this.props.colorTheme.backgroundColor
	}

	checkAudioListChange()
	{
		if(this.props.id != playerState.getAudioListId){
			playerState.changePlayerData(this.props.audios, this.props.id);
		}
	}

	createAudioList()
	{
		const audioColorTheme = {
			backgroundColor: this.props.colorTheme.backgroundColor,
			selectedColor: this.props.colorTheme.audioSelectedColor,
			textColor: this.props.colorTheme.textColor,
		}
		let audioIndex = -1;
		let result = this.props.audios.map((audioInfo)=> {
						audioIndex++;
						return (<AudioTag key={audioInfo.id} audioInfo={audioInfo} audioIndex = {audioIndex}
										nameFontSize = {this.props.audioNameFontSize} colorTheme ={audioColorTheme} 
										handlePlayBtnClick ={this.checkAudioListChange}/>);
					});
		return result;
	}

	render()
	{
		return(
			<div className = "audiolist" style = {this.styleVariables}>
				<div className = "audiolist-header">
					<div className = "header-titles"> 
						<div className = "th-cover"></div>
						<div className = "th-name">Название</div>
						<div className = "th-artist">Исполнитель</div>
						<div className = "th-album">Альбом</div>
						<div className = "th-sort"><SortIcon fill = "white" /></div>
					</div>
					<div className = "header-separator"/> 
				</div>
				<div className = "audiolist-body">
					{this.createAudioList()}		
				</div>
			</div>
		)
	}
}

export default observer(AudioList);