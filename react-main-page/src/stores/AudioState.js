import {observable, makeObservable, computed, action} from "mobx";
import playerState from "stores/PlayerState.js";

class AudioState
{
	name = "none";
	title = "none";
	id = 0;
	playlistId = -1;
	audio = new Audio();
	paused = true;
	src = "none";

	constructor(){
		makeObservable(this, {
			name: observable,
			title: observable,
			id: observable,
			playlistId: observable,
			paused: observable,
			isPaused: computed,
			getSrc: computed,
			getPlaylistId: computed,
			play: action,
			pause: action,
			setInfo: action
		});
		this.audio.addEventListener("ended", this.onAudioEnd, false)
	}

	onAudioEnd()
	{
		playerState.nextTrack();
	}

	get isPaused()
	{
		return this.paused;
	}

	get getSrc()
	{
		return this.src;
	}

	get getPlaylistId()
	{
		return this.playlistId;
	}

	play()
	{
		this.audio.play();
		this.paused = false;
	}

	pause()
	{
		this.audio.pause();
		this.paused = true;
	}

	setSrc(newSrc)
	{
		this.src = newSrc;
		this.audio.src = newSrc;
	}

	setInfo(info)
	{
		this.setSrc(info.audioSrc);
		this.name = info.name;
		this.artist = info.artist;
		this.id = info.id;
		this.playlistId = info.playlistId;
	}
}

const audioState = new AudioState();

export default audioState;