import {observable, makeObservable, computed, action} from "mobx";
import {PLAYBACK_MODE} from "helpers/PlayerConstants.js";

class PlayerState
{
	audios = [];
	activeIndex = -1;
	playbackMode = PLAYBACK_MODE.REPEAT;
	constructor()
	{
		makeObservable(this, {
			audios: observable,
			activeIndex: observable,
			playbackMode: observable,
			getPlaybackMode: computed,
			nextPlaybackMode: action,
			setActiveIndex: action,
			setAudios: action
		});
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
		console.log("next track");
	}

	nextPlaybackMode()
	{
		console.log("worked");
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