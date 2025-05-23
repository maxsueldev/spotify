import ItemsList from "../ItemsList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";
import "./styles.css";

const Main = ({ type }) => {
  const itemsPerRow = type
    ? Infinity
    : Math.floor((window.innerWidth - 25 * 2 - 8 * 2) / 172);

  return (
    <main className="main">
      {!type || type === "artists" ? (
        <ItemsList
          title="Artistas populares"
          type="Artista"
          path="/artists"
          individualPath="/artist"
          itemsToShow={itemsPerRow}
          itemsArray={artistArray}
        />
      ) : (
        ""
      )}

      {!type || type === "songs" ? (
        <ItemsList
          title="Músicas populares"
          path="/songs"
          individualPath="/song"
          itemsToShow={itemsPerRow * 2}
          itemsArray={songsArray}
          style="square"
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default Main;
