import { useState } from "react";
import { useQuery } from "react-query";
import CarList from "../components/Home/CarList";
import Pagination from "../components/Home/Pagination";
import fetchCars from "../utils/api/fetchCars";
import { createApi } from "unsplash-js";

import { CarT } from "../utils/types/CarTypes";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY || "",
});

function Home() {
  const [loadImage, setLoadImage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useQuery("cars", () => fetchCars(), {
    onSuccess: (element) => {
      element.cars.map((car: CarT, i: number) => {
        if (i < 20) {
          unsplash.search
            .getPhotos({
              query: car.car + " " + car.car_model,
              orientation: "landscape",
            })
            .then((result) => {
              car.photo = result?.response?.results[0];
            });
        }
      });
    },
    onSettled: () => {
      setTimeout(() => {
        setLoadImage(true);
      }, 1000);
    },
  });

  const [numberOfItems, setNumberOfItems] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [option] = useState([5, 10, 20]);

  if (isLoading && !loadImage)
    return <div className="flex justify-center items-center">Loading...</div>;
  if (isError)
    return <div className="flex justify-center items-center">Error</div>;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (searchTerm !== "") {
      setCurrentPage(1);
    }
  };

  const sliceData = (data: CarT[], page: number, rowsPerPage: number) => {
    const filterData = data.filter(
      (car) =>
        car.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filterData.slice(
      (currentPage - 1) * rowsPerPage,
      page * rowsPerPage
    );
  };

  const filteredData = data?.cars?.filter(
    (car: { car: string; car_model: string }) =>
      car.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let cars = sliceData(filteredData, currentPage, numberOfItems);

  return (
    <div className="container p-2 max-w-xl mx-auto sm:px-10 rounded-2xl space-y-4 gap-10">
      {loadImage && (
        <>
          <div className="space-x-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border p-2"
              placeholder="Search by car or model"
            />
          </div>
          <div className="w-full justify-between rounded-xl p-2 flex sm:space-x-2 items-center flex-col space-y-4 sm:space-y-0 sm:flex-row">
            <Pagination
              itemsPerPage={numberOfItems}
              totalItems={data?.cars?.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <div className="flex items-center justify-center space-x-2">
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
          </div>
          <div className="hidden sm:flex items-center justify-centers text-centers">
            <h3 className="w-full items-center text-center text-sm text-gray-400">
              Note:{" "}
              <span className="text-sm text-gray-300">
                Fetching only first 20 images from Unsplash API.
              </span>
            </h3>
          </div>
          <div className="bg-slate-100 rounded-lg gap-4 space-y-4 p-4">
            {cars.map((car: CarT, i: number) => {
              return <CarList key={i} car={car} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
