import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <nav className="homepage">
      <img src="src\assets\beers.png" alt="beers" />
      <Link to="/beers" className="link">
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vitae
          repudiandae eligendi aliquam provident iure! Laboriosam incidunt
          facilis odio corporis optio quaerat assumenda repudiandae! Sint
          tenetur dolor saepe iste ad?
        </p>
      </Link>
      <img src="src\assets\random-beer.png" alt="random-beer" />
      <Link to="/random-beer" className="link">
        <h1>Ramdon Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vitae
          repudiandae eligendi aliquam provident iure! Laboriosam incidunt
          facilis odio corporis optio quaerat assumenda repudiandae! Sint
          tenetur dolor saepe iste ad?
        </p>
      </Link>
      <img src="src\assets\new-beer.png" alt="new-beer" />
      <Link to="/new-beer" className="link">
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vitae
          repudiandae eligendi aliquam provident iure! Laboriosam incidunt
          facilis odio corporis optio quaerat assumenda repudiandae! Sint
          tenetur dolor saepe iste ad?
        </p>
      </Link>
    </nav>
  );
}

export default HomePage;
