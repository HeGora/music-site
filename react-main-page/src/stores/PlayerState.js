import {observable, makeAutoObservable, computed, action} from "mobx";
import audioState from "stores/AudioState.js";
import {PLAYBACK_MODE} from "helpers/PlayerConstants.js";
import {getRandomInteger} from "helpers/PlayerHelperFunctions.js";

class PlayerState
{
	audios = [];
	activeIndex = -1;
	playbackMode = PLAYBACK_MODE.REPEAT;
	constructor()
	{
		makeAutoObservable(this);
	}

	get getPlaybackMode(){
		return this.playbackMode;
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
		switch(this.playbackMode){
			case PLAYBACK_MODE.REPEAT:
				break;
			case PLAYBACK_MODE.REPEAT_ONE:
				audioState.setCurrentTime(0);
				break;
			case PLAYBACK_MODE.SHUFFLE:
				audioState.setInfo(this.audios[getRandomInteger(0, this.audios.length)]);
				break;
		}
	
	}

	nextPlaybackMode()
	{
		switch(this.playbackMode){
			case PLAYBACK_MODE.REPEAT:
				this.playbackMode = PLAYBACK_MODE.REPEAT_ONE;
				break;
			case PLAYBACK_MODE.REPEAT_ONE:
				this.playbackMode = PLAYBACK_MODE.SHUFFLE;
				break;
			case PLAYBACK_MODE.SHUFFLE:
				this.playbackMode = PLAYBACK_MODE.REPEAT;
				break;
		}
	}
}

const playerState = new PlayerState();

export default playerState;