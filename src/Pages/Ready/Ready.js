import { Button } from "flowbite-react";
import React from "react";
import think from "../../Media/think.jpg";
import spider from "../../Media/spider.png";
import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid  px-4  lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div class=" mr-auto place-self-center lg:col-span-6 mt-5">
          <div className="flex justify-center">
            <img src={think} alt="" />
          </div>
          <h2 className="text-xl font-bold">WHY CHOOSE US?</h2>
          <p class=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Our umbrella service gives you legal employee status and handles all
            the paperwork. It’s the simplest solution for most contractors
            because you’re employed you will still have access to state benefits
            such as pensions and maternity pay. <br />
            <br /> We provide a fully compliant and comprehensive model. For
            your peace of mind, all applicable taxes and National Insurance are
            automatically deducted so there are no unexpected tax bills at the
            end of the year.
          </p>
          <div className="flex justify-center">
            <img src={spider} alt="" />
          </div>
        </div>

        <div class="lg:mt-0 lg:col-span-6 ">
          <h2 className="text-3xl font-bold">I am ready, Sign me up!</h2>
          <div className="p-5" style={{border:'solid #FDD835 35px'}}>
            <h2 className="text-2xl">
              Register your details - Simple Umbrella
            </h2>
            <hr />
            <div class="mr-auto place-self-center lg:col-span-8 w-full">
              <form action="" className="w-full">
                <div class="grid gap-1 mb-6 md:grid-cols-2 mt-5">
                  <div>
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="f-name"
                      id="f-name"
                      class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                      placeholder="Abdullah"
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      name="l-name"
                      type="text"
                      id="l-name"
                      class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                      placeholder="Mubin"
                    />
                  </div>
                </div>
                <div class="grid gap-1 mb-6 md:grid-cols-2 mt-5">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                      placeholder="mubin@gmail.com"
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      name="number"
                      type="number"
                      id="number"
                      class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-10/12 w-full p-2.5 placeholder-gray-600"
                      placeholder="+9178454865"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Street Address
                  </label>
                  <input
                    name="number"
                    type="number"
                    id="number"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-11/12 p-2.5 placeholder-gray-600"
                    placeholder="Natore"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Address Line 2
                  </label>
                  <input
                    name="number"
                    type="number"
                    id="number"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-11/12 p-2.5 placeholder-gray-600"
                    placeholder="Rajshahi"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    name="number"
                    type="number"
                    id="number"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-11/12 p-2.5 placeholder-gray-600"
                    placeholder="Rajshahi"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    State/Region/Province
                  </label>
                  <input
                    name="number"
                    type="number"
                    id="number"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-11/12 p-2.5 placeholder-gray-600"
                    placeholder="Rajshahi"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Postal / Zip Code
                  </label>
                  <input
                    name="number"
                    type="number"
                    id="number"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-11/12 p-2.5 placeholder-gray-600"
                    placeholder="6400"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>

                  <select
                    id="country"
                    name="country"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-11/12 p-2.5 placeholder-gray-600"
                  >
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>

                <div className="mt-10">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Rate of pay
                  </label>
                  <input
                    name="rate"
                    type="text"
                    id="rate"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 placeholder-gray-600"
                    placeholder="GBP"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Agency Contact Email Address
                  </label>
                  <input
                    name="aEmail"
                    type="email"
                    id="aEmail"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 placeholder-gray-600"
                    placeholder="GBP"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Job role 
                  </label>
                  <input
                    name="role"
                    type="text"
                    id="role"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 placeholder-gray-600"
                    placeholder="GBP"
                  />
                </div>

                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Sector
                  </label>

                  <select
                    id="Sector"
                    name="Sector"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 placeholder-gray-600"
                  >
                    <option value="Aerospace">Aerospace</option>
                    <option value="Agricultar">Agricultar</option>
                    <option value="Communication">Communication</option>
                    <option value="Computer & IT">Computer & IT</option>
                    <option value="Education">Education</option>
                    <option value="Energy">Energy</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Financial">Antarctica</option>
                  </select>
                </div>


                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Date/Time for a call back 
                  </label>
                  <input
                    name="date"
                    type="date"
                    id="date"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 placeholder-gray-600"
                    placeholder="GBP"
                  />
                </div>


                <div className="mt-4">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Call Back Immediately
                  </label>

                  <select
                    id="Sector"
                    name="Sector"
                    class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 placeholder-gray-600"
                  >
                    <option value="Aerospace">Yes</option>
                    <option value="Agricultar">No</option>
                  </select>
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
                    class="block p-2.5 md:w-11/12 w-full text-sm bg-gray-200 border border-gray-300 text-gray-600  rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <Link to="/signup/2">
                  <button
                    type="button"
                    class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 my-11 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
