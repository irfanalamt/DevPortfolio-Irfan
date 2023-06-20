import React from 'react';

const HelloPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900'>
      <header className='text-5xl font-bold mb-10'>Irfan Alam</header>

      <section className='text-lg text-center mb-20 w-2/3'>
        <p>
          I'm a full-stack developer specializing in creating exceptional
          digital experiences.
        </p>
      </section>

      <div className='grid grid-cols-2 gap-10 mb-10'>
        <div className='bg-white shadow-md p-5 rounded transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg'>
          <h2 className='text-xl font-semibold mb-2'>Projects</h2>
          <p>Check out my latest work.</p>
        </div>
        <div className='bg-white shadow-md p-5 rounded transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg'>
          <h2 className='text-xl font-semibold mb-2'>Resume</h2>
          <p>Take a look at my resume.</p>
        </div>
      </div>

      <footer className='text-sm'>
        <p>© 2023 RFN</p>
      </footer>
    </div>
  );
};

export default HelloPage;
