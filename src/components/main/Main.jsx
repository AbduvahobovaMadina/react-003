import React from "react";
import "./main.scss";
import Hero from "../hero/Hero";
import flip from "../../assets/flip.jpg"
import tvv from "../../assets/tvv.webp"
import ice from "../../assets/ice.webp"


const flipitem = [
  "Galaxy Z Flip6",
  "Galaxy Z Fold6",
  "Galaxy Watch Ultra",
  " Galaxy Buds3 Pro",
  " Galaxy Experience",
];
const tv = ["Samsung Neo QLED 8k", "TV + Soundbar bundles", " Q990D"];
const xl = ["Bespoke Appliances", "Bespoke Refrigerators", " Bespoke Laundry"];
const Main = () => {
  return (
    <>
      <Hero
        bg={"#f4f4f4"}
        title={"Mobile & Computing"}
        nav={flipitem}
        img={flip}
        desc={"Galaxy Z Flip6"}
        price={
          "get up to $650 instate tride-in credit and double the storage on us with select color"
        }
      />
      <Hero
        bg={
          "linear-gradient(90deg,rgb(165, 97, 42),)"
        }
        title={"TV & Audio"}
        nav={tv}
        img={tvv}
        desc={"Discover new depth of detail"}
        price={
          "buy on $65 instate tride-in class Samsung Neo the storage on us with select color"
        }
      />
      <Hero
        bg={"#f2f2f2"}
        title={"Home Appliances"}
        nav={xl}
        img={ice}
        desc={"Save on bespoke all summer"}
        price={
          "get  $1300 instate tride-in Bespoke model from Amerika select color"
        }
      />
    </>
  );
};

export default Main;