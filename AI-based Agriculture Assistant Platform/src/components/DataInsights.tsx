import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Download, 
  Filter,
  Leaf,
  Droplets,
  DollarSign,
  Target
} from 'lucide-react';

export function DataInsights() {
  const [selectedMetric, setSelectedMetric] = useState('yield');
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const metrics = [
    { id: 'yield', label: 'Crop Yield', icon: Leaf },
    { id: 'water', label: 'Water Usage', icon: Droplets },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'efficiency', label: 'Efficiency', icon: Target },
  ];

  const periods = [
    { id: '1month', label: '1 Month' },
    { id: '3months', label: '3 Months' },
    { id: '6months', label: '6 Months' },
    { id: '1year', label: '1 Year' }
  ];

  const insights = {
    yield: {
      current: '87%',
      change: '+12%',
      trend: 'up',
      description: 'Overall crop yield efficiency compared to regional average',
      recommendations: [
        'Tomato fields showing exceptional growth (+18%)',
        'Consider expanding tomato cultivation area',
        'Wheat yield stable, monitor for pest activity',
        'Implement precision irrigation in Field C'
      ]
    },
    water: {
      current: '342L/m²',
      change: '-8%',
      trend: 'down',
      description: 'Water consumption per square meter (reduction is good)',
      recommendations: [
        'Drip irrigation system showing 15% water savings',
        'Soil moisture sensors preventing overwatering',
        'Consider expanding smart irrigation to all fields',
        'Rain water harvesting could reduce costs by 25%'
      ]
    },
    revenue: {
      current: '$24,850',
      change: '+23%',
      trend: 'up',
      description: 'Monthly revenue from crop sales',
      recommendations: [
        'Premium tomato varieties generating 40% higher prices',
        'Direct-to-consumer sales increasing profitability',
        'Consider organic certification for 20% price premium',
        'Explore agritourism opportunities'
      ]
    },
    efficiency: {
      current: '94%',
      change: '+7%',
      trend: 'up',
      description: 'Overall farm operational efficiency score',
      recommendations: [
        'Equipment utilization improved by 15%',
        'Labor efficiency up 12% with task automation',
        'Energy costs reduced by 8% with solar integration',
        'Waste reduction program saving $1,200/month'
      ]
    }
  };

  const currentInsight = insights[selectedMetric as keyof typeof insights];

  const farmStats = [
    { label: 'Total Fields', value: '8', icon: Target },
    { label: 'Active Crops', value: '12', icon: Leaf },
    { label: 'Harvest Ready', value: '3', icon: Calendar },
    { label: 'Efficiency Score', value: '94%', icon: TrendingUp },
  ];

  const recentActivities = [
    { action: 'Field A harvested', crop: 'Tomatoes', yield: '2.8 tons', date: '2 days ago' },
    { action: 'Irrigation scheduled', crop: 'Wheat', yield: 'Field B', date: '3 days ago' },
    { action: 'Pest treatment applied', crop: 'Corn', yield: 'Field C', date: '5 days ago' },
    { action: 'Soil analysis completed', crop: 'All fields', yield: 'pH optimized', date: '1 week ago' },
  ];

  const performanceData = [
    { month: 'Jan', yield: 78, water: 380, revenue: 18500 },
    { month: 'Feb', yield: 82, water: 365, revenue: 19200 },
    { month: 'Mar', yield: 85, water: 355, revenue: 21800 },
    { month: 'Apr', yield: 89, water: 342, revenue: 23400 },
    { month: 'May', yield: 87, water: 338, revenue: 24850 },
    { month: 'Jun', yield: 91, water: 325, revenue: 26200 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farm Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive data insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <div className="flex items-center space-x-2 text-emerald-600">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-medium">Real-time Analytics</span>
          </div>
        </div>
      </div>

      {/* Farm Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {farmStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Metric Selection */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Performance Metrics</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {periods.map((period) => (
                <option key={period.id} value={period.id}>{period.label}</option>
              ))}
            </select>
            <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  selectedMetric === metric.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${selectedMetric === metric.id ? 'text-emerald-600' : 'text-gray-600'}`} />
                <p className="font-medium text-gray-900">{metric.label}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Metric Details */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {metrics.find(m => m.id === selectedMetric)?.label}
              </h3>
              <p className="text-sm text-gray-600">{currentInsight.description}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">{currentInsight.current}</p>
              <p className={`text-sm font-medium ${currentInsight.trend === 'up' ? 'text-emerald-600' : 'text-blue-600'}`}>
                {currentInsight.change} from last period
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Key Insights</h4>
              <ul className="space-y-2">
                {currentInsight.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-sm text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-48 bg-white rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Chart visualization</p>
                <p className="text-sm text-gray-500">{selectedMetric} trends over {selectedPeriod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Farm Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.crop} • {activity.yield}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Summary</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-600">Best Performing</p>
                <p className="text-lg font-bold text-emerald-600">Tomatoes</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-600">Target Achievement</p>
                <p className="text-lg font-bold text-blue-600">94%</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Monthly Progress</h3>
              <div className="space-y-3">
                {performanceData.slice(-3).map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{data.month}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full" 
                          style={{ width: `${data.yield}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{data.yield}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>

      {/* Predictive Insights */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Predictive Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Yield Forecast</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">+15%</p>
            <p className="text-sm text-blue-700">Expected increase in next quarter based on current trends</p>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">Market Opportunity</h3>
            <p className="text-2xl font-bold text-yellow-600 mb-2">High</p>
            <p className="text-sm text-yellow-700">Organic tomato demand projected to rise 25%</p>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h3 className="font-medium text-emerald-800 mb-2">Efficiency Gain</h3>
            <p className="text-2xl font-bold text-emerald-600 mb-2">12%</p>
            <p className="text-sm text-emerald-700">Potential savings with recommended optimizations</p>
          </div>
        </div>
      </div>
    </div>
  );
}