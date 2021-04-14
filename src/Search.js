import React, { useState } from "react";
import SResult from "./SResult";

const Search = () => {
  const [img, setImg] = useState("");

  const eventInput = (event) => {
    const data = event.target.value;
    setImg(data);
    console.log(data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Anything"
        value={img}
        onChange={eventInput}
      />
      {img === "" ? null : <SResult name={img} />}
    </div>
  );
};

export default Search;
