"use client"
import React from 'react'
import { ProfileProvider } from '../hooks/useProfile'

export default function profile() {
  return (
    <ProfileProvider>
      <header className='bg-[#0d1117]'>
        <div className='mr-5 p-3 bg-black border-b-2 border-slate-500'>
          <div className='flex items-center justify-start w-full pb-3'>
            <div className='flex items-center gap-4 w-1/2'>
              <div className='min-w-7 min-h-7 border-2 rounded-md'></div>
              <div className='min-w-7 min-h-7 border-2 rounded-full'></div>
              <h3 className='max-w-fit overflow-hidden text-ellipsis font-bold text-sm text-white'>luizricardo41</h3>
            </div>
            <div className='flex items-center justify-end gap-3 w-1/2 pl-2'>
              <div className='min-w-7 min-h-7 border-2 rounded-md'></div>
              <div className='min-w-7 min-h-7 border-2 rounded-md'></div>
              <div className='min-w-7 min-h-7 border-2 rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h3 className='text-white text-sm'>Overview</h3>
            <div className='w-7 h-7 border-1 rounded-md text-white text-center font-extrabold bg-slate-800 opacity-75'>...</div>
          </div>
        </div>
      </header>
      <section className='py-14 px-5'>
        <div className='flex items-center'>
          <div className='w-12 h-12 border-2 rounded-full'></div>
          <div className='px-3'>
            <h1 className='text-white text-xl font-bold'>Luiz Ricardo</h1>
            <h3 className='text-slate-400 text-lg'>luizricardo41</h3>
          </div>
        </div>
      </section>
      <section className='px-5'>
        <p className='text-white text-base'>Bio se tiver</p>
      </section>
      <section className='p-5 gap-1 flex flex-col'>
        <p className='text-sm text-white'>luiz@email.com</p>
        <p className='text-sm text-white'>blog</p>
        <div>
          <span className='text-white text-sm font-bold'>35 </span> <span className='text-slate-500 text-sm'>followers</span>
          <span className='text-white'> &middot; </span>
          <span className='text-white text-sm font-bold'>58 </span> <span className='text-slate-500 text-sm'>following</span>
        </div>
      </section>
    </ProfileProvider>
  )
}
