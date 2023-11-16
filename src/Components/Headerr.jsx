import { Link } from "react-router-dom";

const Headerr = () => {

  return (
    <header className="header mb-3">
      <nav className="header navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link"  to="/pokemon" activeclassname="active-link">POKEMON</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/banderas" activeclassname="active-link">PAISES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/imagenes" activeclassname="active-link">PIXABAY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todelist" activeclassname="active-link">TODE-LIST</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/morty" activeclassname="active-link">RICK-AND-MORTY</Link>
            </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Headerr;
