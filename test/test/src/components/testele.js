import { useState } from "react";

const Element = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <p>{state}</p> {/*초기값인 0 출력*/}
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        버튼
      </button>
    </>
  );
};

export default Element;
