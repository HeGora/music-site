import {observable, makeObservable, computed, action} from "mobx";

class AudioState
{
	name = "none";
	title = "none";
	id = 0;
	audio = new Audio();
	paused = true;
	src = "none";

	constructor(){
		makeObservable(this, {
			name: observable,
			title: observable,
			id: observable,
			paused: observable,
			isPaused: computed,
			play: action,
			pause: action,
			setSrc: action,
		});
	}
	get isPaused()
	{
		return this.paused;
	}
	get getSrc()
	{
		return this.src;
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
	}
}

const audioState = new AudioState();

export default audioState;