import React from 'react'
import {Link} from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <>
        <section className="m-auto max-w-lg px-6 my-10">
            <Link 
                to="/jobs"
                className="block bg-black text-white text-center rounded-xl py-4 px-6 hover:bg-gray-700 "
            >
                View All Jobs
            </Link>
        </section>
    </>
  )
}

export default ViewAllJobs