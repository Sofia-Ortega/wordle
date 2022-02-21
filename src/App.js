import './App.css';
import {useState} from 'react';
import Rows from "./component/Rows";
import {theWord} from "./data/data"
import {Button} from "@mui/material";

function App() {
  const masterWord = theWord;
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [wordList, setWordList] = useState(["", "", "", "", ""])

  const wordleContainer = {
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    margin: "70px 0"
  }

  const handleChange = (event) => {
    //check if length of string
    if(event.target.value.length > 5) return;

    //change input
    setInput(event.target.value);
  }

  const handleSubmit = () => {
    if(input.length !== 5) return;

    //Check for success
    if(input === masterWord) {
      console.log("Success!");
    }


    if(index >= 4) {
      if(input !== masterWord) console.log("Fail!");
      else console.log("Success");
      return;
    }

    //add userInput
    var newList = wordList;
    newList[index] = input;
    setWordList(newList);

    //updating
    setInput("");
    setIndex(index + 1);

  }

  return (
    <div className="App">
      <h1>WORDLE</h1>
      <div style={wordleContainer}>
        <Rows wordList={wordList} masterWord={masterWord} />
      </div>
      <div>
        <input type="text" id="input" name="input" value={input} onChange={handleChange}/>
        <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
