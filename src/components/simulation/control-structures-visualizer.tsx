
// src/components/simulation/control-structures-visualizer.tsx
"use client";

import React from 'react';
import type { SimulationStep } from '@/types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ControlStructuresVisualizerProps {
  stepData: SimulationStep;
  initialArray?: (number | string)[];
  initialVariables?: Record<string, string | number | boolean | null | undefined>;
}

export function ControlStructuresVisualizer({ stepData, initialArray, initialVariables }: ControlStructuresVisualizerProps) {
  const {
    action,
    description,
    current_array_item,
    output_log,
    variable_states,
  } = stepData;

  const displayArray = initialArray || [];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-2 items-start w-full">
      {/* Data/Array View */}
      {displayArray.length > 0 && (
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle className="text-base">Input Array</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {displayArray.map((value, index) => (
                <div
                  key={`array-${index}`}
                  className={cn(
                    "p-2 border rounded min-w-[30px] text-center text-sm",
                    value === current_array_item ? "bg-accent text-accent-foreground ring-2 ring-ring" : "bg-muted"
                  )}
                  title={`Array[${index}] = ${value}`}
                >
                  {value}
                </div>
              ))}
            </div>
            {current_array_item !== undefined && current_array_item !== null && (
              <p className="text-xs text-center mt-2 text-muted-foreground">
                Current item being processed: <span className="font-semibold text-foreground">{current_array_item}</span>
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Variables and Output Log View */}
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        {variable_states && Object.keys(variable_states).length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Variable States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              {Object.entries(variable_states).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium text-muted-foreground">{key}:</span>
                  <span className="text-foreground">{String(value)}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {output_log && output_log.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Output Log</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[100px] w-full rounded-md border p-2">
                <div className="text-xs space-y-1">
                  {output_log.map((logEntry, index) => (
                    <p key={`log-${index}`}>{logEntry}</p>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
