// src/components/simulation/array-visualizer.tsx
"use client";

import React from 'react';
import type { SimulationStep } from '@/types';
import { cn } from '@/lib/utils';

interface ArrayVisualizerProps {
  stepData: SimulationStep;
  initialArray: (number | string)[]; // The very first array state
  currentFullArray: (number | string)[]; // The current overall array state (e.g. after merging sub-arrays)
}

export function ArrayVisualizer({ stepData, initialArray, currentFullArray }: ArrayVisualizerProps) {
  const displayArray = stepData.array || currentFullArray || initialArray;
  const highlights = stepData.highlight || [];
  const mergedResult = stepData.merged;

  // Determine max value for scaling, fallback for non-numeric arrays
  const numericArray = displayArray.filter(v => typeof v === 'number') as number[];
  const maxValue = numericArray.length > 0 ? Math.max(...numericArray, 1) : 100;


  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 min-h-[200px] w-full">
      {stepData.action && <p className="text-sm text-muted-foreground mb-2 text-center">{stepData.action}</p>}
      
      <div className="flex items-end justify-center space-x-1 h-48 w-full max-w-full overflow-x-auto p-2 bg-muted rounded">
        {displayArray.map((value, index) => {
          const height = typeof value === 'number' ? `${(value / maxValue) * 90 + 10}%` : '50%'; // Min 10% height
          const isHighlighted = highlights.includes(index);
          const isPivot = stepData.pivot_index === index;
          
          let barColor = 'bg-primary/60'; // Default bar color
          if (isPivot) barColor = 'bg-accent'; // Pivot color
          else if (isHighlighted) barColor = 'bg-primary'; // Highlighted color
          
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-end min-w-[20px] md:min-w-[30px] text-center rounded-t transition-all duration-300 ease-in-out shadow-sm",
                barColor
              )}
              style={{ height }}
              title={`Value: ${value}${isPivot ? ' (Pivot)' : ''}`}
            >
              <span className="text-xs text-primary-foreground font-medium mt-auto pb-0.5 break-all">{value}</span>
            </div>
          );
        })}
      </div>

      {mergedResult && (
        <div className="mt-4 p-2 border-t w-full">
          <p className="text-sm font-semibold text-center mb-2">Merged Result:</p>
          <div className="flex items-end justify-center space-x-1 h-32 bg-green-100 dark:bg-green-900/30 p-2 rounded">
            {mergedResult.map((value, index) => {
               const height = typeof value === 'number' ? `${(value / maxValue) * 90 + 10}%` : '50%';
              return (
                <div
                  key={`merged-${index}`}
                  className="flex flex-col items-center justify-end min-w-[20px] md:min-w-[30px] text-center bg-green-500 dark:bg-green-400 text-white rounded-t transition-all duration-300 ease-in-out shadow-sm"
                  style={{ height }}
                  title={`Value: ${value}`}
                >
                  <span className="text-xs font-medium mt-auto pb-0.5 break-all">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {stepData.less && stepData.greater && stepData.equal && (
        <div className="mt-4 p-2 border-t w-full text-center">
          <p className="text-sm font-semibold mb-1">Partitioning (Pivot: {stepData.pivot_value})</p>
          <div className="flex justify-around">
            <div>Less: [{stepData.less.join(', ')}]</div>
            <div>Equal: [{stepData.equal.join(', ')}]</div>
            <div>Greater: [{stepData.greater.join(', ')}]</div>
          </div>
        </div>
      )}
    </div>
  );
}
