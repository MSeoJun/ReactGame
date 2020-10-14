import React, { useState } from "react";
import { getWord } from "./Api/Api";

function App() {
  const [inputData, setInputData] = useState("");
  const [word, setword] = useState("나무");
  const [results, setresults] = useState("");

  const onChange = (e) => {
    setInputData(e.target.value);
  };

  const onClick = async () => {
    if (inputData[0] === word[word.length - 1]) {
      const result = await getWord(inputData);
      if (result.length === 0) {
        alert("없는단어");
        setInputData("");
      } else {
        setword(inputData);
        setInputData("");
        setresults(result[0].description.split(".")[0]);
      }
    } else {
      alert("오답");
      setInputData("");
    }
  };

  return (
    <>
      <div>
        <input value={inputData} placeholder="단어를 입력하세요." onChange={onChange} />
        <button onClick={onClick}>확인</button>
        <p>{word}</p>
        <p>{results}</p>
      </div>
    </>
  );
}

export default App;
