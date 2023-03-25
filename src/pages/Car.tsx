import React, { Fragment, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchCar from "../utils/api/fetchCar";
import PhotoComp from "../components/Car/PhotoComp";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY || "",
});

function Car() {
  const [photos, setPhotos] = React.useState<any>([]);
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    "car",
    () => fetchCar("" + id),
    {
      onSuccess: (element) => {
        unsplash.search
          .getPhotos({
            query: element?.Car?.car + " " + element?.Car?.car_model + " car",
            orientation: "landscape",
          })
          .then((result) => {
            setPhotos(result?.response?.results.splice(0, 7));
          });
      },
    }
  );
  if (isLoading && !photos)
    return (
      <div className="w-full flex items-center justify-center">Loading...</div>
    );
  if (isError)
    return <div className="w-full flex items-center justify-center">Error</div>;
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={photos?.[0]?.urls?.regular}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex justify-between">
              <div>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {data?.Car?.car}
                </h1>
              </div>
              <div>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND MODEL
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {data?.Car?.car_model}
                </h1>
              </div>
            </div>
            <span className="flex items-center mt-4">
              <span className="text-gray-600">
                <span className="font-bold">VIN</span> {data?.Car.car_vin}
              </span>
            </span>
            <div>
              <p className="leading-relaxed mt-4 text-sm">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <div className="p-4 border rounded mt-4">
              <h5 className="font-semibold">History of Accident</h5>
              <p className="leading-relaxed mt-2 text-sm">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            <div className="sm:flex mt-2 items-center pb-5 border-b-2 border-gray-200 mb-5 hidden"></div>
            <div className="flex mt-4 sm:mt-0">
              <span className="title-font font-medium sm:text-2xl text-gray-900">
                Price: {data?.Car.price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="grid-cols-6 p-2 sm:p-10  lg:grid lg:gap-3 overflow-auto">
            {photos?.map((photo: any, i: number) => {
              {
                if (i > 0)
                  return (
                    <div key={i} className="w-full rounded">
                      <PhotoComp photo={photo} />
                    </div>
                  );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Car;
