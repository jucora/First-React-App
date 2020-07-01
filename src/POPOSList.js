// src/POPOSList.js

import React from "react";
import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
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
      />
    </div>
  );
}

export default POPOSList;
