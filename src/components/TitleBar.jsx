'use client'
import React from 'react'
import { Icons } from '@/components/Icons'

export default function TitleBar() {
    const handleOnCloseWindow = () => {
       window.close()
    }

    const getData = () => {
        electronAPI.getData({product})
    }

    const handleOnMinimize = () => {
        ipcRenderer.send('minimize-window')
    }

  return (
    <div className='p-1 text-xs font-semibold bg-[#27314b] text-white border-b-4 border-[#324d88]'>
      <div className='flex items-center justify-between px-1'>
        <div className='flex items-center justify-start w-full gap-1' id='titlebar'>
          <img src='/BlueSpiralV2.png' alt='logo' className='w-4 h-4' />
          <p>PayOps</p>
        </div>
        {/* ICONS */}
        <div className='flex'>
            <button className='p-1 rounded-lg hover:bg-gray-600' onClick={handleOnMinimize} ><Icons.Minus/></button>            
            <button className='p-1 rounded-lg hover:bg-gray-600' onClick={handleOnCloseWindow}  ><Icons.X/></button>
        </div>
      </div>
    </div>
  )
}
