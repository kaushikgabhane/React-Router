import React from 'react'

const ContactUs = () => {
  return (
    <div className='h-[30vh]  flex flex-col items-center justify-center gap-8'>
      <a 
      href='https://github.com/kaushikgabhane' 
      className='flex items-center gap-5'
      >  
        <i className="fa-brands fa-github"></i>
        <p className='text-xl text-[#5B8FB9] font-semibold'> GitHub</p>
      </a>
      <a 
      href='https://www.linkedin.com/in/kaushik-gabhane-013708203/' 
      className='flex items-center gap-5'
      >  
        <i class="fa-brands fa-linkedin"></i>
        <p className='text-xl text-[#5B8FB9] font-semibold'> linkedin</p>
      </a>
    </div>
  )
}

export default ContactUs