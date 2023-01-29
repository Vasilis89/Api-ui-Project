import "./App.css";
import { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
function App() {
  const [character, setCharacter] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    apiCall();
  }, []);

  function apiCall() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.results);
      });
  }
  function handleClick() {
    setIndex((prev) => {
      if (prev < 19) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }
  function back() {
    setIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return 19;
      }
    });
  }
  return (
    <div className="App">
      {character.length && (
        <>
          <h1>Ricky and Morty API BROH!!!!!</h1>
          <h2>{character[index].name}</h2>
          <div className="container">
            <button className="Tic-Tac" onClick={back}>
              <AiOutlineArrowLeft />
            </button>
            <img
              className="animation"
              src={character[index].image}
              alt="bruh"
            />
            <button className="broh" onClick={handleClick}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
