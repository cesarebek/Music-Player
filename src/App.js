import React from 'react';
//Import Styles
import './styles/app.scss';
//Adding components
import Player from './components/Player';
import Song from './components/Song';
//Import Data
import data from './util';

function App() {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
}
export default App;
