import { useEffect, useState } from "react";
// services
import getApiData from "../services/api";
// components
import Header from "./Header";
import PhotosList from "./PhotosList";
// styles
import "../styles/App.scss";

const App = () => {
  //     STATES       //
  const [photos, setPhotos] = useState([]);

  //    USE EFFECTS     //
  // Take api data
  useEffect(() => {
    getApiData()
      .then((data) => {
        setPhotos(data);
      })
  }, []);

  //    FUNCTIONS      //

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
