import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { JobsContextProvider } from '../context/JobsProvider'




const JobPage = () => {
  const { id } = useParams()
  const { findJob } = useContext(JobsContextProvider)





  let job = findJob(id);

  return (
    <div>
      <h1>{job.position}</h1>
    </div>
  )
}

export default JobPage;