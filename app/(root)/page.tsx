import PoadcastCard from '@/components/PoadcastCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import { podcastData } from '@/constants'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
          <h1 className='text-20 font-bold text-white-1'>Trending Poadcast</h1>
          {podcastData.map(({id,title,description,imgURL})=>(
            <PoadcastCard
              key={id}
              imgURL={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
          </section>
    </div>
  )
}

export default Home