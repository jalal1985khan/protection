import React from 'react'

const OurApproach = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:py-8 mb-10">
        <h2 className="text-4xl text-custom-blue font-semibold text-center mb-8">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/images/connect.png"
              alt="Connect"
              className="w-16 h-16 mb-2"
            />
            <h3 className="text-lg font-medium">Connect</h3>
            <p className="text-center px-4">
              Foster collaborations between diverse stakeholders
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/art.png" alt="Act" className="w-16 h-16 mb-2" />
            <h3 className="text-lg font-medium">Act</h3>
            <p className="text-center px-4">
              Scale and support member programme and coalition initiatives
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/solve.png"
              alt="Solve"
              className="w-16 h-16 mb-2"
            />
            <h3 className="text-lg font-medium">Solve</h3>
            <p className="text-center px-4">
              Consolidate and disseminate successful innovations
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/learn.png"
              alt="Learn"
              className="w-16 h-16 mb-2"
            />
            <h3 className="text-lg font-medium">Learn</h3>
            <p className="text-center px-4">Facilitate knowledge sharing</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurApproach
