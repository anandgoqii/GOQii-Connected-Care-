import React from 'react';
import { Building2, ShieldCheck, Pill, CheckCircle2 } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">One Platform. Multiple Stakeholders.</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Our programs are designed to connect the entire healthcare ecosystem, providing tailored solutions for hospitals, insurance companies, and pharma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hospitals */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-blue-200 transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Hospitals</h3>
            <p className="text-slate-500 mb-6">Extend care beyond the facility.</p>
            <ul className="space-y-4">
              {["Remote Patient Monitoring (RPM)", "Post-discharge care plans", "Reduced readmission rates"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-indigo-200 transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Insurance</h3>
            <p className="text-slate-500 mb-6">Shift from claims to care management.</p>
            <ul className="space-y-4">
              {["Proactive risk management", "Wellness and prevention programs", "Reduced claim costs"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pharma */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-teal-200 transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
              <Pill className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Pharma</h3>
            <p className="text-slate-500 mb-6">Support patients throughout therapy.</p>
            <ul className="space-y-4">
              {["Medication adherence tracking", "Real-world evidence generation", "Patient support programs"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
