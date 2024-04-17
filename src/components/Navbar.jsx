import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className="bg-indigo-400 border-b border-b-indigo-400">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className=" flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img 
                                src={logo} 
                                className="h-10 w-auto"
                                alt="React Logo"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
                        </a>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2"> 
                                <a href="/index.html" className="text-white bg-black hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Home</a>
                                <a href="/jobs.html" className="text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Jobs</a>
                                <a href="/add-job.html" className="text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2">Add Job</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar