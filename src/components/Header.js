import { useEffect, useState } from "react";
import "../styles/components/Header.scss";

const Header = () => {
  const [scrolledHeader, setScrolledHeader] = useState(false);

  const changeHeaderSize = () => {
    if (window.scrollY >= 10) {
      setScrolledHeader(true);
    } else {
      setScrolledHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderSize);
  }, []);

  return (
    <header className={ scrolledHeader ? "main-header--scrolled " : "header"}>
      <h1 className={scrolledHeader ? "main-header--scrolled__title " : "header__title"}>Cool pics</h1>
    </header>
  );
};

export default Header;
