import React from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import VerticalPlayer from "components/VerticalPlayer.js";
import "css/OpenedLeftMenu.css";

import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";

function OpenedLeftMenu(props)
{
	const styleVariables = {
		"--left-menu-background-color": props.colorTheme.menuColor,
	}

	const verticalPlayerColorTheme = {
		playerColor: props.colorTheme.playerColor,
	}

	return(
		<div className = "opened-left-menu" style = {styleVariables}>
			<div className = "top-area">
				<div className = "link-inner-wrapper">
					<div className = "left-menu-icon">
						<HomeIcon/>
					</div>
					<div className = "left-menu-text">Главная</div>
				</div>
				<div className = "link-inner-wrapper">
					<div className = "left-menu-icon">
						<MusicLybraryIcon/>
					</div>
					<div className = "left-menu-text">Библиотека</div>
				</div>
			</div>
			<div className = "bottom-area">
          		<VerticalPlayer colorTheme = {verticalPlayerColorTheme}/>
			</div>
		</div>
	)
}

export default observer(OpenedLeftMenu);