import React from "react";
import { useParams } from "react-router-dom";
import { API_URL, DATETIME, KEY_HASH, KEY_PUBLIC } from "./contants";

export default function PageCharacter() {
  const params = useParams();
  const { id } = params;
  const [comics, setComics] = React.useState([]);
  React.useEffect(() => {
    window
      .fetch(
        `${API_URL}/characters/${id}/comics?ts=${DATETIME}&apikey=${KEY_PUBLIC}&hash=${KEY_HASH}`
      )
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        const comicsResult = json.data.results;
        setComics(comicsResult);
      });
  }, [id]);
   
  return (
    <div className="App">
      <header className="App-header">{<h2>Comics</h2>}</header>
      <div className="App-content">
        <div className="comics-container">
          <div className="container">
            <div className="row">
              {comics.map((comic, k) => (
                <div className="col-6 col-md-4 col-lg-3" key={k}>
                  <div className="card">
                    <img
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      className="card-img-top"
                      alt={comic.name}
                    />
                    <div className="card-body">
                      <a href={`${comic.urls[0].url}`} target="_blank" rel="noreferrer">
                        <h5 className="card-title">{comic.title}</h5>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
