# React로 끝말잇기 게임 만들기.

## 사전API가져오기.

```
export const getWord = async (Word) => {
  const words = await axios
    .get(`https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/encyc.json?query=${Word}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        "X-Naver-Client-Id": "8MNLBfiHTrZ34TEcb0fi",
        "X-Naver-Client-Secret": "ISq1b_wowq",
      },
    })
    .then((res) => res.data.items);
  return words;
};
```

---

## 시작단어

<img src="https://github.com/MSeoJun/React_word_relay_game/blob/main/images/FirstWord.PNG?raw=true" width="540px" height="300px"></img>

### 시작단어로 나무가 주어진다.

<img src="https://github.com/MSeoJun/React_word_relay_game/blob/main/images/WordDesc.PNG?raw=true" width="540px" height="300px"></img>

### 맞는 단어를 입력하면 그 단어의 설명이 나온다.

---

## 없는단어 체크

<img src="https://github.com/MSeoJun/React_word_relay_game/blob/main/images/NotHaveWord1.PNG?raw=true" width="540px" height="300px"></img>

### 없는단어를 입력하면

<img src="https://github.com/MSeoJun/React_word_relay_game/blob/main/images/NotHaveWord2.PNG?raw=true" width="540px" height="300px"></img>

### 없는단어라고 Alert를 띄운다.

---

## 틀린단어

<img src="https://github.com/MSeoJun/React_word_relay_game/blob/main/images/WrongWord1.PNG?raw=true" width="540px" height="300px"></img>

### 제시단어의 끝자리와 맞지않는 단어를 입력하면

<img src="https://github.com/MSeoJun/React_word_relay_game/blob/main/images/WrongWord2.PNG?raw=true" width="540px" height="300px"></img>

### 오답이라고 Alert를 띄운다.
