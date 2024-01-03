import { useState } from 'react';
import './AddBeerPage.css';

function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setBeerData({
      ...beerData,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(beerData),
        }
      );

      if (response.ok) {
        // Handle success - show a success message or redirect to another page
        console.log('Beer added successfully!');
      } else {
        throw new Error('Failed to add beer');
      }
    } catch (error) {
      console.error(error);
      // Handle error - display an error message to the user
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Add Beer</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={beerData.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="tagline">Tagline:</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={beerData.tagline}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={beerData.description}
              onChange={handleChange}
              className="input-field"
            ></textarea>
          </div>
          <div>
            <label htmlFor="first_brewed">First Brewed:</label>
            <input
              type="text"
              id="first_brewed"
              name="first_brewed"
              value={beerData.first_brewed}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="brewers_tips">Brewer's Tips:</label>
            <input
              type="text"
              id="brewers_tips"
              name="brewers_tips"
              value={beerData.brewers_tips}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="attenuation_level">Attenuation Level:</label>
            <input
              type="number"
              id="attenuation_level"
              name="attenuation_level"
              value={beerData.attenuation_level}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="contributed_by">Contributed By:</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              value={beerData.contributed_by}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <button type="submit" className="submit-button">
              Add Beer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBeerPage;
