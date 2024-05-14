import React from "react";

// filter ke aandr filter data ko laye through propes and uspr fir hmne map function laga diya joki hr data ke liye ek button bana diya or hr ek button ke liye title daal diya
const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {/* Data ke aandr 5 object h or unke liye button create krna chahta hu toh hm map function use krenge */}
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md dont-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
            // filter data ke handler button me hmne jis button pr click krre h uska title parameter me de dega
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {" "}
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
