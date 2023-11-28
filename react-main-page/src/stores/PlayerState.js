import {observable, makeAutoObservable, computed, action} from "mobx";
import audioState from "stores/AudioState.js";
import {PLAYBACK_MODE} from "helpers/PlayerConstants.js";
import {getRandomInteger} from "helpers/PlayerHelperFunctions.js";

class PlayerState
{
	audios = [];
	activeIndex = -10;
	audioListId = -1;
	playbackMode = PLAYBACK_MODE.REPEAT;
	constructor()
	{
		makeAutoObservable(this);
	}

	get getPlaybackMode(){
		return this.playbackMode;
	}

	get getAudioListId(){
		return this.audioListId;
	}

	changePlayerData(newAudios, newAudioListId)
	{
		this.audios = newAudios;
		this.audioListId = newAudioListId;
	}

	setAudios(newAudios)
	{
		this.audios = newAudios;
	}

	setActiveAudio(audioIndex)
	{
		this.activeIndex = audioIndex;
		audioState.setInfo(this.audios[audioIndex]);
		audioState.play();
	}

	playShuffle()
	{
		this.setActiveAudio(getRandomInteger(0, this.audios.length));
	}

	playRepeat()
	{
		this.setActiveAudio((this.activeIndex + 1) % this.audios.length);
	}

	playRepeatOne()
	{
		audioState.setCurrentTime(0);
		audioState.play();
	}

	nextTrack()
	{
		switch(this.playbackMode){
			case PLAYBACK_MODE.REPEAT:
				this.playRepeat();
				console.log(this.activeIndex);
				break;
			case PLAYBACK_MODE.REPEAT_ONE:
				this.playRepeatOne();
				break;
			case PLAYBACK_MODE.SHUFFLE:
				this.playShuffle();
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