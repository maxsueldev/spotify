import { Link } from "react-router-dom";
import "./styles.css";

const SongItem = ({ id, name, image, duration, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem do album da música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p className="song-item__duration">{duration}</p>
    </Link>
  );
};

export default SongItem;
