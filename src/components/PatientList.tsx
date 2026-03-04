import React, { useState, useEffect } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const mockPatients = [
  { id: 1, no: '75', name: 'Ayşe', surname: 'Yılmaz', gender: 'Kadın', birthDate: '2016/6yaş', region: 'Merkez/SİVAS', anamnesis: 'Hastanın herhangi bir sistemik rahatsızlığı bulunmamaktadır. Devamlı kullandığı ilaç yoktur. Bilinen alerji hikayesi yoktur. Sol üst arkadaki dişinin geç sürmesi sebebiyle kliniğimize başvurmuştur. Hasta daha öncesinde diş tedavisi ilgili herhangi bir kliniğe başvurmamıştır.' },
  { id: 2, no: '76', name: 'Mehmet', surname: 'Kaya', gender: 'Erkek', birthDate: '2015/7yaş', region: 'Merkez/SİVAS', anamnesis: 'Astım hastası. Düzenli inhaler kullanıyor.' },
  { id: 3, no: '77', name: 'Zeynep', surname: 'Demir', gender: 'Kadın', birthDate: '2014/8yaş', region: 'Kangal/SİVAS', anamnesis: 'Bilinen bir rahatsızlığı yok. Diş ağrısı şikayeti ile geldi.' },
  { id: 4, no: '78', name: 'Ali', surname: 'Çelik', gender: 'Erkek', birthDate: '2012/10yaş', region: 'Divriği/SİVAS', anamnesis: 'Penisilin alerjisi mevcut.' },
];

export default function PatientList({ onSelectPatient }: { onSelectPatient: (p: any) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 600);
  }, []);

  const filtered = mockPatients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.no.includes(searchTerm)
  );

  return (
    <div className="p-4 h-full flex flex-col bg-white">
      <div className="relative mb-4">
        <input 
          type="text" 
          placeholder="Hasta Ara (İsim veya No)" 
          className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 outline-none text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
      </div>

      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-[#E30A17] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex-1 flex justify-center items-center text-gray-500 text-sm">
          Sonuç bulunamadı.
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-3 pb-4">
          {filtered.map(patient => (
            <div 
              key={patient.id} 
              onClick={() => onSelectPatient(patient)}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:border-red-200 hover:shadow-md transition-all shadow-sm"
            >
              <div>
                <div className="font-medium text-gray-900">{patient.name} {patient.surname}</div>
                <div className="text-xs text-gray-500 mt-1">Hasta No: {patient.no}</div>
              </div>
              <div className="bg-gray-50 p-2 rounded-full">
                <ChevronRight className="text-gray-400" size={18} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
