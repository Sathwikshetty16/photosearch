import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import './App.css'; // Import the CSS file

const ApiKey = "40311035-03aa5fb10910daf000000474c"; // Replace with your Pixabay API key

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // You can add initial logic here if needed
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .get(`https://pixabay.com/api/?key=${ApiKey}&q=${search}&image_type=photo`)
      .then((response) => {
        setData(response.data.hits); // Assuming "hits" contains an array of image data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="center">
      <h2>Gallery SnapShot</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={search} className="search-input" />
        <button type="submit">Search</button>
      </form>
      <div className="card"> {/* Apply the "card" class */}
        <Gallery data={data} />
      </div>
    </div>
  );
};

export default App;
