import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import VerticalPlayer from "components/VerticalPlayer.js";
import InlineIconLabel from "components/InlineIconLabel.js";
import "css/OpenedLeftMenu.css";

import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";
import {ReactComponent as SearchIcon} from "material/icons/search_icon.svg";

function OpenedLeftMenu(props)
{
	const styleVariables = {
		"--left-menu-background-color": colorThemeState.getPrimaryBackgroundColor,
		"--left-menu-text-color": colorThemeState.getPrimaryTextColor,
	}

	const verticalPlayerColorTheme = {
		playerColor: colorThemeState.getSecondaryBackgroundColor,
	}

	return(
		<div className = "opened-left-menu" style = {styleVariables}>
			<div className = "top-area">
				<Link to = '/'>
					<div className = "link-inner-wrapper">
						<InlineIconLabel icon = {<HomeIcon/>} 
						hoverColor = {colorThemeState.lightSelectColor}>
							Главная
						</InlineIconLabel>
					</div>
				</Link>
				<Link to = '/'>
					<div className = "link-inner-wrapper">
						<InlineIconLabel icon = {<MusicLybraryIcon/>}
						hoverColor = {colorThemeState.lightSelectColor}>
							Библиотека
						</InlineIconLabel>
					</div>
				</Link>
				<Link to = '/'>
					<div className = "link-inner-wrapper">
						<InlineIconLabel icon = {<SearchIcon/>}
						hoverColor = {colorThemeState.lightSelectColor}>
							Поиск
						</InlineIconLabel>
					</div>
				</Link>
			</div>
			<div className = "bottom-area">
				{
          		<VerticalPlayer colorTheme = {verticalPlayerColorTheme} 
          		nameFontSize = "var(--left-menu-font)"/>
				}
			</div>
		</div>
	)
}

export default observer(OpenedLeftMenu);