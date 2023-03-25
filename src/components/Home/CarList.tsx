import React from "react";
import { Link } from "react-router-dom";
import { CarT } from "../../utils/types/CarTypes";

type Props = {
  car: CarT;
};

function CarList({ car }: Props) {
  return (
    <Link
      to={`/${car.id}`}
      key={car.id}
      className="rounded-lg w-full p-4 bg-white flex flex-col sm:flex-row items-center sm:justify-between hover:border-blue-500 hover:border"
    >
      {car.photo ? (
        <>
          <div className="flex sm:hidden">
            <img
              src={car.photo.urls.regular}
              className="rounded-lg sm:rounded-full sm:h-24 sm:w-24 w-full object-cover"
              alt={car.photo.alt}
            />
          </div>
          <img
            src={car.photo.urls.thumb}
            className="rounded-lg sm:rounded-full sm:h-24 sm:w-24 w-full object-cover hidden sm:block"
            alt={car.photo.alt}
          />
        </>
      ) : (
        <div className="w-full h-24 rounded-lg sm:rounded-full bg-gray-500 sm:w-20 sm:h-20 flex items-center justify-center"></div>
      )}
      <div className="pl-4 flex-1">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">
              {car.car_model}
            </h1>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-500">{car.price}</h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h2 className=" text-gray-600 hover:text-gray-400 cursor-pointer">
            {car.car}
          </h2>
          <h3 className="text-gray-400 text-sm">{car.car_vin}</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h2 className=" text-gray-400 text-sm cursor-pointer">
            Year Model:{" "}
            <span className="font-semibold text-gray-600">
              {car.car_model_year}
            </span>
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default CarList;
