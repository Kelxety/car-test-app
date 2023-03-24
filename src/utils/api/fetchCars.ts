import React from "react";

const fetchCars = async () => {
  const response = await fetch("https://myfakeapi.com/api/cars/").then((res) =>
    res.json()
  );
  return response;
};

export default fetchCars;
