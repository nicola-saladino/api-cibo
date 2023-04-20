import React from 'react'
import{ useEffect, useState } from 'react';

import '../App.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function ApiDessert() {
    const [apiData, setApiData] = useState(null);

  const fetchApiData = async () => {
    try {
      const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&tags=dessert&apiKey=d5cede24663f403c9fffd0ae0f88fbf5');
      const json = await response.json();
      sessionStorage.setItem('api_response_dessert', JSON.stringify(json.recipes));
      
      setApiData(json.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cachedData = sessionStorage.getItem('api_response_dessert');
    if (cachedData) {
      setApiData(JSON.parse(cachedData));
    } else {
      fetchApiData();
    }
  }, []);


  return (
    <div>
        
      {apiData ? (
        <div>
            <h1>Desserts</h1>
            <Splide options= {{
            perPage: 3
        }}>
          {apiData.map((recipes) =>{
            return(
            <SplideSlide key={recipes.id}>
              <p>{recipes.title}</p>
              <img src={recipes.image} alt={recipes.image} />
            </SplideSlide>
            )
          })}
          </Splide>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiDessert