import {observable, makeObservable, computed, action} from "mobx";
import playerState from "stores/PlayerState.js";

class AudioState
{
	name = "none";
	artist = "none";
	id = 0;
	playlistId = -1;
	audio = new Audio();
	paused = true;
	src = "none";
	imageSrc = "none";

	constructor(){
		makeObservable(this, {
			name: observable,
			artist: observable,
			id: observable,
			playlistId: observable,
			paused: observable,
			imageSrc: observable,
			isPaused: computed,
			getName: computed,
			getArtist: computed,
			getSrc: computed,
			getImageSrc: computed,
			getPlaylistId: computed,
			play: action,
			pause: action,
			switch: action,
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

	get getName()
	{
		return this.name;
	}

	get getArtist()
	{
		return this.artist;
	}

	get getSrc()
	{
		return this.src;
	}

	get getImageSrc()
	{
		return this.imageSrc;
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

	switch()
	{
		if(this.paused)
		{
			this.play();
		}
		else
		{
			this.pause();
		}
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
		this.imageSrc = info.imageSrc;
	}
}

const audioState = new AudioState();

export default audioState;