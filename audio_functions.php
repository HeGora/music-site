<?php 
	$audioNum = 0;
	function audio($audio)
	{ 

		$GLOBALS['audioNum']++;
?>
		<div class = "audio" data-index = <?= $GLOBALS['audioNum'] ?> data-url= "<?= $audio['audio_id'] ?>.mp3">
			<div class = "index-btn">
				<div class = "index"><?= $GLOBALS['audioNum'] ?></div>
				<div class = "play-btn" style = "display: none">
					<i class="fa-sharp fa-solid fa-play"></i>
				</div>
			</div>
			<div class = "audio-image"></div>
			<div class = "audio-title">
				<div class = "audio-name"><?= $audio['name'] ?></div>
				<div class = "audio-artist"><?= $audio['artist'] ?></div>
			</div>
			<div class = "audio-album"><?= $audio['album']  ?></div>
			<div class = "more-dur">
				<div class = "duration"></div>
				<div class = "more-btn"><i class = "fa-light fa-arrow-down-to-line"></i></div>
			</div>
		</div>

<?php } ?>

<?php 
	function audioList($playlistId){
		$db = new PDO('mysql:host=localhost;dbname=mysite_db','root');
		$audioIdsQ = $db->prepare("select audio_id from audio_in_playlist where playlist_id = ?");
		$audioIds = $audioIdsQ->execute($playlistId);
		$playlistInfoQ = $db->prepare("select name from playlists where playlist_id = ?");
		$playlistInfo = $playlistInfoQ->execute($playlistId);



		?>
		<div class = "playlist">
			<div class = "list-header">
				<div class = "header-image"></div>
				<div class = "header-info">
					<div class = "audio-title">
						<div class = "audio-name">name</div>
						<div class = "audio-artist">artist</div>
					</div>
					<div class = "num-time"></div>
					<div class = "tags">
						
					</div>
				</div>
			</div>
			<div class = "audio-list">
				<div class = "table-header">
					<div class = "th-num">#</div>
					<div class = "th-title">Название</div>
					<div class = "th-album">Альбом</div>
					<div class = "th-sort">i</div>
				</div>
				
				<?php
				foreach($audios as $audio)
				{
					audio($audio);
				} ?>
			</div>
		</div>

<?php } ?>

