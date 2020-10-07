import React, { useState, useEffect } from "react";
import { getWord } from "./Api/Api";

function App() {
  const [inputData, setInputData] = useState("");
  const [word, setword] = useState("나무");

  const onChange = (e) => {
    setInputData(e.target.value);
  };

  const onClick = () => {
    if (inputData[0] === word[word.length - 1]) {
      setword(inputData);
      setInputData("");
    } else {
      alert("오답");
    }
  };

  useEffect(() => {
    getWord();
  }, []);
  return (
    <>
      <div>
        <input value={inputData} placeholder="단어를 입력하세요." onChange={onChange} />
        <button onClick={onClick}>확인</button>
        <p>{word}</p>
      </div>
    </>
  );
}

export default App;
