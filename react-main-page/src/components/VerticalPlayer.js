import React from 'react';
import {useCallback} from "react";
import {observer} from "mobx-react";
import AudioProgressBar from "components/AudioProgressBar.js";
import audioState from 'stores/AudioState.js';
import playerState from 'stores/PlayerState.js';
import {PLAYBACK_MODE} from 'helpers/PlayerConstants.js';
import 'css/VerticalPlayer.css';

import {ReactComponent as PlayBtnIcon} from 'material/icons/buttons/play_btn_in_square_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/buttons/pause_btn_in_square_icon.svg';
import {ReactComponent as NextBtnIcon} from 'material/icons/buttons/next_btn_icon.svg';
import {ReactComponent as ShuffleModeIcon} from 'material/icons/buttons/play_mode_shuffle_icon.svg';
import {ReactComponent as RepeatModeIcon} from 'material/icons/buttons/play_mode_repeat_icon.svg';
import {ReactComponent as RepeatOneModeIcon} from 'material/icons/buttons/play_mode_repeat_one_icon.svg';
import {ReactComponent as OptionsIcon} from 'material/icons/buttons/options_btn_icon.svg';

function VerticalPlayer(props){

	const playBtnClick = useCallback((event) =>{
		audioState.switch();
	}, []);

	const playbackModeBtnClick = useCallback((event) =>{
		playerState.nextPlaybackMode();
	}, []);

	const createPlaybackModeBtn = useCallback((event) =>{
			if(playerState.getPlaybackMode == PLAYBACK_MODE.REPEAT)
			{
				return <RepeatModeIcon/>;
			}
			if(playerState.getPlaybackMode == PLAYBACK_MODE.REPEAT_ONE)
			{
				return <RepeatOneModeIcon/>;
			}
			if(playerState.getPlaybackMode == PLAYBACK_MODE.SHUFFLE)
			{
				return <ShuffleModeIcon/>;
			}
	}, []);

	return(
		<div className = "vertical-player">
			<div className = "audio-info">
				<div className = "audio-image"><img src = {audioState.getImageSrc} /> </div>
				<div className = "audio-title">
					<div className = "audio-name">{audioState.getName}</div>
					<div className = "audio-artist">{audioState.getArtist}</div>
				</div>
			</div>
			<div className = "player-controls">
				<div className = "main-btns">
					<div className = "next-btn reversed"><NextBtnIcon/></div>
					<div className = "play-btn" onClick = {(event)=>{playBtnClick(event)}}>
					{
						audioState.isPaused ? 
						<PlayBtnIcon/>
						:
						<PauseBtnIcon/> 
					}
					</div>
					<div className = "next-btn"><NextBtnIcon/></div>	
				</div>
				<div className = "side-btns">
					<div className = "playback-mode-btn" onClick = {(event)=>{playbackModeBtnClick(event)}}>
						{createPlaybackModeBtn()}
					</div>
					<div className = "options-btn"><OptionsIcon/></div>
				</div>
			</div>
			<div className = "audio-duration">
				<div className = "duration-bar">
					<AudioProgressBar progressColor = "#A52A2A"/>
				</div>
			</div>
			<div className = "volume-controls">
				<div className = "volume-icon"></div>
				<div className = "volume-bar"></div>
				<div className = "volume-options-btn"></div>
			</div>
			<div className = "volume-options"></div>
		</div>
	)
}


export default observer(VerticalPlayer);