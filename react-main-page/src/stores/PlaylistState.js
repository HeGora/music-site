import {observable, makeObservable, computed, action} from "mobx";

class PlaylistState
{
	constructor()
	{
		makeObservable(this, {
			audioNum: observable,
			activeIndex: observable,
		})
	}
	audioNum = 0;
	activeIndex = 0;
}

const playlistState = new PlaylistState();

export default playlistState;