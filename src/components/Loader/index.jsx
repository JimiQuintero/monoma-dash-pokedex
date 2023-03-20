import React from "react";
import { DotWave } from "@uiball/loaders";

function Loader() {
  return (
    <div className="container-loader">
      <DotWave size={47} speed={1} color="black" />
    </div>
  );
}

export default Loader;
