import { Carousel } from "flowbite-react";
import React from "react";
import quation from "../../Media/quation.png";

const Carasol = () => {
  return (
    
      <div className="h-56 bg-white flex w-8/12 mx-auto">
      <div>
        <img className="w-[100px]" src={quation} alt="" />
      </div>
      <Carousel>
        <div className="flex flex-col h-full items-center justify-center bg-white">
          <h1 className="text-xl">
            Expert advice, I feel confident that they are keeping my compliant
          </h1>
          <p>~Trudy Matthews</p>
        </div>
        <div className="flex flex-col h-full items-center justify-center bg-white">
          <h1 className="text-xl">
            The team really sorted me out, I'm very happy with the service and
            it's great to always be able to get hold of someone for some advice
          </h1>
          <p>~James F.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carasol;
