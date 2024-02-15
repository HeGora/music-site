import React from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import LabeledIcon from "components/LabeledIcon.js";
import "css/NavBar.css";

import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";
import {ReactComponent as SearchIcon} from "material/icons/search_icon.svg";

function NavBar(props)
{
	const styleVariables = {
		"--nav-bar-background-color": colorThemeState.getPrimaryBackgroundColor,
		"--nav-bar-text-color": colorThemeState.getPrimaryTextColor,
	}

	return(
		<div className = "nav-bar" style = {styleVariables}>
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
	)
}

export default observer(NavBar);