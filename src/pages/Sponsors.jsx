import React from 'react'
import GradientBox from '../components/GradientBox'
import { SPONSORS } from '../utils/Constants'
const Sponsors = () => {
  return (
    <>
    <main className='relative overflow-hidden'>
            <section id='committees' className='flex  flex-col text-center gap-8 py-24 mt-24  '>
                <h1 className='text-[60px] font-bold text-[white]'>Sponsors</h1>

                {SPONSORS.map((element, index)=>(

                    <GradientBox key = {index} tag = {element.COMPANYNAME} title = {element.TITLE} photo = {element.COMPANYLOGO} buttonName={"Read more"} />

                ))}



            </section>
        </main>
    
    </>
  )
}

export default Sponsors