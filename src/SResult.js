import React from "react";

const SResult = (props) => {
  const img = `https://source.unsplash.com/400x200/?${props.name}`;
  return (
    <div>
      <img src={img} alt="search" />
    </div>
  );
};

export default SResult;
