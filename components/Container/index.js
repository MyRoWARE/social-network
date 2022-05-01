import React from 'react'

export const Container = () => {
  return (
    <div className='relative h-full w-full flex bg-gradient-to-r from-[#ffffff66] to-[#ffffff1a]'>
      <div className='absolute logo text-[#4E5D78] font-bold left-0 text-2xl flex'>
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.4 0H15.6C18.3583 0 21.0035 1.12381 22.9539 3.12419C24.9043 5.12458 26 7.83769 26 10.6667C26 13.4956 24.9043 16.2088 22.9539 18.2091C21.0035 20.2095 18.3583 21.3333 15.6 21.3333V26C9.1 23.3333 0 19.3333 0 10.6667C0 7.83769 1.09571 5.12458 3.04609 3.12419C4.99647 1.12381 7.64175 0 10.4 0Z'
            fill='#377DFF'
          />
        </svg>
        <div className='logo-title ml-2.5'>Meetmax</div>
      </div>
      <div className='absolute logo text-[#4E5D78] font-bold right-0'>
        Language Selection
      </div>
    </div>
  )
}
