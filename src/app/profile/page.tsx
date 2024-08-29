"use client"
import React from 'react'
import { ProfileProvider } from '../hooks/useProfile'
import GitHub from '@/icons/GitHub'
import { BookMarked, Ellipsis, Inbox, Menu, Search } from 'lucide-react'
import image from '../../../public/images/images-portifolio3.png'
import Image from 'next/image'

export default function profile() {
  return (
    <ProfileProvider>
      <header className='bg-[#0d1117]'>
        <div className='mr-5 p-3 bg-black border-b-[1px] border-slate-600'>
          <div className='flex items-center justify-start w-full pb-3'>
            <div className='flex items-center gap-4 w-1/2'>
              <button className='min-w-8 min-h-8 border-[1px] border-slate-600 rounded-md flex justify-center items-center'>
                <Menu className='text-slate-600' size={20} />
              </button>
              <div className='min-w-7'>
                <GitHub />
              </div>
              <h3 className='max-w-fit overflow-hidden text-ellipsis font-bold text-sm text-white'>luizricardo41</h3>
            </div>
            <div className='flex items-center justify-end gap-3 w-1/2 pl-2'>
              <button className='min-w-8 min-h-8 border-[1px] border-slate-600 rounded-md flex justify-center items-center'>
                <Search className='text-slate-600' size={18} />
              </button>
              <button className='min-w-8 min-h-8 border-[1px] border-slate-600 rounded-md flex justify-center items-center'>
                <Inbox className='text-slate-600' size={18} />
              </button>
              <div className='w-8 h-8 rounded-full'>
                <Image
                  alt='image'
                  src={image}
                  className='rounded-full w-8 h-8'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex gap-2'>
              <BookMarked className='text-slate-600' size={18} />
              <h3 className='text-white text-sm'>Repositories</h3>
            </div>
            <button className='min-w-8 min-h-8 border-[1px] border-slate-600 rounded-md flex justify-center items-center'>
              <Ellipsis className='text-slate-600' size={18} />
            </button>
          </div>
        </div>
      </header>
      <section className='py-14 px-5'>
        <div className='flex items-center'>
          <div className='min-w-3 min-h-3 rounded-full w-2/12'>
            <Image
              alt='image'
              src={image}
              className='rounded-full min-w-12 min-h-12'
            />
          </div>
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
