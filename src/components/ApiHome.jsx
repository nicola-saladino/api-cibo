import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import '../App.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function ApiHome() {
  const [apiData, setApiData] = useState(null);

  const fetchApiData = async () => {
    try {
      const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=d5cede24663f403c9fffd0ae0f88fbf5');
      const json = await response.json();
      sessionStorage.setItem('api_response', JSON.stringify(json.recipes));
      
      setApiData(json.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cachedData = sessionStorage.getItem('api_response');
    if (cachedData) {
      setApiData(JSON.parse(cachedData));
    } else {
      fetchApiData();
    }
  }, []);

  return (
    <Container>
    <div>
        
      {apiData ? (
        <div>
          <Title>
            <h1>Ricette Popolari</h1>
            </Title>
            <Splide options= {{
            perPage: 3
        }}>
          {apiData.map((recipes) =>{
            return(
            <SplideSlide key={recipes.id}>
              <Box>
              <p>{recipes.title}</p>
               <Link to={`/recipe/${recipes.id}`}>
              <img src={recipes.image} alt={recipes.image} />
              </Link>
              </Box>
            </SplideSlide>
            )
          })}
          </Splide>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </Container>
  );
}

//style components
export const Box = styled.div `
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  
  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: auto;
  }

`
export const Title = styled.h1 `
text-align: center;

`


export default ApiHome;
