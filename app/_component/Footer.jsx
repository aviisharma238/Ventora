import React from 'react'


function Footer() {
  return (
    <footer className="bg-[#171717] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-lime-400 rounded-full p-1">
              <img src="/logo.svg" alt="Ventora logo" className="w-6 h-6" />
            </div>
            <span className="text-lime-400 font-bold text-lg">Ventora</span>
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex space-x-4 text-xl text-white">
            <linkedin />
            <instagram />
            <facebook />
            <github />
          </div>
        </div>

        {/* Center Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Utility Page :</h3>
          <div className="space-y-4">
            {["Styl Guide", "Styl Guide", "Styl Guide"].map((item, index) => (
              <button
                key={index}
                className="w-full flex justify-between items-center border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-800"
              >
                <span>{item}</span>
                <span className="text-xl">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Newsletter:</h3>
          <p className="text-sm font-semibold mb-2">Subscribe for updates</p>
          <input
            type="email"
            placeholder="Your Email here"
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 mb-4"
          />
          <button className="bg-[#CAEF45] text-[#171717] px-4 py-2 rounded-full font-semibold">
            Subscribe Now →
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-white bg-gray-700 py-4 mt-6">
        Copyright @ <span className="text-[#CAEF45]">Ventora</span> | Designed by{" "}
        <span className="text-[#CAEF45]">Ventora</span> - Powered by Ventora
      </div>
    </footer>
  );
}


export default Footer