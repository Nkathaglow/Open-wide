import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import SongItem from './SongItem';

const MyPlaylist = ({ myPlaylist }) => {
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (searchTerm) => {
    const filteredList = myPlaylist.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaylist(filteredList);
  };

  const handleReset = () => {
    setFilteredPlaylist(myPlaylist);
  };

  useEffect(() => {
    setFilteredPlaylist(myPlaylist);
    setIsLoading(false);
  }, [myPlaylist]);

  return (
    <>
      <div className="playlist-search">
        <SearchButton handleSearch={handleSearch} />
        <button onClick={handleReset}>Reset</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredPlaylist.length > 0 ? (
        <div className="playlists">
          {filteredPlaylist.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
      ) : (
        <p>No matching playlists found.</p>
      )}
    </>
  );
};

export default MyPlaylist;
