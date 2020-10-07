import axios from "axios";

export const getWord = async (Word) => {
  const words = await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/encyc.json?query=${Word}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          "X-Naver-Client-Id": "8MNLBfiHTrZ34TEcb0fi",
          "X-Naver-Client-Secret": "ISq1b_wowq",
        },
      }
    )
    .then((res) => console.log(res.data));
  return words;
};
