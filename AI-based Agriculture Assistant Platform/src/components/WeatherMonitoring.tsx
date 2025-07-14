import React, { useState } from 'react';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

export function WeatherMonitoring() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const currentWeather = {
    temperature: 24,
    humidity: 68,
    windSpeed: 8,
    precipitation: 0,
    visibility: 10,
    uvIndex: 6,
    pressure: 1013,
    condition: 'Partly Cloudy'
  };

  const forecast = [
    { day: 'Today', high: 26, low: 18, condition: 'Partly Cloudy', precipitation: 10, icon: Cloud },
    { day: 'Tomorrow', high: 28, low: 20, condition: 'Sunny', precipitation: 0, icon: Sun },
    { day: 'Wednesday', high: 22, low: 16, condition: 'Light Rain', precipitation: 80, icon: CloudRain },
    { day: 'Thursday', high: 25, low: 19, condition: 'Partly Cloudy', precipitation: 20, icon: Cloud },
    { day: 'Friday', high: 27, low: 21, condition: 'Sunny', precipitation: 5, icon: Sun },
  ];

  const alerts = [
    { type: 'warning', message: 'Heavy rain expected Wednesday - consider crop protection', severity: 'High' },
    { type: 'info', message: 'Optimal conditions for planting next week', severity: 'Low' },
    { type: 'caution', message: 'High UV index today - protect exposed crops', severity: 'Medium' },
  ];

  const airQuality = {
    aqi: 42,
    status: 'Good',
    pm25: 12,
    pm10: 28,
    o3: 65,
    no2: 18,
    co: 0.4
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Weather Monitoring</h1>
          <p className="text-gray-600 mt-1">Real-time weather data and agricultural forecasts</p>
        </div>
        <div className="flex items-center space-x-2 text-blue-600">
          <Cloud className="w-5 h-5" />
          <span className="text-sm font-medium">Live Weather Data</span>
        </div>
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Current Weather</h2>
            <p className="text-blue-100">Your Farm Location</p>
          </div>
          <Cloud className="w-12 h-12 text-blue-200" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Thermometer className="w-6 h-6 mx-auto mb-2 text-blue-200" />
            <p className="text-3xl font-bold">{currentWeather.temperature}°C</p>
            <p className="text-sm text-blue-100">Temperature</p>
          </div>
          
          <div className="text-center">
            <Droplets className="w-6 h-6 mx-auto mb-2 text-blue-200" />
            <p className="text-3xl font-bold">{currentWeather.humidity}%</p>
            <p className="text-sm text-blue-100">Humidity</p>
          </div>
          
          <div className="text-center">
            <Wind className="w-6 h-6 mx-auto mb-2 text-blue-200" />
            <p className="text-3xl font-bold">{currentWeather.windSpeed}</p>
            <p className="text-sm text-blue-100">km/h Wind</p>
          </div>
          
          <div className="text-center">
            <Eye className="w-6 h-6 mx-auto mb-2 text-blue-200" />
            <p className="text-3xl font-bold">{currentWeather.visibility}</p>
            <p className="text-sm text-blue-100">km Visibility</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 5-Day Forecast */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">5-Day Forecast</h2>
          <div className="space-y-4">
            {forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Icon className="w-6 h-6 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{day.day}</p>
                      <p className="text-sm text-gray-600">{day.condition}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{day.high}° / {day.low}°</p>
                      <p className="text-sm text-blue-600">{day.precipitation}% rain</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weather Alerts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Weather Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                alert.severity === 'High' ? 'bg-red-50 border-red-200' :
                alert.severity === 'Medium' ? 'bg-yellow-50 border-yellow-200' :
                'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                    alert.severity === 'High' ? 'text-red-500' :
                    alert.severity === 'Medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{alert.message}</p>
                    <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                      alert.severity === 'High' ? 'bg-red-100 text-red-700' :
                      alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {alert.severity} Priority
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Air Quality */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Air Quality Index</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-600">{airQuality.aqi}</span>
              </div>
              <p className="font-semibold text-gray-900">AQI Score</p>
              <p className="text-sm text-emerald-600">{airQuality.status}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-4">
                Air quality is good for outdoor farming activities. No special precautions needed.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">PM2.5</span>
                  <span className="font-medium">{airQuality.pm25} μg/m³</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">PM10</span>
                  <span className="font-medium">{airQuality.pm10} μg/m³</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ozone</span>
                  <span className="font-medium">{airQuality.o3} μg/m³</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Recommendations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></span>
                Excellent conditions for outdoor work
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></span>
                Safe for crop spraying activities
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></span>
                Good visibility for equipment operation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Historical Weather Patterns */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Weather Patterns</h2>
          <div className="flex space-x-2">
            {['today', '7days', '30days'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === period
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {period === 'today' ? 'Today' : period === '7days' ? '7 Days' : '30 Days'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Weather trend visualization</p>
            <p className="text-sm text-gray-500">Temperature, humidity, and precipitation patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}