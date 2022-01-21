import React from "react";
import { API_URL, DATETIME, KEY_HASH, KEY_PUBLIC } from "../contants";
import Character from "./Character";

export default function Characters() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    window
      .fetch(
        `${API_URL}/characters?ts=${DATETIME}&apikey=${KEY_PUBLIC}&hash=${KEY_HASH}`
      )
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        const charactersResult = json.data.results;
        setCharacters(charactersResult);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="characters-container">
      {loading ? "espere un momento por favor" : ""}
      <div className="container">
        <div className="row">
          {characters.map((character, k) => (
            <div className="col-6 col-md-4 col-lg-3" key={k}>
              <Character character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
