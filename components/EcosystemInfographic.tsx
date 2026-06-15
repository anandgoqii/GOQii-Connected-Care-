import React, { useState } from 'react';
import { Building2, Home, Shield, Pill, ArrowRight, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

const EcosystemInfographic: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative stars / grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-800 pb-6">
        <div>
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">Interactive Pathway Visualizer</span>
          <h4 className="text-xl md:text-2xl font-extrabold text-white">Healthcare Delivery Models</h4>
        </div>
        <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start">
          <button 
            type="button"
            onClick={() => setIsConnected(false)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${!isConnected ? 'bg-red-500/15 text-red-400 border border-red-500/30 shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <AlertTriangle className="w-3.5 h-3.5" /> Disconnected Silos
          </button>
          <button 
            type="button"
            onClick={() => setIsConnected(true)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${isConnected ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> GOQii Connected Model
          </button>
        </div>
      </div>

      {!isConnected ? (
        /* Fragmented Disconnected Model */
        <div className="relative flex flex-col lg:flex-row items-center justify-around gap-12 py-8">
          {/* Path 1: Hospital */}
          <div className="group flex flex-col items-center bg-slate-950/80 p-6 rounded-2xl border border-red-900/20 w-full max-w-[200px] text-center shadow-lg hover:border-red-500/30 transition-all">
            <div className="w-16 h-16 bg-red-950/50 text-red-500 rounded-2xl flex items-center justify-center border border-red-900/20 mb-4 group-hover:scale-105 transition-transform">
              <Building2 className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Hospitals</h5>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">Focus on acute treatment</p>
            <div className="inline-flex items-center gap-1 bg-red-950/40 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-900/40">
              Siloed Care Ends
            </div>
          </div>

          <div className="hidden lg:flex items-center text-red-900 animate-pulse">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-red-500 mb-1">Visibility Break</span>
              <span className="text-xl">⚡</span>
            </div>
          </div>

          {/* Path 2: Home */}
          <div className="group flex flex-col items-center bg-slate-950/80 p-6 rounded-2xl border border-red-900/20 w-full max-w-[200px] text-center shadow-lg hover:border-red-500/30 transition-all">
            <div className="w-16 h-16 bg-red-950/50 text-red-500 rounded-2xl flex items-center justify-center border border-red-900/20 mb-4 group-hover:scale-105 transition-transform">
              <Home className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Home (Patient)</h5>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">Isolated recovery environment</p>
            <div className="inline-flex items-center gap-1 bg-red-950/40 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-900/40">
              Low Adherence
            </div>
          </div>

          <div className="hidden lg:flex items-center text-red-900 animate-pulse">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-red-500 mb-1">No Real-time Feed</span>
              <span className="text-xl">⚡</span>
            </div>
          </div>

          {/* Path 3: Insurance */}
          <div className="group flex flex-col items-center bg-slate-950/80 p-6 rounded-2xl border border-red-900/20 w-full max-w-[200px] text-center shadow-lg hover:border-red-500/30 transition-all">
            <div className="w-16 h-16 bg-red-950/50 text-red-500 rounded-2xl flex items-center justify-center border border-red-900/20 mb-4 group-hover:scale-105 transition-transform">
              <Shield className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Insurers</h5>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">Reactive claim payouts</p>
            <div className="inline-flex items-center gap-1 bg-red-950/40 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-900/40">
              Episodic Claims
            </div>
          </div>

          <div className="hidden lg:flex items-center text-red-900 animate-pulse">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-red-500 mb-1">Zero Insights</span>
              <span className="text-xl">⚡</span>
            </div>
          </div>

          {/* Path 4: Pharma */}
          <div className="group flex flex-col items-center bg-slate-950/80 p-6 rounded-2xl border border-red-900/20 w-full max-w-[200px] text-center shadow-lg hover:border-red-500/30 transition-all">
            <div className="w-16 h-16 bg-red-950/50 text-red-500 rounded-2xl flex items-center justify-center border border-red-900/20 mb-4 group-hover:scale-105 transition-transform">
              <Pill className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Pharma</h5>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">Support therapies post-sale</p>
            <div className="inline-flex items-center gap-1 bg-red-950/40 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-900/40">
              Unverified Adherence
            </div>
          </div>
        </div>
      ) : (
        /* Connected Unified Model */
        <div className="relative flex flex-col lg:flex-row items-center justify-around gap-12 py-8">
          {/* Connector lines behind */}
          <div className="absolute hidden lg:block inset-x-20 top-[40%] h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-pulse z-0 rounded-full"></div>

          {/* Central GOQii core node */}
          <div className="absolute hidden lg:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 items-center justify-center z-10">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-900">
                <RefreshCw className="w-10 h-10 text-white animate-spin [animation-duration:15s]" />
              </div>
            </div>
          </div>

          {/* Path 1: Hospital */}
          <div className="z-20 group flex flex-col items-center bg-slate-950 p-6 rounded-2xl border border-blue-900/30 w-full max-w-[200px] text-center shadow-2xl hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-blue-950/60 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-900/50 mb-4 group-hover:scale-105 transition-transform">
              <Building2 className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Hospitals</h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">RPM & Post-discharge visibility</p>
            <div className="inline-flex items-center gap-1 bg-blue-950/40 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-900/50">
              Active Monitoring
            </div>
          </div>

          {/* Path 2: Patient */}
          <div className="z-20 group flex flex-col items-center bg-slate-950 p-6 rounded-2xl border border-blue-900/30 w-full max-w-[200px] text-center shadow-2xl hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-blue-950/60 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-900/50 mb-4 group-hover:scale-105 transition-transform">
              <Home className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Patient Home</h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Wearables & App Ecosystem</p>
            <div className="inline-flex items-center gap-1 bg-blue-950/40 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-900/50">
              Empowered & Supported
            </div>
          </div>

          {/* Space helper on desktop for central orb */}
          <div className="hidden lg:block w-16"></div>

          {/* Path 3: Insurance */}
          <div className="z-20 group flex flex-col items-center bg-slate-950 p-6 rounded-2xl border border-blue-900/30 w-full max-w-[200px] text-center shadow-2xl hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-blue-950/60 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-900/50 mb-4 group-hover:scale-105 transition-transform">
              <Shield className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Insurers</h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Risk analytics & Proactive care</p>
            <div className="inline-flex items-center gap-1 bg-blue-950/40 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-900/50">
              Prevented Events
            </div>
          </div>

          {/* Path 4: Pharma */}
          <div className="z-20 group flex flex-col items-center bg-slate-950 p-6 rounded-2xl border border-blue-900/30 w-full max-w-[200px] text-center shadow-2xl hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-blue-950/60 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-900/50 mb-4 group-hover:scale-105 transition-transform">
              <Pill className="w-8 h-8" />
            </div>
            <h5 className="font-extrabold text-white text-sm mb-1">Pharma</h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Verified adherence tracking</p>
            <div className="inline-flex items-center gap-1 bg-blue-950/40 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-900/50">
              Optimal Therapy
            </div>
          </div>
        </div>
      )}

      {/* Caption card */}
      <div className="mt-8 bg-slate-950 p-4 font-normal rounded-2xl border border-slate-800 text-xs text-slate-400 text-center leading-relaxed">
        {isConnected ? (
          <span><strong>The GOQii Advantage:</strong> Flowing real-time care intelligence bridges critical care gaps, bringing unified communication links, proactive intervention prompts, and verified chronic care metrics right to the patient’s home.</span>
        ) : (
          <span><strong>The Disconnected Reality:</strong> Care discontinuity outside clinical settings breeds severe blind spots. Data siloing forces stakeholders to rely on fragmented, delayed histories with zero continuous, clinical insights.</span>
        )}
      </div>
    </div>
  );
};

export default EcosystemInfographic;
