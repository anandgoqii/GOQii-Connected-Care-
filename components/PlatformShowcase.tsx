
import React from 'react';

const PlatformShowcase: React.FC = () => {
  const features = [
    { title: "24/7 Oversight", desc: "Continuous monitoring of vital trends without physical occupancy.", img: "https://picsum.photos/seed/oversight/100/100" },
    { title: "Smart Alerts", desc: "AI-driven risk scoring to prevent emergency readmissions.", img: "https://picsum.photos/seed/alerts/100/100" },
    { title: "Patient App", desc: "Intuitive mobile interface for engagement and adherence.", img: "https://picsum.photos/seed/patientapp/100/100" },
    { title: "EHR Integrated", desc: "Bi-directional data flow with HL7/FHIR compliance.", img: "https://picsum.photos/seed/ehr/100/100" }
  ];

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-900/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">The Clinical Advantage</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6">A Unified Operating System for Remote Care</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our platform bridges the gap between discharge and recovery. By centralizing patient data from home-grade devices into clinical-grade insights, hospitals can act before deterioration occurs.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Clinician" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium italic">Trusted by clinical teams across 50+ leading institutions</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                <div className="mb-4 h-12 w-12 rounded-lg overflow-hidden bg-slate-200">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                <p className="text-xs text-slate-500 leading-normal">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformShowcase;
