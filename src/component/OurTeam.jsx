import React from 'react'
import imge from '../assets/study.jpg'
export default function OurTeam() {
   const team = [
    { name: "Merna Amr", role: "Frontend Developer" },
    { name: "Merna Amr", role: "UI/UX Designer" },
    { name: "Merna Amr", role: "Project Manager" },
  ];

  return (
    <section id='team' className="py-12 rounded-3xl  bg-center bg-cover relative bg-fixed" style={{backgroundImage:`url(${imge})`}}>
        
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-amber-50">Our Team</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-125 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

