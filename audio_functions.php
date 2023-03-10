<?php 
	$audioNum = 0;
	function audio($audio)
	{ 

		$GLOBALS['audioNum']++;
?>
		<div class = "audio" data-index = <?= $GLOBALS['audioNum'] ?> data-url= "<?= $audio['audio_id'] ?>.mp3">
			<div class = "index"><?= $GLOBALS['audioNum'] ?></div>
			<div class = "play-btn" style = "display: none">
				<i class="fa-sharp fa-solid fa-play"></i>
			</div>
			<div class = "audio-title">
				<div class = "audio-name"><?= $audio['name'] ?></div>
				<div class = "audio-artist"><?= $audio['artist'] ?></div>
			</div>
			<div class = "audio-album"><?= $audio['album']  ?></div>
			<div class = "download"><i class = "fa-light fa-arrow-down-to-line"></i></div>
		</div>

<?php } ?>

<?php 
	function audioList($audios){
		foreach($audios as $audio)
		{
			audio($audio);
		}

	} 
?>

