import React from "react";

export default function FilterData({ filters, clearAll, clearFilter }) {
  return (
    <div className=" p-6 bg-white mb-6  flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-3">
        {filters.map((tag, index) => {
          return (
            <h2
              key={index}
              className="bg-Light-Grayish-Cyan-bg text-Desaturated-Dark-Cyan font-bold rounded-sm pl-3 flex gap-2 overflow-hidden items-center"
            >
              {tag}

              <span
                className=" bg-Desaturated-Dark-Cyan text-white p-1 cursor-pointer"
                onClick={() => {
                  clearFilter(tag);
                }}
              >
                X
              </span>
            </h2>
          );
        })}
      </div>
      <div
        className=" w-52 cursor-pointer hover:underline text-Dark-Grayish-Cyan font-bold text-center"
        onClick={() => {
          clearAll();
        }}
      >
        Clear all
      </div>
    </div>
  );
}
