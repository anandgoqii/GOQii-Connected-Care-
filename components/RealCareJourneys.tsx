import React, { useState } from 'react';
import { HeartPulse, ShieldAlert, CheckCircle, Activity, User, Award, ArrowUpRight } from 'lucide-react';

interface Journey {
  id: string;
  tabLabel: string;
  patientName: string;
  age: number;
  location: string;
  condition: string;
  challengeText: string;
  solutionText: string;
  beforeMetric: string;
  afterMetric: string;
  metricLabel: string;
  icon: React.ReactNode;
}

const RealCareJourneys: React.FC = () => {
  const journeys: Journey[] = [
    {
      id: "post-discharge",
      tabLabel: "Post-Discharge",
      patientName: "Arjun Verma",
      age: 58,
      location: "Mumbai",
      condition: "Post-CABG Cardiac Recovery",
      challengeText: "Following a critical heart bypass surgery, Arjun felt isolated during the critical first month at home. Lacking real-time feedback, he missed early medication shifts, and was nearly readmitted due to minor pulmonary congestion spikes.",
      solutionText: "GOQii connected wearables to Arjun's home. The RPM system automatically tracked oxygenation trends and immediately alert-routed a critical heart rate spike. His care manager initiated a prompt telemedicine triage—avoiding immediate ER trips entirely.",
      beforeMetric: "1 in 5 readmitted",
      afterMetric: "< 2.8% globally",
      metricLabel: "30-Day Readmission Risk Scale",
      icon: <HeartPulse className="w-6 h-6 text-red-500" />
    },
    {
      id: "diabetes",
      tabLabel: "Diabetes Support",
      patientName: "Miriam Al-Subaie",
      age: 46,
      location: "London",
      condition: "Type 2 Diabetes Administration Care",
      challengeText: "Miriam suffered from persistent glucose volatility. Without daily coaching or personal support structures, her medication adherence drifted, risking long-term systemic diabetic complications.",
      solutionText: "Through persistent digital nudges, verified smart tracker diagnostics, and real-time behavioral guidance, Miriam restored daily control. Weekly feedback cycles from clinical coaches locked in therapeutic consistency.",
      beforeMetric: "35% Adhering",
      afterMetric: "82% Adhering",
      metricLabel: "Therapeutic Adherence Index",
      icon: <Activity className="w-6 h-6 text-blue-500" />
    },
    {
      id: "cardiac",
      tabLabel: "Cardiac Care",
      patientName: "Robert Miller",
      age: 63,
      location: "Chicago",
      condition: "Hypertention & Arterial Care",
      challengeText: "Frequent, unpredictable spikes in high blood pressure created constant anxiety for Robert and his family, often triggering unnecessary calls to emergency responders.",
      solutionText: "Continuous virtual ward monitoring gave his care team instant, real-time longitudinal charts. This continuous monitoring stabilized medication titration schedules and completely removed anxiety from his recovery journey.",
      beforeMetric: "High ER Anxiety",
      afterMetric: "Zero ER visits",
      metricLabel: "Cardiovascular Control Level",
      icon: <User className="w-6 h-6 text-indigo-500" />
    },
    {
      id: "adherence",
      tabLabel: "Therapy Adherence",
      patientName: "Dr. Kenji Tanaka",
      age: 51,
      location: "Tokyo",
      condition: "Oncology Support Adherence Plan",
      challengeText: "Under complex therapeutic regimens, medication timing deviations severely undermined early treatment efficacy trials. The patient desperately needed continuous adherence reminders.",
      solutionText: "Automatic medication reminders, direct diagnostic sync overlays, and daily interactive coaching chats stabilized treatment adherence. Real-world oncology outcomes rose significantly.",
      beforeMetric: "52% Med Adherence",
      afterMetric: "94% Med Adherence",
      metricLabel: "Protocol Adherence Tracking",
      icon: <Award className="w-6 h-6 text-teal-500" />
    }
  ];

  const [activeId, setActiveId] = useState<string>("post-discharge");

  const activeJourney = journeys.find(j => j.id === activeId) || journeys[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
      
      {/* Top Header tab selector */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
        {journeys.map(j => (
          <button
            key={j.id}
            type="button"
            onClick={() => setActiveId(j.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeId === j.id 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {j.tabLabel}
          </button>
        ))}
      </div>

      {/* Main card grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Story Text Part (7 columns) */}
        <div className="md:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center">
              {activeJourney.icon}
            </div>
            <div>
              <h5 className="text-sm font-black text-slate-500 uppercase tracking-widest">Active Care Scenario</h5>
              <h4 className="text-xl font-extrabold text-white">{activeJourney.condition}</h4>
            </div>
          </div>

          <div className="space-y-4 font-normal text-xs leading-relaxed">
            <div className="bg-slate-950 p-4 rounded-xl border border-red-950/20">
              <span className="text-[10px] text-red-400 uppercase font-black tracking-wider block mb-1">The Fragmented Challenge</span>
              <p className="text-slate-300 font-medium">{activeJourney.challengeText}</p>
            </div>
            
            <div className="bg-slate-950 p-4 rounded-xl border border-blue-950/20">
              <span className="text-[10px] text-blue-400 uppercase font-black tracking-wider block mb-1">The Connected Solution</span>
              <p className="text-slate-300 font-medium">{activeJourney.solutionText}</p>
            </div>
          </div>
        </div>

        {/* Patient Profile Card & Metrics (5 columns) */}
        <div className="md:col-span-5 bg-slate-950 rounded-2xl border border-slate-850 p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600/10 text-blue-400 rounded-full border border-blue-500/20 flex items-center justify-center font-bold text-base">
              {activeJourney.patientName.charAt(0)}
            </div>
            <div>
              <h6 className="font-extrabold text-white text-base leading-tight">{activeJourney.patientName}</h6>
              <p className="text-xs text-slate-500">{activeJourney.location} · Patient Age: {activeJourney.age}</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-900 pt-4">
            
            <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-850/40">
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Isolated Status</span>
                <span className="text-sm font-bold text-red-400 font-mono">{activeJourney.beforeMetric}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-red-400 rotate-90" />
            </div>

            <div className="flex justify-between items-center bg-blue-600/5 p-3 rounded-xl border border-blue-900/10">
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">GOQii Empowered</span>
                <span className="text-base font-black text-green-400 font-mono">{activeJourney.afterMetric}</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            </div>

            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center pt-2">
              KPI Indicator: {activeJourney.metricLabel}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RealCareJourneys;
