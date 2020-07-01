// src/POPOSList.js

import React from "react";
import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";
import data from "./sfpopos-data.json";

// const titles = data.map((obj) => {
//   return <h1>{obj.title}</h1>;
// });

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    );
  });

  return <div className="POPOSList">{spaces}</div>;

  {
    /* <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace name="Pine" address="Pine Street St." image="100-pine.jpg" />
      <POPOSSpace
        name="Market Street Plaza"
        address="Market Street."
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="Embarcadero"
        address="Embarcadero St."
        image="embarcadero-center.jpg"
      />
      <POPOSSpace
        name="Transamerica"
        address="Transamerica St."
        image="transamerica-redwood-park.jpg"
      />
      <POPOSSpace
        name="Garden Terrace"
        address="Garden Terrace St."
        image="garden-terrace-at-150-california.jpg"
      /> */
  }
}

export default POPOSList;
