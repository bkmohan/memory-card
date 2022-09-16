import { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import Header from "./components/Headers";
import { getHighScore, storeHighScore } from "./utils";


function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(()=>{
    setHighScore(getHighScore());
  }, [])

  const updateScore = active => {
    if(active){
      setScore(score => {
        ++score;
        if(score > highScore) {
          setHighScore(score);
          storeHighScore(score);
        }
        return score;
      })
    }
    else{
      setScore(0)
    }
  }

  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <CardGrid updateScore={updateScore}/>
    </div>
  );
}

export default App;
