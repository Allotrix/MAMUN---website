import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { COMMITTEES } from '../utils/Constants';
import StickyScroll from '../components/StickyScroll';

const Agenda = () => {

    const [committee, setCommittee] = useState({});
    const [showAbout, setShowAbout] = useState(false);

    const params = useParams();
    const { comName } = params;

    useEffect(() => {
        const fetchCommittee = () => {
            COMMITTEES.forEach((com) => {
                if(com.comAbb.toLowerCase() === comName) {
                    setCommittee(com);
                    return;
                }
            })
        }

        fetchCommittee();
    }, []);

    return (
        <main className='font-mamun-font-secondary text-[white]'>
            <section className={`pt-36 mx-auto w-full flex flex-col items-center md:px-32 px-4 ${!showAbout && "mb-24"}`}>
                <div className='h-[180px] w-[180px]'>
                    <img className='max-h-full max-w-full' src={committee.comLogo} alt="logo" />
                </div>
                <h5 className='my-6 text-center px-4 text-3xl'>
                    {committee.comAgenda}
                </h5>
                <aside className='flex flex-col md:flex-row gap-4 items-center'>
                    <a href={committee.bgGuide} className='text-xl text-[black] bg-mamun-green rounded-md px-20 py-3 min-w-[260px]'>
                        BG Guide
                    </a>
                    <button className='text-xl text-[black] bg-mamun-green rounded-md px-20 py-3 min-w-[260px]'>
                        EB
                    </button>
                    <button onClick={() => setShowAbout(true)} className='text-xl text-[black] bg-[#79F3CE] rounded-md px-20 py-3 min-w-[260px]'>
                        About
                    </button>
                </aside>
            </section>
            <section className={`my-14 w-full px-4 md:max-w-[800px] mx-auto ${showAbout ? "block": "hidden"}`}>
                <h2 className='text-xl font-semibold'>
                    About
                </h2>
                <p className='text-justify my-2 text-md px-3 py-5 border border-mamun-green rounded-md'>
                    {committee.about}
                </p>
            </section>
            {/* <section className={`my-14 w-full px-4 mx-auto`}>
                <StickyScroll OBJECT={committee.board} />
            </section> */}
        </main>
    )
}

export default Agenda;
