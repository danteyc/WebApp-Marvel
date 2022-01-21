import React from "react";

export default function Character({ character }) {
  return (
    <a href={`/character/${character.id}`} className="card">
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
    </a>
  );
}
