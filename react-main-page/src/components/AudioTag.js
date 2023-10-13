import React from 'react';
import {observer} from "mobx-react";
import {makeObservable, action} from "mobx";
import audioState from 'stores/AudioState.js';
import playlistState from 'stores/PlaylistState.js';
import {ReactComponent as PlayBtnIcon} from 'material/icons/play_btn_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/pause_btn_icon.svg';

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
		console.log(this.props.audioInfo.audioSrc);
		this.setState({isMouseIn: true});
	}

	audioMouseLeave(event)
	{
		this.setState({isMouseIn: false});
	}

	playBtnClick(event){
		playlistState.setActiveIndex(this.props.audioNum);
		if(this.props.audioInfo.audioSrc == audioState.getSrc)
		{
			if(audioState.isPaused)
			{
				audioState.play();
			}
			else
			{
				audioState.pause();
			}
		}
		else
		{
			audioState.setInfo(this.props.audioInfo);
			audioState.play();
		}
	}

	choosePlayBtnIcon()
	{
		if(audioState.isPaused || playlistState.activeIndex != this.props.audioNum)
			return (<PlayBtnIcon fill = "white" />);
		else
			return (<PauseBtnIcon fill = "white" />);
	}

	createPlayBtn()
	{
		if(this.state.isMouseIn || playlistState.activeIndex == this.props.audioNum)
		{
			return(
				<div className = "play-btn" onClick = {(event)=>{this.playBtnClick(event)}}>
					{this.choosePlayBtnIcon()}			
				</div>
			);
		}
		else
		{
			return (<div className = "index">{this.props.audioNum}</div>);
		}
	}

	render()
	{
		return(
			<div className = {this.state.isMouseIn ? "audio selected" : "audio"}
			onMouseEnter = {(event)=>{this.audioMouseEnter(event)}} 
			onMouseLeave = {(event)=>{this.audioMouseLeave(event)}}>
				<div className = "index-btn">
					{this.createPlayBtn()}
				</div>
				<div className = "audio-image">
					<img src = {this.props.audioInfo.albumSrc} /> 
				</div>
				<div className = "audio-title">
					<div className = "audio-name">{this.props.audioInfo.name}</div>
					<div className = "audio-artist">{this.props.audioInfo.artist}</div>
				</div>
				<div className = "audio-album">{this.props.audioInfo.album}</div>
				<div className = "more-dur">
				{
					this.state.isMouseIn ?
					<div className = "more-btn"><i className = "fa-light fa-arrow-down-to-line"></i></div>
					:
					<div className = "duration"></div>
				}
				</div>
			</div>
		)
	}

}



export default observer(AudioTag);