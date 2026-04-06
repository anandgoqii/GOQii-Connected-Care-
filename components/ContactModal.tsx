import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'demo' | 'experts' | null;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, type }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const title = type === 'demo' ? 'Request a Demo' : 'Talk to Experts';
  const subtitle = type === 'demo' 
    ? 'See how GOQii can transform your post-discharge care with a personalized walkthrough.'
    : 'Connect with our clinical integration specialists to discuss your specific needs.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10">
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
              <p className="text-slate-500">Our team will be in touch with you shortly.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{title}</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">{subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="jane@hospital.org" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Organization</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="General Hospital" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" placeholder="Tell us about your current challenges..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all mt-4">
                  Submit Request
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
