import listening from '../assets/listening.jpg';
import cassette from '../assets/cassette.jpg';
import headphones from '../assets/headphones.jpg';
import instruments from '../assets/instruments.jpg';
import musiclibrary from '../assets/musiclibrary.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header>
        <div className='image-side'>
          <img src={listening} alt="Listening" />
        </div>
        <div className='text-side'>
          <h2>&apos;Where words fail <br /> <span>Music speaks</span>&apos;</h2>
          <p>
            One of the most remarkable things about music is its ability to bring people together. Whether it's through a shared love of a particular genre or a mutual appreciation for a particular artist, music has the power to create a sense of community and belonging. This is particularly evident at live concerts and festivals, where people from all walks of life come together to celebrate their shared love of music.
          </p>
          <Link to="./Playlist"><button id="text-side-button">Discover</button></Link>
        </div>
      </header>
      <div className="body-section">
        <div className="body-section-items cassette">
          <img src={cassette} alt="Cassette" />
          <blockquote>
            &quot;A painter paints pictures on canvas. <br /> But musicians paint their pictures on silence.&quot; <br /> <span> – Leopold Stokowski </span>
          </blockquote>
        </div>
        <div className="body-section-items headphones">
          <img src={headphones} alt="Headphones" />
          <blockquote>
            &quot;Music is a language that doesn’t speak in particular words. <br /> It speaks in emotions, and if it’s in the bones, <br /> it’s in the bones.&quot; <br /> <span> – Keith Richards</span>
          </blockquote>
        </div>
        <div className="body-section-items instruments">
          <img src={instruments} alt="Instruments" />
          <blockquote>
            &quot;After silence, that which comes <br /> nearest to expressing the inexpressible is music.&quot; <br /> <span> – Aldous Huxley </span>
          </blockquote>
        </div>
        <div className="body-section-items musiclibrary">
          <img src={musiclibrary} alt="Music Library" />
          <blockquote>
            &quot;Music can name the unnameable <br /> and communicate the unknowable.&quot; <br /> <span> – Leonard Bernstein </span>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Home;
