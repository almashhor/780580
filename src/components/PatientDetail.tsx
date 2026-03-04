import React, { useState } from 'react';
import { MoreHorizontal, ChevronLeft, ChevronRight, Camera, Folder, Info, FileText } from 'lucide-react';

export default function PatientDetail({ patient, onEvaluate }: { patient: any, onEvaluate: () => void }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const [activeModal, setActiveModal] = useState<'info' | 'anamnesis' | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop", // Placeholder for teeth
    "https://images.unsplash.com/photo-1598256989800-fea5ce5146ce?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Image Viewer Section */}
      <div className="relative bg-black h-72 flex items-center justify-center">
        <img src={images[currentImageIndex]} alt="Dental" className="max-h-full max-w-full object-contain" />
        
        {/* Top Left Menu Button */}
        <button 
          className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MoreHorizontal size={20} />
        </button>

        {/* Navigation Arrows */}
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-black/60 transition"
          onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-black/60 transition"
          onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-xs p-3 pt-6">
          Alt çene oklüzal fotoğraf
        </div>

        {/* Dropdown Menu for Info/Anamnesis */}
        {showMenu && (
          <div className="absolute top-14 left-3 bg-black/80 backdrop-blur-md text-white rounded-xl w-48 overflow-hidden z-20 shadow-2xl border border-white/10">
            <button 
              className="w-full text-left px-4 py-3.5 flex items-center space-x-3 hover:bg-white/10 border-b border-white/10 transition"
              onClick={() => { setActiveModal('info'); setShowMenu(false); }}
            >
              <div className="bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">i</div>
              <span className="text-sm">Hasta Bilgileri</span>
            </button>
            <button 
              className="w-full text-left px-4 py-3.5 flex items-center space-x-3 hover:bg-white/10 transition"
              onClick={() => { setActiveModal('anamnesis'); setShowMenu(false); }}
            >
              <div className="bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">i</div>
              <span className="text-sm">Anamnez</span>
            </button>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="p-5 flex-1 overflow-y-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-sm text-gray-800">Resim Ekle</span>
            <div className="flex space-x-2 items-center">
              <input type="text" placeholder="Kısa Açıklama" className="border border-gray-200 bg-gray-50 rounded-lg px-2 py-1.5 text-xs w-24 outline-none focus:border-blue-400" />
              
              <div className="relative">
                <button 
                  className="text-blue-500 font-medium text-xs px-2 py-1.5 hover:bg-blue-50 rounded transition"
                  onClick={() => setShowUploadMenu(!showUploadMenu)}
                >
                  Choose Files
                </button>
                
                {/* Upload Menu */}
                {showUploadMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white shadow-xl rounded-xl border border-gray-100 w-44 z-10 overflow-hidden">
                    <button 
                      className="w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 border-b border-gray-50 transition"
                      onClick={() => setShowUploadMenu(false)}
                    >
                      <span className="text-gray-700">Fotoğraf Arşivi</span>
                      <Folder size={16} className="text-gray-400" />
                    </button>
                    <button 
                      className="w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 border-b border-gray-50 transition"
                      onClick={() => setShowUploadMenu(false)}
                    >
                      <span className="text-gray-700">Fotoğraf Çek</span>
                      <Camera size={16} className="text-gray-400" />
                    </button>
                    <button 
                      className="w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition"
                      onClick={() => setShowUploadMenu(false)}
                    >
                      <span className="text-gray-700">Dosya Seç</span>
                      <FileText size={16} className="text-gray-400" />
                    </button>
                  </div>
                )}
              </div>
              
              <button className="bg-blue-50 text-blue-600 font-medium rounded-lg px-3 py-1.5 text-xs hover:bg-blue-100 transition">Yükle</button>
              <button className="bg-blue-50 text-blue-600 font-medium rounded-lg px-3 py-1.5 text-xs hover:bg-blue-100 transition">Kamera</button>
            </div>
          </div>
        </div>

        <div className="space-y-5 mt-8">
          <div className="flex items-end">
            <label className="w-24 text-sm text-gray-500 mb-1">Hasta No</label>
            <input type="text" value={patient.no} readOnly className="flex-1 border-b border-gray-200 outline-none pb-1 text-gray-900 bg-transparent" />
          </div>
          <div className="flex items-end">
            <label className="w-24 text-sm text-gray-500 mb-1">Adı</label>
            <input type="text" value={patient.name} readOnly className="flex-1 border-b border-gray-200 outline-none pb-1 text-gray-900 bg-transparent" />
          </div>
          <div className="flex items-end">
            <label className="w-24 text-sm text-gray-500 mb-1">Soyadı</label>
            <input type="text" value={patient.surname} readOnly className="flex-1 border-b border-gray-200 outline-none pb-1 text-gray-900 bg-transparent" />
          </div>
        </div>

        <button 
          onClick={onEvaluate}
          className="w-full bg-[#E30A17] text-white rounded-xl py-4 mt-12 font-medium hover:bg-red-700 transition shadow-md shadow-red-500/20"
        >
          Değerlendirmeye Geç
        </button>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="bg-white/95 backdrop-blur-md rounded-3xl w-full max-w-[320px] overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center">
              {activeModal === 'info' && (
                <>
                  <h3 className="font-semibold text-lg mb-5 text-gray-900">Hasta Bilgileri</h3>
                  <div className="space-y-3 text-sm text-left mx-auto w-full px-2">
                    <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Hasta No:</span> <span className="font-medium text-gray-900">{patient.no}</span></div>
                    <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Cinsiyet:</span> <span className="font-medium text-gray-900">{patient.gender}</span></div>
                    <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Doğum Tarihi:</span> <span className="font-medium text-gray-900">{patient.birthDate}</span></div>
                    <div className="flex justify-between pb-1"><span className="text-gray-500">Bölge/Köy:</span> <span className="font-medium text-gray-900">{patient.region}</span></div>
                  </div>
                </>
              )}
              {activeModal === 'anamnesis' && (
                <>
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Anamnez</h3>
                  <div className="max-h-60 overflow-y-auto px-2">
                    <p className="text-sm text-gray-700 text-left leading-relaxed">
                      {patient.anamnesis}
                    </p>
                  </div>
                </>
              )}
              <button 
                className="mt-8 border border-blue-500 text-blue-500 bg-blue-50/50 rounded-full px-10 py-2 text-sm font-medium hover:bg-blue-100 transition"
                onClick={() => setActiveModal(null)}
              >
                Tamam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
