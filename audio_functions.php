<?php 
	$audioNum = 0;
	function audio($audio)
	{ 

		$GLOBALS['audioNum']++;
?>
		<div class = "audio" data-index = <?= $GLOBALS['audioNum'] ?> data-url= "<?= $audio['id'] ?>.mp3">
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
			<div class = "audio-album"></div>
			<div class = "more-dur">
				<div class = "duration"></div>
				<div class = "more-btn"><i class = "fa-light fa-arrow-down-to-line"></i></div>
			</div>
		</div>

<?php } ?>

<?php 
	function playList($playlistId){
		$db = new PDO('mysql:host='.$_SERVER['SERVER_NAME'].';dbname='.$GLOBALS['dbName'], 'root');
		$audioInfoQ = $db->
		prepare("select id, name, artist, album_id from audio where id in (select audio_id from audio_to_playlist where playlist_id = ?);");
		$audioInfoQ->execute(Array($playlistId));
		$audioInfo = $audioInfoQ->fetchAll(PDO::FETCH_ASSOC);
		// $playlistInfoQ = $db->prepare("select name, artist from playlists where playlist_id = ?");
		// $playlistInfoQ->execute(Array($playlistId))
		// $playlistInfo 



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
				foreach($audioInfo as $audio)
				{
					audio($audio);
				} ?>
			</div>
		</div>

<?php } ?>

