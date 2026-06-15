import React, { useState } from 'react';
import { 
  Database, Network, ArrowDown, Laptop, ShieldAlert, Cpu, 
  User, CheckCircle, Smartphone, Activity 
} from 'lucide-react';

const PlatformArchitecture: React.FC = () => {
  const [activeProto, setActiveProto] = useState<string | null>(null);

  const protocols = [
    { label: "HL7 Integration", desc: "Legacy & modern hospital information system connectivity standards." },
    { label: "FHIR v4 Compliant", desc: "Fast Healthcare Interoperability Resources for restful clinical API exchange." },
    { label: "EHR/EMR Bi-directional", desc: "Direct sync with major clinical players like Epic, Cerner, and regional systems." },
    { label: "OAuth 2.5 Security", desc: "Robust data protection with secure end-point handshake controls." }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Visual Header */}
      <div className="text-center mb-8 border-b border-slate-800 pb-6">
        <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
          System Interoperability Design
        </span>
        <h4 className="text-xl md:text-2xl font-black text-white mt-3">Platform Architecture Diagram</h4>
        <p className="text-xs text-slate-400 mt-1">Interlinked flow lines showing real-time clinical and lifestyle data transit flows.</p>
      </div>

      {/* Grid: SVG Flowchart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-6 rounded-2xl border border-slate-800/40 mb-8">
        
        {/* Left Side: Data Sources (4 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-[11px] font-black tracking-wider text-slate-500 uppercase px-1">Raw Inputs</p>
          {[
            { label: "Bio-Wearables", sub: "Vitals & continuous activity", icon: <Smartphone className="w-4 h-4" /> },
            { label: "HIS / EMR", sub: "Clinical history & diagnostics", icon: <Database className="w-4 h-4" /> },
            { label: "Patient Labs", sub: "Structured pathology feeds", icon: <Activity className="w-4 h-4" /> }
          ].map((src, i) => (
            <div 
              key={i} 
              className="bg-slate-900 p-3 rounded-xl border border-slate-800 hover:border-blue-500/50 transition flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                {src.icon}
              </div>
              <div>
                <h6 className="text-[11.5px] font-bold text-slate-200">{src.label}</h6>
                <p className="text-[9.5px] text-slate-500">{src.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle: GOQii HealthEngage Central processing engine (4 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-6">
          
          <div className="relative w-full max-w-[240px] bg-gradient-to-b from-blue-600 to-indigo-800 p-6 rounded-2xl border-2 border-blue-400 shadow-2xl text-center z-10 transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <h6 className="text-sm font-black text-white leading-tight">GOQii HealthEngage</h6>
            <p className="text-[10px] text-blue-100 font-semibold mt-1">Unified Integration Core</p>
            <div className="mt-3 inset-x-0 mx-auto w-24 h-1 bg-white/20 rounded-full"></div>
          </div>

          {/* Decorative small connector badges */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="text-[9.5px] bg-slate-900 text-teal-400 font-mono px-2 py-0.5 rounded border border-slate-800">FHIR v4</span>
            <span className="text-[9.5px] bg-slate-900 text-indigo-400 font-mono px-2 py-0.5 rounded border border-slate-800">HL7 Engine</span>
            <span className="text-[9.5px] bg-slate-900 text-amber-400 font-mono px-2 py-0.5 rounded border border-slate-800">EMR Sync</span>
          </div>

        </div>

        {/* Right Side: Stakeholders distribution (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-[11px] font-black tracking-wider text-slate-500 uppercase px-1">Coordinated Reach</p>
          {[
            { label: "Clinicians / Hospital", sub: "Continuous Oversight" },
            { label: "Insurers / Employers", sub: "Adoption & Program ROI" },
            { label: "Pharma Teams", sub: "Adherence Compliance" }
          ].map((dest, i) => (
            <div 
              key={i} 
              className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/60 flex items-center justify-between gap-2"
            >
              <div>
                <h6 className="text-[11.5px] font-bold text-slate-300">{dest.label}</h6>
                <p className="text-[9px] text-slate-500 font-medium">{dest.sub}</p>
              </div>
              <span className="text-xs text-blue-400">✓</span>
            </div>
          ))}
        </div>

      </div>

      {/* Protocol Exploration Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {protocols.map((proto, i) => (
          <div 
            key={i}
            onMouseEnter={() => setActiveProto(proto.label)}
            onMouseLeave={() => setActiveProto(null)}
            className="p-3 bg-slate-950 rounded-xl border border-slate-850 hover:border-blue-500 transition cursor-help flex flex-col justify-between min-h-[90px]"
          >
            <h6 className="text-xs font-bold text-slate-200">{proto.label}</h6>
            <p className="text-[10px] text-slate-500 mt-1 lines-clamp-2 leading-relaxed font-normal">
              {activeProto === proto.label ? proto.desc : "Hover to explore protocol integration details."}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default PlatformArchitecture;
