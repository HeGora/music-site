import React from "react";
import {useCallback} from "react";
import {observer} from "mobx-react";
import PlayBtn from "components/PlayBtn.js";
import PlaybackModBtn from "components/PlaybackModBtn.js";
import VolumeBtn from "components/VolumeBtn.js";
import SliderBar from "components/SliderBar.js";
import audioState from "stores/AudioState.js";
import playerState from "stores/PlayerState.js";
import screenSizeState from "stores/ScreenSizeState.js";
import colorThemeState from "stores/ColorThemeSTate.js";
import {timeFormatter, percentFormatter} from "helpers/PlayerHelperFunctions.js";
import "css/HorizontalPlayer.css";

import {ReactComponent as PlaySquareBtnIcon} from "material/icons/buttons/play_btn_in_square_icon.svg";
import {ReactComponent as PauseSquareBtnIcon} from "material/icons/buttons/pause_btn_in_square_icon.svg";
import {ReactComponent as PlayBtnIcon} from 'material/icons/buttons/play_btn_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/buttons/pause_btn_icon.svg';
import {ReactComponent as MoreBtnIcon} from 'material/icons/buttons/more_btn_icon.svg';
import {ReactComponent as NextBtnIcon} from "material/icons/buttons/next_btn_icon.svg";
import {ReactComponent as SolidNextBtnIcon} from "material/icons/buttons/solid_next_btn_icon.svg"; 
import {ReactComponent as OptionsIcon} from "material/icons/buttons/options_btn_icon.svg";

function HorizontalPlayer(props)
{
	const nextBtnClick = (event)=>{
		playerState.playRepeat(1);
	};

	const prevBtnClick = (event)=>{
		playerState.playRepeat(-1);
	};

	const createCurrentTime = ()=>{
		return timeFormatter(audioState.getCurrentTime) 
		+ "/" + timeFormatter(audioState.getAudioDuration);
	};

	const durationBarStateInfo = {
		getMaxValue: useCallback(()=>{return audioState.getAudioDuration}, []),
		getCurrentValue: useCallback(()=>{return audioState.getCurrentTime},[]),
		setCurrentValue: useCallback((value)=>{audioState.setCurrentTime(value)}, []),
	};

	const volumeBarStateInfo = {
		getMaxValue: useCallback(()=>{return 1}, []),
		getCurrentValue: useCallback(()=>{return audioState.getVolume},[]),
		setCurrentValue: useCallback((value)=>{audioState.setVolume(value)}, []),
	}

	const styleVariables = {
		"--player-background-color": colorThemeState.getBlankBackgroundColor,
	}

	return(
		<div className = "horizontal-player" style = {styleVariables}>
			<div className = "duration-bar">
					<SliderBar stateInfo = {durationBarStateInfo} 
					formatter = {timeFormatter} progressColor = "#A52A2A"/>
			</div>
			<div className = "player-body">
				<div className = "audio-info">
					<div className = "audio-image"><img src = {audioState.getImageSrc} /> </div>
					<div className = "audio-title">
						<div className = "audio-name">{audioState.getName}</div>
						<div className = "audio-artist">{audioState.getArtist}</div>
					</div>
					{
						screenSizeState.isMobileWidthSize && 
							<div className = "more-btn"><MoreBtnIcon/></div>
					}
				</div>
				<div className = "player-main-controls">
					{
						!screenSizeState.isMobileWidthSize &&
							<div className = "next-btn reversed" onClick = {prevBtnClick}><NextBtnIcon/></div>
					}
					<div className = "play-btn-wrapper">
						{
							!screenSizeState.isMobileWidthSize ? 
								<PlayBtn playIcon = {<PlaySquareBtnIcon/>} pauseIcon = {<PauseSquareBtnIcon/>}/>
								:
								<PlayBtn playIcon = {<PlayBtnIcon/>} pauseIcon = {<PauseBtnIcon/>}/>
						}
					</div>
					<div className = "next-btn" onClick = {nextBtnClick}>
						{
							!screenSizeState.isMobileWidthSize ? 
								<NextBtnIcon/>
								:
								<SolidNextBtnIcon/>
						}
					</div>
					{
						!screenSizeState.isMobileWidthSize &&
							<div className = "playback-mode-btn-wrapper">
									<PlaybackModBtn/>
							</div>
					}	
				</div>
				{
					!screenSizeState.isMobileWidthSize &&
						<div className = "player-secondary-controls">
							<div className = "volume-controls">
								<div className = "volume-bar">
									<SliderBar stateInfo = {volumeBarStateInfo} 
									formatter = {percentFormatter} progressColor = "#A52A2A"/>
								</div>
								<div className = "volume-icon">
									<VolumeBtn/>
								</div>
								<div className = "volume-options-btn"></div>
							</div>
							<div className = "volume-options"></div>
							<div className = "options-btn"><OptionsIcon/></div>
							<div className = "audio-current-time">{createCurrentTime()}</div>
						</div>
				}
			</div>
		</div>
	)
}


export default observer(HorizontalPlayer);