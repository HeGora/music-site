import React from 'react';
import audioState from 'stores/AudioState.js';
import {ReactComponent as PlayBtnIcon} from 'material/icons/play_btn_icon.svg';

class AudioTag extends React.Component
{
	constructor(props)
	{
		super(props);
		audioState.audio.src = "https://cdn8.sefon.pro/prev/Jc_1rZxzn61HW8KpXlvqYw/1683973574/403/Andro%20feat.%20ELMAN%20%26%20TONI%20%26%20MONA%20-%20%D0%97%D0%B0%D1%80%D0%B8%20%28192kbps%29.mp3";
		this.state = {
			isMouseIn: false,
		};
		console.log("something");
	}

	audioMouseEnter(event)
	{
		this.setState({isMouseIn: true});
		audioState.audio.play();
	}

	audioMouseLeave(event)
	{
		this.setState({isMouseIn: false});
		audioState.audio.pause();
	}

	render()
	{
		return(
			<div className = {this.state.isMouseIn ? "audio selected" : "audio"} data-url = {this.props.audioInfo.id + ".mp3"}
			onMouseEnter = {(event)=>{this.audioMouseEnter(event)}} 
			onMouseLeave = {(event)=>{this.audioMouseLeave(event)}}>
				<div className = "index-btn">
				{
					this.state.isMouseIn ?
					<div className = "play-btn" onClick = {(e)=>{this.props.playBtnClick(e)}}>
						<PlayBtnIcon fill = "white" />
					</div>
					:
					<div className = "index">{this.props.audioInfo.audioNum}</div>
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

}

export { AudioTag };