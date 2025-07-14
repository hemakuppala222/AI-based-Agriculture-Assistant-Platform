import React, { useState } from 'react';
import { MapPin, Beaker, TrendingUp, Droplets, Zap, Mountain } from 'lucide-react';

export function SoilAnalysis() {
  const [selectedField, setSelectedField] = useState('field-a');

  const fields = [
    { id: 'field-a', name: 'Field A - North', area: '2.5 acres', crop: 'Tomatoes' },
    { id: 'field-b', name: 'Field B - South', area: '3.2 acres', crop: 'Wheat' },
    { id: 'field-c', name: 'Field C - East', area: '1.8 acres', crop: 'Corn' },
  ];

  const soilData = {
    'field-a': {
      ph: 6.8,
      nitrogen: 45,
      phosphorus: 38,
      potassium: 52,
      organicMatter: 3.2,
      moisture: 68,
      temperature: 22,
      conductivity: 1.2,
      recommendations: [
        'pH level is optimal for tomato cultivation',
        'Nitrogen levels are adequate - continue current fertilization',
        'Consider phosphorus supplementation',
        'Potassium levels are excellent',
        'Organic matter content is good'
      ],
      actions: [
        'Apply phosphorus-rich fertilizer in 2 weeks',
        'Monitor nitrogen levels weekly',
        'Maintain current irrigation schedule'
      ]
    }
  };

  const currentData = soilData[selectedField as keyof typeof soilData] || soilData['field-a'];

  const getSoilQualityColor = (value: number, min: number, max: number) => {
    if (value < min) return 'text-red-600 bg-red-50';
    if (value > max) return 'text-yellow-600 bg-yellow-50';
    return 'text-emerald-600 bg-emerald-50';
  };

  const getSoilQualityStatus = (value: number, min: number, max: number) => {
    if (value < min) return 'Low';
    if (value > max) return 'High';
    return 'Optimal';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Soil Analysis</h1>
          <p className="text-gray-600 mt-1">Monitor soil health and get personalized recommendations</p>
        </div>
        <div className="flex items-center space-x-2 text-amber-600">
          <Beaker className="w-5 h-5" />
          <span className="text-sm font-medium">Lab Analysis Active</span>
        </div>
      </div>

      {/* Field Selection */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Field</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fields.map((field) => (
            <button
              key={field.id}
              onClick={() => setSelectedField(field.id)}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedField === field.id
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{field.name}</h3>
                <MapPin className={`w-4 h-4 ${selectedField === field.id ? 'text-emerald-600' : 'text-gray-400'}`} />
              </div>
              <p className="text-sm text-gray-600">{field.area} • {field.crop}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Soil Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Soil Metrics</h2>
          
          <div className="space-y-6">
            {/* pH Level */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Beaker className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">pH Level</p>
                  <p className="text-sm text-gray-600">Soil acidity/alkalinity</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{currentData.ph}</p>
                <p className={`text-sm px-2 py-1 rounded ${getSoilQualityColor(currentData.ph, 6.0, 7.5)}`}>
                  {getSoilQualityStatus(currentData.ph, 6.0, 7.5)}
                </p>
              </div>
            </div>

            {/* NPK Levels */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Nitrogen</p>
                <p className="text-xl font-bold text-gray-900">{currentData.nitrogen}%</p>
                <p className={`text-xs px-2 py-1 rounded mt-1 ${getSoilQualityColor(currentData.nitrogen, 40, 60)}`}>
                  {getSoilQualityStatus(currentData.nitrogen, 40, 60)}
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <Mountain className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Phosphorus</p>
                <p className="text-xl font-bold text-gray-900">{currentData.phosphorus}%</p>
                <p className={`text-xs px-2 py-1 rounded mt-1 ${getSoilQualityColor(currentData.phosphorus, 45, 65)}`}>
                  {getSoilQualityStatus(currentData.phosphorus, 45, 65)}
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <TrendingUp className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Potassium</p>
                <p className="text-xl font-bold text-gray-900">{currentData.potassium}%</p>
                <p className={`text-xs px-2 py-1 rounded mt-1 ${getSoilQualityColor(currentData.potassium, 40, 60)}`}>
                  {getSoilQualityStatus(currentData.potassium, 40, 60)}
                </p>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Moisture</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{currentData.moisture}%</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-4 h-4 bg-orange-600 rounded-full"></span>
                  <span className="text-sm font-medium text-gray-700">Organic Matter</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{currentData.organicMatter}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Recommendations</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Soil Health Assessment</h3>
              <div className="space-y-2">
                {currentData.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-sm text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Recommended Actions</h3>
              <div className="space-y-3">
                {currentData.actions.map((action, index) => (
                  <div key={index} className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-emerald-800">{action}</p>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                        Priority: {index === 0 ? 'High' : 'Medium'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
              Generate Fertilization Plan
            </button>
          </div>
        </div>
      </div>

      {/* Historical Data */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Historical Trends</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Soil analysis trends visualization</p>
            <p className="text-sm text-gray-500">Chart showing pH, NPK levels over time</p>
          </div>
        </div>
      </div>
    </div>
  );
}