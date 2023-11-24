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
		playerState.setActiveIndex(this.props.audioIndex);
		if(this.props.audioInfo.audioSrc == audioState.getSrc)
		{
			audioState.switch();
		}
		else
		{
			audioState.setInfo(this.props.audioInfo);
			audioState.play();
		}
		if(this.props.audioInfo.playlistId != audioState.getPlaylistId){
			this.props.onChangePlaylist();
		}
	}

	choosePlayBtnIcon()
	{
		if(audioState.isPaused || playerState.activeIndex != this.props.audioIndex)
			return (<PlayBtnIcon fill = "white" />);
		else
			return (<PauseBtnIcon fill = "white" />);
	}

	createPlayBtn()
	{
		if(this.state.isMouseIn || playerState.activeIndex == this.props.audioIndex)
		{
			return(
				<div className = "play-btn" onClick = {(event)=>{this.playBtnClick(event)}}>
					{this.choosePlayBtnIcon()}			
				</div>
			);
		}
		else
		{
			return (<div className = "index">{this.props.audioIndex}</div>);
		}
	}

	render()
	{
		return(
			<div className = {this.state.isMouseIn ? "audio-tag selected" : "audio-tag"}
			onMouseEnter = {(event)=>{this.audioMouseEnter(event)}} 
			onMouseLeave = {(event)=>{this.audioMouseLeave(event)}}>
				<div className = "index-btn">
					{this.createPlayBtn()}
				</div>
				<div className = "audio-image">
					<img src = {this.props.audioInfo.imageSrc} /> 
				</div>
				<div className = "audio-title">
					<div className = "audio-name">{this.props.audioInfo.name}</div>
					<div className = "audio-artist">{this.props.audioInfo.artist}</div>
				</div>
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