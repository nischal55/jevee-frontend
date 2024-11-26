import React from "react";

const Enroll = () => {
  return (
    <div>
      <div class=" form border-none shadow flex flex-col bg-white w-full p-8 space-y-8">
        <h1>Vendor Account Application Form</h1>

        <div class="border-b mb-8 pb-4 last:border-0 last:pb-0">
          <div class="font-bold text-lg mb-3 sm:mb-6">
            Applicant’s Informations
          </div>
          <div>
            <div class="w-full mb-1">
              <div class="mb-1.5 px-4">
                <div class="flex justify-between">
                  <label class="text-sm font-medium block">Full Name </label>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <input class="bg-white border rounded-3xl h-10 w-full px-4"></input>
          </div>
          <div class="h-[16px]"></div>
          <div class="w-full  mb-1">
            <div class="mb-1.5 px-4">
              <div class="flex justify-between">
                <label class="text-sm font-medium block">Phone Number</label>
              </div>
            </div>
            <div class="relative">
              <input
                class="bg-white  border rounded-3xl h-10 w-full  px-4"
                type="number"
                placeholder=""
                value=""
              />
            </div>
            <div class="h-[16px]"></div>
          </div>
          <div class="w-full mb-1">
            <div class="mb-1.5 px-4">
              <div class="flex justify-between">
                <label class="text-md font-serif">Email Address</label>
              </div>
            </div>
            <div class="relative">
              <input
                class="bg-white border rounded-3xl h-10 w-full px-4"
                type="email"
              ></input>
            </div>
            <div class="h-[16px]"></div>
          </div>
        </div>

        <div class="border-b mb-8 pb-4 last:border-0 last:pb-0">
          <div class="font-bold font-serif mb-3 ">Vendor Informations</div>
          <div>
            <div class="w-full  mb-1">
              <div class="mb-1.5 px-4">
                <div class="flex justify-between">
                  <label class="text-md font-serif ">Vendor Name </label>
                </div>
                <div class="text-xs mb-1">
                  Please mention the company name as per VAT/PAN Certificate.
                </div>
              </div>
              <div class="relative">
                <input
                  class="bg-white  border rounded-3xl w-full h-10 px-4"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="h-[16px]"></div>
            </div>
            <div class="w-full  mb-1">
              <div class="mb-1.5 px-4">
                <div class="flex justify-between">
                  <label class="text-sm font-serif ">Vendor Address </label>
                </div>
              </div>
              <div class="relative">
                <input
                  class="bg-white  border rounded-3xl  w-full h-10 px-4"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="h-[16px]"></div>
            </div>

            <div class="mb-1.5 px-4">
              <div class="flex justify-between">
                <label class="text-sm font-serif ">
                  Company registered under?{" "}
                </label>
              </div>
            </div>
            <div class="flex flex-col space-y-4 mt-2 mb-6 pl-4">
              <label class="space-x-2 flex items-center ">
                <input class="appearance" type="radio" />
                <span class="">VAT</span>
              </label>
              <label class="space-x-2 flex items-center  ">
                <input class="appearance text-orange-300" type="radio" />
                <span class="">PAN</span>
              </label>
            </div>
            <div class="w-full  mb-1">
              <div class="mb-1.5 px-4">
                <div class="flex justify-between">
                  <label class="text-sm font-medium block">PAN Number </label>
                </div>
              </div>
              <div class="relative">
                <input
                  class="bg-white  border rounded-3xl w-full h-10 px-4"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="h-[16px]"></div>
            </div>
          </div>
        </div>
        <div class="border-b mb-8 pb-4 last:border-0 last:pb-0"></div>
          <div class="font-bold text-lg mb-3 sm:mb-6">Brand Informations</div>
          <div>
            <div class="mb-1.5 px-4">
              <div class="flex justify-between">
                <label class="text-sm font-medium block">Add Brands </label>
              </div>
            </div>
            <div class="border rounded-lg flex flex-col mb-5  bg-gray-200 h-64 p-3 ">
              <div class="flex flex-col items-end space-y-10">
                <div class="relative flex w-full border-b border-dashed border-gray-300 pt-1 pb-4 mb-4">
                  <div class="w-full  mb-1">
                    <div class="mb-1.5 px-6">
                      <div class="flex justify-between space-y-3.5">
                        <label class="text-md font-sans font-semibold ">
                          Brand Name{" "}
                        </label>
                      </div>
                    </div>
                    <div class="relative">
                      <input
                        class="bg-white  w-full  border border-gray-300 rounded-3xl h-16 px-4"
                        type="text"
                        placeholder=""
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <button class="btn btn-outlined border-2 rounded border-pink-500  px-5 py-2 btn-medium ">
                  + Add More
                </button>
              </div>
            </div>
          </div>
          <div class="w-full relative mb-4">
            <div class="mb-1.5 px-4">
              <div class="flex justify-between">
                <label class="text-sm font-medium block">
                  Brand USP (Unique Selling Proposition){" "}
                </label>
              </div>
            </div>
            <textarea
              class="border-2 rounded-2xl w-full  h-[114px]"
              placeholder=""
            ></textarea>
          </div>
          <div class="mb-1.5 px-4">
            <div class="flex justify-between">
              <label class="text-sm font-medium block">
                ASP(Average Selling Price) of brand in NPR.{" "}
              </label>
            </div>
            <div class="text-xs mb-1">
              Select price range most products fall under ?
            </div>
          </div>
          <div class="flex flex-col space-y-4 mt-2 mb-6 pl-4">
            <label class="space-x-2 flex items-center  form_formRadio__6MsDa">
              <input class="appearance" type="radio" />
              <span class="">0 - 5k</span>
            </label>
            <label class="space-x-2 flex items-center  form_formRadio__6MsDa">
              <input class="appearance" type="radio" />
              <span class="">5k - 10k</span>
            </label>
            <label class="space-x-2 flex items-center  form_formRadio__6MsDa">
              <input class="appearance" type="radio" />
              <span class="">10k - 50k</span>
            </label>
            <label class="space-x-2 flex items-center  form_formRadio__6MsDa">
              <input class="appearance" type="radio" />
              <span class="">50k and above</span>
            </label>
          </div>
          <div class="mb-1.5 px-4">
            <div class="flex justify-between">
              <label class="text-sm font-medium block">
                Brand social media links
                <i class="font-normal">(Optional)</i>
              </label>
            </div>
          </div>
       
        <div class="border rounded-lg bg-gray-200 w-full h-60  p-6">
          <div class=" flex  w-full justify-evenly py-4">
            <div>
              <label for="social" class="block text-base ">
                Social Media
              </label>
              <input
                id="social"
                type="text"
                class="  flex justify-end w-[400px] mt-3   px-2 border  border-gray-300 rounded-3xl h-12"
              ></input>
            </div>

            <div class="">
              <div class="flex justify-evenly space-x-28">
                <label for="web-address" class="  text-sm font-sm block ">
                  {" Web Address"}
                </label>
                <label for="Test Link" class="  text-sm font-sm block  text-gray-300 cursor-not-allowed">
                  {" Test Link"}
                </label>
              </div>
              <div class="">
                <input
                  id="web-address"
                  type="text"
                  class=" flex justify-end w-[400px] mt-3 px-2  border  border-gray-300 rounded-3xl h-12"
                >
                
                </input>
              </div>
            </div>

          </div>
          <div class="w-auto border-b border-dashed  border-gray-500 pt-1 pb-4 "></div>

          <div class="flex justify-end pt-4">
            <button class=" btn btn-outlined border-2 rounded border-pink-500  px-5 py-2 btn-medium">
              + Add More
            </button>
          </div>
         
        </div>
        <div class="h-[16px]"></div>
        <div class="mb-1.5 px-4">
            <div class="flex justify-between">
              <label class="text-sm font-medium block">
                Brand pages
                <i class="font-normal">(Optional)</i>
              </label>
            </div>
          </div>
        <div class="border rounded-lg bg-gray-200 w-full h-60 p-6">
          <div class=" flex  w-full justify-evenly py-4">
            <div>
              <label for="social" class="block text-base ">
                Brand
              </label>
              <input
                id="social"
                type="text"
                class="  flex justify-end w-[400px] mt-3   px-2 border  border-gray-300 rounded-3xl h-12"
              ></input>
            </div>

            <div class="">
              <div class="flex justify-evenly space-x-28">
                <label for="web-address" class="  text-sm font-sm block ">
                  {" Web Address"}
                </label>
                <label for="Test Link" class="  text-sm font-sm block  text-gray-300 cursor-not-allowed">
                  {" Test Link"}
                </label>
              </div>
              <div class="">
                <input
                  id="web-address"
                  type="text"
                  class=" flex justify-end w-[400px] mt-3 px-2  border  border-gray-300 rounded-3xl h-12"
                >
                
                </input>
              </div>
            </div>
          </div>
          <div class="w-auto border-b border-dashed  border-gray-500 pt-1 pb-4 "></div>

          <div class="flex justify-end pt-4">
            <button class=" btn btn-outlined border-2 rounded border-pink-500  px-5 py-2 btn-medium">
              + Add More
            </button>
          </div>
        </div>
        
      <div class="border-b mb-8 pb-4 last:border-0 last:pb-0"></div> 
        <div class="font-bold text-lg mb-3 sm:mb-6">Product Informations</div>
        <div>
          <div class="mb-1.5 px-4">
            <div class="flex justify-between">
              <label class="text-sm font-medium block">
                Product Categories{" "}
              </label>
            </div>
          </div>
          <div class="flex flex-col mt-2 pl-4">
            <div class="text-sm sm:text-base space-x-2 flex items-start mb-3 ">
              <input class="checkBox" type="checkbox" id="Skin" />
              <label
                class="form-check-label inline-block break-word "
                for="Skin"
              >
                {" "}
                Skin
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start mb-4 ">
              <input class="checkBox" type="checkbox" id="Hair" />
              <label
                class="form-check-label inline-block break-word "
                for="Hair"
              >
                Hair
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start  mb-4 ">
              <input class="checkBox" type="checkbox" id="Fragrance" />
              <label
                class="form-check-label inline-block break-word "
                for="Fragrance"
              >
                Fragrance
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start mb-4 ">
              <input class="checkBox" type="checkbox" id="Makeup" />
              <label
                class="form-check-label inline-block break-word "
                for="Makeup"
              >
                Makeup
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start  mb-4 ">
              <input class="checkBox" type="checkbox" id="Kids Fashion" />
              <label
                class="form-check-label inline-block break-word "
                for="Kids Fashion"
              >
                Kids Fashion
              </label>
            </div>

            <div class="text-sm sm:text-base space-x-2 flex items-start  mb-4 ">
              <input
                class="checkBox"
                type="checkbox"
                id="Gadgets and Accessories"
              />
              <label
                class="form-check-label inline-block break-word "
                for="Gadgets and Accessories"
              >
                Gadgets and Accessories
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start mb-4 ">
              <input class="checkBox" type="checkbox" id="Personal Care" />
              <label
                class="form-check-label inline-block break-word "
                for="Personal Care"
              >
                Personal Care
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start  mb-4 F">
              <input class="checkBox" type="checkbox" id="Mom &amp; Baby" />
              <label
                class="form-check-label inline-block break-word "
                for="Mom &amp; Baby"
              >
                Mom &amp; Baby
              </label>
            </div>
            <div class="text-sm sm:text-base space-x-2 flex items-start  mb-4 ">
              <input
                class="checkBox"
                type="checkbox"
                id="Health and Wellness"
              />
              <label
                class="form-check-label inline-block break-word "
                for="Health and Wellness"
              >
                Health and Wellness
              </label>
            </div>
          </div>
          <div class="border-2 border-blue-800 border-dashed p-2.5 flex justify-between items-center text-sm space-x-4 mb-5">
            <div>
              Don’t see a category you have? Click on “Add” button and add
              Categories
            </div>
            <button class="btn btn-outlined btn-medium border-2 px-4 rounded border-pink-500">
              Add
            </button>
          </div>

          <div class="mb-4">
            <div class="mb-1.5 px-4">
              <div class="flex justify-between">
                <label class="text-sm font-medium block">
                  Country of Origin of the Products{" "}
                </label>
              </div>
            </div>
            <div class="relative">
              <input
                class="bg-white  border rounded-3xl w-full h-14 px-4"
                type="text"
                placeholder=""
                value=""
              />
            </div>
          </div>
        </div>
     
     
      <div class="">
        <div class="mb-1.5 px-4">
          <div class="flex justify-between">
            <label class="text-sm font-medium block">Total no of SKUs </label>
          </div>
        </div>
        <div class="relative">
          <input
            class="bg-white  border rounded-3xl w-full h-14 px-4"
            type="text"
            placeholder=""
            value=""
          />
        </div>
      </div>

      <div class="font-bold text-lg mb-3 sm:mb-6">
        Is there anything else you’d like us to know?
      </div>
      <div>
        <div class="w-full relative mb-4">
          <div class="mb-1.5 px-4">
            <div class="flex justify-between">
              <label class="text-sm font-medium block">
                Share any relevant information regarding your brand and its
                founder{" "}
              </label>
            </div>
          </div>
          <textarea class=" border w-full  h-[96px]" placeholder=""></textarea>
        </div>
      </div>

      <div class="flex bg-white sticky bottom-0 left-0 space-x-4 pd-y border-t py-4">
        <div class="w-full px-8">
          <div class="text-right text-xxs sm:text-sm font-medium leading-none mb-1">
            Fields Complete
          </div>
          <div class="w-full bg-gray-300 rounded-l-full rounded-r-full h-4">
            <div class="duration-500  h-full rounded-l-full rounded-r-full"></div>
          </div>
        </div>
        <button
          title=""
          class="btn btn-gray border-4 rounded-lg bg-slate-200 pt-3"
          disabled=""
        >
          Apply Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default Enroll;
