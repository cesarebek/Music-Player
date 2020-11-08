import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  currentSong,
}) => {
  //Functions
  const playSongHandler = () => {
    //Implemento la "funzione" toggle
    if (isPlaying) {
      //In questo momento la canzone è in pausa
      audioRef.current.pause();
      //Qui cambio lo state da false a true
      setIsPlaying(!isPlaying);
    } else {
      //In questo momento la canzone è in play
      audioRef.current.play();
      //Qui cambio lo state da true a false
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      //Function available on stack overflow that format nicely the time
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="player">
      <div className="player-controls">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.durationTime || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.durationTime)}</p>
      </div>
      <div className="play-control">
        {/* icon={fa} it's a prop from the import of the logo */}
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
