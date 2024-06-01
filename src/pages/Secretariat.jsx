import React from 'react'
import { SECRETARIAT } from '../utils/Constants'
import SecretariatCard from '../components/SecretariatCard'

const Secretariat = () => {
  return (
    <main className='font-mamun-font-secondary text-[white]'>
      <section className='pt-32 w-full'>
        <h2 className='md:text-5xl text-4xl px-4 text-white text-center'>
          The Perfect <span className='text-mamun-green font-bold'>Executive Board</span> Doesn't Exist
        </h2>
        {
          SECRETARIAT.map((member) => (
            <SecretariatCard key={member.name} name={member.name} designation={member.designation} description={member.description} img={member.img} />
          ))
        }
      </section>
    </main>
  )
}

export default Secretariat