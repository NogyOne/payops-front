'use client'
import {Icons} from '@/components/Icons'
import Navlink from '@/components/Navlink'
import { listMenu } from '@/config/topbar'
import { useState } from 'react'

// Set de parameters of the user
export default function Navbar({name, username}) {
    return (
        <nav className='flex justify-between items-center h-32 bg-[#386EF6] text-white w-full px-10 border-b-[5px] border-[#0DBCFB]'>

        <section className='flex flex-col justify-between'>

        <div className='flex flex-row items-start justify-start gap-2 mt-4 mb-8'>
            <Icons.UserRound className='w-8 h-8'/>
            <div className='flex flex-col justify-center'>
                <span className='text-[15px] whitespace-nowrap overflow-ellipsis leading-3 font-bold'>{name}</span>
                <span className='text-[15px] text-gray-300 font-normal'>@{username}</span>
            </div>
        </div>
        <div className='flex gap-8'>
            {
                listMenu.map((item, index) => (
                    <Navlink key={index} name={item.name} href={item.href}/>                
                ))
            }
        </div>
        
        </section>
        </nav>
    )
}