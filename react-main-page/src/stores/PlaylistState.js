import {observable, makeObservable, computed, action} from "mobx";

class PlaylistState
{
	audioNum = 0;
	activeIndex = 0;
	constructor()
	{
		makeObservable(this, {
			audioNum: observable,
			activeIndex: observable,
			setActiveIndex: action,
		});
	}
	setActiveIndex(newIndex){
		this.activeIndex = newIndex;
	}
}

const playlistState = new PlaylistState();

export default playlistState;