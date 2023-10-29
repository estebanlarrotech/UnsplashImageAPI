import axios from 'axios';
import React, {useEffect, useRef} from 'react';
import { Form } from 'react-bootstrap';
import './index.css';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;

const App = () =>  {
  console.log('key',import.meta.env.VITE_API_KEY);
  const searchInput = useRef(null);
  

const fetchImages = async () => {
  try {
  const result = await axios.get(
    `${API_URL}?query=${
      searchInput.current.value
    }&page=1&per_page=${IMAGES_PER_PAGE}
    &client_id=${
      import.meta.env.VITE_API_KEY}`
      );
    console.log('result', result.data);
  } catch (error) {
    console.log(error);
  }
};
 
  
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    fetchImages();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
  };

  return (
     <div className='container'>
      <h1 className='title'>Unsplash Image Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Type here to get and image..'
            className='search-input'
            ref={searchInput} />
        </Form>
      </div>
      <div className='filters'>
      <div onClick={() => handleSelection('Cybersecurity')}>Cybersecurity</div>
      <div onClick={() => handleSelection('Climbing')}>Climbing</div>
      <div onClick={() => handleSelection('Drums')}>Drums</div>
      <div onClick={() => handleSelection('Porto')}>Porto</div>
      </div>
     </div>
  );
};


/*
const App = () => {
  return <div>Que pasa spider</div>;
}; */
export default App;