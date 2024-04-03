import React from 'react'
import Link from 'next/link'

export default function Navlink({ name, href, isActive, onClick}) {
  return (
    <Link href={href} className='font-semibold hover:underline'>
      <p>{name}</p>
    </Link>
  )
}
