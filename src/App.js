import "./App.scss";
import { useState } from "react";
import Rating from "./Rating";

function App() {
  const [ratingSerie, setRatingSerie] = useState(0);
  return (
    <div className="App">
      <span className={`d-flex justify-content-center my30`}>
        Rating : {ratingSerie}
      </span>
      <Rating maxRating={10} setRatingSerie={setRatingSerie} />
    </div>
  );
}

export default App;
