import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function Evaluation({ patient, onBack }: { patient: any, onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'dental' | 'general'>('dental');
  const [selectedTooth, setSelectedTooth] = useState('53');
  
  const upperTeeth = ['11','12','13','14','15','16','17','18','21','22','23','24'];
  const lowerTeeth = ['51','52','53','54','55','61','62','63','64','65','71','72'];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Image Header */}
      <div className="relative bg-black h-56 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" alt="Dental" className="max-h-full max-w-full object-contain" />
        <button 
          className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
          onClick={onBack}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-xs p-3 pt-6">
          Alt Oklüzal Fotoğraf
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col shadow-sm z-10">
        <button 
          className={`py-3.5 text-center font-semibold text-sm transition-colors ${activeTab === 'dental' ? 'bg-[#E30A17] text-white' : 'bg-red-800 text-white/80 border-b border-red-900'}`}
          onClick={() => setActiveTab('dental')}
        >
          DENTAL DEĞERLENDİRME
        </button>
        <button 
          className={`py-3.5 text-center font-semibold text-sm transition-colors ${activeTab === 'general' ? 'bg-[#E30A17] text-white' : 'bg-red-800 text-white/80'}`}
          onClick={() => setActiveTab('general')}
        >
          GENEL DEĞERLENDİRME
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 overflow-y-auto bg-white">
        {activeTab === 'dental' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Tooth Grid */}
            <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex flex-wrap gap-1.5 justify-center">
                {upperTeeth.map(t => (
                  <button 
                    key={t}
                    onClick={() => setSelectedTooth(t)}
                    className={`w-8 h-8 border rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${selectedTooth === t ? 'bg-black text-white border-black shadow-md' : 'border-gray-300 text-gray-700 bg-white hover:border-gray-400'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {lowerTeeth.map(t => (
                  <button 
                    key={t}
                    onClick={() => setSelectedTooth(t)}
                    className={`w-8 h-8 border rounded-lg flex items-center justify-center text-xs font-medium relative transition-colors ${selectedTooth === t ? 'bg-black text-white border-black shadow-md' : 'border-gray-300 text-gray-700 bg-white hover:border-gray-400'}`}
                  >
                    {t}
                    {/* Red dot indicator for some teeth as in the image */}
                    {['53', '55', '65'].includes(t) && (
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Evaluation Form */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span className="text-sm font-medium text-gray-700">Dental Muayene</span>
              <div className="relative">
                <select className="bg-gray-100/50 text-blue-500 font-medium text-sm rounded-lg px-4 py-2 outline-none w-32 appearance-none text-center border border-gray-200 focus:border-blue-300 transition">
                  <option>Çürük</option>
                  <option>Sağlam</option>
                  <option>Dolgulu</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <button className="w-full text-center text-gray-500 font-medium text-sm py-3 hover:bg-gray-50 rounded-xl transition border border-dashed border-gray-300">
              + Ekle
            </button>
          </div>
        ) : (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span className="text-sm font-medium text-gray-700">Diş Eti Muayenesi</span>
              <div className="relative">
                <select className="bg-gray-100/50 text-blue-500 font-medium text-sm rounded-lg px-4 py-2 outline-none w-36 appearance-none text-center border border-gray-200 focus:border-blue-300 transition">
                  <option>Kanama Yok</option>
                  <option>Kanama Var</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span className="text-sm font-medium text-gray-700">Periodontal Muayene</span>
              <div className="relative">
                <select className="bg-gray-100/50 text-blue-500 font-medium text-sm rounded-lg px-4 py-2 outline-none w-36 appearance-none text-center border border-gray-200 focus:border-blue-300 transition">
                  <option>Hafif Plak</option>
                  <option>Orta Plak</option>
                  <option>Yoğun Plak</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <button className="w-full text-center text-gray-500 font-medium text-sm py-3 hover:bg-gray-50 rounded-xl transition border border-dashed border-gray-300 mt-6">
              + Ekle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
