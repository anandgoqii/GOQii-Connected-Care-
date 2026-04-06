import React from 'react';
import { CheckCircle2, Shield, Lock, FileText } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Enterprise-Ready Compliance</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We take data security and privacy seriously. Our platform is built from the ground up to meet the highest standards of healthcare compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">HIPAA Compliant</h3>
            <p className="text-slate-500">Fully compliant with the Health Insurance Portability and Accountability Act to protect sensitive patient data.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">ISO 27001 Certified</h3>
            <p className="text-slate-500">Certified for information security management systems, ensuring robust data protection practices.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">GDPR Ready</h3>
            <p className="text-slate-500">Designed with privacy by default, ready for General Data Protection Regulation compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
