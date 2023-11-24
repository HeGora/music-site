import {observable, makeObservable, computed, action} from "mobx";
import playerState from "stores/PlayerState.js";

class AudioState
{
	name = "none";
	artist = "none";
	id = 0;
	imageSrc = "none";
	playlistId = -1;
	audio = new Audio();
	src = "none";
	paused = true;
	currentTime = 0;

	constructor(){
		makeObservable(this, {
			name: observable,
			artist: observable,
			id: observable,
			playlistId: observable,
			paused: observable,
			currentTime: observable,
			imageSrc: observable,

			isPaused: computed,
			getAudioDuration: computed,
			getCurrentTime: computed,
			getAudioProgress: computed,
			getName: computed,
			getArtist: computed,
			getSrc: computed,
			getImageSrc: computed,
			getPlaylistId: computed,

			play: action,
			pause: action,
			switch: action,
			setInfo: action,
			setCurrentTime: action,
		});
		this.audio.addEventListener("ended", this.audioEnd, false);
		this.audio.addEventListener("timeupdate", (event)=>{this.audioProgress(event)}, false);
	}

	audioEnd(event)
	{
		playerState.nextTrack();
	}

	audioProgress(event)
	{
		this.currentTime = this.audio.currentTime;
	}

	get getSrc()
	{
		return this.src;
	}

	get isPaused()
	{
		return this.paused;
	}

	get getAudioDuration()
	{
		return this.audio.duration;
	}

	get getCurrentTime()
	{
		return this.currentTime;
	}

	get getAudioProgress()
	{
		return this.currentTime*100 / this.audio.duration;
	}

	get getName()
	{
		return this.name;
	}

	get getArtist()
	{
		return this.artist;
	}

	get getImageSrc()
	{
		return this.imageSrc;
	}

	get getPlaylistId()
	{
		return this.playlistId;
	}

	setSrc(newSrc)
	{
		this.src = newSrc;
		this.audio.src = newSrc;
	}

	setCurrentTime(time)
	{
		this.currentTime = time;
		this.audio.currentTime = time;
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
}

const audioState = new AudioState();

export default audioState;