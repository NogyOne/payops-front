import React from 'react'
import Link from 'next/link'

export default function Navlink({ name, href, currentPage, handleActive }) {
  
  return (
    <Link
      href={href}
      onClick={() =>{handleActive(href)}}
      className={`font-semibold hover:bg-[#0DBCFB] rounded-t-lg px-2 pb-2 pt-1 ${currentPage === href ? 'bg-[#0DBCFB]' : ''}`}
    >
      <p>{name}</p>
    </Link>
  )
}
