import {makeAutoObservable} from "mobx";

class ColorThemeState
{
	primaryBackgroundColor = "#303030";
    secondaryBackgroundColor = "#2D2D2D";
    headerColor = "#404040";
    blankBackgroundColor = "#1E1E1E";   
    primaryIconColor = "#ffffff";
    secondaryIconColor = "#000000";
    primaryTextColor = "#ffffff";
    secondaryTextColor = "#808080";
    lightSelectColor = "#505050";
    darkSelectColor = "#2A2A2A";

	constructor()
	{
		makeAutoObservable(this);
	}

	get getPrimaryBackgroundColor()
	{
		return this.primaryBackgroundColor;
	}

	get getSecondaryBackgroundColor()
	{
		return this.secondaryBackgroundColor;
	}

	get getHeaderColor()
	{
		return this.headerColor;
	}

	get getBlankBackgroundColor()
	{
		return this.blankBackgroundColor;
	}

	get getPrimaryIconColor()
	{
		return this.primaryIconColor;
	}

	get getSecondaryIconColor()
	{
		return this.secondaryIconColor;
	}

	get getPrimaryTextColor()
	{
		return this.primaryTextColor;
	}

	get getSecondaryTextColor()
	{
		return this.secondaryTextColor;
	}

	get getLightSelectColor()
	{
		return this.lightSelectColor;
	}

	get getDarkSelectColor()
	{
		return this.darkSelectColor;
	}

	setColorTheme(newColorTheme)
	{
		this.primaryBackgroundColor = newColorTheme.primaryBackgroundColor 
										|| this.primaryBackgroundColor;
	    this.secondaryBackgroundColor = newColorTheme.secondaryBackgroundColor 
	    								|| this.secondaryBackgroundColor;
	    this.headerColor = newColorTheme.headerColor || this.headerColor;
	    this.blankBackgroundColor = newColorTheme.blankBackgroundColor 
	    								|| this.blankBackgroundColor;   
	    this.primaryIconColor = newColorTheme.primaryIconColor 
	    								|| this.primaryIconColor;
	    this.secondaryIconColor = newColorTheme.secondaryIconColor 
	    								|| this.secondaryIconColor;
	    this.primaryTextColor = newColorTheme.primaryTextColor 
	    								|| this.primaryTextColor;
	    this.secondaryTextColor = newColorTheme.secondaryTextColor 
	    								|| this.secondaryTextColor;
	    this.lightSelectColor = newColorTheme.lightSelectColor 
	    								|| this.lightSelectColor;
	    this.darkSelectColor = newColorTheme.darkSelectColor 
	    								|| this.darkSelectColor;
	}
}

const colorThemeState = new ColorThemeState();

export default colorThemeState;