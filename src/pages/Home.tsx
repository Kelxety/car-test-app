import React, { useState } from "react";
import { useQuery } from "react-query";
import CarList from "../components/Home/CarList";
import fetchCars from "../utils/api/fetchCars";

import { CarT } from "../utils/types/CarTypes";

function Home() {
  const { data, isLoading, isError } = useQuery("cars", () => fetchCars());
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [option] = useState([5, 10, 20]);
  if (isLoading)
    return <div className="flex justify-center items-center">Loading...</div>;
  if (isError)
    return <div className="flex justify-center items-center">Error</div>;

  const calculateTotalPages = (total: number, perPage: number) => {
    return Math.ceil(total / perPage);
  };
  const totalPages = calculateTotalPages(data?.cars?.length, numberOfItems);
  return (
    <div className="container p-2 max-w-xl mx-auto sm:px-10 rounded-2xl space-y-4 gap-10">
      <div className="w-full justify-end rounded-xl p-2 flex space-x-2 items-center">
        <h1>{totalPages}</h1>
        <h1 className="text-sm">SHOW: </h1>
        <select
          value={numberOfItems}
          onChange={(e) => setNumberOfItems(parseInt(e.target.value))}
          className=" rounded-lg border p-2"
        >
          {option.map((number: number, i: number) => {
            return (
              <option key={i} value={number} defaultValue="5">
                {number}
              </option>
            );
          })}
          ;
        </select>
      </div>
      <div className="bg-slate-100 rounded-lg gap-4 space-y-4 p-4">
        {data?.cars?.slice(0, numberOfItems).map((car: CarT, i: number) => {
          return <CarList key={i} car={car} />;
        })}
      </div>
    </div>
  );
}

export default Home;
