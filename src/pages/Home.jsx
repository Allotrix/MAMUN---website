import React from 'react';
import { COMMITTEES } from '../utils/Constants';

const Home = () => {
  return (
    <main className='font-mamun-font-secondary text-[white]'>
      <section className='py-32 mx-auto w-full flex flex-col items-center'>
        <div className='h-[180px] w-[180px]'>
            <img className='max-h-full max-w-full' src="/maamun.png" alt="logo" />
        </div>
        <h2 className='gradient-heading md:text-6xl text-2xl text-center font-mamun-font-secondary'>
            MOST SOPHISTICATED MUN
        </h2>
        <h2 className='md:text-6xl text-2xl text-center font-bold'>
            CHENNAI HAS EVER SEEN
        </h2>
        <h5 className='my-6 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores.
        </h5>
        <a href="/" className='px-14 py-2 bg-mamun-blue rounded-lg'>
            Register Now
        </a>
      </section>
      <section className='mt-14'>
        <div className='flex flex-wrap gap-6 px-4 md:px-32'>
            {
                COMMITTEES.map((committee) => {
                    <article className='rounded-lg bg-gradient-to-r from-mamun-green to-mamun-light-blue'>
                        <div className='p-10 rounded-lg bg-[black]'>
                            {committee.name}
                        </div>
                    </article>
                })
            }
        </div>
      </section>
    </main>
  )
}

export default Home;
