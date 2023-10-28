import React, {useRef} from 'react';
import { Form } from 'react-bootstrap';
import './index.css';

const App = () => {
  const searchInput = useRef(null);
 
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
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