import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [isHide, setHide] = React.useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setHide(!isHide);
        }}
      >
        {isHide ? "Hide content" : "Reveal content"}
      </button>
      {isHide ? <p>Some text</p> : null}
    </div>
  );
};
