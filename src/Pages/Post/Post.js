import React from "react";
import { Link } from "react-router-dom";
import covid from "../../Media/cv19.png";
import hmrc from "../../Media/hmrc.png";
import lock from "../../Media/lock.jpg";

const Post = () => {
  return (
    <div className="bg-white w-10/12 mx-auto">
      <h1 className="text-3xl text-center bg-yellow-400 py-2">LATEST POST</h1>
      <div className="md:flex mt-10">
        <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2">
          <Link href="#">
            <img class="rounded-t-lg h-[200px] w-full" src={covid} alt="" />
          </Link>
          <div class="p-5">
            <Link href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SHOULD YOU FURLOUGH YOUR STAFF
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              With the government now actively considering how the country can
              return to work, this is an excellent time to think about the
              impact on your business, in particular your employment terms. This
              is especially so if you have furloughed any part of your
              workforce. It’s...
            </p>
            <Link
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2">
          <Link href="#">
            <img class="rounded-t-lg h-[200px] w-full" src={hmrc} alt="" />
          </Link>
          <div class="p-5">
            <Link href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                HOW DOSE IR35 AFFECT ON THIS?
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              With the government now actively considering how the country can
              return to work, this is an excellent time to think about the
              impact on your business, in particular your employment terms. This
              is especially so if you have furloughed any part of your
              workforce. It’s...
            </p>
            <Link
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2">
          <Link href="#">
            <img class="rounded-t-lg h-[200px] w-full" src={lock} alt="" />
          </Link>
          <div class="p-5">
            <Link href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IS UMBRILA COMPANY RIGHT FOR ME?
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              With the government now actively considering how the country can
              return to work, this is an excellent time to think about the
              impact on your business, in particular your employment terms. This
              is especially so if you have furloughed any part of your
              workforce. It’s...
            </p>
            <Link
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
