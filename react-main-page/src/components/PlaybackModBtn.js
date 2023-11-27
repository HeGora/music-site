import React from 'react';
import {observer} from "mobx-react";
import playerState from 'stores/PlayerState.js';
import {PLAYBACK_MODE} from 'helpers/PlayerConstants.js';

import 'css/PlaybackModBtn.css';

import {ReactComponent as ShuffleModeIcon} from 'material/icons/buttons/play_mode_shuffle_icon.svg';
import {ReactComponent as RepeatModeIcon} from 'material/icons/buttons/play_mode_repeat_icon.svg';
import {ReactComponent as RepeatOneModeIcon} from 'material/icons/buttons/play_mode_repeat_one_icon.svg';

function PlaybackModBtn(props)
{
	const playbackModeBtnClick = (event) =>{
		playerState.nextPlaybackMode();
	};

	const chooseIcon = () => {
		switch(playerState.getPlaybackMode){
			case PLAYBACK_MODE.REPEAT_ONE:
				return <RepeatOneModeIcon/>;
			case PLAYBACK_MODE.SHUFFLE:
				return <ShuffleModeIcon/>;
			default:
				return <RepeatModeIcon/>;
		}
	}

	return(
		<div className = "playback-mod-btn" 
		onClick = {(event)=>{playbackModeBtnClick(event)}}>
			{chooseIcon()}
		</div>
	) 	
}

export default observer(PlaybackModBtn);