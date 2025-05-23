import React from 'react'


function Header() {
  return (
    <header className="container mx-auto py-4 flex justify-between items-center bg-[#171717] text-[#efefef]">
        <div className="flex items-center mx-6 gap-2">
          <div className="bg-[#CAEF45] rounded-full p-1">
              <img src="/ventora_logo.png" alt="Ventora logo" className="w-6 h-6" />
            </div>
          <span className="text-[#CAEF45] text-xl font-bold">Ventora</span>
        </div>
        <nav className="hidden md:flex gap-8 ">
          <button className="text-[#CAEF45]" href="#home">HOME</button>
          <button className="hover:text-[#CAEF45]" href="#about">ABOUT US</button>
          <button className="hover:text-[#CAEF45]" href="#services">SERVICES</button>
          <button className="hover:text-[#CAEF45]" href="#projects">PROJECTS</button>
          <button className="hover:text-[#CAEF45]" href="#contact">CONTACT</button>
        </nav>
        <div className="flex gap-2">
          <button className="bg-[#CAEF45] text-[#171717] px-3 py-2 rounded-full font-semibold">Portfoliyo</button>
          <button  variant="outline bf-[#ffffff]"
            className="text-[#CAEF45] border-2 px-3 py-2 border-[#CAEF45] rounded-full hover:bg-[#CAEF45] hover:text-black">Let's Descuse</button>
        </div>
      </header>
  )
}

export default Header