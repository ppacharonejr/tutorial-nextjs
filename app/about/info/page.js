import React from 'react'
import Link from 'next/link'
const Info = () => {
  return (
    <>
        <div className='text-7xl'>Info</div>
        <Link href='/'>home</Link><p></p>
        <Link href='/'>about</Link>
    </>
  )
}

export default Info