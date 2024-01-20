import React from 'react';
import {observer} from "mobx-react";
import {makeObservable, action} from "mobx";
import audioState from 'stores/AudioState.js';
import playerState from 'stores/PlayerState.js';
import 'css/AudioTag.css';

import {ReactComponent as PlayBtnIcon} from 'material/icons/buttons/play_btn_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/buttons/pause_btn_icon.svg';
import {ReactComponent as MoreBtnIcon} from 'material/icons/buttons/more_btn_icon.svg';

class AudioTag extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			isMouseIn: false,
		};
	}

	audioMouseEnter(event)
	{
		this.setState({isMouseIn: true});
	}

	audioMouseLeave(event)
	{
		this.setState({isMouseIn: false});
	}

	playBtnClick(event)
	{
		this.props.checkAudioListChange();
		if(this.props.audioInfo.audioSrc == audioState.getSrc)
		{
			audioState.switch();
		}
		else
		{
			playerState.setActiveAudio(this.props.audioIndex);
		}
	}

	choosePlayBtnIcon()
	{
		if(audioState.isPaused || playerState.activeIndex != this.props.audioIndex)
			return (<PlayBtnIcon/>);
		else
			return (<PauseBtnIcon/>);
	}

	isActive()
	{
		return (this.state.isMouseIn || playerState.activeIndex == this.props.audioIndex);
	}

	render()
	{
		return(
			<div className = {this.state.isMouseIn ? "audio-tag selected" : "audio-tag"}
			onMouseEnter = {(event)=>{this.audioMouseEnter(event)}} 
			onMouseLeave = {(event)=>{this.audioMouseLeave(event)}}>
				<div className = "play-btn-image-wrapper">			
					<div className = "audio-image">
						<img src = {this.props.audioInfo.imageSrc} /> 
						{
							this.isActive() ?
								<div className = "image-blur"></div>
							: null
						}
					</div>
					{
						this.isActive() ?
							<div className = "play-btn" onClick = {(event)=>{this.playBtnClick(event)}}>
								<div className = "play-btn-icon">
									{this.choosePlayBtnIcon()}			
								</div>
							</div>
						: null
					}
				</div>
				<div className = "audio-name">{this.props.audioInfo.name}</div>
				<div className = "audio-artist">{this.props.audioInfo.artist}</div>
				<div className = "audio-album">{this.props.audioInfo.album}</div>
				<div className = "more-dur">
				{
					this.state.isMouseIn ?
					<div className = "more-btn"><MoreBtnIcon/></div>
					:
					<div className = "duration">{this.props.audioInfo.audioDuration}</div>
				}
				</div>
			</div>
		)
	}

}



export default observer(AudioTag);