import React from "react";

function Loader() {
  return (
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="10"
        aria-valuemax="100"
        style={75}
      ></div>
    </div>
  );
}

export default Loader;
