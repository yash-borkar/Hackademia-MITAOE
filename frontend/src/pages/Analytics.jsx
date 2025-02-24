import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  CheckCircle, 
  AlertCircle, 
  History, 
  BarChart, 
  RefreshCw, 
  Info,
  TrendingUp,
  Users,
  DollarSign,
  Package,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// ... (previous imports and initial code remains the same until the result section)

const PredictionForm = () => {
  // ... (previous state and handlers remain the same)
  

  const getImpactLevel = (value, fieldName) => {
    // Define thresholds for different fields
    const thresholds = {
      total_orders: { high: 20, medium: 10 },
      total_spent: { high: 1000, medium: 500 },
      printer_purchases_last_6m: { high: 2, medium: 1 },
      return_rate: { high: 0.3, medium: 0.1 },
      average_order_value: { high: 100, medium: 50 },
      product_diversity: { high: 8, medium: 4 }
    };

    if (!thresholds[fieldName]) return 'neutral';
    
    if (value >= thresholds[fieldName].high) return 'high';
    if (value >= thresholds[fieldName].medium) return 'medium';
    return 'low';
  };

  const getImpactColor = (impact) => {
    const colors = {
      high: 'text-green-600',
      medium: 'text-yellow-600',
      low: 'text-red-600',
      neutral: 'text-gray-600'
    };
    return colors[impact] || colors.neutral;
  };

  // ... (previous code remains the same until the result section)

  {result && (
    <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 border border-indigo-100">
      <h2 className="text-2xl font-semibold text-indigo-900 flex items-center gap-2 mb-6">
        <CheckCircle className="h-6 w-6 text-green-500" />
        Prediction Results
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-50">
          <div className="text-sm text-gray-500 mb-1">Prediction</div>
          <div className="text-2xl font-bold text-indigo-600">
            {result.prediction === 1 ? 'Likely to Purchase' : 'Unlikely to Purchase'}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-50">
          <div className="text-sm text-gray-500 mb-1">Confidence</div>
          <div className="text-2xl font-bold text-indigo-600">
            {(result.probability * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Input Parameters Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(formData).map(([key, value]) => {
            if (key === 'region' || key === 'high_value_customer') return null;
            
            const impact = getImpactLevel(value, key);
            const impactColor = getImpactColor(impact);
            
            return (
              <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </div>
                  <div className="text-lg font-semibold">
                    {key.includes('rate') ? `${(value * 100).toFixed(1)}%` : value}
                  </div>
                </div>
                <div className={`flex items-center gap-2 ${impactColor}`}>
                  {impact === 'high' && <ArrowUp className="h-5 w-5" />}
                  {impact === 'low' && <ArrowDown className="h-5 w-5" />}
                  <span className="text-sm font-medium">
                    {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
                  </span>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm font-medium text-gray-700">Region</div>
              <div className="text-lg font-semibold">{getRegionLabel(formData.region)}</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm font-medium text-gray-700">High Value Customer</div>
              <div className="text-lg font-semibold">{formData.high_value_customer === '1' ? 'Yes' : 'No'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  // ... (rest of the component remains the same)

};

export default PredictionForm;