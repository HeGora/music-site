
import './App.css';
import {Playlist} from 'components/Playlist.js';
import 'css/audio_controls.css';
import 'css/AudioTag.css';
import 'css/Playlist.css';

function App() {

  const audioInfo1 = {
    id:"1",
    name:"thing",
    artist:"metallica",
    album:"1"
  };

    const audioInfo2 = {
    id:"2",
    name:"thing1",
    artist:"metallica",
    album:"1"
  };

    const audioInfo3 = {
    id:"3",
    name:"thing2",
    artist:"metallica",
    album:"1"
  };

  const playlistInfo = {
    name: 'master',
    artist: 'metallica',
    id: '1',
  };

  const arr = [audioInfo1, audioInfo2, audioInfo3];

  return (
    <div>
    <Playlist audios = {arr} playlistInfo = {playlistInfo} />
    </div>
  );
}

export default App;
