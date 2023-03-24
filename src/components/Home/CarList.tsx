import React from "react";
import { CarT } from "../../utils/types/CarTypes";

type Props = {
  car: CarT;
};

function CarList({ car }: Props) {
  return (
    <div
      key={car.id}
      className="rounded-lg w-full p-4 bg-white flex flex-col sm:flex-row items-center sm:justify-between hover:border-blue-500 hover:border"
    >
      <div className="w-full h-24 rounded-lg sm:rounded-full bg-gray-500 sm:w-20 sm:h-20 flex items-center justify-center">
        <div>Image</div>
      </div>
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
          <h3 className="text-gray-400 text-xs">{car.car_vin}</h3>
        </div>
      </div>
    </div>
  );
}

export default CarList;
