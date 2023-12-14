import React from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import VerticalPlayer from "components/VerticalPlayer.js";
import InlineIconLabel from "components/InlineIconLabel.js";
import "css/OpenedLeftMenu.css";

import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";
import {ReactComponent as SearchIcon} from "material/icons/search_icon.svg";

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
					<InlineIconLabel icon = {<HomeIcon/>} 
					hoverColor = {props.colorTheme.menuHoverColor}>
						Главная
					</InlineIconLabel>
				</div>
				<div className = "link-inner-wrapper">
					<InlineIconLabel icon = {<MusicLybraryIcon/>}
					hoverColor = {props.colorTheme.menuHoverColor}>
						Библиотека
					</InlineIconLabel>
				</div>
				<div className = "link-inner-wrapper">
					<InlineIconLabel icon = {<SearchIcon/>}
					hoverColor = {props.colorTheme.menuHoverColor}>
						Поиск
					</InlineIconLabel>
				</div>
			</div>
			<div className = "bottom-area">
          		<VerticalPlayer colorTheme = {verticalPlayerColorTheme} playBtnSize = "40px"/>
			</div>
		</div>
	)
}

export default observer(OpenedLeftMenu);