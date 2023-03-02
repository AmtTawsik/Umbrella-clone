import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import payrol from "../../Media/payroll.png";
import img from "../../Media/under-umb-2.png";

const Hero = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid  px-4  lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div class="lg:mt-0 lg:col-span-6 lg:flex">
          <img src={img} alt="mockup" />
        </div>

        <div class=" mr-auto place-self-center lg:col-span-6 mt-5">
          <img src={payrol} alt="" />
          <p class=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 md:w-8/12">
            With ever-changing legislation such as IR35 and other changes in
            payroll options; finding an expert payroll provider you can rely on,
            could make a huge difference to you or your organisation. <br />
            <br /> Working through an umbrella company offers an ideal first
            step into contracting, without all the hassle and responsibility of
            paperwork. With our personal approach to analysing your operation
            and our considerably investment in legal counsel, we’re confident we
            can also help provide you with flexible, salary maximising and
            compliant solutions.
          </p> 
          <Button className="text-black font-bold px-4 py-1.5 font-sans" color="warning" pill={true}>
          SIGN UP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
