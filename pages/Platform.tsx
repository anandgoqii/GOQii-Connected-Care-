import React from 'react';
import { LayoutDashboard, Award, Link as LinkIcon } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6">Built for Enterprise Scale</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our platform provides the comprehensive tools you need to manage connected care at scale, from a unified command center to seamless integrations.
          </p>
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
    </div>
  );
};

export default Platform;
