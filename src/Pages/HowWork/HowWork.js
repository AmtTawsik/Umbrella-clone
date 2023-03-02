import { Button } from "flowbite-react";
import React from "react";
import boy from "../../Media/boy-girl.png";
import how from "../../Media/how-it-works-e.png";
import reg from "../../Media/register-1.png";

const HowWork = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid  px-4 mr-5 lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div class="lg:mt-0 lg:col-span-6 md:hidden">
            <img src={boy} alt="mockup" />
          </div>
          <div class=" mr-auto place-self-center lg:col-span-6 mt-5">
            <img src={how} alt="" />
            {/* start */}

            <div className="flex ml-20 md:ml-36">
              <ol class="items-center flex w-11/12 mx-auto mt-5">
                <li class="relative mb-6 sm:mb-0">
                  <div class="mb-1 mr-5 sm:pr-8">
                    <p>SREP-1</p>
                  </div>
                  <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="mb-1 mr-5 sm:pr-8">
                    <p>SREP-1</p>
                  </div>
                  <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="mb-1 mr-5 sm:pr-8">
                    <p>SREP-1</p>
                  </div>
                  <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="mb-1 mr-5 sm:pr-8">
                    <p>SREP-1</p>
                  </div>
                  <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            {/* End */}
            <div className="flex mt-16">
              <div className="mr-auto place-self-center ml-10">
                <img src={reg} alt="" />
              </div>
              <div class="ml-16">
                <p>
                  Complete and send the sign-up form! Next, a member of our team
                  will give you a call and finish the registration process, it’s
                  that simple!
                </p>
              </div>
            </div>
            <Button
              className="text-black font-bold px-4 py-1.5 font-sans ml-16 mt-16"
              color="warning"
              pill={true}
            >
              SIGN UP NOW
            </Button>
          </div>
          <div class="hidden md:block lg:mt-0 lg:col-span-6">
            <img src={boy} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWork;
