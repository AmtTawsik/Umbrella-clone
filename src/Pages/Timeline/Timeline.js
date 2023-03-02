import React from "react";
import lite from "../../Media/lite.jpg";
import mag from "../../Media/mag.png";
import cogs from "../../Media/cogs.png";
import { Button } from "flowbite-react";

const Timeline = () => {
  return (
    <section class="bg-white dark:bg-gray-900 pt-10">
      <div class="grid  px-4  lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div class="lg:mt-0 lg:col-span-6">
          <h2 className="text-4xl font-bold mb-4">The Simple Umbrella</h2>
          <p className="text-xl  text-gray-400 w-11/12">We are a dedicated Payroll Service that provides contractors, freelancers and high earners with the peace of mind that we are working hard so they can enjoy more of what they earn. <br /><br />Navigating legislation, compliance and making sure you get paid shouldn’t have to be another thing you worry about after working hard. Our Umbrella options provide or clients with a trustworthy service that ensures to help you choose the best solution for your circumstances. <br /><br />We not only provide professional support and advice before you join us, but we’re there to help you as you grow, whatever challenges come your way. And we’re always available as a payroll solution for when you start to build your own team and brand.</p>
          <Button className="text-black font-bold px-4 py-1.5 font-sans mt-10 ml-5" color="warning" pill={true}>
          TRY THE CALCULATOR
          </Button>
        </div>

        <div class=" place-self-center lg:col-span-6 mt-5 md:ml-10 md:mr-0 mr-5">
          <div className="grid grid-cols-12 bg-white">
            <ol class="relative text-right col-span-6">
              <li class="md:mb-32 mb-24 mr-4 ">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  INNOVATION
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Creating new and innovative solutions
                </p>
              </li>
              <li class="md:mb-32 mb-24 mr-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  TRANSPARENCY
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Working with you every step of the way!
                </p>
              </li>
              <li class="mr-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  EFFICIENCY
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Fully compliant and well thought out processes
                </p>
              </li>
            </ol>
            <ol class="relative border-l border-gray-200 dark:border-gray-700 col-span-6">
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <img src={lite} className="w-[144px] h-[144px]" alt="" />
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <img src={mag} className="w-[144px] h-[144px]" alt="" />
              </li>
              <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <img src={cogs} className="w-[144px] h-[144px]" alt="" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
