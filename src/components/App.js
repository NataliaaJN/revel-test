import { useEffect, useState } from "react";
import Header from "./Header";
import PhotosList from "./PhotosList";
import "../styles/App.scss";

const App = () => {
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
