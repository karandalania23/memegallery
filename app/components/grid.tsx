'use client'
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Grid() {
  const notify = () => toast("Thanks for Submitting!");
  const data = [
    {
      path: "",
      name: "michael scott",
    },
    {
      path: "",
      name: "michael scott",
    },
    {
      path: "",
      name: "michael scott",
    },
    {
      path: "",
      name: "michael scott",
    },
    {
      path: "",
      name: "michael scott",
    },
    {
      path: "",
      name: "michael scott",
    },
    {
      path: "",
      name: "michael scott",
    },
  ];
  return (
    <>
      <div className="text-white pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className=" row-span-2">
            <div className="w-full h-full bg-[#292727] text-[#eeeeee] rounded-lg">
              <form>
                <div className="p-5 text-2xl font-semibold">
                  Upload Your Meme !
                </div>
                <div className="px-10">Author's Name</div>
                <div className="px-10 mt-2">
                  <input
                    type="text"
                    id="name"
                    className="text-sm rounded-lg border-2  border-dashed border-gray-600 block w-full p-2.5 bg-[#454141] placeholder-gray-400 text-white"
                    placeholder="Michael Scott"
                    required
                  />
                </div>
                <div className="px-10 mt-4">Author's Email</div>
                <div className="px-10 mt-2">
                  <input
                    type="email"
                    id="email"
                    className="text-sm rounded-lg border-2  border-dashed border-gray-600 block w-full p-2.5 bg-[#454141] placeholder-gray-400 text-white"
                    placeholder="name@meme.com"
                    required
                  />
                </div>

                <div className="px-10 mt-4">Upload File</div>
                <div className="flex items-center justify-center w-full px-10 mt-2">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-48 border-2  border-dashed rounded-lg cursor-pointer  bg-[#454141]  border-gray-600 hover:border-gray-500 hover:bg-[#575151]"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <div className="mt-6 flex justify-end px-10 pb-6">
                <button type="submit" onClick={notify} className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 ">Submit</button>
                <ToastContainer />
                </div>


              </form>
            </div>
          </div>
          {data.map((info) => (
            <div>
              <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
              <div> {info.name} </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
