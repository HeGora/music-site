import React from 'react';
import {useCallback, useState} from "react";
import {observer} from "mobx-react";
import audioState from 'stores/AudioState.js';
import 'css/AudioProgressBar.css';


function AudioProgressBar(props){
	const [barTipValue, setBarTipValue] = useState('00:00');
	const [barTipShift, setBarTipShift] = useState(0);

	const barClick = useCallback((event) => {
		let userCursorMod = event.clientX - event.currentTarget.getBoundingClientRect().x;
   		let totalSeconds = Math.round(userCursorMod / event.currentTarget.clientWidth
   		 * audioState.getAudioDuration);
		audioState.setCurrentTime(totalSeconds);
	}, []);

   	const  barMouseMove = useCallback((event) => {
   		let userCursorMod = event.clientX - event.currentTarget.getBoundingClientRect().x;
   		let totalSeconds = Math.round(userCursorMod / event.currentTarget.clientWidth
   		 * audioState.getAudioDuration);
   		let secondsPart = totalSeconds%60 < 10 ? "0" : ""; 
		secondsPart += totalSeconds%60;
		setBarTipValue(Math.floor(totalSeconds / 60) + ":" + secondsPart);
		let barTip = event.currentTarget.querySelector('.bar-tip');
		setBarTipShift(userCursorMod - barTip.clientWidth / 2);
		if(event.buttons == 1){
			barClick(event);
		}
   	}, []);

	const progress = {
		backgroundColor: props.progressColor,
		width: `${audioState.getAudioProgress}%`,
	}

	const barTip = {
		left: `${barTipShift}px`,
	}

	return (
		<div className = "audio-progress-bar"
		onMouseMove = {barMouseMove}
		onClick = {barClick}>
			<div className = "bar-tip" style = {barTip}>{barTipValue}</div>
			<div className = "progress" style = {progress}></div>
		</div>
	)
}

export default observer(AudioProgressBar);