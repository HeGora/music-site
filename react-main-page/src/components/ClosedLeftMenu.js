import React from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import LabeledIcon from "components/LabeledIcon.js";
import "css/ClosedLeftMenu.css";

import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";
import {ReactComponent as SearchIcon} from "material/icons/search_icon.svg";

function ClosedLeftMenu(props)
{
	const styleVariables = {
		"--left-menu-background-color": props.colorTheme.menuColor,
	}

	return(
		<div className = "closed-left-menu" style = {styleVariables}>
			<div className = "top-area">
				<div className = "link-inner-wrapper">
					<LabeledIcon icon = {<HomeIcon/>} 
					hoverColor = {props.colorTheme.menuHoverColor}>
						Главная
					</LabeledIcon>
				</div>
				<div className = "link-inner-wrapper">
					<LabeledIcon icon = {<MusicLybraryIcon/>}
					hoverColor = {props.colorTheme.menuHoverColor}>
						Библиотека
					</LabeledIcon>
				</div>
				<div className = "link-inner-wrapper">
					<LabeledIcon icon = {<SearchIcon/>}
					hoverColor = {props.colorTheme.menuHoverColor}>
						Поиск
					</LabeledIcon>
				</div>
			</div>
			<div className = "bottom-area">
			</div>
		</div>
	)
}

export default observer(ClosedLeftMenu);