import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Api
import getApiData from "../services/api";
// Components
import Header from "./header/Header";
import Main from "./main/Main";
import ErrorMessage from "./handleErrors/ErrorMessage";
import PageNotFound from "./handleErrors/PageNotFound";
import ErrorBoundary from "./handleErrors/ErrorBoundary";

// Styles
import "../styles/App.scss";

const App = () => {
  //    STATES     //
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);
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
      .catch((error) => {
        setErrorMessage(error.message);
        setHasError(true);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={
            <ErrorBoundary>
              <Header />
              {hasError ? (
                <ErrorMessage errorMessage={errorMessage} />
              ) : (
                <Main
                  errorMessage={errorMessage}
                  isLoading={isLoading}
                  photos={photos}
                />
              )}
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
};

export default App;
