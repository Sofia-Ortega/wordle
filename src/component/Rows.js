import react from "react";
import Row from "./Row";


export default function Rows({wordList, masterWord}) {
  return (
    <div>
      {
        wordList.map((word, index) => (
          <Row word={word} key={index} masterWord={masterWord} />
        ))
      }
    </div>
  )
}
