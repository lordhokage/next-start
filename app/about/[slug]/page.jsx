import React from 'react';

const Page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return <div>{slug}</div>;
};

export default Page;
