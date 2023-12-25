import React from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import LabeledIcon from "components/LabeledIcon.js";
import "css/ClosedLeftMenu.css";

import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";
import {ReactComponent as SearchIcon} from "material/icons/search_icon.svg";

function ClosedLeftMenu(props)
{
	const styleVariables = {
		"--left-menu-background-color": colorThemeState.getPrimaryBackgroundColor,
		"--left-menu-text-color": colorThemeState.getPrimaryTextColor,
	}

	return(
		<div className = "closed-left-menu" style = {styleVariables}>
			<div className = "top-area">
				<Link to = '/'>
					<div className = "link-inner-wrapper">
						<LabeledIcon icon = {<HomeIcon/>} 
						hoverColor = {colorThemeState.lightSelectColor}>
							Главная
						</LabeledIcon>
					</div>
				</Link>
				<Link to = '/'>
					<div className = "link-inner-wrapper">
						<LabeledIcon icon = {<MusicLybraryIcon/>}
						hoverColor = {colorThemeState.lightSelectColor}>
							Библиотека
						</LabeledIcon>
					</div>
				</Link>
				<Link to = '/'>
					<div className = "link-inner-wrapper">
						<LabeledIcon icon = {<SearchIcon/>}
						hoverColor = {colorThemeState.lightSelectColor}>
							Поиск
						</LabeledIcon>
					</div>
				</Link>
			</div>
			<div className = "bottom-area">
			</div>
		</div>
	)
}

export default observer(ClosedLeftMenu);