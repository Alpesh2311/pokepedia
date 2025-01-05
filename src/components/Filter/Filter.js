import React, { useState } from "react";
import "./Filter.css";

function Filter({ name, setName, onSearch, clear, more }) {
  return (
    // filter component for filtering pokemons by name
    <div className={`filter ${more ? "blur" : ""}`}>
      <input
        type="text"
        value={name}
        placeholder="Search by name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button className="btn search" disabled={!name} onClick={onSearch}>
        Search
      </button>
      <button className="btn clear" onClick={clear}>
        {" "}
        Clear
      </button>
    </div>
  );
}

export default Filter;
