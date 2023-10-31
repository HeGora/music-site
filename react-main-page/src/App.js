
import './App.css';
import Playlist from 'components/Playlist.js';

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
    name: 'master',
    artist: 'metallica',
    id: '1',
    duration: '3:25'
  };

  const arr = [audioInfo1, audioInfo2, audioInfo3];

  return (
    <div>
    <Playlist audios = {arr} playlistInfo = {playlistInfo} />
    </div>
  );
}

export default App;
