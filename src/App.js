import './App.css';
import Box from "./component/Box";
import Row from "./component/Row"
function App() {
  var myWord = "hello"
  return (
    <div className="App">
      <Row word={myWord}/>
      <Row word={"other"}/>
      <Row word={"hehel"}/>
      <Row word={"hiyam"}/>
      <Row word={myWord}/>

    </div>
  );
}

export default App;
