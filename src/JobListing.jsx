import React from "react";

export default function JobListing({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  isFeatured,
  isNew,
  handleFilters,
  jobTags,
}) {
  return (
    <div
      className={
        isFeatured
          ? "relative  md:static bg-white shadow-2xl p-5 md:p-3 flex flex-col md:flex-row md:items-center lg:justify-between  gap-5 border-l-8 rounded-md border-l-Desaturated-Dark-Cyan "
          : "relative  md:static bg-white shadow-2xl p-5 md:p-3 flex flex-col md:flex-row md:items-center lg:justify-between  gap-5 rounded-md"
      }
    >
      <div className="flex items-center md:gap-7">
        <div>
          <img
            className="w-16 lg:w-32 absolute md:static -top-8"
            src={logo}
          ></img>
        </div>
        <div className="flex flex-col gap-4 w-80 lg:w-fit ">
          <div className="flex items-center gap-3 mt-6 ">
            <p className=" text-Desaturated-Dark-Cyan font-bold md:text-xl">
              {company}
            </p>
            {isNew && (
              <span className=" text-white bg-Desaturated-Dark-Cyan font-bold px-3 py-1 text-sm rounded-2xl">
                NEW!
              </span>
            )}
            {isFeatured && (
              <span className=" text-white bg-Very-Dark-Grayish-Cyan font-bold px-3 py-1 text-sm rounded-2xl">
                FEATURED
              </span>
            )}
          </div>
          <p className=" text-Very-Dark-Grayish-Cyan font-bold tracking-tight hover:text-Desaturated-Dark-Cyan cursor-pointer w-fit md:text-lg">
            {position}
          </p>
          <ul className="list-disc  flex gap-6 text-Dark-Grayish-Cyan font-semibold">
            <li className="list-none">{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <hr className="md:hidden bg-Very-Dark-Grayish-Cyan" />
      <div className=" flex flex-wrap gap-4 text-base">
        {jobTags.map((tag, index) => (
          <button
            key={index}
            className=" bg-Light-Grayish-Cyan-bg text-Desaturated-Dark-Cyan font-bold rounded-md px-3 py-1 md:text-lg"
            onClick={() => handleFilters(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
