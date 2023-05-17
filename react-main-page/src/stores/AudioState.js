import {observable, makeObservable, computed, action} from "mobx";

class AudioState
{
	constructor(){
		makeObservable(this, {
			name: observable,
			title: observable,
			activeIndex: observable,
		})
	}
	name = "none";
	title = "none";
	activeIndex = 0;
	audio = new Audio();
}

const audioState = new AudioState();

export default audioState;