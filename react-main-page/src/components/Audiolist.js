import {useState} from "react";
import {observer} from "mobx-react";
import AudioTag from "components/AudioTag.js";
import playerState from "stores/PlayerState.js";
import screenSizeState from "stores/ScreenSizeState.js";
import {calculateUnits} from 'helpers/PlayerHelperFunctions.js';
import 'css/AudioList.css';

import {ReactComponent as SortIcon} from "material/icons/buttons/sort_btn_icon.svg";


function AudioList(props)
{
	const [audioNum, setAudioNum] = useState(0);

	const styleVariables = {
		"--audio-tag-name-font": props.audioNameFontSize,
		"--audiolist-header-text-color": props.colorTheme.textColor,
		"--audiolist-background-color": props.colorTheme.backgroundColor
	}

	const checkAudioListChange = ()=>{
		console.log(props.id);
		console.log(props.audios);
		if(props.id != playerState.getAudioListId){
			playerState.changePlayerData(props.audios, props.id);
		}
	}

	const createAudioList = ()=>{
		const audioColorTheme = {
			backgroundColor: props.colorTheme.backgroundColor,
			selectedColor: props.colorTheme.audioSelectedColor,
			textColor: props.colorTheme.textColor,
		}
		let audioIndex = -1;
		let result = props.audios.map((audioInfo)=> {
						audioIndex++;
						return (<AudioTag key={audioInfo.id} audioInfo={audioInfo} audioIndex = {audioIndex}
										nameFontSize = {props.audioNameFontSize} colorTheme ={audioColorTheme} 
										handlePlayBtnClick ={checkAudioListChange}/>);
					});
		return result;
	}

	return(
		<div className = "audiolist" style = {styleVariables}>
			<div className = "audiolist-header">
				<div className = "header-titles"> 
					<div className = "th-cover"></div>
					<div className = "th-name">Название</div>
					{
						!screenSizeState.isMobileWidthSize &&
							<div className = "th-artist">Исполнитель</div>
					}
					{
						screenSizeState.isDesktopWidthSize &&
							<div className = "th-album">Альбом</div>
					}
					<div className = "th-sort"><SortIcon fill = "white" /></div>
				</div>
				<div className = "header-separator"/> 
			</div>
			<div className = "audiolist-body">
				{createAudioList()}		
			</div>
		</div>
	)
}

export default observer(AudioList);