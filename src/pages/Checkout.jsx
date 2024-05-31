import React, { useState } from "react";

const Checkout = () => {
  const [checkoutForm, setCheckoutForm] = useState({
    email: "",
    phoneNo: "",
    fullName: "",
    country: "INDIA",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pinCode: "",
    state: "",
  });

  const getPriceForPlan = () => 2500;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const selectedPlan = "Standard";

  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-[white]">
      <div className="max-w-full py-6 shadow-lg rounded-lg flex flex-col md:flex-row space-y-6 md:space-x-36">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
          <form
            onSubmit={handleSubmit}
            className="font-allotrix-font flex flex-col gap-3 w-[350px]"
          >
            <label htmlFor="email" className="flex flex-col gap-1">
              <p className="text-sm text-[white] font-extralight">Email ID</p>
              <input
                type="email"
                name="email"
                value={checkoutForm.email}
                onChange={(e) =>
                  setCheckoutForm({
                    ...checkoutForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-3 py-[7px] outline-none rounded-md w-full bg-transparent border border-[#c7c6c6] text-md"
                required
              />
            </label>
            <label htmlFor="phoneNo" className="flex flex-col gap-1">
              <p className="text-sm text-[white] font-extralight">Phone Number</p>
              <input
                type="tel"
                name="phoneNo"
                value={checkoutForm.phoneNo}
                onChange={(e) =>
                  setCheckoutForm({
                    ...checkoutForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-3 py-[7px] outline-none rounded-md w-full bg-transparent border border-[#c7c6c6] text-md"
                required
              />
            </label>
            <div className="flex flex-col gap-0 mt-5">
              <p className="text-md text-[white]">Billing Address</p>

              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={checkoutForm.fullName}
                onChange={(e) =>
                  setCheckoutForm({
                    ...checkoutForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-3 py-[7px] outline-none rounded-md w-full bg-transparent border border-[#c7c6c6]"
                required
              />
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={checkoutForm.country}
                disabled
                className="px-3 py-[7px] cursor-not-allowed outline-none w-full bg-transparent border border-[#c7c6c6]"
              />

              <input
                type="text"
                placeholder="Address Line 1"
                value={checkoutForm.addressLine1}
                onChange={(e) =>
                  setCheckoutForm({
                    ...checkoutForm,
                    [e.target.name]: e.target.value,
                  })
                }
                name="addressLine1"
                className="px-3 py-[7px] w-full outline-none bg-transparent border border-[#c7c6c6]"
                required
              />
              <input
                type="text"
                placeholder="Address Line 2"
                name="addressLine2"
                value={checkoutForm.addressLine2}
                onChange={(e) =>
                  setCheckoutForm({
                    ...checkoutForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-3 py-[7px] w-full outline-none bg-transparent border border-[#c7c6c6]"
                required
              />
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={checkoutForm.city}
                  onChange={(e) =>
                    setCheckoutForm({
                      ...checkoutForm,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="px-3 py-[7px] w-[50%] bg-transparent outline-none border border-[#c7c6c6]"
                  required
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  name="pinCode"
                  value={checkoutForm.pinCode}
                  onChange={(e) =>
                    setCheckoutForm({
                      ...checkoutForm,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="px-3 py-[7px] w-[50%] bg-transparent outline-none border border-[#c7c6c6]"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="State"
                name="state"
                value={checkoutForm.state}
                onChange={(e) =>
                  setCheckoutForm({
                    ...checkoutForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-3 py-[7px] rounded-b-md w-full outline-none bg-transparent border border-[#c7c6c6]"
                required
              />
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="top-4 right-4 text-sm text-[white] ml-auto font-bold mb-2">
            Powered by <span className="text-orange-400">Astrapí Money</span>
          </div>
          <div className="w-full max-w-md p-8 mx-auto bg-[#33363F] shadow-lg rounded-lg text-left">
            <div className="text-center text-xl font-bold mb-4">
              Pay Allotrix
            </div>
            <div className="text-3xl font-bold text-center mb-6">
              ₹{getPriceForPlan()}.00
            </div>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Delegate Fee</span>
                <span>₹ 2,050</span>
              </div>
              <hr />
              <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                <span className="text-[white]">Subtotal</span>
                <span className="text-[white]">₹ 2,050</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹ 20</span>
              </div>
              <div className="flex justify-between">
                <span>CGST</span>
                <span>₹ 0</span>
              </div>
              <div className="flex justify-between">
                <span>Convenience Fee</span>
                <span>₹ 0</span>
              </div>
              <hr />
              <div className="flex justify-between border-t border-gray-700 pt-2 mt-2 font-bold">
                <span className="text-[white]">Total</span>
                <span className="text-[white]">₹ 2,500</span>
              </div>
              <div className="text-center">
                <button className="w-1/2 mt-4 py-2 bg-[#02E29E] text-black rounded font-bold hover:bg-green-600">
                  Check out
                </button>
              </div>
            </div>
          </div>

          <footer className="w-full max-w-md px-8 py-6 mx-auto shadow-lg rounded-lg mt-6 text-center text-sm text-gray-400 align-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:underline ">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline ">
                Get Allotrix
              </a>
              <a href="#" className="hover:underline">
                Get Astrapí Money
              </a>
            </div>
            <p>
              Note: Astrapí Money belongs to the same domain as Allotrix.
              Allotrix uses Astrapí Money's plugin to verify payments. Review
              Astrapí Money's Privacy Policy | Terms and conditions to know
              more.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

{
  /* <main className='bg-[white] text-[#303030] relative overflow-hidden z-10 flex flex-col md:flex-row justify-center gap-14 md:gap-[unset]'>
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
                        <input type="email" name='email' value={checkoutForm.email} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-md w-full bg-[[white]] border border-[#c7c6c6] text-md' required />
                    </label>
                    <label htmlFor='phoneNo' className='flex flex-col gap-1'>
                        <p className='text-sm text-[#c7c6c6] font-extralight'>
                            Phone Number
                        </p>
                        <input type="tel" name='phoneNo' value={checkoutForm.phoneNo} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-md w-full bg-[[white]] border border-[#c7c6c6] text-md' required />
                    </label>
                    <aside className='flex flex-col gap-1'>
                        <p className='text-sm text-[#c7c6c6] font-extralight'>
                            Billing Address
                        </p>
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Full Name' name='fullName' value={checkoutForm.fullName} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] outline-none rounded-t-md w-full bg-[[white]] border border-[#c7c6c6]' required />
                            <input type="text" placeholder='Country' name='country' value={checkoutForm.country} disabled className='px-2 cursor-not-allowed py-[7px] outline-none w-full bg-[#c7c6c6] border border-[#c7c6c6]' />
                            <input type="text" placeholder='Address Line 1' value={checkoutForm.addressLine1} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} name='addressLine1' className='px-2 py-[7px] w-full outline-none bg-[[white]] border border-[#c7c6c6]' required />
                            <input type="text" placeholder='Address Line 2' name='addressLine2' value={checkoutForm.addressLine2} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-full outline-none bg-[[white]] border border-[#c7c6c6]' required />
                            <div>
                                <input type="text" placeholder='City' name='city' value={checkoutForm.city} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-[50%] bg-[[white]] outline-none border border-[#c7c6c6]' required />
                                <input type='text' placeholder='PIN' name='pinCode' value={checkoutForm.pinCode} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] w-[50%] bg-[[white]] outline-none border border-[#c7c6c6]' required />
                            </div> 
                            <input type="text" placeholder='State' name='state' value={checkoutForm.state} onChange={(e) => setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value })} className='px-2 py-[7px] rounded-b-md w-full outline-none bg-[[white]] border border-[#c7c6c6]' required />
                        </div>
                    </aside>
                    {
                        selectedPlan === "Free" ? (
                            <button type='submit' className='w-full text-[[white]] uppercase font-allotrix-font-secondary bg-allotrix-std rounded-md py-1 px-4 mt-4'>
                                Apply
                            </button>
                        ) : (
                            <button type='submit' className='w-full text-[[white]] uppercase font-allotrix-font-secondary bg-allotrix-std rounded-md py-1 px-4 mt-4'>
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
        </> */
}
