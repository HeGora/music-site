<?php 
include "audio_functions.php";
include "root_initials.php";
?>
<!DOCTYPE html>
<html>
<head>
	<title>main_page</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel = "stylesheet" href = "<?=$cssDir ?>audio_controls.css">
	<link rel="stylesheet" href="<?=$cssDir ?>FontAwesome/css/all.min.css">
</head>
<body>
	<i><?= $_SERVER['SERVER_NAME'] ?></i>
	<div class = "audio-list">
		<?php
			// $db = new PDO('mysql:host='.$_SERVER['SERVER_NAME'].';dbname='.$dbName,'root');
			// $q = $db->prepare('select audio_id, name, artist, album from audio');
			// $q->execute(array());
			// $audios = $q->fetchAll(PDO::FETCH_ASSOC);
			playList(1);
		 ?>
	</div>
	<div id = "main-audio-controls" style = "display:none">
		<div class = "left">
			<div class = "audio-title">
				<div class = "audio-name"></div>
				<div class = "audio-artist"></div>
			</div>
			<div class = "play-mode-btn"><i class="fa-solid fa-arrows-repeat inactive"></i></div>
		</div>
		<div class = "mid">
			<div class = "btns">
				<div class = "prev-btn"><i class="fa-sharp fa-solid fa-backward"></i></div>
				<div class = "play-btn"><i class="fa-sharp fa-solid fa-play"></i></div>
				<div class = "next-btn"><i class="fa-sharp fa-solid fa-forward"></i></div>
			</div>
			<div class = "progress-sound-wrapper">
				<div class = "audio-track">
					<div class = "bar-tip">00:00</div>
					<div class = "audio-progress"></div>
				</div>
				<div class = "sound">
					<div class = "icon">
						<i class="fa-solid fa-volume-high"></i>
					</div>
					<div class = "soundbar">
						<div class = "bar-tip">0%</div>
						<div class = "volume"></div>
					</div>
				</div>
			</div>
		</div>
		<div class = "right"></div>
	</div>
	<div id = "initials" data-rootDir = "<?=$rootDir ?>" data-musicDir = "<?=$musicDir ?>"
		data-audioNum = <?=$audioNum ?> style = "display: none"></div>
<script src="<?=$jsDir ?>mp3_player.js"></script>
</body>
</html>