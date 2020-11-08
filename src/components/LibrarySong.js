import React from 'react';

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  songs,
  id,
  key,
}) => {
  //State

  //Functions
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //Check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  //Ref

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt="cover" />
      <div className="song-description">
        <h4>{song.name}</h4>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
