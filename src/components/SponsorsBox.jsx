import React from 'react'

const SponsorsBox = ({tag, title, photo, desc,  buttonName}) => {
    return (
        <div className="flex min-h-min self-center items-center justify-center px-10 w-[70%]">
          <div className="rounded-[12px] p-px bg-gradient-to-r from-mamun-green to-mamun-light-blue">
            <div className="rounded-[12px] p-10 bg-[black] text-[white] flex  justify-center items-center ">

                <div className='w-8/12 flex flex-col gap-6'>

                <p className="gradient-subheading text-xl text-left font-bold ">
                   {tag}
                </p>
                <h1 className='font-bold text-white text-left text-2xl'>{title}</h1>
                <p className="text-[#CDCDCD] text-left ">
                   {desc}
                </p>

                <button className='border-[1px] border-mamun-light-blue bg-transparent px-[60px] py-[2px] rounded-md w-[40%] flex items-center justify-center'>
                    {buttonName}
                </button>
                </div>
             
            <div className=" flex gap-4 items-center w-4/12 justify-center">
            <img
                className="w-[200px] h-[200px] rounded-full"
                src= {photo} 
                alt="img"
                />
                
            </div>
        </div>
    </div>
</div>
      );
}

export default SponsorsBox