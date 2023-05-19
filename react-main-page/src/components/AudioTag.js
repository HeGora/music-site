import React from 'react';
import {observer} from "mobx-react";
import audioState from 'stores/AudioState.js';
import playlistState from 'stores/PlaylistState.js';
import {ReactComponent as PlayBtnIcon} from 'material/icons/play_btn_icon.svg';
import {ReactComponent as PauseBtnIcon} from 'material/icons/pause_btn_icon.svg';

const AudioTag = observer(class AudioTag extends React.Component
{
	constructor(props)
	{
		super(props);
		audioState.audio.src = process.env.PUBLIC_URL + "material/music/" + this.props.audioInfo.id + ".mp3";
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
		playlistState.activeIndex = this.props.audioNum;
		if(audioState.audio.paused)
		{
			audioState.audio.play();
		}
		else audioState.audio.pause();
	}

	makeImageSrc()
	{
		
	}

	render()
	{
		return(
			<div className = {this.state.isMouseIn ? "audio selected" : "audio"} data-url = {this.props.audioInfo.id + ".mp3"}
			onMouseEnter = {(event)=>{this.audioMouseEnter(event)}} 
			onMouseLeave = {(event)=>{this.audioMouseLeave(event)}}>
				<div className = "index-btn">
				{
					(this.state.isMouseIn || playlistState.activeIndex == this.props.audioNum) ?
					(<div className = "play-btn" onClick = {(event)=>{this.playBtnClick(event)}}>
						{audioState.audio.paused ?
						 	<PlayBtnIcon fill = "white" />
						 	:
						 	<PauseBtnIcon fill = "white" />
						}
					</div>)
					:
					<div className = "index">{this.props.audioNum}</div>
				}
				</div>
				<div className = "audio-image">
					<img src = {process.env.PUBLIC_URL + 'material/images/albums/' + this.props.audioInfo.id + '.jpg'} /> 
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

});



export default AudioTag;