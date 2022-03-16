import { Link} from "react-router-dom";
import "../styles/components/PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
    <h1 className="pageNotFound__404">Error 404</h1>
    <h2 className="pageNotFound__message">Ooops! Looks like this page is missing in our reel... Don't worry though, our best agent is working on it. </h2>
    <Link className="pageNotFound__linkHome" to="/">Go back</Link>
    </div>
  )
};

export default PageNotFound;