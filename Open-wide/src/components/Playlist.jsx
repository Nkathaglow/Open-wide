import { useState, useEffect } from 'react';
import Search from './SearchButton';
import SongItem from './SongItem';
import Slider from './ImageSlider';

const Playlist = ({ playList, addToMyPlaylist }) => {
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (searchTerm) => {
    const filteredList = playList.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaylist(filteredList);
  };

  const handleReset = () => {
    setFilteredPlaylist(playList);
  };

  useEffect(() => {
    setFilteredPlaylist(playList);
    setIsLoading(false);
  }, [playList]);

  return (
    <>
      <div className="playlist-search">
        <Search handleSearch={handleSearch} />
        <button onClick={handleReset}>Reset</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredPlaylist.length > 0 ? (
        <div className="playlists">
          {filteredPlaylist.map((song) => (
            <SongItem key={song.id} song={song} addToMyPlaylist={addToMyPlaylist} inPlaylist={false} />
          ))}
        </div>
      ) : (
        <p>No matching playlists found.</p>
      )}
      <Slider />
    </>
  );
};

export default Playlist;