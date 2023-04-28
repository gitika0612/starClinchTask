import React from "react";
import { artist } from "../../pages/artistData";
import Carousel from "../../pages/Corousel/Corousel";


const Artist = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginTop: '3rem' }}>
        <div style={{ margin: "0 15px 0 0" }}>
          <img src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" />
        </div>
        <h4 style={{ fontWeight: "500", fontSize: "20px" }}>
          {" "}
          Similar Artists you may like
        </h4>
      </div>
      <Carousel data={artist} />
    </div>
  );
};

export default Artist;
