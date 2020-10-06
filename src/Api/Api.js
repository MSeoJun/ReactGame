import axios from "axios";

export const getWord = async () => {
  const word = await axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://krdict.korean.go.kr/api/search?key=9CB1F90F2AF967796BF901B0E959C9B8&q=나무",
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    )
    .then((res) => console.log(res.data));
  return word;
};
