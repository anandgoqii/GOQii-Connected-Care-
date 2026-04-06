import React, { useState } from 'react';
import { 
  ArrowRight, MessageCircle, AlertCircle, Activity, Search, 
  HeartHandshake, BellRing, Zap, RotateCcw, Building2, 
  ShieldCheck, Pill, LayoutDashboard, Award, Link as LinkIcon, 
  TrendingUp, Settings, Stethoscope, CheckCircle2, X
} from 'lucide-react';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'demo' | 'expert' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const closeAll = () => {
    setActiveModal(null);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 font-sans text-slate-900">
      <Header openModal={setActiveModal} />

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
                  onClick={() => setActiveModal('demo')}
                  className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveModal('expert')}
                  className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Talk to Experts
                </button>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-indigo-50/50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <Ecosystem />
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
            <img src="https://appcdn.goqii.com/storeimg/19277_1774868520.png" alt="Fragmented Care" className="rounded-[3rem] shadow-2xl border border-white/50" referrerPolicy="no-referrer" />
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
              GOQii transforms disconnected systems into a unified, continuous care model—enabling proactive monitoring, early risk detection, and timely intervention across the entire patient journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "1", name: "Monitor", subtitle: "Real-time vitals, activity, and lifestyle data", desc: "Continuously capture health signals from devices, apps, and patient inputs to maintain visibility beyond clinical settings.", icon: <Activity className="w-6 h-6" /> },
              { n: "2", name: "Detect", subtitle: "AI-driven risk identification", desc: "Analyze trends and deviations using intelligent algorithms to identify early signs of deterioration or non-adherence.", icon: <Search className="w-6 h-6" /> },
              { n: "3", name: "Engage", subtitle: "Nudges, coaching, and adherence support", desc: "Drive sustained patient engagement through personalized nudges, behavioral interventions, and guided care journeys.", icon: <HeartHandshake className="w-6 h-6" /> },
              { n: "4", name: "Escalate", subtitle: "Alerts to care teams, insurers, or programs", desc: "Trigger risk-based alerts to the right stakeholders—clinicians, care managers, or insurers—for timely attention.", icon: <BellRing className="w-6 h-6" /> },
              { n: "5", name: "Act", subtitle: "Timely intervention across stakeholders", desc: "Enable coordinated actions such as teleconsultations, care adjustments, or outreach to prevent complications.", icon: <Zap className="w-6 h-6" /> },
              { n: "6", name: "Return", subtitle: "Improved outcomes and planned follow-ups", desc: "Ensure structured recovery with better outcomes, reduced readmissions, and seamless transition back to care when needed.", icon: <RotateCcw className="w-6 h-6" /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-50 group-hover:text-blue-50 transition-colors z-0">{s.n}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{s.subtitle}</p>
                  <p className="text-slate-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">One Platform. Multiple Stakeholders.</h2>
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
      </section>

      {/* Features Grid (Command Center, Engagement, Integration) */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6">Built for Enterprise Scale</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Command Center */}
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unified Command Center</h3>
              <p className="text-slate-400 mb-6">A single dashboard for care teams to monitor populations, identify risks, and intervene.</p>
            </div>

            {/* Engagement */}
            <div>
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Built for Engagement</h3>
              <p className="text-slate-400 mb-6">Gamification, rewards, and personalized coaching to keep patients active and engaged.</p>
            </div>

            {/* Integration */}
            <div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <LinkIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Built to Integrate</h3>
              <p className="text-slate-400 mb-6">Seamless integration with EMRs, wearables, and existing health systems.</p>
            </div>
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

      {/* Compliance Section */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Enterprise-Ready Compliance</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["HIPAA Compliant", "ISO 27001 Certified", "GDPR Ready"].map((cert, i) => (
              <div key={i} className="flex items-center text-slate-600 font-semibold">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                {cert}
              </div>
            ))}
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
                onClick={() => setActiveModal('demo')}
                className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-xl flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveModal('expert')}
                className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Talk to Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#0B1B2A] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="https://appcdn.goqii.com/user/storeimg/90627_1775477327.png" alt="GOQii Health Engage" className="h-8 w-auto" />
          </div>
          <div className="text-sm text-slate-400 text-center">
            Population Health · Chronic Care · Corporate Wellness · Medical Services
          </div>
          <div className="text-sm text-slate-400">
            &copy; 2025 GOQii Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeModal && (
        <>
          <div 
            className="fixed inset-0 w-full h-full bg-slate-900/60 z-[999] backdrop-blur-sm"
            onClick={closeAll}
          ></div>

          {activeModal === 'demo' && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-[90%] max-w-[420px] rounded-2xl z-[1000] shadow-2xl">
              <button onClick={closeAll} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Thank You!</h2>
                  <p className="text-slate-500 mb-6">We've received your request. Our team will be in touch shortly to schedule your demo.</p>
                  <button onClick={closeAll} className="w-full p-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Request a Demo</h2>
                  <p className="text-slate-500 mb-6 text-sm">See how GOQii enables connected care.</p>
                  <input required type="text" placeholder="Full Name" className="w-full p-3 mb-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" />
                  <input required type="email" placeholder="Work Email" className="w-full p-3 mb-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" />
                  <input required type="text" placeholder="Organisation" className="w-full p-3 mb-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" />
                  <textarea placeholder="Description (Optional)" className="w-full p-3 h-24 mb-6 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 resize-none"></textarea>
                  <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">Submit Request</button>
                </form>
              )}
            </div>
          )}

          {activeModal === 'expert' && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-[90%] max-w-[420px] rounded-2xl z-[1000] shadow-2xl">
              <button onClick={closeAll} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Message Sent!</h2>
                  <p className="text-slate-500 mb-6">Thank you for reaching out. One of our connected care experts will contact you soon.</p>
                  <button onClick={closeAll} className="w-full p-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Talk to Our Experts</h2>
                  <p className="text-slate-500 mb-6 text-sm">Get guidance on connected care programs.</p>
                  <input required type="text" placeholder="Full Name" className="w-full p-3 mb-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" />
                  <input required type="email" placeholder="Work Email" className="w-full p-3 mb-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900" />
                  <textarea required placeholder="Description (How can we help?)" className="w-full p-3 h-24 mb-6 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 resize-none"></textarea>
                  <button type="submit" className="w-full p-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">Request Callback</button>
                </form>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
