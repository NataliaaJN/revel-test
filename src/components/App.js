import { useEffect, useState } from "react";
import Header from "./Header";
import PhotosList from "./PhotosList";
import "../styles/App.scss";

const App = () => {
  const [photos, setPhotos] = useState([]);

  // Take api data
  

  return (
    <div className="App">
      <Header />
      <main className="main">
        <PhotosList />
      </main>
    </div>
  );
};

export default App;
