import React from "react";
import "css/LabeledIcon.css";

function LabeledIcon(props)
{
	const styleVariables = {
		"--hover-color": props.hoverColor,

	}

	return(
		<div className = "labeled-icon" style = {styleVariables}>
			<div className = "icon-wrapper">
				{props.icon}
			</div>
			<div className = "label-wrapper">{props.children}</div>
		</div>
	)
}


export default LabeledIcon;