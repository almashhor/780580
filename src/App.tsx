import { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import Evaluation from './components/Evaluation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = (screen: string, patient: any = null) => {
    setCurrentScreen(screen);
    if (patient) setSelectedPatient(patient);
    setIsSidebarOpen(false);
  };

  if (currentScreen === 'login') {
    return <Login onLogin={() => navigate('patientList')} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-md h-full bg-white shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="absolute inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`absolute inset-y-0 left-0 w-64 bg-red-600 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <Sidebar onNavigate={navigate} currentScreen={currentScreen} />
        </div>

        {/* Header */}
        <header className="bg-red-600 text-white p-4 flex items-center shadow-md z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="mr-4 p-1 rounded hover:bg-red-700 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h1 className="text-lg font-semibold">
            {currentScreen === 'patientList' && 'Hasta Listesi'}
            {currentScreen === 'patientDetail' && 'Hasta Detayı'}
            {currentScreen === 'evaluation' && 'Değerlendirme'}
          </h1>
        </header>

        {/* Screen Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 relative">
          {currentScreen === 'patientList' && <PatientList onSelectPatient={(p: any) => navigate('patientDetail', p)} />}
          {currentScreen === 'patientDetail' && <PatientDetail patient={selectedPatient} onEvaluate={() => navigate('evaluation', selectedPatient)} />}
          {currentScreen === 'evaluation' && <Evaluation patient={selectedPatient} onBack={() => navigate('patientDetail', selectedPatient)} />}
        </main>
      </div>
    </div>
  );
}
