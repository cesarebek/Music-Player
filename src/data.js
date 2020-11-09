import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Daylight',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10315',
      color: ['#F99DA8', '#4C3E79'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Nightglow',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9280',
      color: ['#F99DA8', '#4C3E79'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Upstate',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg',
      artist: 'Philanthrope',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10245',
      color: ['#A54639', '#6E3D26'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Bookshelves',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg',
      artist: 'Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10022',
      color: ['#90C4CD', '#205874'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Bliss',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg',
      artist: 'Misha, Jussi Halme',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9248',
      color: ['#2B4372', '#F6949D'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Rest Until Dark',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg',
      artist: 'Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10015',
      color: ['#90C4CD', '#205874'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
