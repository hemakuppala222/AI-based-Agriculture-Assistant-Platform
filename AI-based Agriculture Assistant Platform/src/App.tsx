import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { PlantDisease } from './components/PlantDisease';
import { SoilAnalysis } from './components/SoilAnalysis';
import { WeatherMonitoring } from './components/WeatherMonitoring';
import { CropRecommendation } from './components/CropRecommendation';
import { DataInsights } from './components/DataInsights';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'plant-disease':
        return <PlantDisease />;
      case 'soil-analysis':
        return <SoilAnalysis />;
      case 'weather':
        return <WeatherMonitoring />;
      case 'crop-recommendation':
        return <CropRecommendation />;
      case 'data-insights':
        return <DataInsights />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;