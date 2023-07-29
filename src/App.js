import React, { useState } from 'react';
import Logo from './assets/wobot-ai-logos.png';

const App = () => {
  const [activeDiv, setActiveDiv] = useState('div-51-200');

  const handleClick = (id) => {
    setActiveDiv(id);
  };
  return (
    <div className='w-screen h-auto  bg-slate-100 '>
      <div className='flex w-full h-20'>
        <img
          src={Logo}
          alt='Wobot'
          className='relative w-40 h-auto max-h-[5rem] top-8 left-4 lg:left-20'
        />
      </div>
      <div className='flex min-h-full flex-col justify-start px-6 lg:px-8 mt-10 '>
        <div className='bg-white h-auto mx-auto py-10 px-16 rounded-xl'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center'>
            <svg
              width='52'
              height='48'
              viewBox='0 0 52 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='11.0477'
                height='27.8427'
                rx='5.52383'
                transform='matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)'
                fill='#3766E8'
              ></rect>
              <rect
                width='11.0477'
                height='42.3694'
                rx='5.52383'
                transform='matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)'
                fill='#3766E8'
              ></rect>
              <rect
                width='11.0477'
                height='21.5479'
                rx='5.52383'
                transform='matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)'
                fill='#3766E8'
              ></rect>
            </svg>
            <h2 className='mt-1 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900'>
              It's a delight to have you onboard
            </h2>
            <span className='mt-2 text-gray-500 font-semibold'>
              Help us know you better.
            </span>
            <span className='mt-2 text-gray-500 text-md text-center px-10'>
              (This is how we optimize Wobot as per your bussiness needs)
            </span>
          </div>

          <div className='mt-3 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='flex flex-col justify-center gap-2' action='#'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-md font-medium leading-6 text-gray-600'
                >
                  Your name
                </label>
                <div className='mt-2'>
                  <input
                    id='name'
                    type='text'
                    placeholder='e.g. John Smith'
                    required
                    className='block w-full h-10 rounded-md border-0 px-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-indigo-600 sm:text-md sm:leading-6 outline-none'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='block text-md font-medium leading-6 text-gray-600'
                >
                  Company name
                </label>
                <div className='mt-2'>
                  <input
                    id='company'
                    type='text'
                    placeholder='e.g. Alpha Inc.'
                    required
                    className='block w-full h-10 rounded-md border-0 px-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-md sm:leading-6 outline-none'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='industry'
                  className='block text-md font-medium leading-6 text-gray-600'
                >
                  Industry
                </label>
                <div className='mt-2'>
                  <select
                    id='industry'
                    type='text'
                    required
                    className='block w-full h-10 rounded-md border-0 px-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 focus:ring-2 outline-none focus:ring-indigo-600 sm:text-md sm:leading-6'
                  >
                    <option value=''>Select</option>
                    <option value='Production'>Production</option>
                    <option value='Manufacturing'>Manufacturing</option>
                    <option value='Engineering'>Engineering</option>
                  </select>
                </div>
              </div>
              <div>
                <label className='block text-md font-medium leading-6 text-gray-600 mt-3'>
                  Number of locations
                </label>
                <div className='mt-2 flex items-center gap-2.5 flex-wrap'>
                  <div
                    id='div-1-20'
                    onClick={() => handleClick('div-1-20')}
                    className={`inline-block w-auto h-auto  px-3 py-1 text-md  rounded-sm font-semibold cursor-pointer ${
                      activeDiv === 'div-1-20'
                        ? 'bg-blue-500 text-white'
                        : ' bg-gray-200 text-gray-600'
                    }`}
                  >
                    1-20
                  </div>
                  <div
                    id='div-21-50'
                    onClick={() => handleClick('div-21-50')}
                    className={`inline-block w-auto h-auto  px-3 py-1 text-md  rounded-sm font-semibold cursor-pointer ${
                      activeDiv === 'div-21-50'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    21-50
                  </div>
                  <div
                    id='div-51-200'
                    onClick={() => handleClick('div-51-200')}
                    className={`inline-block w-auto h-auto  px-3 py-1 text-md  rounded-sm font-semibold cursor-pointer ${
                      activeDiv === 'div-51-200'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    51-200
                  </div>
                  <div
                    id='div-201-500'
                    onClick={() => handleClick('div-201-500')}
                    className={`inline-block w-auto h-auto  px-3 py-1 text-md  rounded-sm font-semibold cursor-pointer ${
                      activeDiv === 'div-201-500'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    201-500
                  </div>
                  <div
                    id='div-500+'
                    onClick={() => handleClick('div-500+')}
                    className={`inline-block w-auto h-auto  px-3 py-1 text-md rounded-sm font-semibold cursor-pointer ${
                      activeDiv === 'div-500+'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    500+
                  </div>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='mt-5 flex w-full justify-center items-center rounded-md bg-blue-600 h-10 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500'
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className='mt-2 text-center text-md text-gray-500'>
          Terms of use
          <div className='inline-block mx-2 h-4 w-[1px] bg-gray-500 relative top-[4px]'></div>
          Privacy policy
        </p>
      </div>
    </div>
  );
};

export default App;
