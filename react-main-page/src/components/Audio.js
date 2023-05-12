import React from 'react';

class Audio extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			isMouseIn: false
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

	render()
	{
		return(
			<div className = {this.state.isMouseIn ? "audio selected" : "audio"} data-url = {this.props.audioInfo.id + ".mp3"}
			onMouseEnter = {(event)=>{this.audioMouseEnter(event)}} 
			onMouseLeave = {(event)=>{this.audioMouseLeave(event)}}>
				<div className = "index-btn">
					<div className = "index">{this.props.audioInfo.audioNum}</div>
					<div className = "play-btn" style = {{ display: 'none' }} onClick = {(e)=>{this.props.playBtnClick(e)}}>
						<i className="fa-sharp fa-solid fa-play"></i>
					</div>
				</div>
				<div className = "audio-image"></div>
				<div className = "audio-title">
					<div className = "audio-name">{this.props.audioInfo.name}</div>
					<div className = "audio-artist">{this.props.audioInfo.artist}</div>
				</div>
				<div className = "audio-album">{this.props.audioInfo.album}</div>
				<div className = "more-dur">
					<div className = "duration"></div>
					<div className = "more-btn"><i className = "fa-light fa-arrow-down-to-line"></i></div>
				</div>
			</div>
		)
	}

}

export { Audio };