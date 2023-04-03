function mp3_player()
{
	var temp_audio = new Audio(), currentAudio, volume;
	var onplay_controls;
	var rootDir, musicDir;
	var pause_class, play_class;
	var playModes = ["fa-sharp fa-solid fa-shuffle", "fa-solid fa-arrows-repeat inactive",
		"fa-solid fa-arrows-repeat", "fa-solid fa-arrows-repeat-1", "fa-sharp fa-solid fa-shuffle"], audioNum;

	function mainPlayBtnClick()
	{
		if(temp_audio.paused)
		{
			temp_audio.play();
			currentAudio.querySelector(".play-btn i").setAttribute("class", pause_class);
			onplay_controls.querySelector(".play-btn i").setAttribute("class", pause_class);
		}
		else 
		{
			temp_audio.pause();
			currentAudio.querySelector(".play-btn i").setAttribute("class", play_class);
			onplay_controls.querySelector(".play-btn i").setAttribute("class", play_class);
		}

	}

	function switchAudio(newAudio)
	{
		if(currentAudio)
		{
			currentAudio.setAttribute("class", "audio");
			currentAudio.querySelector(".play-btn i").setAttribute("class", play_class)
		}

		currentAudio = newAudio;
		currentAudio.getAttribute("class", "audio active");
		currentAudio.querySelector(".play-btn i").setAttribute("class", pause_class);

		temp_audio.src = musicDir + currentAudio.getAttribute("data-url");
		temp_audio.play();
		audioProgress();

		onplay_controls.style.display = "flex";
		onplay_controls.querySelector(".play-btn i").setAttribute("class", pause_class);
		if(currentAudio.getAttribute("data-index") != audioNum && currentAudio.getAttribute("data-index") != 1)
		{
			onplay_controls.querySelector(".next-btn").setAttribute("class", "next-btn");
			onplay_controls.querySelector(".prev-btn").setAttribute("class", "prev-btn");
		}
		else if(currentAudio.getAttribute("data-index") == audioNum)
		{
			onplay_controls.querySelector(".next-btn").setAttribute("class", "next-btn inactive");
		}
		else if(currentAudio.getAttribute("data-index") == 1)
		{
			onplay_controls.querySelector(".prev-btn").setAttribute("class", "prev-btn inactive");
		}
		onplay_controls.querySelector(".audio-name").innerHTML = currentAudio.querySelector(".audio-name").innerHTML;
		onplay_controls.querySelector(".audio-artist").innerHTML = currentAudio.querySelector(".audio-artist").innerHTML;


	}

	function playBtnClick(event)
	{
		if(temp_audio.src == musicDir + event.currentTarget.closest(".audio").getAttribute("data-url"))
		{
			mainPlayBtnClick();
		}
		else
		{	
			switchAudio(event.currentTarget.closest(".audio"));
		}
	}

	function audioProgress()
	{
		//визуальная часть
		onplay_controls.getElementsByClassName("audio-progress")[0].style.width
		 = (Math.round(temp_audio.currentTime) * 100) / Math.round(temp_audio.duration) + '%';
	}

	function playModeBtnClick(event)
	{
		let playModeBtn = onplay_controls.querySelector(".play-mode-btn i");
		let playMode = playModeBtn.getAttribute("class");
		for(let i = 0; i < playModes.length; ++i)
		{
			if(playModes[i] == playMode)
			{
				playModeBtn.setAttribute("class", playModes[i + 1]);
				break;
			}
		}

	}

	function audioEnd(event)
	{
		let playMode = onplay_controls.querySelector(".play-mode-btn i").getAttribute("class");
		if(playMode == playModes[3])
		{
			switchAudio(currentAudio);

		}
		else if(playMode == playModes[0])
		{
			let data_index = '[data-index = "' + (Math.floor(Math.random() * audioNum) + 1) + '"]';
			console.log(data_index);
			switchAudio(document.querySelector('.audio' + data_index));
		}
		else
		{
			let data_index;
			if(Number(currentAudio.getAttribute("data-index")) == audioNum)
			{
				if(playMode == playModes[2])
				{
					data_index = '[data-index = "' + 1 + '"]';
					switchAudio(document.querySelector('.audio' + data_index));
				}
				else
				{
					currentAudio.querySelector(".play-btn i").setAttribute("class", play_class);
					onplay_controls.querySelector(".play-btn i").setAttribute("class", play_class);
				}
			}
			else
			{
				data_index = '[data-index = "' + (Number(currentAudio.getAttribute("data-index")) + 1) + '"]';
				switchAudio(document.querySelector('.audio' + data_index));
			}
		}
	}

	function nextAudioClick(event)
	{
		if(currentAudio.getAttribute("data-index") != audioNum)
		{
			let data_index = '[data-index = "' + (Number(currentAudio.getAttribute("data-index")) + 1) + '"]';
			console.log();
			switchAudio(document.querySelector('.audio' + data_index));
		}
	}

	function prevAudioClick(event)
	{
		if(currentAudio.getAttribute("data-index") != 1)
		{
			let data_index = '[data-index = "' + (Number(currentAudio.getAttribute("data-index")) - 1) + '"]';
			console.log();
			switchAudio(document.querySelector('.audio' + data_index));
		}
	}

	function audioTrackClick(event)
	{
		temp_audio.currentTime = Math.round(temp_audio.duration * 
			((event.clientX - event.currentTarget.getBoundingClientRect().x) / event.currentTarget.clientWidth));
		audioProgress();
	}

	function audioTrackMove(event)
	{
		if(event.target.getAttribute("class") == "bar-tip")
			return;
		let secs = Math.round(temp_audio.duration * 
			((event.clientX - event.currentTarget.getBoundingClientRect().x) / event.currentTarget.clientWidth));
		if(secs%60 < 10)
			sec_part = "0" + secs%60
		else sec_part = secs%60;
		bar_tip = event.currentTarget.querySelector('.bar-tip');
		bar_tip.textContent = Math.floor(secs/60) + ":" + sec_part;
		bar_tip.style.left = event.clientX - event.currentTarget.getBoundingClientRect().x - bar_tip.clientWidth/2 + 'px';
	}

	function getVolumeIcon()
	{
		if(volume >= 0.7)
			return "fa-solid fa-volume-high";
		else if(volume >= 0.3)
			return "fa-solid fa-volume";
		else if(volume > 0)
			return "fa-solid fa-volume-low";
		else return "fa-solid fa-volume-off";
	}

	function volumeIconClick(event)
	{
		let icon = event.currentTarget.getElementsByTagName("i")[0];
		if(icon.getAttribute("class") == "fa-solid fa-volume-xmark")
		{
			icon.setAttribute("class", getVolumeIcon());
			temp_audio.volume = volume;
			onplay_controls.getElementsByClassName("volume")[0].style.width = temp_audio.volume * 100 + "%";
		}
		else
		{
			icon.setAttribute("class", "fa-solid fa-volume-xmark");
			temp_audio.volume = 0;
			onplay_controls.getElementsByClassName("volume")[0].style.width = 0 + "%";
		}
	}

	function volumeBarMove(event)
	{
		if(event.target.getAttribute("class") == "bar-tip")
			return;
		let percents = (event.clientX - event.currentTarget.getBoundingClientRect().x) / event.currentTarget.clientWidth;
		if(percents < 0)
		{
			percents = 0;
		}
		bar_tip = event.currentTarget.querySelector('.bar-tip');
		bar_tip.textContent = Math.round(percents*101) + '%';
		bar_tip.style.left = event.clientX - event.currentTarget.getBoundingClientRect().x - bar_tip.clientWidth/2 + 'px';
		if(event.buttons == 1)
		{
			volumeBarClick(event);
 
		}
	}

	function volumeBarClick(event)
	{
		let percents = (event.clientX - event.currentTarget.getBoundingClientRect().x) / event.currentTarget.clientWidth;
		if(percents < 0)
		{
			percents = 0;
		}
		volume = percents;
		onplay_controls.querySelector(".sound .icon .fa-solid").setAttribute("class", getVolumeIcon());
		temp_audio.volume = volume;
		onplay_controls.getElementsByClassName("volume")[0].style.width = temp_audio.volume * 100 + "%";
	}

	function audioMouseEnter(event)
	{
		event.currentTarget.style.backgroundColor = "#2A2A2A"
		event.currentTarget.querySelector(".index").style.display = "none";
		event.currentTarget.querySelector(".play-btn").style.display = "inline-block";
	}

	function audioMouseLeave(event)
	{
		event.currentTarget.style.backgroundColor = "";
		event.currentTarget.querySelector(".index").style.display = "inline-block";
		event.currentTarget.querySelector(".play-btn").style.display = "none";
	}

	function downloadClick(event)
	{
		let link = document.createElement('a');
		let audio = event.currentTarget.closest('.audio');
		link.download = audio.querySelector('.audio-name').innerHTML;
		link.href = musicDir + audio.getAttribute("data-url");
		link.click();
	}

	function setInitialSettings()
	{
		onplay_controls = document.getElementById("main-audio-controls");
		volume = temp_audio.volume;
		onplay_controls.getElementsByClassName("volume")[0].style.width = temp_audio.volume * 100 + "%";


		let initials = document.getElementById("initials");
		rootDir = initials.getAttribute("data-rootDir");
		musicDir = initials.getAttribute("data-musicDir");
		audioNum = initials.getAttribute("data-audioNum");

		play_class = "fa-sharp fa-solid fa-play";
		pause_class = "fa-sharp fa-solid fa-pause";
	}

	function setEvents()
	{
		temp_audio.addEventListener("timeupdate", audioProgress, false);
		temp_audio.addEventListener("ended", audioEnd, false);


		onplay_controls.querySelector(".play-mode-btn").addEventListener("click", playModeBtnClick, false);
		onplay_controls.getElementsByClassName("audio-track")[0].addEventListener("mousemove", audioTrackMove, false);
		onplay_controls.getElementsByClassName("audio-track")[0].addEventListener("click", audioTrackClick, false);
		onplay_controls.querySelector(".sound .icon").addEventListener("click", volumeIconClick, false);
		onplay_controls.getElementsByClassName("soundbar")[0].addEventListener("mousemove", volumeBarMove, false);
		onplay_controls.getElementsByClassName("soundbar")[0].addEventListener("click", volumeBarClick, false);
		onplay_controls.querySelector(".prev-btn").addEventListener("click", prevAudioClick, false);
		onplay_controls.querySelector(".next-btn").addEventListener("click", nextAudioClick, false);
		onplay_controls.getElementsByClassName("play-btn")[0].addEventListener("click", mainPlayBtnClick, false);

		let play_btns = document.getElementsByClassName("play-btn");
		for(let i = 0; i < play_btns.length - 1; ++i)
		{
			play_btns.item(i).addEventListener("click", playBtnClick, false);
		}

		let downloads = document.getElementsByClassName("download");
		for(let i = 0; i < downloads.length; ++i)
		{
			downloads[i].addEventListener("click", downloadClick, false);
		}

		let audios = document.getElementsByClassName("audio");
		for(let i = 0; i < audios.length; ++i)
		{
			audios[i].addEventListener("mouseenter", audioMouseEnter, false);
			audios[i].addEventListener("mouseleave", audioMouseLeave, false);
		}
	}


	setInitialSettings();
	setEvents();
}

mp3_player();



/* fa-sharp fa-solid fa-shuffle fa-solid fa-arrows-repeat fa-solid fa-arrows-repeat-1*/




