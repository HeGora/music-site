import {observable, makeAutoObservable, extendObservable, computed, action} from "mobx";
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
	audioDuration = 0;
	currentTime = 0;
	volume = 1;
	muted = false;

	constructor(){
		makeAutoObservable(this);
		this.audio.addEventListener("ended", (event)=>{this.audioEnd(event)}, false);
		this.audio.addEventListener("timeupdate", (event)=>{this.audioProgress(event)}, false);
		this.audio.addEventListener("durationchange", (event)=>{this.durationChange(event)}, false);
		this.audio.addEventListener("volumechange", (event)=>{this.volumeChange(event)}, false);
		this.audio.addEventListener("play", (event)=>{this.syncPaused(event)}, false);
		this.audio.addEventListener("pause", (event)=>{this.syncPaused(event)}, false);
	}

	audioEnd(event)
	{
		playerState.nextTrack();
	}

	audioProgress(event)
	{
		this.currentTime = this.audio.currentTime;
	}

	durationChange(event){
		this.audioDuration = this.audio.duration;
	}

	volumeChange(event){
		this.volume = this.audio.volume;
	}

	syncPaused(event){
		this.paused = this.audio.paused;
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
		return this.audioDuration;
	}

	get getCurrentTime()
	{
		return this.currentTime;
	}

	get getVolume()
	{
		if(this.muted)
			return 0;
		return this.volume;
	}

	get isMuted()
	{
		return this.muted;
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
		this.audio.load();
	}

	setCurrentTime(time)
	{
		this.audio.currentTime = time;
	}

	setVolume(volume)
	{
		if(this.muted)
		{
			this.switchMute();
		}
		this.audio.volume = volume;	
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
	}

	pause()
	{
		this.audio.pause();
	}

	switch()
	{
		if(this.audio.paused)
		{
			this.play();
		}
		else
		{
			this.pause();
		}
	}

	switchMute(){
		this.audio.muted = !this.audio.muted;
		this.muted = this.audio.muted;
	}
}

const audioState = new AudioState();

export default audioState;