import React from "react";
import { Link } from "react-router-dom";
import FaQ from "../FaQ/FaQ";

const Need = () => {
  return (
    <div className="grid  px-4  gap-5 lg:grid-cols-12 mt-10 md:mt-24">
      <div className="lg:col-span-5">
        <h2 className="text-2xl font-bold">Need to know more?</h2>
        <p>
          Here are a few of our frequently asked questions. If the question you
          have has not been addressed here; please feel free to contact us and a
          member of our team will be happy to take you through your options.
        </p>
        <FaQ></FaQ>
      </div>
      <div className="lg:col-span-5">
        <div class="mr-auto place-self-center lg:col-span-8 w-full">
          <form action="" className="w-full">

            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Name (required)
              </label>
              <input
                name="name"
                type="text"
                id="name"
                class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 placeholder-gray-600"
                placeholder="Abdullah AL Mubin"
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Email (required)
              </label>
              <input
                name="email"
                type="email"
                id="email"
                class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 placeholder-gray-600"
                placeholder="mubin@gmail.com"
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 placeholder-gray-600"
                placeholder="+9178454865"
              />
            </div>

            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5  w-full text-sm bg-gray-200 border border-gray-300 text-gray-600  rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>


            <Link to="/signup/2">
              <button
                type="button"
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 my-11 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Send message
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="lg:col-span-2 mt-3">
        <h2 className="text-3xl">GET IN TOUCH</h2>
        <p className="text-gray-700">hello@thesimpleumbrella.co.uk</p>
        <p className="text-gray-500">0208 158 6382</p>
        <p className="text-xl">OFFICE OPENING TIMES</p>
        <p className="text-gray-500">Monday – Friday  09:00 – 17:00</p>
        <p className="text-gray-500">Saturday – Sunday Closed</p>
      </div>
    </div>
  );
};

export default Need;
