import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import "./App.css";
import Timer from "./components/timer";
import Element from "./components/testele";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContenxt } from "./context/UserContext";
import Box from "./components/Box";

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

// const App = () => {
//   const inputRef = useRef();

//   useEffect(() => {
//     // console.log(inputRef);
//     inputRef.current.focus();
//   }, []);

//   const login = () => {
//     alert(`환영합니다 ${inputRef.current.value}!`);
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="username" />
//       <button onClick={login}>로그인</button>
//     </div>
//   );
// };

// const App = () => {
//   const [isDark, setIsDark] = useState(false);
//   console.log(isDark);
//   return (
//     <UserContenxt.Provider value={"사용자"}>
//       <ThemeContext.Provider value={{ isDark, setIsDark }}>
//         <Page></Page>;
//       </ThemeContext.Provider>
//     </UserContenxt.Provider>
//   );
// };

// const hardCalculate = (number) => {
//   console.log("어려운 계산!");
//   for (let i = 0; i < 999999999; i++) {}
//   return number + 10000;
// };

// const easyCalculate = (number) => {
//   console.log("쉬운 계산");
//   return number + 1;
// };

// const App = () => {
//   const [hardNumber, setHardNumber] = useState(1);
//   const [easyNumber, setEasyNumber] = useState(1);

//   // const hardSum = hardCalculate(hardNumber);
//   const hardSum = useMemo(() => {
//     return hardCalculate(hardNumber);
//   }, [hardNumber]);
//   const easySum = easyCalculate(easyNumber);

//   return (
//     <div>
//       <h3>어려운 계산기</h3>
//       <input
//         type="number"
//         value={hardNumber}
//         onChange={(e) => setHardNumber(parseInt(e.target.value))}
//       />
//       <span> + 10000 = {hardSum}</span>

//       <h3>쉬운 계산기</h3>
//       <input
//         type="number"
//         value={easyNumber}
//         onChange={(e) => setEasyNumber(parseInt(e.target.value))}
//       />
//       <span> + 1 = {easySum}</span>
//     </div>
//   );
// };

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [isKorea, setIsKorea] = useState(true);

//   const location = useMemo(() => {
//     return { country: isKorea ? "한국" : "외국" };
//   }, [isKorea]);

//   useEffect(() => {
//     console.log("useEffect 호출");
//   }, [location]);

//   return (
//     <>
//       <h2>하루에 몇끼 먹어요?</h2>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <hr />
//       <h2>어느 나라에 있어요?</h2>
//       <p>나라 : {location.country}</p>
//       <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
//     </>
//   );
// };

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [toggle, setToggle] = useState(true);

//   const someFunction = useCallback(() => {
//     console.log(`someFunc: number: ${number}`);
//     return;
//   }, [number]);

//   useEffect(() => {
//     console.log("someFunction이 변경됨");
//   }, [someFunction]);
//   return (
//     <>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
//       <br />
//       <button onClick={someFunction}>Call someFunc</button>
//     </>
//   );
// };

const App = () => {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Dark
      </button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default App;
