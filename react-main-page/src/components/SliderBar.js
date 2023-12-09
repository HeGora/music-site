import React from 'react';
import {useCallback, useState} from "react";
import {observer} from "mobx-react";
import {findPercent} from 'helpers/PlayerHelperFunctions.js';
import 'css/SliderBar.css';


function SliderBar(props){
	const [barTipValue, setBarTipValue] = useState('');
	const [barTipShift, setBarTipShift] = useState(0);

	const barClick = (event) => {
		let userCursorMod = event.clientX - event.currentTarget.getBoundingClientRect().x;
   		let currentValue = userCursorMod / event.currentTarget.clientWidth
   		 * props.stateInfo.getMaxValue();
		props.stateInfo.setCurrentValue(currentValue);
	};

   	const  barMouseMove = (event) => {
   		let userCursorMod = event.clientX - event.currentTarget.getBoundingClientRect().x;
   		setBarTipShift(userCursorMod);

   		let currentValue = userCursorMod / event.currentTarget.clientWidth
   		 * props.stateInfo.getMaxValue();
		setBarTipValue(props.formatter(currentValue));

		if(event.buttons == 1){
			barClick(event);
		}
   	};

	const progress = {
		backgroundColor: props.progressColor,
		width: `${findPercent(props.stateInfo.getCurrentValue(),
		 						props.stateInfo.getMaxValue())}%`,
	};

	const barTip = {
		left: `${barTipShift}px`,
	};

	return (
		<div className = "slider-bar"
		onMouseMove = {barMouseMove}
		onClick = {barClick}>
			<div className = "bar-tip" style = {barTip}>{barTipValue}</div>
			<div className = "progress" style = {progress}></div>
		</div>
	)
}

export default observer(SliderBar);