import React from "react";
import { useQuery } from "react-query";
import CarList from "../components/Home/CarList";
import fetchCars from "../utils/api/fetchCars";

import { CarT } from "../utils/types/CarTypes";

function Home() {
  const { data, isLoading, isError } = useQuery("cars", () => fetchCars());

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div className="container p-2 max-w-xl mx-auto sm:px-10 rounded-2xl gap-10">
      <div className="bg-slate-100 rounded-lg gap-4 space-y-4 p-4">
        {data?.cars?.slice(0, 3).map((car: CarT, i: number) => {
          return <CarList key={i} car={car} />;
        })}
      </div>
    </div>
  );
}

export default Home;
