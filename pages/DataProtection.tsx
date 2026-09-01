import React, { useEffect } from 'react';
import { 
  Shield, Lock, Server, Key, FileCheck, CheckCircle2, 
  ArrowLeft, Cpu, RefreshCw, AlertCircle, Database, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

interface PageProps {
  openModal: (type: 'demo' | 'expert') => void;
}

const DataProtection: React.FC<PageProps> = ({ openModal }) => {
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
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-[11px] font-bold tracking-widest text-blue-900 uppercase">Enterprise Security &amp; Safeguards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Healthcare-Grade Data Protection
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            GOQii HealthEngage ConnectedCare is engineered from the core with zero-trust architectural principles, ensuring strict patient telemetry isolation, military-grade cryptographic encryption, and enterprise resilience across every clinical workflow.
          </p>
        </div>
      </section>

      {/* Core Protection Pillars */}
      <section className="py-12 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Cryptographic Encryption</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                All patient health information (PHI) and clinical telemetry are protected with AES-256 encryption at rest and TLS 1.3 protocol encryption in transit across all endpoints.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-900/20">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Multi-Tenant Isolation</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Strict logical and database-level tenancy separation guarantees that health system data, patient cohorts, and hospital metrics remain isolated in dedicated VPCs.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">ISO 27001 &amp; HIPAA</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Adherence to international information security standards and the HIPAA Security Rule with comprehensive Business Associate Agreements (BAAs) for hospital partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Technical Safeguards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-400 font-mono">Technical Safeguards</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Defense-in-Depth for Remote Patient Monitoring
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From smart connected medical devices in the patient’s home to clinical dashboards in the hospital command center, every byte of data is securely verified and logged.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Safeguard Card 1 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">RPMC Device &amp; Firmware Security</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Hardware Token Pairing:</strong> Secure Bluetooth Low Energy (BLE) pairing prevents man-in-the-middle device spoofing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Cryptographically Signed Firmware:</strong> Automatic over-the-air (OTA) updates ensure zero unverified firmware execution.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Secure Local Buffer:</strong> Vitals are immediately flushed and purged from device buffers once encrypted transit completes.</span>
              </li>
            </ul>
          </div>

          {/* Safeguard Card 2 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Cloud &amp; Network Infrastructure</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Zero-Trust Network Access:</strong> Role-gated micro-segmentation with Web Application Firewalls (WAF) and DDoS protection.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Georedundant Disaster Recovery:</strong> Automated point-in-time database backups replicated across multiple availability zones.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Continuous Vulnerability Audits:</strong> Automated static code analysis, daily dependency scanning, and periodic third-party penetration tests.</span>
              </li>
            </ul>
          </div>

          {/* Safeguard Card 3 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <Key className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Key Management &amp; Access Controls</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Hardware Security Modules (HSM):</strong> Master cryptographic keys are managed via FIPS 140-2 Level 3 validated HSMs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Automated Key Rotation:</strong> Regular lifecycle rotation of API credentials, database keys, and TLS certificates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Mandatory MFA &amp; SSO:</strong> SAML 2.0 / OpenID Connect integration supporting hospital enterprise directories.</span>
              </li>
            </ul>
          </div>

          {/* Safeguard Card 4 */}
          <div className="border border-slate-200 rounded-3xl p-8 bg-white space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Incident Response &amp; Governance</h4>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>24/7 Security Operations Center:</strong> Real-time anomaly detection and automated alert triage for suspicious access patterns.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Documented Incident Playbooks:</strong> Rapid notification timelines compliant with HIPAA Breach Notification Rule.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Rigorous Employee Training:</strong> Mandatory biometric security and HIPAA compliance training for all platform engineers.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Need a Security Whitepaper or BAA?</h3>
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Speak directly with our enterprise security and compliance team to review our SOC 2 documentation, penetration test reports, and HIPAA data safeguards.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={() => openModal('expert')}
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/25 text-center"
            >
              Contact Security Team
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
            <Link to="/data-protection" className="text-white font-medium">Data Protection</Link>
            <Link to="/privacy-controls" className="hover:text-white transition-colors">Privacy Controls</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataProtection;
