import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Timer from "./components/timer";
import Element from "./components/testele";

// function App() {
//   const [showTimer, setShowTimer] = useState(false);
//   return (
//     <div>
//       {showTimer && <Timer />}

//       <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
//     </div>
//   );
// }

// const heavyWork = () => {
//   console.log("엄청 무거운 작업!!!");
//   return ["홍길동", "김민수"];
// };

// function App() {
//   const [names, setNames] = useState(() => {
//     return heavyWork();
//   });
//   const [input, setInput] = useState("");

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleUpload = (e) => {
//     setNames((prevState) => {
//       return [input, ...prevState];
//     });
//   };

//   return (
//     <>
//       <input type="text" value={input} onChange={handleInputChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {names.map((name, idx) => {
//         return <p key={idx}>{name}</p>;
//       })}
//     </>
//   );
// }

// const App = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   console.log(countRef);

//   console.log("렌더링");

//   const increaseCountState = () => {
//     setCount(count + 1);
//   };

//   const increaseCountRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log("Ref : ", countRef.current);
//   };

//   return (
//     <>
//       <p>State : {count}</p>
//       <p>Ref: {countRef.current}</p>
//       <button onClick={increaseCountState}>State 올려</button>
//       <button onClick={increaseCountRef}>Ref 올려</button>
//     </>
//   );
// };

// const App = () => {
//   const [renderer, setRenderer] = useState(0);
//   const countRef = useRef(0);
//   let countVar = 0;

//   const increaseRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log("ref: ", countRef.current);
//   };

//   const increaseVar = () => {
//     countVar = countVar + 1;
//     console.log("var : ", countVar);
//   };

//   const doRendering = () => {
//     setRenderer(renderer + 1);
//   };

//   const printResults = () => {
//     console.log(`ref: ${countRef.current}, var: ${countVar}`);
//   };

//   return (
//     <>
//       <p>Ref: {countRef.current}</p>
//       <p>Var: {countVar}</p>
//       <button onClick={increaseRef}>Ref 올려</button>
//       <button onClick={increaseVar}>Var 올려</button>
//       <button onClick={doRendering}>렌더!</button>
//       <button onClick={printResults}>Ref Var 값 출력</button>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(1);
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//     console.log("렌더링 수 : ", renderCount.current);
//   });

//   return (
//     <>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>올려</button>
//     </>
//   );
// };

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;
