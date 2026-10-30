import React from 'react'

export default function Ourfeat() {
   const features = [
    {
      title: "Quality Services",
      desc: "We provide top-notch services that meet the highest standards."
    },
    {
      title: "Innovative Solutions",
      desc: "Our team focuses on creative and effective solutions."
    },
    {
      title: "Customer Support",
      desc: "We are always here for our clients with reliable support."
    },
  ]

  return (
    <div id='feature' className="my-20 p-10 bg-blue-300 rounded-2xl shadow-xl scroll-mt-50">
      <h1 className="text-center text-4xl mb-10">Our Features</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-blue-600 mb-3">{feature.title}</h2>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
