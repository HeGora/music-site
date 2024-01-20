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
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Like a Machine',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'2',
      audioSrc: process.env.PUBLIC_URL + 'material/music/2.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Untraveled Road',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'3',
      audioSrc: process.env.PUBLIC_URL + 'material/music/3.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Born This Way',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'4',
      audioSrc: process.env.PUBLIC_URL + 'material/music/4.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Set Me On Fire',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'5',
      audioSrc: process.env.PUBLIC_URL + 'material/music/5.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Give It to Me',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'6',
      audioSrc: process.env.PUBLIC_URL + 'material/music/6.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'I See Red',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'7',
      audioSrc: process.env.PUBLIC_URL + 'material/music/7.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Light Up',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'8',
      audioSrc: process.env.PUBLIC_URL + 'material/music/8.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'In My Room',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'9',
      audioSrc: process.env.PUBLIC_URL + 'material/music/9.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Oxygen',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    },

    {
      id:'10',
      audioSrc: process.env.PUBLIC_URL + 'material/music/10.mp3',
      imageSrc: process.env.PUBLIC_URL + 'material/images/audios/2.jpg',
      playlistId: 2,
      name:'Glow',
      artist:'Thousand Foot Krutch',
      album:'Oxygen: Inhale'
    }

  ],
  playlistInfo: {
    name: 'Oxygen: Inhale',
    artist: 'Thousand Foot Krutch',
    id: '2',
    duration: '37:33',
    imageSrc: process.env.PUBLIC_URL + 'material/images/playlists/2.jpg',
  }
}