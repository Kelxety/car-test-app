import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchCar from "../utils/api/fetchCar";
import fetchPhotos from "../utils/api/fetchPhotos";

function Car() {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery("car", () => fetchCar("" + id));
  const datas = useQuery("photos", () => fetchPhotos("Innova"));
  console.log(datas.data);
  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center">Loading...</div>
    );
  if (isError)
    return <div className="w-full flex items-center justify-center">Error</div>;
  console.log(data);
  return (
    <div className="w-full flex items-center justify-center mx-auto">
      <div className="w-full flex items-center justify-center"></div>
    </div>
  );
}

export default Car;
