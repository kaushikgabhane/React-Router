import React from 'react'

const AboutUs = () => {
  return (
    <div className='py-10 flex flex-col gap-10 items-center'>
      <h1 className='text-lg font-semibold'>This page is about <span className='text-2xl text-[#5B8FB9]'>React Router DOM</span></h1>

      <div className='w-[36%] text-center'>
        <p className='text-lg font-semibold'>React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them.
        </p>
      </div>
    </div>
   
  )
}

export default AboutUs