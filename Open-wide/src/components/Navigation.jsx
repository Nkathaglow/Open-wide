import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/carjam.svg';

function Dark() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkModeOn) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  const handleToggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <div className='container'>
      <label id='toggle-dark-theme'>Toggle Dark Mode</label>
      <input
        id='checkbox'
        name='checkbox'
        type='checkbox'
        checked={isDarkModeOn}
        onChange={handleToggleDarkMode}
      />
      <label className='label' htmlFor='checkbox'></label>
      {/* <button onClick={handleToggleDarkMode}>
        {isDarkModeOn ? 'Turn off dark mode' : 'Turn on dark mode'}
      </button> */}
    </div>
  );
}

const Navigation = () => {
  return (
    <nav>
      <NavLink><img src={logo} alt='open wide' to={'/'} /></NavLink>
      <NavLink className='site-title' to={'/'}>BeatRoute</NavLink>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'./playlist'}>Songs</NavLink></li>
        <li><NavLink to={'/myplaylist'}>Playlist</NavLink></li>
      </ul>
      <Dark />
    </nav>
  );
};

export default Navigation;