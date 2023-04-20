import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function ApiRicette() {
  const [apiData, setApiData] = useState(null);
  let params = useParams();

    useEffect(()=>{
    fetchApiData(params.type)
  },[params.type]);


  const fetchApiData = async (name) => {
    try {
      const cachedData = sessionStorage.getItem('api_response_category' + name);
     
      if (cachedData) {
      setApiData(JSON.parse(cachedData));
    } else {
       const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=d5cede24663f403c9fffd0ae0f88fbf5&tags=${name}`);
      const json = await response.json();
      sessionStorage.setItem('api_response' + name, JSON.stringify(json.recipes));
       setApiData(json.recipes);
    }
     
    } catch (error) {
      console.error(error);
  }};


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

export default ApiRicette;
