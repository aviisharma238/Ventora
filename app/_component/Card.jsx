import React from 'react'


function Card() {
  return (
    <section className="container mx-auto py-8 px-4 md:px-0">
        <div className="bg-[#CAEF45] text-[#171717] rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              BOOK A MEETING TO DISCUSS
              <br />
              YOUR PROJECT WITH ME.
            </h3>
          </div>
          <button className="bg-[#171717] text-[#efefef] hover:bg-gray-800 rounded-full mt-4 md:mt-0">Contact</button>
        </div>
      </section>
    <section className="container mx-auto py-8 px-4 md:px-0">
        <div className="bg-[#CAEF45] text-[#171717] rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              BOOK A MEETING TO DISCUSS
              <br />
              YOUR PROJECT WITH ME.
            </h3>
          </div>
          <button className="bg-[#171717] text-[#efefef] hover:bg-gray-800 rounded-full mt-4 md:mt-0">Contact</button>
        </div>
      </section>

  )
}

export default Card
