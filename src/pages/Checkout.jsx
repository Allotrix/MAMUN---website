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

  const getPriceForPlan = () => 0;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const selectedPlan = "Standard";

  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-[white] font-astrapi-billing">
      <section id="committees" className="flex flex-col gap-8 py-16">
        <div className="max-w-full py-6 shadow-lg rounded-lg flex flex-col md:flex-row space-y-6 md:space-x-36">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 w-[350px]"
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
                  className="px-3 py-[7px] outline-none rounded-md w-full bg-[black] border border-[#c7c6c6] text-md"
                  required
                />
              </label>
              <label htmlFor="phoneNo" className="flex flex-col gap-1">
                <p className="text-sm text-[white] font-extralight">
                  Phone Number
                </p>
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
                  className="px-3 py-[7px] outline-none rounded-md w-full bg-[black] border border-[#c7c6c6] text-md"
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
                  className="px-3 py-[7px] outline-none rounded-t-md w-full placeholder-[#6D6969] bg-[black] border border-[#c7c6c6]"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={checkoutForm.country}
                  disabled
                  className="px-3 py-[7px] cursor-not-allowed outline-none w-full placeholder-[#6D6969] bg-[black] border border-[#c7c6c6]"
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
                  className="px-3 py-[7px] w-full outline-none bg-[black] placeholder-[#6D6969] border border-[#c7c6c6]"
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
                  className="px-3 py-[7px] w-full outline-none bg-[black] border placeholder-[#6D6969] border-[#c7c6c6]"
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
                    className="px-3 py-[7px] w-[50%] bg-[black] outline-none placeholder-[#6D6969] border border-[#c7c6c6]"
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
                    className="px-3 py-[7px] w-[50%] bg-[black] outline-none border placeholder-[#6D6969] border-[#c7c6c6]"
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
                  className="px-3 py-[7px] rounded-b-md w-full outline-none bg-[black] placeholder-[#6D6969] border border-[#c7c6c6]"
                  required
                />
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="top-4 right-4 text-sm text-white ml-auto font-bold mb-2">
              Powered by <span className="text-[#FF4F00]">Astrapi Money</span>
            </div>
            <div className="w-full max-w-md p-8 mx-auto bg-[#33363F] shadow-lg rounded-lg text-left">
              <div className="text-left text-md mb-4">Pay Allotrix</div>
              <div className="text-[27px] font-semibold text-left mb-10">
                ₹{getPriceForPlan()}.00
              </div>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Delegate Fee</span>
                  <span>₹ 2,050</span>
                </div>

                <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                  <span className="text-white font-bold">Subtotal</span>
                  <span className="text-white font-bold">₹ 2,050</span>
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

                <div className="flex justify-between border-t border-gray-700 pt-2 mt-2 font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white">₹ 2,500</span>
                </div>
                <div className="text-center">
                  <button className="w-1/2 mt-4 py-2 bg-[#02E29E] text-black rounded-lg font-bold text-[#242529]">
                    Check out
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md px-4 py-6 mx-auto shadow-lg rounded-lg mt-6 text-sm align-center">
              <div className="w-full flex items-center text-center justify-center mb-4">
                <a
                  href="#"
                  className="w-full pl-4 pr-4 hover:underline border-r-2 flex items-center"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="w-full pl-4 pr-4 hover:underline border-r-2 flex items-center"
                >
                  Get Allotrix
                </a>
                <a
                  href="#"
                  className="w-full hover:underline flex items-center"
                >
                  Get Astrapi Money
                </a>
              </div>

              <p className="text-[#414141] text-left">
                Note: Astrapi Money belongs to the same domain as Allotrix.
                Allotrix uses Astrapi Money's plugin to verify payments. Review
                Astrapi Money's Privacy Policy | Terms and conditions to know
                more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;