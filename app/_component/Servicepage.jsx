import React from 'react'


function Servicepage() {
  return (

    <div className="bg-black text-white border border-gray-700 rounded-md p-4 max-w-sm w-full">
      <div className="flex border-b border-gray-700 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center font-bold ${
              activeTab === tab ? "text-white" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Basic Package</h3>
          <p className="text-lg font-semibold">$200</p>
        </div>
        <p className="text-sm text-gray-300">Detail about the baise rate</p>
        <ul className="text-sm text-gray-300 space-y-1">
          <li className="flex items-center gap-2">
            <FaClock className="text-xs" /> 4-day delivery
          </li>
          <li className="flex items-center gap-2">
            <FaRedo className="text-xs" /> Revision
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-xs" /> 1 image
          </li>
        </ul>
        <button className="w-full bg-lime-400 text-black py-2 rounded-full font-semibold">
          Continue
        </button>
        <button className="w-full border border-gray-500 text-white py-2 rounded-full flex justify-between items-center px-4">
          Contact us
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
}


    <div className="bg-black text-white p-6 space-y-10">
      {/* Brand Identity Section */}
      <section>
        <h2 className="text-2xl font-bold text-lime-400 mb-4">Brand identity</h2>
        <div className="flex flex-wrap gap-6">
          <div className="w-48 h-64 bg-gray-700 rounded-lg"></div>
          <div className="w-24 h-24 bg-gray-700 rounded-lg"></div>
          <div className="w-24 h-48 bg-gray-700 rounded-lg"></div>
          <PackageCard title="Brand Identity" />
        </div>
      </section>

      {/* Web Development Section */}
      <section>
        <h2 className="text-2xl font-bold text-lime-400 mb-4">Web Devlopment</h2>
        <div className="flex flex-wrap gap-6">
          <PackageCard title="Web Development" />
          <div className="w-24 h-24 bg-gray-700 rounded-lg"></div>
          <div className="w-24 h-48 bg-gray-700 rounded-lg"></div>
          <div className="w-48 h-64 bg-gray-700 rounded-lg"></div>
        </div>
      </section>

      {/* Daily Activity Box */}
      <div className="bg-white text-black rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm font-semibold shadow-md">
        <div className="bg-lime-400 rounded-full p-2">
          <FaCheck className="text-white" />
        </div>
        <div>
          <div className="text-lime-400">Daily Activity</div>
          <div>Loremam is spam</div>
        </div>
      </div>
    </div>
    

export default Servicepage