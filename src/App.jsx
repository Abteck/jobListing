import { useState } from "react";
import JobListing from "./JobListing.jsx";
import jobData from "./data.json";
import FilterData from "./filter/FilterData.jsx";
// import image1 from "images/bg-header-desktop.svg";
// import image2 from "images/bg-header-desktop.svg";

const App = () => {
  const [filters, setFilters] = useState([]);

  // add filter to array onclick
  const handleFilters = (tag) => {
    // check to see if tag is already in filter
    if (filters.indexOf(tag) === -1) {
      // add to filter
      setFilters((prevValue) => [...prevValue, tag]);
      console.log(filters);
    }
  };

  // clear filters
  const clearAll = () => {
    setFilters([]);
  };

  // clear selected filter from the array
  const clearFilter = (tag) => {
    setFilters(filters.filter((item) => item !== tag));
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full bg-Desaturated-Dark-Cyan mb-10">
        <img
          src="./images/bg-header-desktop.svg"
          alt="header"
          className="w-full md:hidden block"
        />
        <img
          src="images/bg-header-desktop.svg"
          alt="header"
          className="w-full hidden md:block"
        />
      </div>

      {/* if filter > 0, show filter component */}

      {filters.length > 0 && (
        <FilterData
          filters={filters}
          clearAll={clearAll}
          clearFilter={clearFilter}
        />
      )}

      {/* map jobData, if filter array > 0 return jobCard where jobTags contains filter */}

      <div className="p-4 flex flex-col gap-14 font-league-spartan">
        {jobData.map((jobs) => {
          let jobTags = [
            jobs.role,
            jobs.level,
            ...(jobs.languages || []),
            ...(jobs.tools || []),
          ];

          let filterJobs = (jobTags, filters) =>
            filters.every((value) => jobTags.includes(value));

          return filters.length === 0 ? (
            <JobListing
              key={jobs.id}
              logo={jobs.logo}
              company={jobs.company}
              position={jobs.position}
              postedAt={jobs.postedAt}
              contract={jobs.contract}
              location={jobs.location}
              isFeatured={jobs.featured}
              isNew={jobs.new}
              handleFilters={handleFilters}
              jobTags={jobTags}
            />
          ) : (
            filterJobs(jobTags, filters) && (
              <JobListing
                key={jobs.id}
                logo={jobs.logo}
                company={jobs.company}
                position={jobs.position}
                postedAt={jobs.postedAt}
                contract={jobs.contract}
                location={jobs.location}
                isFeatured={jobs.featured}
                isNew={jobs.new}
                handleFilters={handleFilters}
                jobTags={jobTags}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default App;
