import React from 'react'
import GradientBox from '../components/GradientBox'
const Committees = () => {
  return (
    <>
    <main className='relative overflow-hidden'>
            <section id='committees' className='flex  flex-col text-center gap-8 py-24 mt-24  '>
                <h1 className='text-[60px] text-[white]'>Committees</h1>
                <GradientBox tag={"UNITED NATIONS GENERAL ASSEMBLY"} title={"LOREM IPSUM DOLOR AMET SIT, PABLO ESCOBAR"}/>
                <GradientBox tag={"UNITED NATIONS GENERAL ASSEMBLY"} title={"LOREM IPSUM DOLOR AMET SIT, PABLO ESCOBAR"}/>
                <GradientBox tag={"UNITED NATIONS GENERAL ASSEMBLY"} title={"LOREM IPSUM DOLOR AMET SIT, PABLO ESCOBAR"}/>

            </section>
        </main>
    
    </>
  )
}

export default Committees