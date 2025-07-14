import React, { useState } from 'react';
import { Upload, Camera, AlertTriangle, CheckCircle, Leaf, Eye } from 'lucide-react';

export function PlantDisease() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        disease: 'Tomato Late Blight',
        confidence: 94,
        severity: 'Moderate',
        description: 'Late blight is a destructive disease that affects tomato plants, causing brown spots on leaves and stems.',
        treatment: [
          'Remove affected leaves immediately',
          'Apply copper-based fungicide',
          'Improve air circulation around plants',
          'Avoid overhead watering'
        ],
        prevention: [
          'Plant resistant varieties',
          'Ensure proper spacing between plants',
          'Apply preventive fungicide treatments',
          'Monitor humidity levels'
        ]
      });
      setAnalyzing(false);
    }, 3000);
  };

  const recentScans = [
    { image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', disease: 'Healthy', confidence: 98 },
    { image: 'https://images.pexels.com/photos/1459340/pexels-photo-1459340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', disease: 'Leaf Spot', confidence: 87 },
    { image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop', disease: 'Powdery Mildew', confidence: 92 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Plant Disease Detection</h1>
          <p className="text-gray-600 mt-1">Upload plant images for AI-powered disease analysis</p>
        </div>
        <div className="flex items-center space-x-2 text-emerald-600">
          <Eye className="w-5 h-5" />
          <span className="text-sm font-medium">AI Vision Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Plant Image</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors">
            {selectedImage ? (
              <div className="space-y-4">
                <img 
                  src={selectedImage} 
                  alt="Selected plant" 
                  className="mx-auto max-h-64 rounded-lg shadow-md"
                />
                <div className="flex justify-center space-x-4">
                  <label className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
                    <Camera className="w-4 h-4 inline mr-2" />
                    Replace Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  <button 
                    onClick={analyzeImage}
                    disabled={analyzing}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {analyzing ? (
                      <>
                        <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Leaf className="w-4 h-4 inline mr-2" />
                        Analyze Disease
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">Upload Plant Image</p>
                <p className="text-gray-600 mb-4">Drag and drop or click to select an image</p>
                <label className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 cursor-pointer transition-colors">
                  <Camera className="w-4 h-4 mr-2" />
                  Select Image
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Analysis Results</h2>
          
          {!results && !analyzing && (
            <div className="text-center py-12">
              <Leaf className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600">Upload an image to see AI analysis results</p>
            </div>
          )}

          {analyzing && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mb-4"></div>
              <p className="text-lg font-medium text-gray-900">Analyzing plant health...</p>
              <p className="text-gray-600">This may take a few moments</p>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-red-800">{results.disease}</h3>
                  <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
                    {results.confidence}% confidence
                  </span>
                </div>
                <p className="text-red-700 text-sm">{results.description}</p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-red-800">Severity: </span>
                  <span className="text-sm text-red-700">{results.severity}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" />
                  Immediate Treatment
                </h4>
                <ul className="space-y-2">
                  {results.treatment.map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-emerald-100 text-emerald-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Prevention Tips
                </h4>
                <ul className="space-y-2">
                  {results.prevention.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Scans */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Scans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentScans.map((scan, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <img src={scan.image} alt="Plant scan" className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{scan.disease}</p>
                <p className="text-sm text-gray-600">{scan.confidence}% confidence</p>
              </div>
              {scan.disease === 'Healthy' ? (
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}