import React from 'react'
import { SECRETARIAT } from '../utils/Constants'
import SecretariatCard from '../components/SecretariatCard'
import StickyScroll from '../components/StickyScroll';

const Secretariat = () => {
  return (
    <main className='font-mamun-font-secondary text-[white]'>
      <section className='pt-[200px] w-full'>
        <h2 className='md:text-5xl text-4xl px-4 text-white text-center'>
          Meet the <span className='text-mamun-green font-bold'>Board</span>
        </h2>
        <StickyScroll OBJECT={SECRETARIAT}/>

      </section>
    </main>
  )
}

export default Secretariat