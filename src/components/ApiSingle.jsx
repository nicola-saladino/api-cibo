import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ApiSingle() {
  const [apiData, setApiData] = useState(null);
  let params = useParams();

  useEffect(() => {
    fetchApiData(params.id);
  }, [params.id]);

  const fetchApiData = async (id) => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d5cede24663f403c9fffd0ae0f88fbf5`);
        const json = await response.json();
        setApiData(json);
        console.log(json);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {apiData ? (
        <div>
          <h2>{apiData.title}</h2>
          <img src={apiData.image} alt={apiData.title} />
          <p>{apiData.instructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiSingle;
