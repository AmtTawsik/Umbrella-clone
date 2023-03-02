import { Accordion, Button } from "flowbite-react";
import React from "react";
import calcu from "../../Media/Salary-Calc-1-2048x501.png";

const Calculator = () => {
  return (
    <div className="bg-white">
      <p className="bg-white flex justify-center">
        <img className="w-[700px]" src={calcu} alt="" />
      </p>
      <div className="md:flex">
      <div className="md:w-6/12">
        <h3 className="font-bold text-lg">YOUR GROSS PAY</h3>
        <Accordion className="bg-black " alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title className=" hover:bg-yellow-500 text-white text-xl">
              Pay information
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=" hover:bg-yellow-500 text-white text-xl">
              Other Incomes and taxable benefits
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=" hover:bg-yellow-500 text-white text-xl">
              Allowance and Tax Reliefs
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=" hover:bg-yellow-500 text-white text-xl">
              Pension & Student Loans
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div>

      </div>
      </div>
      <h3 className="font-bold">Auto-Enrolment Pension</h3>
      <div class="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-600"
        >
          Opt-in Pension Contribution
        </label>
      </div>
      <div className="mt-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-600 ">Employee's Pension Contribution:</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5" />
        </div>
      <div className="mt-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-600 ">Employer's Pension Contribution:</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3" />
        </div>
        <h3 className="font-bold mt-4">Student Loans</h3>
        <div class="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-600"
        >
          You are on Plan 1
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-600"
        >
          You are on Plan 2
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-600"
        >
          You are on a Postgraduate Loan
        </label>
      </div>

      <Button color="gray" className="hover:bg-yellow-400 hover:text-white font-bold mt-5">
      CALCULATE
    </Button>

    </div>
  );
};

export default Calculator;
