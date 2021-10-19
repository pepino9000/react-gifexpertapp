import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "Yuyu Hakusho"]);
  // };
  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </Fragment>
  );
};

export default GifExpertApp;
