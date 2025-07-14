import React from 'react';
import { 
  TrendingUp, 
  Droplets, 
  Thermometer, 
  Wind, 
  AlertTriangle,
  CheckCircle,
  Activity,
  Leaf
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Crop Yield', value: '85%', change: '+12%', icon: TrendingUp, color: 'text-emerald-600' },
    { label: 'Soil Moisture', value: '68%', change: '+5%', icon: Droplets, color: 'text-blue-600' },
    { label: 'Temperature', value: '24°C', change: 'Normal', icon: Thermometer, color: 'text-orange-600' },
    { label: 'Wind Speed', value: '8 km/h', change: 'Light', icon: Wind, color: 'text-gray-600' },
  ];

  const alerts = [
    { type: 'warning', message: 'Irrigation needed in Field A', time: '2 hours ago' },
    { type: 'success', message: 'Pest control completed in Field B', time: '4 hours ago' },
    { type: 'info', message: 'Weather forecast updated', time: '6 hours ago' },
  ];

  const crops = [
    { name: 'Tomatoes', health: 92, status: 'Excellent', area: '2.5 acres' },
    { name: 'Wheat', health: 78, status: 'Good', area: '5.2 acres' },
    { name: 'Corn', health: 85, status: 'Good', area: '3.8 acres' },
    { name: 'Soybeans', health: 95, status: 'Excellent', area: '4.1 acres' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farm Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening on your farm today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Last Updated</p>
            <p className="text-sm font-medium text-gray-900">Just now</p>
          </div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-emerald-600 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crop Health */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Crop Health Overview</h2>
            <Leaf className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="space-y-4">
            {crops.map((crop, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{crop.name}</span>
                    <span className="text-sm text-gray-600">{crop.area}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${crop.health > 90 ? 'bg-emerald-500' : crop.health > 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${crop.health}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{crop.health}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
            <Activity className="w-6 h-6 text-gray-600" />
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />}
                {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />}
                {alert.type === 'info' && <Activity className="w-5 h-5 text-blue-500 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors text-left">
            <Leaf className="w-6 h-6 text-emerald-600 mb-2" />
            <h3 className="font-medium text-gray-900">Scan Plant Disease</h3>
            <p className="text-sm text-gray-600">Upload image for AI analysis</p>
          </button>
          <button className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors text-left">
            <Droplets className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">Check Soil Quality</h3>
            <p className="text-sm text-gray-600">Analyze soil conditions</p>
          </button>
          <button className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors text-left">
            <TrendingUp className="w-6 h-6 text-orange-600 mb-2" />
            <h3 className="font-medium text-gray-900">View Analytics</h3>
            <p className="text-sm text-gray-600">Detailed farm insights</p>
          </button>
        </div>
      </div>
    </div>
  );
}