import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getApiData from "../services/api";
import Header from "./header/Header";
import PhotosList from "./main/PhotosList";
import Loader from "./loader/Loader";
import ErrorMessage from "./handleErrors/ErrorMessage";
import PageNotFound from "./handleErrors/PageNotFound";
import "../styles/App.scss";

const App = () => {
//    STATES     //
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
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
      .catch((error) => setErrorMessage(error.message));
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
                  {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
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
