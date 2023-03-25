import { url } from "inspector";
import React, { Fragment } from "react";
import { CarPhotoT } from "../../utils/types/CarPhotoTypes";

const PhotoComp: React.FC<{ photo: CarPhotoT }> = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.thumb} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        <span className="text-sm text-gray-300 hover:text-gray-700">
          Photo by: {user.name}
        </span>
      </a>
    </Fragment>
  );
};

export default PhotoComp;
