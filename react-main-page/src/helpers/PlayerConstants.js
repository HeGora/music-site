export const PLAYBACK_MODE = {
  SHUFFLE: 0,
  REPEAT: 1,
  REPEAT_ONE: 2
};

export const VOLUME_LVLS = {
  HIGH: 0.6,
  MID: 0.3,
  LOW: 0,
}

export const DEMO_PAGE_DATA = {
  audios: [
    {
      id:'1',
      audioSrc: process.env.PUBLIC_URL + 'material/music/1.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/3.jpg',
      playlistId: 2,
      name:'thing',
      artist:'metallica',
      album:'1'
    },

    {
      id:'2',
      audioSrc: process.env.PUBLIC_URL + 'material/music/2.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/1.jpg',
      playlistId: 2,
      name:'thing1',
      artist:'metallica',
      album:'1'
    },

    {
      id:'3',
      audioSrc: process.env.PUBLIC_URL + 'material/music/3.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/1.jpg',
      playlistId: 2,
      name:'thing2',
      artist:'metallica',
      album:'1'
    }
  ],
  playlistInfo: {
    name: 'Gail for life',
    artist: 'Metallica',
    id: '1',
    duration: '3:25',
    imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/1.jpg',
  }
}