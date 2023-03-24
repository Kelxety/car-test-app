import React from "react";

const fetchPhotos = async (keyword: string) => {
  const response = await fetch(
    "https://api.unsplash.com/search/collections?page=1&query=" + keyword
  ).then((res) => res.json());
  return response;
};

export default fetchPhotos;
