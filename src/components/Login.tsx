import React, { useState } from 'react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-[2rem] shadow-xl p-8 w-full max-w-sm border border-gray-100">
        <h1 className="text-3xl font-medium text-center mb-10 text-gray-900">TeleDiş Giriş</h1>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <select className="w-full bg-gray-100 text-blue-500 rounded-xl p-4 outline-none appearance-none text-sm font-medium cursor-pointer">
              <option>Hekim Girişi</option>
              <option>Asistan Girişi</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Kullanıcı Adı" 
              className="w-full bg-gray-100 rounded-xl p-4 outline-none placeholder-gray-400 text-sm"
              required
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Şifre" 
              className="w-full bg-gray-100 rounded-xl p-4 outline-none placeholder-gray-400 text-sm"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#E30A17] text-white rounded-xl p-4 font-medium mt-6 hover:bg-red-700 transition flex justify-center items-center shadow-md shadow-red-500/30"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Giriş Yap"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
