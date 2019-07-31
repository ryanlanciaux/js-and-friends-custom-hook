import React, { useState, useEffect } from "react";
import { getCoffeeData } from "../api/getData";

function useCoffeeData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  /* 
  This hook is missing all of the internal logic. 
  We should take the loading logic from /pages/Menu and move it here

  From there, we should utilize this hook in pages/Menu and /components/Specialization
  */
  return { data, isLoading: loading, error };
}

export default useCoffeeData;
