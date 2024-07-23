import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Playlist from './components/Playlist'
import Navigation from './components/Navigation'
import MyPlaylist from './components/MyPlaylist'


function App() {
  const [playList, setPlayList] = useState([])
  const [myPlaylist, setMyPlayList] = useState([])
  const url = 'https://api.allorigins.win/raw?url=https://openwhyd.org/adrien?format=json&limit=300'

  useEffect(() => { 
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(result => {setPlayList(result)})
    // .catch(error => console.error(`An error occurred ${error.message}`))
  }, [])

  //Add Songs to MYPlaylist
  function addToMyPlaylist(song, inPlayList) {
    if (myPlaylist.includes(song) && inPlayList === true) {
      setMyPlayList(myPlaylist.filter(({id}) => id !== song.id))
    } else if (myPlaylist.includes(song) === false) {
      setMyPlayList(myPlaylist => [...myPlaylist, song])
    }
  }
  
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/playlist' element={<Playlist playList={playList} setPlayList={setPlayList} addToMyPlaylist={addToMyPlaylist} />} />
      <Route path='/myplaylist' element={<MyPlaylist myPlaylist={myPlaylist} />} />
      
    </Routes>
    </>
  )
}

export default App