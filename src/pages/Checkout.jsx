import React from 'react';

const Checkout = () => {
  return (
    <div>
      Checkout
    </div>
  )
}

export default Checkout;


{/* <main className='bg-white text-[#303030] relative overflow-hidden z-10 flex flex-col md:flex-row justify-center gap-14 md:gap-[unset]'>
            <section className='md:w-[50%] flex md:justify-end justify-center md:pr-24 pt-20'>
                <div className='flex flex-col gap-10 md:w-[400px] w-[350px]'>
                    <Link to={'/getallotrix/download/payment'} className='text-2xl'>
                        <FaRegArrowAltCircleLeft />
                    </Link>
                    <article className='font-allotrix-font px-2 text-center md:text-left'>
                        <h5 className='text-[gray] text-md'>
                            Pay Allotrix
                        </h5>
                        <h2 className='text-4xl'>
                            ₹{getPriceForPlan()}.00
                        </h2>
                    </article>
                    <aside className='flex flex-col gap-3 font-allotrix-font'>
                        <div className='flex justify-between text-sm px-2'>
                            <h3>
                                {selectedPlan} Plan
                            </h3>
                            <p>
                                ₹{getPriceForPlan()}.00
                            </p>
                        </div>
                        <hr className='border-[#c7c6c6]' />
                        <div className='flex justify-between text-sm px-2'>
                            <h3>
                                Subtotal
                            </h3>
                            <p>
                                ₹{getPriceForPlan()}.00
                            </p>
                        </div>
                        <div className='flex justify-between text-[#adacac] text-[12px] px-2'>
                            <h3>
                                Platform Fee
                            </h3>
                            <p>
                                Free
                            </p>
                        </div>
                        <div className='flex justify-between text-[#adacac] text-[12px] px-2'>
                            <h3>
                                Convenience Fee
                            </h3>
                            <p>
                                Free
                            </p>
                        </div>
                        <hr className='border-[#c7c6c6]' />
                        <div className='flex justify-between text-sm px-2'>
                            <h3>
                                Total
                            </h3>
                            <p>
                                ₹{getPriceForPlan()}.00
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
            <section className='flex flex-col items-center md:items-start md:pl-24 gap-4 md:w-[50%] md:shadow-xl md:shadow-[#c7c6c6] md:pt-20 md:h-[100vh]'>
                <h2 className='text-md font-allotrix-font'>
                    Billing Information
                </h2>
                <form onSubmit={handleSubmit} className='font-allotrix-font flex flex-col gap-3 w-[350px]'>
                    <label htmlFor='email' className='flex flex-col gap-1'>
                        <p className='text-sm text-[#c7c6c6] font-extralight'>
                            Email ID
                        </p>
                        <input type="email" name='email' value={checkoutForm.email} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-md w-full bg-[white] border border-[#c7c6c6] text-md' required />
                    </label>
                    <label htmlFor='phoneNo' className='flex flex-col gap-1'>
                        <p className='text-sm text-[#c7c6c6] font-extralight'>
                            Phone Number
                        </p>
                        <input type="tel" name='phoneNo' value={checkoutForm.phoneNo} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-md w-full bg-[white] border border-[#c7c6c6] text-md' required />
                    </label>
                    <aside className='flex flex-col gap-1'>
                        <p className='text-sm text-[#c7c6c6] font-extralight'>
                            Billing Address
                        </p>
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Full Name' name='fullName' value={checkoutForm.fullName} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-t-md w-full bg-[white] border border-[#c7c6c6]' required />
                            <input type="text" placeholder='Country' name='country' value={checkoutForm.country} disabled className='px-2 cursor-not-allowed py-[7px] outline-none w-full bg-[#c7c6c6] border border-[#c7c6c6]' />
                            <input type="text" placeholder='Address Line 1' value={checkoutForm.addressLine1} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} name='addressLine1' className='px-2 py-[7px] w-full outline-none bg-[white] border border-[#c7c6c6]' required />
                            <input type="text" placeholder='Address Line 2' name='addressLine2' value={checkoutForm.addressLine2} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-full outline-none bg-[white] border border-[#c7c6c6]' required />
                            <div>
                                <input type="text" placeholder='City' name='city' value={checkoutForm.city} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-[50%] bg-[white] outline-none border border-[#c7c6c6]' required />
                                <input type='text' placeholder='PIN' name='pinCode' value={checkoutForm.pinCode} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-[50%] bg-[white] outline-none border border-[#c7c6c6]' required />
                            </div> 
                            <input type="text" placeholder='State' name='state' value={checkoutForm.state} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] rounded-b-md w-full outline-none bg-[white] border border-[#c7c6c6]' required />
                        </div>
                    </aside>
                    {
                        selectedPlan === "Free" ? (
                            <button type='submit' className='w-full text-[white] uppercase font-allotrix-font-secondary bg-allotrix-std rounded-md py-1 px-4 mt-4'>
                                Apply
                            </button>
                        ) : (
                            <button type='submit' className='w-full text-[white] uppercase font-allotrix-font-secondary bg-allotrix-std rounded-md py-1 px-4 mt-4'>
                                Pay
                            </button>
                        )
                    }
                </form>
            </section>
            <aside className='md:absolute flex gap-8 mx-auto my-10 md:my-[unset] md:mx-[unset] items-center md:bottom-4 md:left-48'>
                <h5 className='font-allotrix-font-secondary text-allotrix-std font-semibold text-md'>
                    allotrix
                </h5>
                <p className='text-lg text-[#c7c6c6]'>
                    |
                </p>
                <a href="https://www.allotrix.com/termsofservice" target='blank' className='underline text-[12px] text-[#c7c6c6]'>
                    Terms
                </a>
                <a href="https://www.allotrix.com/privacypolicy" target='blank' className='underline text-[12px] text-[#c7c6c6]'>
                    Privacy
                </a>
            </aside>
        </main>
        </> */}
