import React from 'react';
import {observer} from 'mobx-react';
import {VOLUME_LVLS} from 'helpers/PlayerConstants.js';
import audioState from 'stores/AudioState.js';

import 'css/VolumeBtn.css';

import {ReactComponent as HighVolumeIcon} from 'material/icons/buttons/high_volume_icon.svg';
import {ReactComponent as MidVolumeIcon} from 'material/icons/buttons/mid_volume_icon.svg';
import {ReactComponent as LowVolumeIcon} from 'material/icons/buttons/low_volume_icon.svg';
import {ReactComponent as MuteVolumeIcon} from 'material/icons/buttons/mute_volume_icon.svg';

function VolumeBtn(props)
{
	const VolumeBtnClick = (event) =>{
		audioState.switchMute();
	};

	const chooseVolumeIcon = () => {
		if(audioState.isMuted)
		{
			return <MuteVolumeIcon/>;
		}
		if(audioState.getVolume > VOLUME_LVLS.HIGH)
		{
			return <HighVolumeIcon/>;
		}
		if(audioState.getVolume > VOLUME_LVLS.MID)
		{
			return <MidVolumeIcon/>;
		}
		return <LowVolumeIcon/>;
	};



	return(
		<div className = "volume-btn"
		onClick = {(event)=>{VolumeBtnClick(event)}}>
			{chooseVolumeIcon()}
		</div>
	)
}

export default observer(VolumeBtn);