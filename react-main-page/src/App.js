
import './App.css';
import {AudioTag} from 'components/AudioTag.js';
import {Playlist} from 'components/Playlist.js';
import 'css/audio_controls.css';
import 'css/AudioTag.css';
import 'css/Playlist.css';

function App() {

  const audioInfo1 = {
    id:"1",
    name:"thing",
    artist:"metallica",
    album:"1",
    audioNum:"1"
  };

    const audioInfo2 = {
    id:"12",
    name:"thing1",
    artist:"metallica",
    album:"1",
    audioNum:"2"
  };

    const audioInfo3 = {
    id:"11",
    name:"thing2",
    artist:"metallica",
    album:"1",
    audioNum:"3"
  };

  const arr = [audioInfo1, audioInfo2, audioInfo3];

  return (
    <div>
    <Playlist audios = {arr} name = 'master' artist = 'metallica'/>
    </div>
  );
}

export default App;
