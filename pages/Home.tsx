import React from 'react';
import { 
  ArrowRight, MessageCircle, AlertCircle, Activity, Search, 
  HeartHandshake, BellRing, Zap, RotateCcw, Building2, 
  ShieldCheck, Pill, LayoutDashboard, Award, Link as LinkIcon, 
  TrendingUp, Settings, Stethoscope, CheckCircle2 
} from 'lucide-react';

interface HomeProps {
  openModal: (type: 'demo' | 'expert') => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">GOQii Enterprise</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Extend Hospital-Grade Care <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Beyond Discharge</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed">
                Continuous, connected care across hospitals, insurers, and pharma—beyond traditional boundaries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-5 mb-12 w-full">
                <button 
                  onClick={() => openModal('demo')}
                  className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => openModal('expert')}
                  className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Talk to Experts
                </button>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img src="https://picsum.photos/seed/healthcare-hero/800/600" alt="Connected Healthcare" className="rounded-[3rem] shadow-2xl border border-white/50 w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The Challenge</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Care Shouldn’t Stop at Discharge</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Healthcare today is fragmented. Hospitals treat, insurers manage claims, and pharma supports therapy—but patient care remains disconnected.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Limited visibility after discharge",
                "Reactive claims and episodic care",
                "Low adherence to treatment plans",
                "Siloed data across stakeholders"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-0.5 flex-shrink-0 text-red-500">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img src="https://picsum.photos/seed/fragmented/800/600" alt="Fragmented Care" className="rounded-[3rem] shadow-2xl border border-white/50" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The Solution</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">From Episodic Care to Continuous Care</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              GOQii transforms disconnected systems into a unified, continuous care model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "1", name: "Monitor", d: "Real-time vitals, activity, and lifestyle data", icon: <Activity className="w-6 h-6" /> },
              { n: "2", name: "Detect", d: "AI-driven risk identification", icon: <Search className="w-6 h-6" /> },
              { n: "3", name: "Engage", d: "Nudges, coaching, and adherence support", icon: <HeartHandshake className="w-6 h-6" /> },
              { n: "4", name: "Escalate", d: "Alerts to care teams, insurers, or programs", icon: <BellRing className="w-6 h-6" /> },
              { n: "5", name: "Act", d: "Timely intervention across stakeholders", icon: <Zap className="w-6 h-6" /> },
              { n: "6", name: "Return", d: "Improved outcomes and planned follow-ups", icon: <RotateCcw className="w-6 h-6" /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-50 group-hover:text-blue-50 transition-colors z-0">{s.n}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                  <p className="text-slate-500 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Measurable Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-6 border-b border-blue-200 pb-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Clinical</h3>
              </div>
              <ul className="space-y-4">
                {["30% reduction in readmissions", "45% improvement in adherence"].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-6 border-b border-indigo-200 pb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-900">Operational</h3>
              </div>
              <ul className="space-y-4">
                {["2x increase in care team efficiency", "Automated alerts and escalations"].map((item, i) => (
                  <li key={i} className="flex items-center text-indigo-800">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100">
              <div className="flex items-center gap-3 mb-6 border-b border-teal-200 pb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
                <h3 className="text-xl font-bold text-teal-900">Strategic</h3>
              </div>
              <ul className="space-y-4">
                {["New revenue streams (RPM/CCM)", "Differentiated patient experience"].map((item, i) => (
                  <li key={i} className="flex items-center text-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6 md:px-10 py-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <img src="https://picsum.photos/seed/hospital-future/1200/600" alt="Future of Care" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">Ready to Transform Care?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading healthcare organizations using GOQii to deliver continuous, connected care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => openModal('demo')}
                className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-xl flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => openModal('expert')}
                className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Talk to Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
