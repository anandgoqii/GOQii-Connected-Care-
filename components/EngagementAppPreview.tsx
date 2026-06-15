import React, { useState } from 'react';
import { Heart, MessageSquare, Flame, CheckSquare, Sparkles, Send, Calendar, Star } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  time: string;
  done: boolean;
}

interface ChatMessage {
  sender: 'user' | 'coach';
  text: string;
  time: string;
}

const EngagementAppPreview: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Morning blood pressure check", time: "8:00 AM", done: true },
    { id: 2, text: "Post-breakfast Walk (2k steps)", time: "10:00 AM", done: false },
    { id: 3, text: "Heart-healthy Diet: Lunch checklist", time: "1:00 PM", done: false },
    { id: 4, text: "Evening therapeutic dose reminder", time: "8:00 PM", done: false }
  ]);

  const [chat, setChat] = useState<ChatMessage[]>([
    { sender: 'coach', text: "Welcome back! I've analyzed your daily vitals. Heart rate stabilized beautifully during your brisk walk yesterday.", time: "10:15 AM" }
  ]);

  const [userInput, setUserInput] = useState<string>("");

  const handleToggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg: ChatMessage = { sender: 'user', text: userInput, time: "Just now" };
    setChat(prev => [...prev, userMsg]);
    setUserInput("");

    // Simulate friendly coaching response immediately
    setTimeout(() => {
      let coachReplyText = "Fantastic effort! Your data is syncing in real-time with the care manager dashboard. Let's make sure to hit your hydration goals today.";
      if (userInput.toLowerCase().includes("walk") || userInput.toLowerCase().includes("exercise")) {
        coachReplyText = "Phenomenal workout! Your active minutes are looking great. We are reducing cumulative cardiovascular strain day-by-day!";
      } else if (userInput.toLowerCase().includes("pain") || userInput.toLowerCase().includes("hurt")) {
        coachReplyText = "Thank you for logging this. I've flagged this on the Command Center for active clinical oversight. Dr. Carter's nurse will review and support.";
      }
      setChat(prev => [...prev, { sender: 'coach', text: coachReplyText, time: "Just now" }]);
    }, 1200);
  };

  const completedCount = tasks.filter(t => t.done).length;
  // Calculate a mock score out of 100
  const dailyHealthScore = 65 + (completedCount * 8.5);

  return (
    <div className="w-full max-w-[380px] mx-auto bg-slate-950 border-[10px] border-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden h-[640px] flex flex-col justify-between">
      {/* Phone Camera Notch Overlay */}
      <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-2xl mx-auto w-40 z-50 flex justify-center items-center">
        <div className="w-12 h-2.5 bg-black rounded-full mb-1"></div>
      </div>

      {/* Internal Phone Header Screen */}
      <div className="pt-8 px-4 bg-gradient-to-b from-blue-900/40 via-slate-950 to-slate-950 flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-start">
        
        {/* Patient Profile / Header Bar */}
        <div className="flex items-center justify-between mb-6 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs text-center border-2 border-blue-400">
              EA
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Patient Profile</p>
              <h6 className="text-[13px] font-black text-white leading-tight">Elizabeth Abbott</h6>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
            <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span className="text-[11px] font-bold text-orange-400">14 Day Streak</span>
          </div>
        </div>

        {/* Circular Health Score progress */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-900 flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
            {/* SVG circle */}
            <svg className="absolute w-full h-full rotate-[-90deg]">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#1e293b" strokeWidth="4" />
              <circle cx="32" cy="32" r="28" fill="none" stroke="#2563eb" strokeWidth="4" strokeDasharray="175" strokeDashoffset={175 - (175 * dailyHealthScore / 100)} className="transition-all duration-500" />
            </svg>
            <span className="text-sm font-black text-white font-mono">{Math.round(dailyHealthScore)}</span>
          </div>
          <div>
            <h6 className="text-[11px] uppercase tracking-widest text-slate-500 font-extrabold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-400" /> Daily Health Score
            </h6>
            <p className="text-xs text-slate-300 leading-normal mt-0.5">Adjusts interactively as you complete health goals!</p>
          </div>
        </div>

        {/* Task lists checklist */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">Clinical Pathways Checklist</span>
            <span className="text-[11px] font-bold text-blue-400">{completedCount}/{tasks.length} Completed</span>
          </div>
          <div className="space-y-2">
            {tasks.map(t => (
              <div 
                key={t.id} 
                className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-900 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-900"
                onClick={() => handleToggleTask(t.id)}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded flex items-center justify-center border transition ${t.done ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700'}`}>
                    {t.done && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-[11px] font-bold leading-normal ${t.done ? 'line-through text-slate-500' : 'text-slate-300'}`}>{t.text}</span>
                </div>
                <span className="text-[9px] text-slate-500 font-bold tracking-tight whitespace-nowrap">{t.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coaching Box Preview */}
        <div className="flex-1 bg-slate-900/45 p-3 rounded-2xl border border-slate-900/60 flex flex-col justify-between max-h-[190px]">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 font-bold border-b border-slate-900 pb-1.5 flex items-center gap-1.5 mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" /> Live Coach Support
          </div>
          
          <div className="space-y-2 overflow-y-auto max-h-[105px] pr-1 flex-1 text-[11.5px] leading-relaxed custom-scrollbar">
            {chat.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-2.5 rounded-2xl max-w-[85%] ${
                  msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-900 text-slate-300 rounded-tl-none border border-slate-800'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[8px] text-slate-600 mt-1 font-semibold">{msg.time}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendChat} className="mt-2 flex gap-1.5 border-t border-slate-900 pt-2">
            <input 
              type="text" 
              placeholder="Report symptoms, ask questions..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="bg-slate-950 border border-slate-900 text-[10.5px] text-slate-300 px-2.5 py-1.5 rounded-xl focus:outline-none flex-1 font-medium"
            />
            <button 
              type="submit"
              className="w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Interactive Bottom Phone Bar indicator */}
      <div className="h-6 bg-slate-950 flex items-center justify-center">
        <div className="w-28 h-1 bg-slate-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default EngagementAppPreview;
