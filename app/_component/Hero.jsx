import React from 'react'


function Hero() {
return (
    <section className="container mx-auto py-16 px-4 md:px-0">
        <div className="bg-[#222222] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
            <div className="w-64 h-64 border border-[#CAEF45] rounded-full"></div>
            </div>

            <div className="md:w-1/2 z-10">
            <div className="flex items-center gap-2 mb-4">
            <span className="text-[#CAEF45]">⭐ VENTORA ⭐</span>

            </div>

            <h1 className="text-4xl text-[#efefef] md:text-5xl font-bold mb-6">
                Hi, This Is
                <br />
                <span className="text-[#efefef]">Ventorn</span>
                <br />
                <span className="text-gray-300 text-2xl md:text-3xl">Webflow Designer</span>
            </h1>

            <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2">
                <phone className="text-[#CAEF45]" size={18} />
                <span className="text-sm">Call Now</span>
                <span className="text-sm text-[#efefef]">+91 7879434673</span>
                </div>
            <div className="flex items-center gap-2">
                <mail className="text-[#CAEF45]" size={18} />
                <span className="text-sm">Email</span>
                <span className="text-sm text-[#efefef]">ventora.vista@gmail.com</span>
            </div>
            </div>

            <button className="bg-[#CAEF45] text-black hover:bg-[#CAEF45] mx-2.5 rounded-full">Portfolio</button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="bg-[#efefef] p-8 rounded-xl">
            <image
                src="/placeholder.svg?height=250&width=50"
                alt="Ventorn Logo"
                width={250}
                height={250}
                className="object-contain"
            />
            </div>
        </div>

        <div className="absolute right-14 top-1/4">
            <div className="bg-[#CAEF45] text-black p-4 rounded-xl mb-4">
            <div className="text-3xl font-bold">2+</div>
            <div className="text-xs">Years of<br />Experience</div>
            </div>
            <div className="bg-[#CAEF45] text-black p-4 rounded-xl">
            <div className="text-3xl font-bold">40+</div>
            <div className="text-xs">Completed<br />Projects</div>
            </div>
        </div>
        </div>
      </section>
  )
}

export default Hero