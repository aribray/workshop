import React from 'react';

export default function PlaylistResult({ song, chooseSong }) {

  function handlePlay() {
    chooseSong(song);
  };

  return(
    <div 
      className='d-flex m-2 pr-2 align-items-center'
      style={{ cursor: 'crosshair', 'padding': '5px'}}
      onClick={handlePlay}
    >
      <img src={song.songImg} alt='track cover art' style={{padding: '20px'}}/>
      <div style={{'padding-left': '30px', 'font-size': '28px'}}>
        <div>{song.title}</div>
        <div className='text-muted'>{song.artist}</div>
      </div>
    </div>
  )
}
