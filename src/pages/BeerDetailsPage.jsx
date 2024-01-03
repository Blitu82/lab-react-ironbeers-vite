import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './BeerDetailsPage.css';

function BeerDetailsPage() {
  let { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    const getBeerDetails = async () => {
      try {
        const response = await fetch(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        const data = await response.json();
        console.log(data);
        setBeerDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    getBeerDetails();
  }, [beerId]);

  return (
    <div className="container">
      {beerDetails && (
        <div className="beer-details">
          <img src={beerDetails.image_url} alt={beerDetails.name} />
          <h2>{beerDetails.name}</h2>
          <p>{beerDetails.tagline}</p>
          <p>
            <b>First Brewed:</b> {beerDetails.first_brewed}
          </p>
          <p>
            <b>Attenuation Level:</b> {beerDetails.attenuation_level}
          </p>
          <p>
            <b>Description:</b> {beerDetails.description}
          </p>
          <p>
            <b>Contributed by:</b> {beerDetails.contributed_by}
          </p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
