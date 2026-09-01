import React, { useEffect } from 'react';
import { 
  Lock, UserCheck, EyeOff, FileText, CheckCircle2, 
  ArrowLeft, ShieldCheck, UserX, Sliders, ClipboardList, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

interface PageProps {
  openModal: (type: 'demo' | 'expert') => void;
}

const PrivacyControls: React.FC<PageProps> = ({ openModal }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1E293B] font-sans antialiased overflow-x-hidden">
      <Header openModal={openModal} />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span className="text-[11px] font-bold tracking-widest text-emerald-900 uppercase">Patient-First Privacy Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Healthcare Privacy Controls
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Empower patients and healthcare providers with transparent data governance, granular consent controls, strict role-based access segregation, and verifiable auditability across every care program.
          </p>
        </div>
      </section>

      {/* Core Privacy Pillars */}
      <section className="py-12 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Dynamic Patient Consent</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Patients retain explicit, revocable consent for vital stream collection, caregiver visibility, and medical data sharing at any stage of their care journey.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Role-Based Access (RBAC)</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Strict segregation ensures clinicians, care coordinators, health coaches, and administrators access only the exact data required for their clinical duty.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-900/20">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">De-Identification &amp; Anonymity</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Automated pseudonymization and HIPAA Safe Harbor de-identification safeguard patient identities in population health reports and research workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Privacy Governance Matrix */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Governance Framework</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Engineered for Compliance with Global Privacy Regulations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            GOQii HealthEngage adheres to international privacy standards including HIPAA Privacy Rule, EU GDPR, and India's Digital Personal Data Protection (DPDP) Act 2023.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Privacy Control Card 1 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Granular Telemetry Permissions</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Device-Level Opt-In:</strong> Patients select which specific RPM parameters (e.g. ECG, SpO2, Glucose) are shared with their clinical team.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Care Circle Authorization:</strong> Patients can add, modify, or revoke family caregiver access to vitals and medication reminders anytime.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Research &amp; Analytics Consent:</strong> Separate, unbundled consent for secondary aggregate population studies and clinical trials.</span>
              </li>
            </ul>
          </div>

          {/* Privacy Control Card 2 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Tamper-Evident Access Audits</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Complete Audit Trails:</strong> Immutable logging of every clinician view, note entry, report export, and vital threshold adjustment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Emergency Break-Glass Logging:</strong> Strict administrative oversight and justification logging for emergency clinical record overrides.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Hospital Compliance Dashboards:</strong> Automated export of access logs for internal compliance officers and regulatory reviews.</span>
              </li>
            </ul>
          </div>

          {/* Privacy Control Card 3 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <UserX className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Patient Rights Fulfillment</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Right of Access &amp; Portability:</strong> Patients can export complete health summaries and telemetry in standard FHIR / JSON formats.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Right to Rectification:</strong> Verified workflows for patient-requested corrections to demographic and personal information.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Right to Erasure:</strong> Secure data scrubbing and record disposal protocols respecting statutory medical record retention mandates.</span>
              </li>
            </ul>
          </div>

          {/* Privacy Control Card 4 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Data Minimization &amp; Retention</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Purpose Limitation:</strong> Telemetry is collected solely to power configured care pathways and physician-prescribed protocols.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Automated Lifecycle Purging:</strong> Automated transition of historical telemetry to immutable cold storage following program completion.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>App Privacy Shield:</strong> Zero third-party behavioral advertising trackers, data brokers, or unvetted analytics SDKs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Questions About Data Privacy?</h3>
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Our Data Protection Officer and clinical governance team are available to discuss compliance agreements, patient privacy controls, and data residency configurations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={() => openModal('expert')}
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-lg shadow-emerald-500/25 text-center"
            >
              Consult Privacy Officer
            </button>
            <button 
              onClick={() => openModal('demo')}
              className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition text-center border border-slate-700"
            >
              Request Platform Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#07131F] text-slate-400 border-t border-slate-800/80 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 GOQii Inc. All rights reserved. Hospital-Grade Connected Care.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <Link to="/data-protection" className="hover:text-white transition-colors">Data Protection</Link>
            <Link to="/privacy-controls" className="text-white font-medium">Privacy Controls</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyControls;
