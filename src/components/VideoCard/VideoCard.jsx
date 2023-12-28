import featured from "../../assets/featured.png";

function VideoCard({ movie = {} }) {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <svg
          className="drop-shadow-xl"
          width="36"
          height="36"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="video-information">
        <h3 onClick={() => console.log(movie.name)}>{movie.name}</h3>
        <h5 onClick={() => console.log(movie.description)}>
          {movie.description}
        </h5>
        {movie.featured && <img className="featured-image" src={featured} />}
      </div>
    </div>
  );
}

export default VideoCard;
