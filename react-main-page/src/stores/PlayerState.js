import {observable, makeObservable, computed, action} from "mobx";

class PlayerState
{
	audios = [];
	activeIndex = 0;
	constructor()
	{
		makeObservable(this, {
			audios: observable,
			activeIndex: observable,
			setActiveIndex: action,
		});
	}
	setActiveIndex(newIndex){
		this.activeIndex = newIndex;
	}
}

const playerState = new PlayerState();

export default playerState;