import React from 'react'

const ViewAllJobs = () => {
  return (
    <>
        <section className="m-auto max-w-lg px-6 my-10">
            <a 
                href="/jobs"
                className="block bg-black text-white text-center rounded-xl py-4 px-6 hover:bg-gray-700 "
            >
                View All Jobs
            </a>
        </section>
    </>
  )
}

export default ViewAllJobs