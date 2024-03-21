import {makeAutoObservable} from "mobx";
import {SCREEN_WIDTH_TYPES, SCREEN_HEIGHT_TYPES} from "helpers/PlayerConstants.js"

class ScreenSizeState
{
	height = window.innerHeight;
	width = window.innerWidth;

	constructor()
	{
		makeAutoObservable(this);
		window.addEventListener('resize', (event)=>{this.screenResize(event)}, false);
	}

	screenResize(event)
	{
		this.height = window.innerHeight;
		this.width = window.innerWidth;
	}

	get getHeight()
	{
		return this.height;
	}

	get getWidth()
	{
		return this.width;
	}

	get isDesktopWidthSize()
	{
		return this.width >= SCREEN_WIDTH_TYPES.DESKTOP;
	}

	get isTabletWidthSize()
	{
		return this.width > SCREEN_WIDTH_TYPES.MOBILE
    	&& this.width < SCREEN_WIDTH_TYPES.DESKTOP;
	}

	get isMobileWidthSize()
	{
		return this.width <= SCREEN_WIDTH_TYPES.MOBILE;
	}

	get isDesktopHeightSize()
	{
		return this.height >= SCREEN_HEIGHT_TYPES.DESKTOP;
	}

	get isTabletHeightSize()
	{
		return this.height > SCREEN_HEIGHT_TYPES.MOBILE
    	&& this.height < SCREEN_HEIGHT_TYPES.DESKTOP;
	}

	get isMobileHeightSize()
	{
		return this.height <= SCREEN_HEIGHT_TYPES.MOBILE;
	}
}

const screenSizeState = new ScreenSizeState();

export default screenSizeState;