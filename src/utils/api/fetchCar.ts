import React from "react";

const fetchCar = async (id: string) => {
  const response = await fetch("https://myfakeapi.com/api/cars/" + id).then(
    (res) => res.json()
  );
  return response;
};

export default fetchCar;
