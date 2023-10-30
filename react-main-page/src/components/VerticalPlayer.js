import React from 'react';
import {observer} from "mobx-react";
import audioState from 'stores/AudioState.js';

import {ReactComponent as PlayBtnIcon} from 'material/icons/play_btn_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/pause_btn_icon.svg';


function VerticalPlayer(props){
	return(
		<div className = "vertical-player">
			<div className = "audio-info">

			</div>
			<div className = "player-controls">

			</div>
			<div className = "audio-duration">

			</div>
			<div className = "volume-controls">
			</div>
		</div>
	)
}


export default observer(VerticalPlayer);