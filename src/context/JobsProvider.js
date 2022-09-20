import React, { createContext, useState } from "react";
import jobs from "../assets/data.json";

export const JobsContextProvider = createContext({});

const JobsProvider = ({ children }) => {
  const [devJobs, setDevJobs] = useState(jobs);
  const [filteredDevJobs, setFilteredDevJobs] = useState(devJobs);

  const [filter, setFilter] = useState({
    title: "",
    location: "",
    fullTime: false,
  });

  const handleFilter = (e) => {
    e.preventDefault();
    const { title, location, fullTime } = filter;


    let copy = devJobs;
    if (title || location || fullTime) {
      if (fullTime) {
        copy = copy.filter((job) => job.contract === "Full Time");
      }

      if (location) {
        copy = copy.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()));
      }

      if (title) {
        copy = copy.filter((job) => job.position.toLowerCase().includes(title.toLowerCase()));
      }
    } else {
      copy = devJobs;
    }

    setFilteredDevJobs(copy);
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
      }}
    >
      {children}
    </JobsContextProvider.Provider>
  );
};

export default JobsProvider;
