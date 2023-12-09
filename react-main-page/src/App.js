
import './App.css';
import Playlist from 'components/Playlist.js';
import VerticalPlayer from 'components/VerticalPlayer.js';

function App() {

  const audioInfo1 = {
    id:'1',
    audioSrc: process.env.PUBLIC_URL + 'material/music/1.mp3',
    imageSrc: process.env.PUBLIC_URL + 'material/images/audios/3.jpg',
    playlistId: 2,
    name:'thing',
    artist:'metallica',
    album:'1'
  };

    const audioInfo2 = {
    id:'2',
    audioSrc: process.env.PUBLIC_URL + 'material/music/2.mp3',
    imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/1.jpg',
    playlistId: 2,
    name:'thing1',
    artist:'metallica',
    album:'1'
  };

    const audioInfo3 = {
    id:'3',
    audioSrc: process.env.PUBLIC_URL + 'material/music/3.mp3',
    imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/1.jpg',
    playlistId: 2,
    name:'thing2',
    artist:'metallica',
    album:'1'
  };

  const playlistInfo = {
    name: 'Gail for life',
    artist: 'Metallica',
    id: '1',
    duration: '3:25',
    imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/1.jpg',
  };

  const arr = [audioInfo1, audioInfo2, audioInfo3];

  const playlistColorTheme = {
    audiolistColor: '#3D3D3D',
    playlistColor: '#404040',
  }

  const verticalPlayerColorTheme = {
    playerColor: '#3D3D3D',
  }

  return (
    <div className = "app-area-wrapper">
      <div className = "left-menu-area">
        <div className = "menu-wrapper">
        </div>
        <div className = "vertical-player-wrapper">
          <VerticalPlayer colorTheme = {verticalPlayerColorTheme}/>
        </div>
      </div>
      <div className = "main-area">
        <div className = "main-header"></div>
        <div className = "playlist-wrapper">
          <Playlist audios = {arr} playlistInfo = {playlistInfo}
           colorTheme = {playlistColorTheme}/>
        </div>
      </div>
    </div>
  );
}

export default App;
