import { useLocation, Link } from "react-router-dom";

const DisplayPath = () => {
  const location = useLocation();
  const arrayPath = location.pathname.split("/").filter(Boolean);

  return (
    <div className="displaypath-container">
    <div className="displaypath-content">
      <Link to="/">
        <p>
          Fashion Fusion
          <span className="material-symbols-outlined">chevron_right</span>
        </p>
      </Link>
      {arrayPath.slice(0, -1).map((path, index) => (
        <Link key={index} to={`/${path}`}>
          <p>
            {path}
            <span className="material-symbols-outlined">chevron_right</span>
          </p>
        </Link>
      ))}
      <p>{arrayPath[arrayPath.length - 1].replace(/-/g, " ")}</p>
    </div>
    </div>
  );
};

export default DisplayPath;
