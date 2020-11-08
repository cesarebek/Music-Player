import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      {songs.map((song) => {
        return (
          <LibrarySong
            songs={songs}
            setSongs={setSongs}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            song={song}
            isPlaying={isPlaying}
            id={song.id}
            key={song.id}
          />
        );
      })}
    </div>
  );
};

export default Library;
