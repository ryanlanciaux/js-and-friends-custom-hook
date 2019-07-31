import React from "react";
import useCoffeeData from "../hooks/useCoffeeData";

function Specialization() {
  const { data, isLoading, error } = useCoffeeData();

  return (
    <>
      <strong>We specialize in the following: </strong>
      {data && (
        <ul>
          {data.map(item => (
            <li>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Specialization;
