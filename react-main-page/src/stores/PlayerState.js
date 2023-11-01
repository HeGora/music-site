import {observable, makeObservable, computed, action} from "mobx";

class PlayerState
{
	audios = [];
	activeIndex = -1;
	playerMode;
	constructor()
	{
		makeObservable(this, {
			audios: observable,
			activeIndex: observable,
			setActiveIndex: action,
			setAudios: action
		});
	}
	setActiveIndex(newIndex)
	{
		this.activeIndex = newIndex;
	}
	setAudios(newAudios)
	{
		this.audios = newAudios;
	}
	nextTrack()
	{
		console.log("next track");
	}
}

const playerState = new PlayerState();

export default playerState;