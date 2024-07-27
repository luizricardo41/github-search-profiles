"use client"
import React from 'react'
import { ProfileProvider } from '../hooks/useProfile'

export default function profile() {
  return (
    <ProfileProvider>
      <section>
        <div className='mr-5 p-3 bg-slate-950'>
          <div className='flex items-center justify-start w-full pb-3'>
            <div className='flex items-center gap-4 w-1/2'>
              <div className='min-w-8 min-h-8 border-2 rounded-md'></div>
              <div className='min-w-8 min-h-8 border-2 rounded-full'></div>
              <h3 className='max-w-fit overflow-hidden text-ellipsis font-bold text-sm text-white'>luizricardo41</h3>
            </div>
            <div className='flex items-center justify-end gap-3 w-1/2 pl-2'>
              <div className='min-w-8 min-h-8 border-2 rounded-md'></div>
              <div className='min-w-8 min-h-8 border-2 rounded-md'></div>
              <div className='min-w-8 min-h-8 border-2 rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h3 className='text-white text-sm'>Overview</h3>
            <div className='w-8 h-8 border-1 rounded-md text-white text-center font-extrabold bg-gray-400'>. . .</div>
          </div>
        </div>
      </section>
    </ProfileProvider>
  )
}
