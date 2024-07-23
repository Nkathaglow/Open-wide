import { useSnapCarousel } from "react-snap-carousel";

const Slider = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
  const images = [
    "https://i.ytimg.com/vi/Wc9m5TrV0TU/default.jpg",
    "https://i.ytimg.com/vi/iXmqYW-dSAk/default.jpg",
    "https://i.ytimg.com/vi/m4JTJPC6C6A/default.jpg",
    "https://i.ytimg.com/vi/2P-AkPYrJTg/default.jpg",
    "https://i.ytimg.com/vi/nik91HjRchI/default.jpg",
    "https://i.ytimg.com/vi/PTVbju240Zc/default.jpg",
    "https://i.ytimg.com/vi/YYOyT_mwgsc/default.jpg",
    "https://i.ytimg.com/vi/H9UIdlXhrBQ/default.jpg",
    "https://i.ytimg.com/vi/M2fzZRXeplw/default.jpg",
    "https://i.ytimg.com/vi/nwuL5D-UCoE/default.jpg",
    "https://i.ytimg.com/vi/WhQHf1GJhRk/default.jpg",
    "https://i.ytimg.com/vi/73g9VTJZJhA/default.jpg",
    "https://i.ytimg.com/vi/GrDpPw6LfKM/default.jpg",
    "https://i.ytimg.com/vi/q1e9hQXXOuc/default.jpg",
    "https://i.ytimg.com/vi/pdT9ulYf7qU/default.jpg",
    "https://i.ytimg.com/vi/DccmKKnizFY/default.jpg",
    "https://i.ytimg.com/vi/EDK9KOfknTw/default.jpg",
    "https://i.ytimg.com/vi/Z5NoQg8LdDk/default.jpg",
    "https://i.ytimg.com/vi/DVG1_x7ph9k/default.jpg",
    "https://i.ytimg.com/vi/UALDtSFiUos/default.jpg",
    "https://i.ytimg.com/vi/oJ4rTHHZyv0/default.jpg",
  ];

  return (
    <>
      <ul className="slider-container" ref={scrollRef}>
        {images.map((image, i) => (
          <li key={i} className="image-container">
            <img src={image} alt={`Slide ${i + 1}`} />
          </li>
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <ol className="goto">
        {pages.map((_, i) => (
          <li key={i} className="goto-item" style={i === activePageIndex ? {} : { opacity: 0.5 }}>
            <button onClick={() => goTo(i)}>{i + 1}</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Slider;
