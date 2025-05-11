import React from 'react'


function Skill() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#CAEF45]"></div>
            <span className="text-[#CAEF45]">skill's</span>
            <div className="h-px w-8 bg-[#CAEF45]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR ADVANTAGES</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["Figma", "Figma", "Figma", "Adobe", "Figma", "Figma", "Figma", "Figma", "Figma"].map((skill, index) => (
            <div key={index} className="bg-[#efefef] text-black rounded-xl p-4 flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-[#efefef] rounded-md" scr="/logo.jpge"></div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Skill