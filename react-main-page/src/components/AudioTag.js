import {useState} from "react";
import {observer} from "mobx-react";
import {makeObservable, action} from "mobx";
import audioState from 'stores/AudioState.js';
import screenSizeState from 'stores/ScreenSizeState.js';
import playerState from 'stores/PlayerState.js';
import 'css/AudioTag.css';

import {ReactComponent as PlayBtnIcon} from 'material/icons/buttons/play_btn_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/buttons/pause_btn_icon.svg';
import {ReactComponent as MoreBtnIcon} from 'material/icons/buttons/more_btn_icon.svg';

function AudioTag(props)
{

	const [isMouseIn, setIsMouseIn] = useState(false);

	const styleVariables = {
		"--audio-tag-name-font": props.nameFontSize,
		"--audio-tag-background-color": props.colorTheme.backgroundColor,
		"--audio-tag-selected-color": props.colorTheme.selectedColor,
		"--audio-tag-text-color": props.colorTheme.textColor
	}

	const audioMouseEnter = (event)=>{
		setIsMouseIn(true);
	}

	const audioMouseLeave = (event)=>{
		setIsMouseIn(false)
	}

	const playBtnClick = (event)=>{
		props.handlePlayBtnClick();
		if(props.audioInfo.audioSrc == audioState.getSrc)
		{
			audioState.switch();
		}
		else
		{
			playerState.setActiveAudio(props.audioIndex);
		}
	}

	const choosePlayBtnIcon = ()=>{
		if(audioState.isPaused || playerState.activeIndex != props.audioIndex)
			return (<PlayBtnIcon/>);
		else
			return (<PauseBtnIcon/>);
	}

	const isActive = ()=>{
		return (isMouseIn || playerState.activeIndex == props.audioIndex);
	}

	return(
		<div className = {isMouseIn ? "audio-tag selected" : "audio-tag"}
		onMouseEnter = {audioMouseEnter} 
		onMouseLeave = {audioMouseLeave}
		style = {styleVariables}>
			<div className = "play-btn-image-wrapper">			
				<div className = "audio-image">
					<img src = {props.audioInfo.imageSrc} /> 
					{
						isActive() ?
							<div className = "image-blur"></div>
							: 
							null
					}
				</div>
				{
					isActive() ?
						<div className = "play-btn" onClick = {(event)=>{playBtnClick(event)}}>
							<div className = "play-btn-icon">
								{choosePlayBtnIcon()}			
							</div>
						</div>
						: 
						null
				}
			</div>
			{
				screenSizeState.isMobileWidthSize ?
					<div className = "audio-title">
						<div className = "audio-name">{props.audioInfo.name}</div>
						<div className = "audio-artist">{props.audioInfo.artist}</div>
					</div>
					:					
					<div className = "audio-name">{props.audioInfo.name}</div>
			}
			{
				!screenSizeState.isMobileWidthSize &&
					<div className = "audio-artist">{props.audioInfo.artist}</div>
			}
			{
				screenSizeState.isDesktopWidthSize &&
					<div className = "audio-album">{props.audioInfo.album}</div>
			}
			<div className = "more-dur">
			{
				isMouseIn ?
					<div className = "more-btn"><MoreBtnIcon/></div>
					:
					<div className = "duration">{props.audioInfo.duration}</div>
			}
			</div>
		</div>
	)
}



export default observer(AudioTag);