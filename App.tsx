import React, { useState } from 'react';
import { 
  ArrowRight, MessageCircle, Check, X, Shield, Lock, 
  Database, RefreshCw, Activity, Heart, ArrowUpRight, 
  Smartphone, UserCheck, Plus, ChevronRight, Zap,
  Droplet, Scale, Thermometer, Watch, Wind, Cpu, ClipboardCheck
} from 'lucide-react';
import Header from './components/Header';

interface PatientMock {
  id: string;
  name: string;
  status: 'Critical' | 'Stable' | 'Attention';
  condition: string;
  vital: string;
  metric: string;
}

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'demo' | 'expert' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedJourneyTab, setSelectedJourneyTab] = useState<string>('recovery');
  const [expertForm, setExpertForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    topic: '',
    goals: '',
    contactMethod: 'Email'
  });

  const closeAll = () => {
    setActiveModal(null);
    setTimeout(() => {
      setIsSubmitted(false);
      setExpertForm({
        fullName: '',
        email: '',
        organization: '',
        role: '',
        topic: '',
        goals: '',
        contactMethod: 'Email'
      });
    }, 300);
  };

  const handleExpertInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExpertForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Mock RPM center dataset
  const rpmPatients: PatientMock[] = [
    { id: "01", name: "Sarah Lindqvist", status: "Critical", condition: "Cardiovascular Sync", vital: "SpO2 91%", metric: "11 mins ago" },
    { id: "02", name: "David Miller", status: "Stable", condition: "Adherence Focus", vital: "BP 124/80", metric: "Active now" },
    { id: "03", name: "Aria Chen", status: "Attention", condition: "Post-Discharge Recovery", vital: "HR 94 bpm", metric: "2 hrs ago" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1E293B] font-sans selection:bg-blue-105 selection:text-white antialiased overflow-x-hidden">
      {/* Premium minimal header */}
      <Header openModal={setActiveModal} />

      {/* Hero Section with Overlay Background */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-slate-200/40 shadow-2xl bg-slate-950 min-h-[560px] sm:min-h-[600px] flex items-center">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://appcdn.goqii.com/storeimg/90664_1781697658.png" 
              alt="Doctor reviewing patient health data" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay to ensure perfect contrast and premium readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 sm:via-slate-950/75 sm:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
          </div>

          {/* Overlaid Hero Content */}
          <div className="relative z-10 max-w-3xl px-6 py-12 sm:pl-16 sm:pr-12 md:pl-20 space-y-8 text-white">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-[#F8FAFC] uppercase">Introducing GOQii HealthEngage</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Connected Care <br />
                <span className="text-[#38BDF8]">Beyond Clinical Walls</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed">
                Extending Care Beyond Discharge, Claims, and Therapy
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-350 max-w-2xl leading-relaxed font-normal">
              Healthcare doesn't happen in one place. Patients move between hospitals, homes, insurers, employers, and therapy programs throughout their health journey. GOQii HealthEngage keeps everyone connected through a single platform that enables continuous engagement, timely interventions, and better outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
              <button 
                type="button"
                onClick={() => setActiveModal('demo')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 shadow-lg"
              >
                Request Demo <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <button 
                type="button"
                onClick={() => setActiveModal('expert')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4.5 h-4.5 text-blue-400" /> Talk to Experts
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 px-4 text-xs font-medium text-slate-400 italic leading-relaxed">
          * Complete clinical orchestration: A healthcare specialist reviews patient recovery timelines remotely while the participant rests securely at home.
        </p>
      </section>

      {/* Section 2: Healthcare Is Connected. Care Often Isn't. */}
      {/* 60% Left (Visual) / 40% Right (Content) */}
      <section className="py-16 sm:py-24 border-t border-slate-100 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Visual: Healthcare Ecosystem Infographic */}
          <div className="lg:col-span-7 order-2 lg:order-1 bg-white border border-slate-200/60 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <h4 className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase mb-6 sm:mb-8">Schema: Stakeholder Interconnected Model</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
              
              <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between h-32">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">01 / Acute Setting</span>
                <span className="text-sm font-bold text-slate-800">Hospital</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between h-32 text-white shadow-xl shadow-slate-900/10">
                <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">Center Node</span>
                <span className="text-sm font-bold tracking-tight text-white flex items-center justify-between">
                  GOQii <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                </span>
              </div>

              <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between h-32">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">02 / Member Support</span>
                <span className="text-sm font-bold text-slate-800">Insurance</span>
              </div>

              <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between h-32">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">03 / Therapy Control</span>
                <span className="text-sm font-bold text-slate-800">Pharma</span>
              </div>

              <div className="bg-blue-50/20 border border-blue-100 p-5 rounded-2xl flex flex-col justify-between h-32">
                <span className="text-[10px] uppercase font-bold text-blue-500 font-mono">Endpoint Recipient</span>
                <span className="text-sm font-bold text-slate-800">Patient</span>
              </div>

              <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between h-32">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">04 / Wellness Program</span>
                <span className="text-sm font-bold text-slate-800">Employer</span>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed font-normal">
              * Fully interoperable loop: GOQii coordinates data streams smoothly between all endpoints, ending care fragmentation.
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Fragmented Reality</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Healthcare Is Connected. <br />
              Care Often Isn't.
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Despite advances in healthcare technology, care delivery remains fragmented. Hospitals focus on treatment. Insurers focus on claims. Pharma companies focus on therapy. Employers focus on workforce wellbeing.
              </p>
              <p className="font-semibold text-slate-800">
                The individual sits at the center of these disconnected systems.
              </p>
              <p>
                When information, engagement, and support are not connected, opportunities for prevention, intervention, and better outcomes are lost.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Care Doesn't End At Discharge */}
      {/* 40% Left (Content) / 60% Right (Image) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Discharge & Recovery</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Care Doesn't End <br />
              At Discharge
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                For many patients, the most critical part of the health journey begins after leaving the hospital. Recovery, medication adherence, lifestyle changes, and ongoing monitoring all happen outside traditional clinical settings.
              </p>
              <p>
                Without continuous visibility and engagement, healthcare organizations are often left reacting to problems instead of preventing them.
              </p>
              <p className="border-l-2 border-slate-900 pl-4 italic text-slate-500">
                GOQii helps bridge this gap by extending care into everyday life.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-sm aspect-video sm:aspect-[16/10]">
            <img 
              src="https://appcdn.goqii.com/storeimg/45571_1781697698.png" 
              alt="Patient receiving continuous recovery care at home" 
              className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Section 4: One Platform. Multiple Healthcare Journeys. */}
      <section className="py-16 sm:py-24 border-t border-slate-100 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section heading */}
          <div className="max-w-3xl space-y-4 mb-12 sm:mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Specialized Paths</span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              One Platform. <br />
              Multiple Healthcare Journeys.
            </h3>
            <p className="text-slate-500 text-base sm:text-lg">
              Healthcare organizations face different challenges, but they share a common goal: improving outcomes while keeping people engaged. GOQii HealthEngage supports a wide range of care programs through a single connected platform.
            </p>
          </div>

          {/* Staggered Alternating Stack - 60/40 visual blocks inside */}
          <div className="space-y-20 sm:space-y-32">

            {/* HOSPITALS: Left Image (60%) / Right Content (40%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 bg-white aspect-video sm:aspect-[16/10]">
                <img 
                  src="https://appcdn.goqii.com/storeimg/6566_1781697777.png" 
                  alt="Modern clinical review dashboard with virtual companion tools" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[11px] font-bold font-mono tracking-widest text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">HOSPITALS</span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">Virtual Care Beyond Walls</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Support patients beyond discharge through remote checking, chronic care coordination programs, virtual recovery wards, and continuous human-centered engagement.
                </p>
              </div>
            </div>

            {/* INSURANCE: Left Content (40%) / Right Image (60%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                <span className="text-[11px] font-bold font-mono tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">INSURANCE</span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">From Reactive Claims to Health</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Enable robust population wellness management, reduce preventable claims, and encourage healthier member lifestyles through proactive engagement and coaching.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 bg-white aspect-video sm:aspect-[16/10]">
                <img 
                  src="https://appcdn.goqii.com/storeimg/19813_1781697931.png" 
                  alt="A happy healthy family in natural living room lighting with insurance support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* PHARMA: Left Image (60%) / Right Content (40%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 bg-white aspect-video sm:aspect-[16/10]">
                <img 
                  src="https://appcdn.goqii.com/storeimg/44294_1781697976.png" 
                  alt="A modern therapy advising session with medication adherence tracking dashboard" 
                  className="w-full h-full object-cover animate-fade-in"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[11px] font-bold font-mono tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">PHARMA</span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">Sustained Adherence Support</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Improve medication compliance index, strengthen patient support blueprints, and create meaningful connections throughout the therapeutic recovery journey.
                </p>
              </div>
            </div>

            {/* EMPLOYERS: Left Content (40%) / Right Image (60%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                <span className="text-[11px] font-bold font-mono tracking-widest text-[#059669] bg-emerald-50 px-3 py-1 rounded-full">EMPLOYERS</span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">Healthy, Motivated Workplaces</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Promote healthier corporate cultures through preventive health programs, custom team challenges, and mental and physical wellbeing support structures.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 bg-white aspect-video sm:aspect-[16/10]">
                <img 
                  src="https://appcdn.goqii.com/storeimg/1463_1781698032.png" 
                  alt="Professionals enjoying a balanced, high-energy, healthy corporate and workplace lifestyle" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Remote Patient Monitoring Center (RPMC) */}
      {/* 60% Left (Visual Mockup) / 40% Right (Content) */}
      <section className="py-16 sm:py-24 border-t border-slate-100 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Mockup visual element with minimal annotations */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl sm:rounded-[2rem] border border-slate-800 p-6 md:p-8 relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block animate-ping"></span>
            </div>

            <div className="space-y-1 mb-8 border-b border-slate-800 pb-5">
              <h5 className="font-extrabold text-xs tracking-widest text-slate-400 font-mono uppercase">GOQii RPMC</h5>
              <p className="text-sm font-semibold text-slate-200">Active Care Population Dashboard</p>
            </div>

            {/* List of active candidates */}
            <div className="space-y-4">
              {rpmPatients.map((patient) => (
                <div key={patient.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 hover:border-blue-500/30 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-500">{patient.id}</span>
                    <div>
                      <h6 className="font-bold text-xs text-white">{patient.name}</h6>
                      <p className="text-[10px] text-slate-400">{patient.condition}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] font-mono text-slate-305 block font-bold">{patient.vital}</span>
                      <span className="text-[9px] text-slate-500 block">{patient.metric}</span>
                    </div>
                    <div>
                      {patient.status === 'Critical' ? (
                        <span className="bg-red-550/10 text-red-400 border border-red-500/20 text-[9px] font-bold px-2 py-0.5 rounded-full">Trig</span>
                      ) : patient.status === 'Attention' ? (
                        <span className="bg-amber-500/10 text-amber-400 border border-amber-550/25 text-[9px] font-bold px-2 py-0.5 rounded-full">Check</span>
                      ) : (
                        <span className="bg-green-550/10 text-green-400 border border-green-500/20 text-[9px] font-bold px-2 py-0.5 rounded-full">Ok</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-950 p-4 border border-slate-850 rounded-xl text-[10px] text-slate-500 leading-normal flex items-center gap-2">
              <span className="text-slate-400">💡</span>
              <span>Minimal Dashboard Overview. Only active care coordination reminders route here, lowering clinician cognitive load.</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 font-mono">Centralized Control</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Remote Patient <br/>
              Monitoring Center
            </h3>
            <div className="space-y-4 text-slate-350 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Healthcare teams need visibility without increasing operational complexity.
              </p>
              <p>
                The GOQii RPMC provides a centralized view of individuals enrolled in connected care programs, helping teams stay informed, prioritize attention, and coordinate interventions when needed.
              </p>
              <p>
                Designed for scalability and simplicity, it supports organizations managing diverse populations across multiple care pathways.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5B: GOQii RPMC Kit */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600 font-mono">GOQii RPMC Kit</span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Everything Patients Need. <br />
              Ready From Day One.
            </h3>
            <p className="text-slate-500 text-base sm:text-lg">
              Connected care only works when monitoring is simple. The GOQii RPMC Kit is a complete remote patient monitoring solution that arrives pre-configured, clinically validated, and ready to use. Patients can begin monitoring immediately, while care teams receive continuous visibility into health data without manual setup or complex onboarding.
            </p>
          </div>

          {/* Full Width Product Kit Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-lg bg-slate-50 aspect-video md:aspect-[16/8] lg:aspect-[16/6]">
              <img 
                src="https://appcdn.goqii.com/storeimg/33100_1781158595.jpg" 
                alt="GOQii RPMC Kit device flat lay" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-3 text-xs text-slate-400 italic font-medium">
              * Clean flat lay: Arrives pre-paired, pre-registered, and clinically validated directly to the patient's residence.
            </p>
          </div>

          {/* Designed for Simplicity Grid */}
          <div className="py-10 border-y border-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Ready Out of the Box</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every kit is prepared, paired, and configured before delivery, ensuring a seamless experience for both patients and healthcare organizations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-semibold">Zero Device Setup</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No technical skill required. Bluetooth connections and cellular sync hubs are pre-coded so patients skip manual pairing.
              </p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Continuous Flow</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Encryption protocols and data stream structures securely bridge measurements from anywhere straight into clinician boards.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-10">
            <div className="max-w-2xl">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What's Included</h4>
              <p className="text-slate-500 text-sm mt-2">
                The RPMC Kit combines essential monitoring devices commonly used across chronic care, post-discharge recovery, and remote patient monitoring programs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Digital Blood Pressure Monitor", desc: "Track systolic and diastolic blood pressure with clinically validated accuracy.", icon: Heart, color: "text-rose-500 bg-rose-50 border-rose-100" },
                { title: "Portable ECG Monitor", desc: "Capture cardiac activity and support ongoing heart health monitoring.", icon: Activity, color: "text-blue-500 bg-blue-50 border-blue-100" },
                { title: "Pulse Oximeter", desc: "Monitor blood oxygen saturation and pulse rate in real time.", icon: Wind, color: "text-sky-500 bg-sky-50 border-sky-100" },
                { title: "Connected Glucose Meter", desc: "Support diabetes management through seamless glucose tracking.", icon: Droplet, color: "text-amber-500 bg-amber-50 border-amber-100" },
                { title: "Smart Weight Scale", desc: "Track weight trends and identify changes that may require intervention.", icon: Scale, color: "text-teal-500 bg-teal-50 border-teal-100" },
                { title: "Digital Thermometer", desc: "Monitor temperature fluctuations as part of ongoing health assessments.", icon: Thermometer, color: "text-orange-500 bg-orange-50 border-orange-100" },
                { title: "Connected Smartwatch", desc: "Capture daily activity, heart rate, sleep, and wellness indicators.", icon: Watch, color: "text-indigo-500 bg-indigo-50 border-indigo-100" }
              ].map((device, i) => {
                const IconComponent = device.icon;
                return (
                  <div key={i} className="p-6 bg-[#FAF9F5]/65 border border-slate-105 rounded-3xl hover:border-slate-250 transition-all hover:shadow-md hover:-translate-y-0.5 group">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${device.color} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h5 className="font-bold text-base text-slate-900 mb-2">{device.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{device.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Infographic section */}
          <div className="space-y-12 pt-12 border-t border-slate-100">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Workflow Pipeline</span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">From Device to Clinical Action</h4>
              <p className="text-slate-500 text-sm mt-2">
                Every reading captured through the RPMC Kit follows a secure, connected pathway that transforms health data into meaningful clinical insights.
              </p>
            </div>

            {/* Clean Illustration Infographic mapping "Device → GOQii App → Secure Cloud → RPMC" */}
            <div className="bg-[#FAF9F5] rounded-3xl border border-slate-200/50 p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-4">
                    <Activity className="w-5 h-5 text-blue-500" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">1. Connected Devices</h5>
                  <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-normal">
                    Vitals are captured automatically through connected monitoring devices.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center p-4 relative">
                  {/* Connect arrow for desktop */}
                  <div className="hidden lg:block absolute -left-4 top-10 text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-4">
                    <Smartphone className="w-5 h-5 text-indigo-500" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">2. GOQii Mobile App</h5>
                  <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-normal">
                    Health data is securely synchronized without requiring manual logging.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center p-4 relative">
                  {/* Connect arrow for desktop */}
                  <div className="hidden lg:block absolute -left-4 top-10 text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-4">
                    <Shield className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">3. Secure Cloud</h5>
                  <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-normal">
                    Encrypted transmission ensures privacy, compliance, and data residency.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center p-4 relative">
                  {/* Connect arrow for desktop */}
                  <div className="hidden lg:block absolute -left-4 top-10 text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg mb-4">
                    <Zap className="w-5 h-5 text-amber-400" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">4. RPMC</h5>
                  <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-normal">
                    Care teams receive a consolidated view of patient health, enabling timely review and intervention.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Built for Continuous Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Reliable Support</span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">Built for Continuous Care</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-normal">
                Whether supporting recovery after discharge, managing chronic conditions, monitoring high-risk populations, or improving adherence, the RPMC Kit enables healthcare organizations to stay connected beyond traditional care settings.
              </p>
              <p className="text-slate-700 text-sm font-semibold">
                The result is a simpler experience for patients and greater visibility for care teams.
              </p>
            </div>
            
            <div className="lg:col-span-7 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm aspect-[16/10]">
              <img 
                src="https://appcdn.goqii.com/storeimg/1463_1781698032.png" 
                alt="Patient sitting at table at home using health tracking devices comfortably" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Built Around Human Engagement */}
      {/* 40% Left (Content) / 60% Right (Image) */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Human Coaching & Support</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Built Around <br />
              Human Engagement
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Technology can collect data. Meaningful engagement changes behavior.
              </p>
              <p>
                GOQii combines digital health tools, personalized experiences, coaching, and behavioral science to help individuals stay actively involved in their health journey.
              </p>
              <p>
                The result is a more connected experience that supports long-term participation and healthier outcomes. Learn how the platform keeps active participants at the center of the care stream.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm aspect-video sm:aspect-[16/10]">
            <img 
              src="https://appcdn.goqii.com/storeimg/24521_1781698147.png" 
              alt="Person tracking health credentials and metrics on a device in clean soft light" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Section 7: Designed To Work With Existing Systems */}
      {/* 60% Left (Illustration) / 40% Right (Content) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Minimal illustration diagram of stack */}
          <div className="lg:col-span-7 order-2 lg:order-1 bg-[#FAFAFA] border border-slate-200/50 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 text-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              
              <div className="bg-white p-5 rounded-xl border border-slate-200/60 w-full max-w-[11rem] shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block mb-2">Input Layer</span>
                <span className="text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-blue-500" /> Wearable Sensors</span>
              </div>

              <div className="h-6 md:h-px w-px md:w-8 bg-slate-350"></div>

              <div className="bg-slate-900 text-white p-5 rounded-xl w-full max-w-[12rem] shadow-lg">
                <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block mb-2 font-semibold">Middleware Core</span>
                <span className="text-xs font-bold flex items-center justify-center gap-1.5"><RefreshCw className="w-3.5 h-3.5 text-white animate-spin [animation-duration:10s]" /> GOQii Engage</span>
              </div>

              <div className="h-6 md:h-px w-px md:w-8 bg-slate-350"></div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/60 w-full max-w-[11rem] shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono block mb-2">Partner Layer</span>
                <span className="text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-green-500" /> Clinicians & Insurers</span>
              </div>

            </div>

            <p className="mt-8 text-xs text-slate-400 leading-normal max-w-lg mx-auto">
              Devices → GOQii HealthEngage → Healthcare Stakeholders and Legacy Systems.
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Zero Disruptive Changes</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Designed To Work With <br/>
              Existing Systems
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Healthcare organizations should not have to replace existing infrastructure to deliver connected care. GOQii integrates with existing hospital systems, insurer platforms, employer wellness programs, and patient engagement initiatives to create a unified care experience.
              </p>
              <p>
                The platform complements existing workflows while extending visibility and engagement beyond traditional touchpoints.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 9: Trusted For Connected Care */}
      <section id="compliance" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Enterprise Ready</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Trusted For Connected Care
            </h3>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
              Built with enterprise-grade security, privacy, and compliance standards to support healthcare organizations across regions and care models.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Secure infrastructure", desc: "Data protection standards", icon: <Shield className="w-4 h-4" /> },
              { label: "Data privacy controls", desc: "GDPR & clinical access keys", icon: <Lock className="w-4 h-4" /> },
              { label: "Healthcare compliance", desc: "Interoperability regulations", icon: <ClipboardCheck className="w-4 h-4" /> },
              { label: "Scalable architecture", desc: "ISO and high throughput ready", icon: <Cpu className="w-4 h-4" /> }
            ].map((cert, i) => (
              <div key={i} className="bg-[#FAF9F5] border border-slate-200/50 p-4 sm:p-6 rounded-2xl text-left hover:scale-[1.01] transition-transform flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                    {cert.icon}
                  </div>
                  <h5 className="font-extrabold text-xs text-slate-900 mb-1">{cert.label}</h5>
                  <p className="text-[10px] text-slate-450 leading-relaxed font-normal">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 / Final Call To Action */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle decorative mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,#1e3a8a_20%,transparent_100%)] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Build Better <br className="sm:hidden" />
            Health Journeys Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Healthcare outcomes improve when people stay connected, informed, and engaged. GOQii HealthEngage helps organizations create meaningful health experiences that extend beyond clinical settings and support better outcomes throughout the care journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              type="button"
              onClick={() => setActiveModal('expert')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Talk to Experts <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              type="button"
              onClick={() => setActiveModal('demo')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white border border-slate-800 rounded-xl font-bold hover:bg-slate-850 transition"
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Premium Dark Footer matching exact logo coordinates */}
      <footer className="py-12 bg-[#0B1B2A] text-slate-400 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <img src="https://appcdn.goqii.com/user/storeimg/90627_1775477327.png" alt="GOQii Footer logo" className="h-7 w-auto" />
          </div>
          <p className="text-xs text-slate-400 font-medium text-center max-w-md">
            Hospitals · Insurers · Pharma Organizations · Employers · Active Care Coordination Streams
          </p>
          <div className="text-xs font-mono font-bold text-slate-500 text-right">
            &copy; 2026 GOQii Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Styled Modals for Contact Actions */}
      {activeModal && (
        <>
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[999]" onClick={closeAll}></div>
          <div 
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-6 sm:p-8 w-[92%] shadow-2xl z-[1000] border border-slate-100 max-h-[90vh] overflow-y-auto transition-all duration-300 ${
              activeModal === 'expert' ? 'max-w-[560px]' : 'max-w-[420px]'
            }`}
          >
            <button onClick={closeAll} className="absolute top-4 right-4 text-slate-450 hover:text-slate-650 transition p-1.5 rounded-full hover:bg-slate-50">
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                  <Check className="w-8 h-8 font-bold" />
                </div>
                {activeModal === 'expert' ? (
                  <>
                    <h3 className="text-2xl font-extrabold text-slate-900">Consultation Scheduled</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Thank you, <span className="font-semibold text-slate-900">{expertForm.fullName || 'there'}</span>! Our digital health and clinical specialists will review your goals and reach out to you via <span className="font-semibold text-slate-950">{expertForm.contactMethod}</span> shortly to coordinate our discussion around <span className="font-semibold text-slate-955">{expertForm.topic || 'Connected Care'}</span>.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-extrabold text-slate-900">Request Received</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Our team will be in touch shortly to align your demo with our Clinical Specialists.
                    </p>
                  </>
                )}
                <button 
                  onClick={closeAll} 
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition"
                >
                  Close Window
                </button>
              </div>
            ) : activeModal === 'expert' ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Talk to Experts</h3>
                  <p className="text-sm font-bold text-slate-800 mt-1">Let's Discuss Your Connected Care Goals</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mt-2">
                    Whether you're exploring post-discharge monitoring, population health management, patient adherence, or remote care programs, our specialists can help you identify the right approach for your organization.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      name="fullName"
                      value={expertForm.fullName}
                      onChange={handleExpertInputChange}
                      placeholder="e.g. Dr. Alison Vance" 
                      className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Work Email *</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={expertForm.email}
                        onChange={handleExpertInputChange}
                        placeholder="e.g. alison@healthsystem.org" 
                        className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400" 
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Organization *</label>
                      <input 
                        required 
                        type="text" 
                        name="organization"
                        value={expertForm.organization}
                        onChange={handleExpertInputChange}
                        placeholder="e.g. National Health Group" 
                        className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Your Role *</label>
                      <select 
                        required 
                        name="role"
                        value={expertForm.role}
                        onChange={handleExpertInputChange}
                        className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-700 transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select role...</option>
                        <option value="Hospital / Health System">Hospital / Health System</option>
                        <option value="Insurance Provider">Insurance Provider</option>
                        <option value="Pharma Company">Pharma Company</option>
                        <option value="Employer">Employer</option>
                        <option value="Healthcare Consultant">Healthcare Consultant</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">What would you like to discuss? *</label>
                      <select 
                        required 
                        name="topic"
                        value={expertForm.topic}
                        onChange={handleExpertInputChange}
                        className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-700 transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select discussion topic...</option>
                        <option value="Connected Care Strategy">Connected Care Strategy</option>
                        <option value="Remote Patient Monitoring">Remote Patient Monitoring</option>
                        <option value="Population Health Management">Population Health Management</option>
                        <option value="Chronic Disease Programs">Chronic Disease Programs</option>
                        <option value="Patient Adherence">Patient Adherence</option>
                        <option value="Virtual Wards">Virtual Wards</option>
                        <option value="Hospital-at-Home">Hospital-at-Home</option>
                        <option value="Insurance Engagement Programs">Insurance Engagement Programs</option>
                        <option value="Pharma Patient Support Programs">Pharma Patient Support Programs</option>
                        <option value="Platform Integration">Platform Integration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Tell us about your goals or challenges *</label>
                    <textarea 
                      required 
                      name="goals"
                      value={expertForm.goals}
                      onChange={handleExpertInputChange}
                      rows={3} 
                      placeholder="Describe your current clinical/coordination goals and some of the key milestones you wish to achieve..." 
                      className="w-full px-3.5 py-3 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-700 transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Preferred Contact Method *</label>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                      {['Email', 'Phone', 'Video Call'].map((method) => (
                        <label key={method} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="contactMethod"
                            value={method}
                            checked={expertForm.contactMethod === method}
                            onChange={handleExpertInputChange}
                            className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-555 cursor-pointer" 
                          />
                          <span className="group-hover:text-slate-900 transition-colors">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 text-sm"
                  >
                    Schedule Consultation
                  </button>
                  <p className="text-[10px] text-center text-slate-400 leading-normal font-normal px-2">
                    Speak with healthcare and digital health specialists to explore your organization's goals, challenges, and opportunities.
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Request Demo</h3>
                  <p className="text-xs text-slate-500 mt-1">Explore the modern connected care platform design.</p>
                </div>
                
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Work Email *</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="jane@organization.com" 
                      className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Organization *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Mount Sinai Health System" 
                      className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400" 
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Tell us about your care coordinators setup (Optional)</label>
                    <textarea 
                      placeholder="e.g. We have 12 regional care nurses tracking 500 post-op patients..." 
                      className="w-full px-3.5 py-3 bg-slate-50 hover:bg-slate-50/50 h-24 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm text-slate-900 transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 text-sm"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </>
      )}

    </div>
  );
};

// Helper CSS class builder for interactive tabs swap
const selectedTabClasses = (active: boolean) => {
  return active 
    ? "text-blue-600 border-b-2 lg:border-b-0 lg:border-l-2 border-blue-600 px-4 lg:px-0 lg:pl-4 bg-blue-50/40 lg:bg-blue-50/20 font-bold rounded-t-lg lg:rounded-t-none" 
    : "text-slate-400 hover:text-slate-600 border-b-2 lg:border-b-0 lg:border-l-2 border-transparent px-4 lg:px-0 lg:pl-4";
};

export default App;
