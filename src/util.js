import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Daylight',
      cover: 'https://mp3.chillhop.com/serve.php/?mp3=10315',
      artist: 'Aiguille',
      audio: 'Aiguille',
      color: ['#F99DA8', '#4C3E79'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
