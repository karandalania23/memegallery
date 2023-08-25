import React from "react";

export default function Grid() {
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
  ];
  return (
    <>
      <div className="text-white pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className=" row-span-2">
            <div className="w-full h-full bg-[#292727] text-[#eeeeee] rounded-lg">
              <div className="p-5 text-2xl font-medium">Upload Your Meme !</div>
              <div>Author's Name</div>
              <div className="flex items-center justify-center w-full px-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
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
