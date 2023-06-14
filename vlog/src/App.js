/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  const [글제목, set글제목] = useState([
    "남자 코트 추천",
    "맛집 추천",
    "놀거리 추천",
  ]);

  const [따봉, set따봉] = useState(0);
  const [따봉2, set따봉2] = useState(0);
  const [따봉3, set따봉3] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 className="title">ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          set글제목(copy);
        }}
      >
        글 수정
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy = copy.sort();
          set글제목(copy);
        }}
      >
        가나다순 정렬
      </button>
      <div className="container">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              set따봉(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="container">
        <h4>
          {글제목[1]}{" "}
          <span
            onClick={() => {
              set따봉2(따봉2 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉2}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="container">
        <h4>
          {글제목[2]}{" "}
          <span
            onClick={() => {
              set따봉3(따봉3 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉3}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
