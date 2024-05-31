import React from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='flex flex-col px-4 py-6 text-[white] font-mamun-font-secondary'>
            <div className='flex flex-col justify-between gap-6 md:flex-row md:mx-32 md:py-10'>
                <article className='flex flex-col items-center gap-4'>
                    <h3 className='text-allotrix-std text-sm'>
                        Socials
                    </h3>
                    <div className='flex items-center gap-3 text-2xl'>
                        <a href="https://twitter.com/allotrixapp" target='blank'>
                            <FaXTwitter />
                        </a>
                        <a href="https://www.instagram.com/allotrix" target='blank'>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/allotrix-automation/mycompany/" target='blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                </article>
                <aside className='flex flex-wrap gap-6 px-10 justify-center my-10 md:my-[unset] md:gap-14'>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm'>
                            <Link to="/">
                                Product
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/privacypolicy">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/termsofservice">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/refundpolicy">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm'>
                            <Link to="/getAllotrix">
                                Shop
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/getAllotrix/download">
                                    Download
                                </a>
                            </li>
                            <li>
                                <a href="/#whyallotrix">
                                    Why Allotrix?
                                </a>
                            </li>
                            <li>
                                <a href="#pricing">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/getallotrix/otherproducts">
                                    Other Products
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm'>
                            Resources
                        </h3>
                        <ul className='text-sm'>
                            <li>Coming Soon!</li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-allotrix-std text-sm'>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a className='flex gap-1 items-center' href="mailto:allotrixapp@gmail.com?subject=Meeting%20Request">
                                    <IoMdMail />
                                    allotrixapp@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+1(778)874-4788">
                                    <IoMdCall />
                                    +1 (778) 874-4788
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+919840572975">
                                    <IoMdCall />
                                    +91 9840572975
                                </a>
                            </li>
                        </ul>
                    </article>
                </aside>
            </div>
            <aside className='flex justify-between items-center border-t-2 border-solid border-t-mamun-blue pt-6 md:mx-32'>
                <div className='w-[80px] gradient-heading text-xl'>
                    MaMUN
                </div>
                <div className='bg-[#161617] text-[13px] font-light py-1 px-4 rounded-2xl text-[white] transition-all duration-300 ease-out border-[1px] border-solid hover:border-mamun-blue'>
                    <a href='/'>
                        Register
                    </a>
                </div>
            </aside>
        </footer>
    )
}

export default Footer;