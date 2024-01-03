import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllBeersPage.css';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setBeers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getBeers();
  }, []);
  return (
    <div>
      <div className="beer-list">
        {beers.map(beer => (
          <div key={beer._id} className="beer-item">
            <Link to={`/beers/${beer._id}`} className="beer-link">
              <img src={beer.image_url} alt={beer.name} />
              <div className="beer-details">
                <h2>{beer.name}</h2>
                <p className="tagline">{beer.tagline}</p>
                <p className="contributor">
                  Contributed by: {beer.contributed_by}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;
