import React from 'react';
import {observer} from "mobx-react";
import audioState from 'stores/AudioState.js';

import {ReactComponent as PlayBtnIcon} from 'material/icons/buttons/play_btn_in_square_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/buttons/pause_btn_in_square_icon.svg';
import {ReactComponent as NextBtnIcon} from 'material/icons/buttons/next_btn_icon.svg';

function VerticalPlayer(props){
	return(
		<div className = "vertical-player">
			<div className = "audio-info">
				<div className = "audio-image"></div>
				<div className = "audio-title">
					<div className = "audio-name">{audioState.getName}</div>
					<div className = "audio-artist">{audioState.getArtist}</div>
				</div>
			</div>
			<div className = "player-controls">
				<div className = "main-btns">
					<div className = "prev-btn"><NextBtnIcon/></div>
					<div className = "play-btn">
					{
						audioState.isPaused ? 
						<PauseBtnIcon/> 
						: 
						<PlayBtnIcon/>
					}
					</div>
					<div className = "next-btn"><NextBtnIcon/></div>	
				</div>
				<div className = "side-btns">
					<div className = "play-mode-btn"></div>
					<div className = "options-btn"></div>
				</div>
			</div>
			<div className = "audio-duration">
				<div className = "duration-bar">
					
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