import { useEffect, useState } from "react";
import getApiData from "../services/api";
import Header from "./Header";
import PhotosList from "./PhotosList";
import Loader from "./Loader";
import "../styles/App.scss";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Take api data
  useEffect(() => {
    setIsLoading(true);
    getApiData()
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Loader isLoading={isLoading} />
        {error && <p>{error} </p>}
        <PhotosList photos={photos} />
      </main>
    </div>
  );
};

export default App;
