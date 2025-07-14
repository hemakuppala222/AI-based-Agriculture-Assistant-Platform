import React, { useState } from 'react';
import { Sprout, MapPin, Calendar, TrendingUp, Droplets, Sun, AlertCircle } from 'lucide-react';

export function CropRecommendation() {
  const [selectedSeason, setSelectedSeason] = useState('spring');
  
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  
  const recommendations = {
    spring: [
      {
        name: 'Tomatoes',
        suitability: 95,
        yield: '25-30 tons/hectare',
        growthPeriod: '90-120 days',
        waterRequirement: 'Medium',
        profitability: 'High',
        difficulty: 'Medium',
        reasons: [
          'Optimal temperature range (20-25°C)',
          'Good soil moisture conditions',
          'High market demand in spring',
          'Suitable pH levels (6.0-7.0)'
        ],
        requirements: {
          temperature: '20-25°C',
          humidity: '60-70%',
          rainfall: '600-800mm',
          soil: 'Well-drained loamy soil'
        }
      },
      {
        name: 'Lettuce',
        suitability: 88,
        yield: '15-20 tons/hectare',
        growthPeriod: '45-65 days',
        waterRequirement: 'High',
        profitability: 'Medium',
        difficulty: 'Easy',
        reasons: [
          'Cool weather crop ideal for spring',
          'Fast growing cycle',
          'Low pest pressure in spring',
          'Good soil conditions'
        ],
        requirements: {
          temperature: '15-20°C',
          humidity: '70-80%',
          rainfall: '300-500mm',
          soil: 'Rich, well-drained soil'
        }
      },
      {
        name: 'Carrots',
        suitability: 82,
        yield: '20-25 tons/hectare',
        growthPeriod: '70-80 days',
        waterRequirement: 'Medium',
        profitability: 'Medium',
        difficulty: 'Easy',
        reasons: [
          'Cool season root vegetable',
          'Good soil structure for root development',
          'Steady market demand',
          'Tolerates cool temperatures'
        ],
        requirements: {
          temperature: '16-21°C',
          humidity: '65-75%',
          rainfall: '450-650mm',
          soil: 'Deep, loose, well-drained soil'
        }
      }
    ]
  };

  const currentRecommendations = recommendations[selectedSeason as keyof typeof recommendations] || recommendations.spring;

  const getSuitabilityColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-50';
    if (score >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getSuitabilityStatus = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    return 'Fair';
  };

  const farmConditions = {
    location: 'Northern Valley Farm',
    soilType: 'Loamy Clay',
    averageTemp: '22°C',
    annualRainfall: '750mm',
    fieldSize: '12.5 acres',
    irrigation: 'Drip System Available'
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Crop Recommendations</h1>
          <p className="text-gray-600 mt-1">AI-powered crop selection based on your farm conditions</p>
        </div>
        <div className="flex items-center space-x-2 text-emerald-600">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Smart Agriculture AI</span>
        </div>
      </div>

      {/* Farm Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Farm Conditions Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <MapPin className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">{farmConditions.location}</p>
              <p className="text-sm text-gray-600">Farm Location</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Sun className="w-8 h-8 text-orange-600" />
            <div>
              <p className="font-medium text-gray-900">{farmConditions.averageTemp}</p>
              <p className="text-sm text-gray-600">Average Temperature</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Droplets className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">{farmConditions.annualRainfall}</p>
              <p className="text-sm text-gray-600">Annual Rainfall</p>
            </div>
          </div>
        </div>
      </div>

      {/* Season Selection */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Growing Season</h2>
        <div className="flex space-x-4">
          {seasons.map((season) => (
            <button
              key={season}
              onClick={() => setSelectedSeason(season)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors capitalize ${
                selectedSeason === season
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              {season}
            </button>
          ))}
        </div>
      </div>

      {/* Crop Recommendations */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Crops for {selectedSeason}</h2>
        
        {currentRecommendations.map((crop, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{crop.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSuitabilityColor(crop.suitability)}`}>
                      {crop.suitability}% Suitability - {getSuitabilityStatus(crop.suitability)}
                    </span>
                    <span className="text-sm text-gray-600">Difficulty: {crop.difficulty}</span>
                  </div>
                </div>
              </div>
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Expected Yield</p>
                <p className="text-lg font-bold text-gray-900">{crop.yield}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Growth Period</p>
                <p className="text-lg font-bold text-gray-900">{crop.growthPeriod}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Water Requirement</p>
                <p className="text-lg font-bold text-gray-900">{crop.waterRequirement}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Profitability</p>
                <p className="text-lg font-bold text-gray-900">{crop.profitability}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Why This Crop is Recommended
                </h4>
                <ul className="space-y-2">
                  {crop.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-sm text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Growing Requirements</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Temperature</span>
                    <span className="text-sm font-medium text-gray-900">{crop.requirements.temperature}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Humidity</span>
                    <span className="text-sm font-medium text-gray-900">{crop.requirements.humidity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rainfall</span>
                    <span className="text-sm font-medium text-gray-900">{crop.requirements.rainfall}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Soil Type</span>
                    <span className="text-sm font-medium text-gray-900">{crop.requirements.soil}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors mr-4">
                Start Growing Plan
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Save for Later
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Market Insights */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Market Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-900">Tomato Prices</p>
            <p className="text-2xl font-bold text-emerald-600">$2.40/kg</p>
            <p className="text-sm text-emerald-600">+15% from last month</p>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-900">Lettuce Demand</p>
            <p className="text-2xl font-bold text-yellow-600">High</p>
            <p className="text-sm text-yellow-600">Peak season approaching</p>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-900">Export Opportunities</p>
            <p className="text-2xl font-bold text-blue-600">Available</p>
            <p className="text-sm text-blue-600">3 contracts pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}