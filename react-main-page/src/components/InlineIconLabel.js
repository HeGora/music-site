import React from "react";
import "css/InlineIconLabel.css";

function InlineIconLabel(props)
{
	const styleVariables = {
		"--hover-color": props.hoverColor,

	}

	return(
		<div className = "inline-icon-label" style = {styleVariables}>
			<div className = "icon-wrapper">
				{props.icon}
			</div>
			<div className = "label-wrapper">{props.children}</div>
		</div>
	)
}


export default InlineIconLabel;