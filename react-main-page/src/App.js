
import './App.css';
import {Audio} from 'components/Audio.js'
import 'css/FontAwesome/css/all.min.css'
import 'css/audio_controls.css'

function App() {

  const audioInfo = {
    id:"10",
    name:"thing",
    artist:"metallica",
    album:"1",
    audioNum:"1"
  };

  return (
    <Audio audioInfo = {audioInfo} playBtnClick = {(e)=>{console.log("playBtnClick");}}/>
  );
}

export default App;
