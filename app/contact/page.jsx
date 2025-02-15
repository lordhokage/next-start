'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();

  function handleClick() {
    router.push('/');
  }
  return (
    <div className="flex justify-center items-center h-screen bg-red-500 text-lg">
      Contact
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default Page;
