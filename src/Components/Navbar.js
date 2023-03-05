import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='nav-items bg-[#EEEEEE]'>
            <ul 
            className='flex h-16 justify-around items-center shadow-lg'>
                <Link to="/Home">
                    <li 
                    className='btn glass hover:bg-[#4d4d4d] bg-[#4d4d4d]'
                    >Home</li>
                </Link>
                <Link to="/AboutUs">
                    <li 
                    className='btn glass hover:bg-[#4d4d4d] bg-[#4d4d4d]'
                    >About Us</li>
                </Link>
                <Link to="/ContactUs">
                    <li 
                    className='btn glass hover:bg-[#4d4d4d] bg-[#4d4d4d]'
                    >Contact Us</li>
                </Link>
            </ul>
        </div>
    </>
)}

export default Navbar