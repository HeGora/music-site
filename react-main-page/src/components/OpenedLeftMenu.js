import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react";
import colorThemeState from "stores/ColorThemeState.js";
import screenSizeState from "stores/ScreenSizeState.js";
import VerticalPlayer from "components/VerticalPlayer.js";
import InlineIconLabel from "components/InlineIconLabel.js";
import "css/OpenedLeftMenu.css";



import {ReactComponent as HomeIcon} from "material/icons/home_icon.svg";
import {ReactComponent as MusicLybraryIcon} from "material/icons/music_lybrary_icon.svg";
import {ReactComponent as SearchIcon} from "material/icons/search_icon.svg";
import {ReactComponent as ArrowIcon} from "material/icons/arrow_icon.svg";

function OpenedLeftMenu(props)
{

	const playerSwitchClick = (event)=>{
		props.handleVerticalPlayerSwitch(!props.isVerticalPlayerOpened)
	}

	const styleVariables = {
		"--left-menu-background-color": colorThemeState.getPrimaryBackgroundColor,
		"--left-menu-secondary-color": colorThemeState.getSecondaryBackgroundColor,
		"--left-menu-text-color": colorThemeState.getPrimaryTextColor,
		"--left-menu-indent-color": colorThemeState.getBlankBackgroundColor,

		"--left-menu-font": props.fontSize,
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
				screenSizeState.isDesktopHeightSize &&
					<div className = "player-block">
						{ 
							props.isVerticalPlayerOpened &&
							<div className = "player-wrapper">
		        		<VerticalPlayer colorTheme = {verticalPlayerColorTheme} 
		        		nameFontSize = {styleVariables["--left-menu-font"]}/>
		        	</div>
						}
						<div className = "player-switch" onClick = {playerSwitchClick}>
							<div className = {props.isVerticalPlayerOpened ? "arrow-icon reversed" : "arrow-icon"}> 
								<ArrowIcon/>
							</div>
						</div>
					</div>
			}
			</div>
		</div>
	);
}

export default observer(OpenedLeftMenu);