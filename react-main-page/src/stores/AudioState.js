import {observable, makeObservable, computed, action} from "mobx";

class AudioState
{
	constructor(){
		makeObservable(this, {
			name: observable,
			title: observable,
			id: observable,
		})
	}
	name = "none";
	title = "none";
	id = 0;
	audio = new Audio();
}

const audioState = new AudioState();

export default audioState;