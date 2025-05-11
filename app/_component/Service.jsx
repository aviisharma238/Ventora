import React from 'react'


function Service() {
  return (
    <section id="services" className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col items-center mb-12">
          <div className="flex text-4xl  items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#CAEF45]"></div>
            <span className="text-[#CAEF45]">services</span>
            <div className="h-px w-8 bg-[#CAEF45]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR SPECIALIZATIONS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Web Development", "UI/UX Design", "Mobile Development", "Brand Identity"].map((service, index) => (
            <div key={index} className="bg-[#222222] rounded-xl p-6 flex flex-col h-64">
              <div className="mb-auto">
                <div className="w-12 h-12 bg-[#333] rounded-md flex items-center justify-center mb-4">
                  {index === 0 && <div className="w-6 h-6 border border-[#CAEF45]"></div>}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-[#efefef] text-sm">Professional solutions for your digital needs.</p>
              </div>
              <button
                variant="outline"
                className="text-[#CAEF45] border-[#CAEF45] rounded-full hover:bg-[#CAEF45] hover:text-black w-fit"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Service