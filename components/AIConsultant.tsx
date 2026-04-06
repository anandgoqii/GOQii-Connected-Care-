
import React, { useState } from 'react';
import { gemini } from '../geminiService';

const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulate = async (scenario?: string) => {
    setIsLoading(true);
    const query = scenario || prompt;
    const result = await gemini.getClinicalAnalysis(`Topic: ${query}. Provide a concise clinical expert perspective on how continuous care improves management of this specific case.`);
    setResponse(result || '');
    setIsLoading(false);
  };

  const topics = [
    "Post-op CABG transition care",
    "Heart Failure weight monitoring",
    "COPD exacerbation detection",
    "Diabetes glycemic stability"
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/50">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <h3 className="text-white font-bold tracking-tight">Clinical Expert Panel</h3>
            </div>
            
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Explore how continuous monitoring transforms specific clinical pathways. Select a focus area to receive an AI-driven clinical analysis.
            </p>

            <div className="space-y-3">
              {topics.map((t, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSimulate(t)}
                  className="w-full text-left p-4 text-xs font-semibold rounded-xl bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-all border border-slate-700"
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <input 
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask about a custom pathway..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button 
                onClick={() => handleSimulate()}
                disabled={isLoading || !prompt}
                className="mt-2 w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-700 disabled:opacity-50 transition"
              >
                {isLoading ? 'Analyzing...' : 'Generate Analysis'}
              </button>
            </div>
          </div>

          {/* Result View */}
          <div className="lg:col-span-3 p-8 lg:p-12 bg-slate-950">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 py-12">
                <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">Synthesizing clinical data...</p>
              </div>
            ) : response ? (
              <div className="prose prose-invert prose-sm">
                <div className="text-blue-400 font-bold text-xs tracking-widest mb-4 uppercase">Expert Analysis Report</div>
                <div 
                  className="text-slate-300 leading-relaxed text-sm whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: response }} 
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-48 h-32 mb-8 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                  <img src="https://picsum.photos/seed/ai-health/400/300" alt="AI Analysis" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                </div>
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-800 -mt-12 relative z-10">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h4 className="text-white font-bold mb-2">Clinical Insights Engine</h4>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">Select a clinical program from the left to see how digital intervention changes patient outcomes.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
