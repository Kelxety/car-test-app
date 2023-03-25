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
            setPhotos(result?.response?.results.splice(0, 5));
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
    <div className="w-full flex items-center justify-center mx-auto">
      <div className="w-full flex items-center justify-center">
        <div className="container mx-auto">
          <div className="grid-cols-3 p-2 sm:p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            {photos?.map((photo: any, i: number) => {
              {
                if (i === 0) {
                  return (
                    <Fragment key={i}>
                      <div className="w-full col-span-2 row-span-2 rounded">
                        <PhotoComp photo={photo} />
                      </div>
                      <div className="w-full rounded">
                        <div className="flex items-center justify-between">
                          <div>
                            <h1 className="text-2xl font-bold">
                              {data?.Car?.car_model}
                            </h1>
                            <h2 className="font-semibold">{data?.Car?.car}</h2>
                          </div>
                          <div>
                            <h1 className="text-2xl font-bold text-blue-500">
                              {data?.Car?.price}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div>This is Text</div>
                    </Fragment>
                  );
                } else {
                  return (
                    <div key={i} className="w-full rounded">
                      <PhotoComp photo={photo} />
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car;
