import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className='text-7xl'>Home</div>
      <Link href='/about'>about</Link>
    </>
  )
}

export default Home;
