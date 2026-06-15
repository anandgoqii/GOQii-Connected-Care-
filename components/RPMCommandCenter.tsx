import React, { useState } from 'react';
import { 
  Users, Activity, Bell, Heart, Search, Check, ShieldCheck, 
  MapPin, PhoneCall, AlertOctagon, TrendingUp, RefreshCw, UserCheck
} from 'lucide-react';
import { PatientData } from '../types';

// Mock Patient population databases
const initialPatients: PatientData[] = [
  {
    id: "pat-101",
    name: "James Carter",
    age: 68,
    condition: "Post-CABG Recovery",
    riskScore: 84,
    vitals: { hr: 98, bp: "145/92", spo2: 91, temp: 37.2 },
    lastAlert: "Hypoxia alert: SpO2 dropped below 92%"
  },
  {
    id: "pat-102",
    name: "Mary Jenkins",
    age: 72,
    condition: "Congestive Heart Failure",
    riskScore: 76,
    vitals: { hr: 82, bp: "135/88", spo2: 94, temp: 36.8 },
    lastAlert: "Weight fluctuation: sudden 2.2kg gain identified"
  },
  {
    id: "pat-103",
    name: "Robert Patel",
    age: 59,
    condition: "Type 2 Diabetes, Severe",
    riskScore: 42,
    vitals: { hr: 74, bp: "128/82", spo2: 98, temp: 36.6 },
    lastAlert: "Adherence warning: Morning Insulin checklist missed"
  },
  {
    id: "pat-104",
    name: "Sarah Lindqvist",
    age: 64,
    condition: "Hypertention & Renal Risk",
    riskScore: 19,
    vitals: { hr: 68, bp: "118/76", spo2: 99, temp: 36.5 },
    lastAlert: "Stable: all daily checks verified"
  }
];

const RPMCommandCenter: React.FC = () => {
  const [patients, setPatients] = useState<PatientData[]>(initialPatients);
  const [selectedPatId, setSelectedPatId] = useState<string>("pat-101");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<'all' | 'high' | 'stable'>('all');

  const selectedPatient = patients.find(p => p.id === selectedPatId) || patients[0];

  const handleResolveAlert = (id: string) => {
    setPatients(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          riskScore: Math.max(15, Math.floor(p.riskScore / 2)),
          lastAlert: "Alert resolved. Routine monitoring resumed."
        };
      }
      return p;
    }));
  };

  const filteredPatients = patients.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.condition.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'high') return matchesSearch && p.riskScore >= 70;
    if (filter === 'stable') return matchesSearch && p.riskScore < 50;
    return matchesSearch;
  });

  return (
    <div className="w-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div>
            <h5 className="font-extrabold text-white text-sm tracking-wide">GOQii RPMC</h5>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">CARE STREAM - POPULATION INSIGHTS</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            All Candidates
          </button>
          <button 
            onClick={() => setFilter('high')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${filter === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            <AlertOctagon className="w-3 h-3" /> High Risk
          </button>
          <button 
            onClick={() => setFilter('stable')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${filter === 'stable' ? 'bg-green-500/25 text-green-400 border border-green-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Stable
          </button>
        </div>
      </div>

      {/* Main Grid: Worklist & Details Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Worklist (6 columns) */}
        <div className="lg:col-span-7 border-r border-slate-900 p-4 md:p-6">
          <div className="flex items-center bg-slate-900/60 rounded-xl px-3 py-2 border border-slate-800 mb-6">
            <Search className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Filter by patient name or therapy condition..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-slate-200 text-xs focus:outline-none w-full"
            />
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredPatients.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs font-medium">
                No patient dossiers match your criteria.
              </div>
            ) : (
              filteredPatients.map((pat) => (
                <div 
                  key={pat.id}
                  onClick={() => setSelectedPatId(pat.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    selectedPatId === pat.id 
                    ? 'bg-blue-600/10 border-blue-500 shadow-md' 
                    : 'bg-slate-900/30 border-slate-900 hover:border-slate-800 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {pat.riskScore >= 70 ? (
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      ) : pat.riskScore >= 40 ? (
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      ) : (
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h6 className="font-extrabold text-white text-sm">{pat.name}</h6>
                      <p className="text-[11px] text-slate-400 font-medium mb-1">{pat.condition}</p>
                      <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded font-mono text-slate-500">Age: {pat.age}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">Risk Score</span>
                    <span className={`text-base font-black font-mono ${
                      pat.riskScore >= 70 ? 'text-red-500' : pat.riskScore >= 40 ? 'text-amber-500' : 'text-green-500'
                    }`}>
                      {pat.riskScore}%
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side: Active Patient Details (5 columns) */}
        <div className="lg:col-span-5 bg-slate-950 p-6 flex flex-col justify-between border-t lg:border-t-0 border-slate-900">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900">
              <span className="text-[11px] bg-slate-900 text-blue-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Active Dossier Record
              </span>
              <span className="text-[10px] text-slate-500 font-mono">ID: {selectedPatient.id}</span>
            </div>

            <h5 className="text-xl font-black text-white mb-1">{selectedPatient.name}</h5>
            <p className="text-xs text-blue-400 font-semibold mb-6">{selectedPatient.condition}</p>

            {/* Simulated Live Vitals Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900/45 p-3 rounded-xl border border-slate-800/40">
                <span className="text-[10px] text-slate-500 font-bold block mb-1 uppercase tracking-wider">Heart Rate</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black font-mono text-slate-200">{selectedPatient.vitals.hr}</span>
                  <span className="text-[10px] text-slate-500">BPM</span>
                </div>
              </div>
              <div className="bg-slate-900/45 p-3 rounded-xl border border-slate-800/40">
                <span className="text-[10px] text-slate-500 font-bold block mb-1 uppercase tracking-wider">SpO2 Level</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black font-mono text-slate-200">{selectedPatient.vitals.spo2}%</span>
                  <span className="text-[10px] text-slate-500">{selectedPatient.vitals.spo2 < 92 ? '⚠ Low' : '✓ Normal'}</span>
                </div>
              </div>
              <div className="bg-slate-900/45 p-3 rounded-xl border border-slate-800/40">
                <span className="text-[10px] text-slate-500 font-bold block mb-1 uppercase tracking-wider">Blood Pressure</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-black font-mono text-slate-200">{selectedPatient.vitals.bp}</span>
                  <span className="text-[10px] text-slate-500">mmHg</span>
                </div>
              </div>
              <div className="bg-slate-900/45 p-3 rounded-xl border border-slate-800/40">
                <span className="text-[10px] text-slate-500 font-bold block mb-1 uppercase tracking-wider">Temperature</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black font-mono text-slate-200">{selectedPatient.vitals.temp}</span>
                  <span className="text-[10px] text-slate-500">°C</span>
                </div>
              </div>
            </div>

            {/* Active Alert Console */}
            <div className={`p-4 rounded-xl border mb-6 ${
              selectedPatient.riskScore >= 70 
              ? 'bg-red-950/20 border-red-900/50 text-red-400' 
              : 'bg-slate-900/60 border-slate-800 text-slate-300'
            }`}>
              <span className="text-[10px] font-bold block uppercase tracking-wider mb-2">Active Care Warning</span>
              <p className="text-xs font-semibold leading-relaxed mb-3">{selectedPatient.lastAlert}</p>
              
              {selectedPatient.riskScore >= 50 && (
                <button 
                  type="button"
                  onClick={() => handleResolveAlert(selectedPatient.id)}
                  className="w-full py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-lg text-[10.5px] font-bold border border-red-500/30 transition flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3 h-3" /> Resolve Active Incident
                </button>
              )}
            </div>
          </div>

          {/* Action Panel Footer */}
          <div className="border-t border-slate-900 pt-4 flex gap-3">
            <button 
              type="button"
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
              onClick={() => alert(`Dialing patient ${selectedPatient.name}...`)}
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call Patient
            </button>
            <button 
              type="button"
              className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
              onClick={() => alert(`Escalating alerts for ${selectedPatient.name} to connected clinical team.`)}
            >
              <UserCheck className="w-3.5 h-3.5" /> Escalate to MD
            </button>
          </div>

        </div>

      </div>

      {/* Bottom mini infographics analytics */}
      <div className="bg-slate-950 px-6 py-4 border-t border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 text-xs">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <span><strong>Total Monitored:</strong> 42,000 Care Recipients</span>
        </div>
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-indigo-500 flex-shrink-0" />
          <span><strong>Adherence Rating:</strong> 94% Daily Compliance</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span><strong>Readmission avoidance:</strong> 28.5% Net Reduction</span>
        </div>
      </div>
    </div>
  );
};

export default RPMCommandCenter;
