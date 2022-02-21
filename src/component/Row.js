import react from 'react';
import Box from "./Box";

const flexRow = {
  display: "flex",
}

export default function Row({word, masterWord}) {

  const checkSuccess = (index, letter) => {
    if(word === "") return "";
    if(masterWord[index] === letter) return "g"; //green
    if(masterWord.includes(letter)) return "y";
    else return "n";
  }
  return (
    <div style={flexRow}>
      <Box w={word[0]} success={checkSuccess(0, word[0])}/>
      <Box w={word[1]} success={checkSuccess(1, word[1])} />
      <Box w={word[2]} success={checkSuccess(2, word[2])} />
      <Box w={word[3]} success={checkSuccess(3, word[3])} />
      <Box w={word[4]} success={checkSuccess(4, word[4])} />
    </div>
)
}
