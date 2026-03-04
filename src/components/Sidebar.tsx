import React from 'react';
import { User, Users, MessageSquare, LogOut } from 'lucide-react';

export default function Sidebar({ onNavigate, currentScreen }: { onNavigate: (screen: string) => void, currentScreen: string }) {
  return (
    <div className="flex flex-col h-full p-6 bg-[#E30A17]">
      <div className="flex flex-col items-center mb-10 mt-8">
        <div className="bg-white text-[#E30A17] rounded-3xl p-4 mb-4 shadow-lg">
          <User size={48} strokeWidth={1.5} />
        </div>
        <h2 className="text-lg font-medium text-center">Telekonsültan Hekim 1</h2>
      </div>
      
      <nav className="flex-1 space-y-2">
        <button 
          onClick={() => onNavigate('patientList')}
          className={`w-full flex items-center space-x-4 p-3 rounded-xl transition ${currentScreen === 'patientList' ? 'bg-red-800/40' : 'hover:bg-red-800/20'}`}
        >
          <Users size={22} />
          <span className="text-base font-medium">Hasta Listesi</span>
        </button>
        
        <button className="w-full flex items-center space-x-4 p-3 rounded-xl transition hover:bg-red-800/20">
          <User size={22} />
          <span className="text-base font-medium">Kullanıcı Profili</span>
        </button>
        
        <button className="w-full flex items-center space-x-4 p-3 rounded-xl transition hover:bg-red-800/20">
          <MessageSquare size={22} />
          <span className="text-base font-medium">Geri Bildirim</span>
        </button>
      </nav>
      
      <button 
        onClick={() => onNavigate('login')}
        className="w-full flex items-center space-x-4 p-3 rounded-xl transition hover:bg-red-800/20 mt-auto"
      >
        <LogOut size={22} />
        <span className="text-base font-medium">Oturum Kapat</span>
      </button>
    </div>
  );
}
