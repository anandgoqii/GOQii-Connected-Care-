import React from 'react';
import { Building2, ShieldCheck, Pill, Activity, Smartphone, HeartPulse } from 'lucide-react';

const Ecosystem = () => {
  return (
    <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center py-12">
      {/* Background Glow */}
      <div className="absolute inset-10 bg-blue-400/10 blur-3xl rounded-full"></div>

      {/* Central Hub */}
      <div className="absolute z-20 w-36 h-36 bg-white rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center border-[6px] border-blue-50">
        <div className="text-center">
          <HeartPulse className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <span className="font-extrabold text-slate-900 text-base tracking-wide">GOQii</span>
        </div>
      </div>

      {/* Orbiting Rings */}
      <div className="absolute inset-4 rounded-full border-2 border-slate-200 border-dashed opacity-60"></div>
      <div className="absolute inset-20 rounded-full border border-blue-200 opacity-40"></div>

      {/* Rotating Container */}
      <div className="absolute inset-0 animate-[spin_35s_linear_infinite]">
        {/* Nodes */}
        <Node icon={<Building2 />} label="Hospitals" angle={0} />
        <Node icon={<ShieldCheck />} label="Insurance" angle={72} />
        <Node icon={<Pill />} label="Pharma" angle={144} />
        <Node icon={<Activity />} label="Wearables" angle={216} />
        <Node icon={<Smartphone />} label="Patients" angle={288} />
      </div>
    </div>
  );
};

const Node = ({ icon, label, angle }: { icon: React.ReactNode, label: string, angle: number }) => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 w-20 h-20 -mt-10 -ml-10"
      style={{
        transform: `rotate(${angle}deg) translateY(-13rem) rotate(-${angle}deg)`
      }}
    >
      {/* Counter-rotating inner container to keep icons upright */}
      <div className="w-full h-full animate-[spin_35s_linear_infinite_reverse] flex flex-col items-center justify-center group cursor-pointer">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-blue-600 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-200 group-hover:border-blue-200">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
        </div>
        <span className="text-sm font-bold text-slate-700 bg-white/95 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 whitespace-nowrap transition-all duration-300 group-hover:text-blue-600 group-hover:border-blue-200">
          {label}
        </span>
      </div>
    </div>
  );
};

export default Ecosystem;
