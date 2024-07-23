import React from 'react';

function SongItem({ song, addToMyPlaylist, inPlaylist }) {
  const str = song.eId;
  const id = str.split('/').pop();
  
  const nameString = song.name;
  const firstPart = nameString.split('-')[0].trim();

  return (
    <div className='song-item'>
      {song.img && (
        <img src={song.img} alt={song.name} />
      )}
      <div className="song-details">
        <h4 className="artist">{firstPart}</h4>
        <h5 className='song-name'>{song.name}</h5>
        <div className="song-button-section">
          <button onClick={(e) => {
            e.preventDefault();
            alert(`${song.name} added to Playlist`);
            addToMyPlaylist(song, inPlaylist);
          }}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <a href={`https://www.youtube.com/watch?v=${id}`} target='_blank' rel='noopener noreferrer'>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SongItem;
