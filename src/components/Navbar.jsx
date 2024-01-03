import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/">
            <img src="src\assets\home-icon.png" alt="home" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
