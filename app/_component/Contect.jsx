import React from 'react'


function Contect() {
  return (
    <section id="contact" className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <div className="h-px w-8 bg-[#CAEF45]"></div>
          <span className="text-[#CAEF45]">Contact Us</span>
          <div className="h-px w-8 bg-[#CAEF45]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Let's Start Your Next
              <br />
              Dream Project
            </h2>
            <p className="text-[#efefef] mb-4">
              Let's Start Your Next Dream Project
              <br />
              Lorem ipsum dolor
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[#efefef] mb-2">FullName</label>
              <input type="text" className="w-full bg-[#171717] border border-gray-700 rounded-md p-3 text-[#efefef]" />
            </div>
            <div>
              <label className="block text-[#efefef] mb-2">Email</label>
              <input type="email" className="w-full bg-[#171717] border border-gray-700 rounded-md p-3 text-[#efefef]" />
            </div>
            <div>
              <label className="block text-[#efefef] mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-[#171717] border border-gray-700 rounded-md p-3 text-[#efefef]" />
            </div>
            <button className="w-full bg-[#CAEF45] text-black hover:bg-[#CAEF45] rounded-md">Submit</button>
          </div>
        </div>
      </section>
  )
}

export default Contect