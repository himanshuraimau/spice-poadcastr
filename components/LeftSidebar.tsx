import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
             <Link href='/' className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                  <Image src="/icons/logo.svg" alt='logo' width={23} height={27}></Image>
                  <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Poadcastr</h1>
             </Link>
             {sidebarLinks.map(({route,label,imgURL})=>{
                return <Link href={route} key={label} className='flex gap-3'>
                    <Image src={imgURL} alt={label} width={24} height={24}></Image>
                    <p>{label}</p>
                </Link>
             })}
        </nav>
    </section>
  )
}

export default LeftSidebar