import React, { useEffect } from "react";

function LineAnimation({ lineLength }) {
  useEffect(() => {
    const line = document.getElementById("animated-line");
    line.style.strokeDasharray = lineLength;
    line.style.strokeDashoffset = lineLength;

    function startAnimation() {
      line.style.transition = "stroke-dashoffset 2s linear";
      line.style.strokeDashoffset = "0";
    }
    startAnimation();
  }, [lineLength]);

  return (
    <svg>
      <line id="animated-line" x1="10" y1="10" x2="90" y2="90"></line>
    </svg>
  );
}

export default LineAnimation;
