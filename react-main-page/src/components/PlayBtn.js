import {observer} from "mobx-react";
import audioState from "stores/AudioState.js";

function PlayBtn(props)
{
	const playBtnClick = (event)=>{
		audioState.switch();
	};

	return(
		<div className = "play-btn" onClick = {playBtnClick}>
			{
				audioState.isPaused ? 
					props.playIcon
					:
					props.pauseIcon
			}
		</div>
	)
}

export default observer(PlayBtn);