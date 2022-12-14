import React, { createContext, useEffect, useState } from "react";
import jobs from "../assets/data.json";

export const JobsContextProvider = createContext({});

const JobsProvider = ({ children }) => {
  const [devJobs, setDevJobs] = useState(jobs);
  const [filteredDevJobs, setFilteredDevJobs] = useState(devJobs.slice(0, 6));


  const [hideButton, setHideButton] = useState(false);

  const [filter, setFilter] = useState({
    title: "",
    location: "",
    fullTime: false
  });


  

  const handleLoadMore = () => {
    setFilteredDevJobs(devJobs);
    setHideButton(true);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const { title, location, fullTime } = filter;

    let copy = jobs;
    if (title || location || fullTime) {
      if (fullTime) {
        copy = copy.filter((job) => job.contract === "Full Time");
      }

      if (location) {
        copy = copy.filter((job) =>
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      }

      if (title) {
        copy = copy.filter((job) => job.position.toLowerCase().includes(title.toLowerCase()) || job.company.toLowerCase().includes(title.toLowerCase()))
      }
      setFilteredDevJobs(copy);
      setHideButton(true);

    } else if(!title && !location && !fullTime) {
      copy = devJobs;
      setFilteredDevJobs(copy.slice(6));
      setHideButton(false);
      setFilter({})
    }


  };

  

  const findJob = (id) => {
    let copy = devJobs;
    let foundJob = copy.find((job) => job.id == id);
    return foundJob;
  };

  return (
    <JobsContextProvider.Provider
      value={{
        devJobs,
        setDevJobs,
        filteredDevJobs,
        setFilteredDevJobs,
        handleFilter,
        setFilter,
        filteredDevJobs,
        findJob,
        hideButton,
        setHideButton,
        handleLoadMore,
      }}
    >
      {children}
    </JobsContextProvider.Provider>
  );
};

export default JobsProvider;
