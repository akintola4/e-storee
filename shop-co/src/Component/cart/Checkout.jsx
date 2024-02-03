import React from 'react'
import { useState } from 'react'

export default function Checkout() {
  const [address, setaddress] = useState(
    {
      firstname: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",

    }
  )
  return (
    <div>
      <div>
        <h4 className="py-5 text-2xl font-extrabold md:text-4xl">Shipping Address</h4>
      </div>
      <form action="" className='grid gap-10 md:grid-cols-2'>
        <div className="flex flex-col gap-2">
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="firstName" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="lastName" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="Email">Email</label>
          <input
            type="email"
            name="Email"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="Address">Address Line</label>
          <input
            type="text"
            name="Address"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="addressLine" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="City">City</label>
          <input
            type="text"
            name="City"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="City" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="State">State</label>
          <input
            type="text"
            name="State"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="State" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="Postal-Code">Postal Code</label>
          <input
            type="number"
            name="Postal Code"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="postalCode" />
        </div>
        <div className="flex flex-col gap-2">
          <label for="zip">Phone Number</label>
          <input
            type="number"
            name="phone"
            
            className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
            id="phone" />
        </div>
        
        
      </form>
    </div>

  )
}
