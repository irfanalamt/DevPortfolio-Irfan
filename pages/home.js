import React from 'react';

const HelloPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-blue-500 text-white p-10 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Hello, Tailwind CSS!</h1>
        <p className='text-lg'>Welcome to the minimal hello page.</p>
      </div>
    </div>
  );
};

export default HelloPage;
