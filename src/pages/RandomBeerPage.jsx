import { useState, useEffect } from 'react';
import './BeerDetailsPage.css';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch(
          'https://ih-beers-api2.herokuapp.com/beers/random'
        );
        const data = await response.json();
        console.log(data);
        setRandomBeer(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomBeer();
  }, []);

  return (
    <div className="container">
      <div className="beer-details">
        {randomBeer && (
          <div>
            <img
              src={randomBeer.image_url}
              alt={randomBeer.name}
              className="beer-details__image"
            />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>
              <b>First Brewed:</b> {randomBeer.first_brewed}
            </p>
            <p>
              <b>Attenuation Level:</b> {randomBeer.attenuation_level}
            </p>
            <p>
              <b>Description:</b> {randomBeer.description}
            </p>
            <p>
              <b>Contributed by:</b> {randomBeer.contributed_by}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomBeerPage;
