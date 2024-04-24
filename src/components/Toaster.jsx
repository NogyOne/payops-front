'use client'
import React from 'react'
import { Toaster as RadToaster } from 'sonner'

export default function Toaster() {
  return (
    <RadToaster
      position='bottom-right'
      richColors
      // toastOptions={{
      //   style: {
      //     textAlign: "middle",
      //     background: "rgb(255,255,255)",
      //     color: "red",
      //     border: "1px solid hsl(var(--border))",
      //   },
      // }}
    />
  )
}
