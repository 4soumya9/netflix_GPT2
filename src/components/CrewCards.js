import React from "react";

import { IMG_CDN } from "../utils/constants";

const CrewCards = ({ profile_path, name }) => {
  if (profile_path)
    return (
      <div className="bg-black">
        <div className="w-48 pr-8">
          <img alt="Movie Card" src={IMG_CDN + profile_path} />
          <span className="text-white">{name}</span>
        </div>
      </div>
    );
};

export default CrewCards;
