import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getApiData from "../services/api";
import Header from "./Header";
import PhotosList from "./PhotosList";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PageNotFound from "./PageNotFound";
import "../styles/App.scss";

const App = () => {
//    STATES     //
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

//    EFFECTS     //
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="main">
                  {error && <ErrorMessage error={error} />}
                  <Loader isLoading={isLoading} />
                  <PhotosList photos={photos} />
                </main>
              </>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
   
  );
};

export default App;
