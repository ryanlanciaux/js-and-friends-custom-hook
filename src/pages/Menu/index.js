import React, { useState, useEffect } from "react";

import ItemCardGroup from "../../components/ItemCardGroup";

import { getCoffeeData } from "../../api/getData";

function Menu() {
  /* 
  Move this logic to /src/hooks/useCoffeeData and utilize the hook instead
  */
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setData([]);
    setLoading(true);
    setError(undefined);

    getCoffeeData()
      .then(items => {
        setLoading(false);
        setData(items);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {error ? (
        <span>Oh no. An error occurred. {error}</span>
      ) : isLoading ? (
        <span>Loading</span>
      ) : (
        <ItemCardGroup data={data} onAddToCart={console.log} />
      )}
    </div>
  );
}

export default Menu;
