import React from 'react';
import { COMMITTEES } from '../utils/Constants';
import GradientBox from '../components/GradientBox';

const Home = () => {
  return (
    <main className='font-mamun-font-secondary text-[white]'>
      <section className='pt-32 mx-auto w-full flex flex-col items-center'>
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
      <section className='mt-14 w-full'>
        <div className='flex flex-wrap gap-3 px-4 md:px-32 justify-center'>
          {
            COMMITTEES.map((committee) => (
              <article className='rounded-lg h-[200px] w-[160px] border border-mamun-green flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-out'>
                  <img className='w-[130px] h-[130px]' src={committee.comLogo} alt="AV" />
                  <h3>
                    {committee.com}
                  </h3>
              </article>
            ))
          }
        </div>
        <article className='text-center my-7'>
          Exiciting Committees, Exciting MUN
        </article>
      </section>
      <section className='mt-14 w-full'>
        <h2 className='md:text-5xl text-4xl px-4 text-[white] text-center'>
          The Perfect <span className='text-mamun-green font-bold'>Executive Board</span> Doesn't Exist
        </h2>
      </section>
      <section className='mt-14 w-full'>
        <GradientBox tag={"Madras Model United Nations"} title={"Be a part of the Exculsive, Be a part of real MUNNING experience"} photo={"/maamun.png"} />
      </section>
      <section className='w-full bg-[#141415] h-[100px] flex items-center my-24'>
        <div className='w-full md:w-[75%] overflow-hidden flex after:content[""] after:dark:from-brand-dark after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute before:content[""] before:dark:from-brand-dark before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute'>
          {
              
              [...Array(2)].map((arr, i) => (
                  <div key={i} className='flex flex-nowrap animate-slide'>
                      {
                          COMMITTEES.map((committee) => (
                              <div key={committee.com} className='relative w-[200px] m-10 shrink-0 flex items-center'>
                                  <img src={committee.comLogo} alt={committee.com} className='object-contain max-w-none w-[200px]' />
                              </div>
                          ))
                      }
                  </div>
              ))
          }
        </div>
        <aside className='hidden md:block px-4'>
            <h3 className='text-2xl'>
                Esteemed Sponsors
            </h3>
            <p className='text-sm'>
                In partnership with <span className='text-mamun-blue font-semibold tracking-wide'>OWF</span>
            </p>
        </aside>
      </section>
    </main>
  )
}

export default Home;
