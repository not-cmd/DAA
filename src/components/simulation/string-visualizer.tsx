// src/components/simulation/string-visualizer.tsx
"use client";

import React from 'react';
import type { SimulationStep, SimulationData } from '@/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface StringVisualizerProps {
  text: string;
  pattern: string;
  lpsArray?: number[]; // For KMP
  stepData: SimulationStep;
  type: 'KMP' | 'RabinKarp';
}

export function StringVisualizer({ text, pattern, lpsArray, stepData, type }: StringVisualizerProps) {
  const {
    text_pointer, // current char in text being compared
    pattern_pointer, // current char in pattern being compared
    comparison_result,
    pattern_shift, // how much pattern shifts for next step
    match_found_at_index,
    current_text_window, // for Rabin-Karp, the current window in text
    text_hash,
    pattern_hash,
    spurious_hit
  } = stepData;

  const textChars = text.split('');
  const patternChars = pattern.split('');

  // For KMP, pattern_pointer determines alignment.
  // For Rabin-Karp, text_pointer can be the start of the window.
  const patternStartIndexInText = type === 'KMP' ? (text_pointer ?? 0) - (pattern_pointer ?? 0) : (text_pointer ?? 0);

  return (
    <div className="p-4 space-y-4 font-mono text-sm md:text-base">
      {stepData.action && <p className="text-xs text-muted-foreground mb-2 text-center font-sans">{stepData.action}</p>}
      
      <div>
        <h3 className="font-semibold mb-1 text-muted-foreground">Text:</h3>
        <div className="flex space-x-1 p-2 bg-muted rounded overflow-x-auto whitespace-nowrap">
          {textChars.map((char, index) => (
            <span
              key={`text-${index}`}
              className={cn(
                "inline-block p-1 rounded min-w-[20px] text-center border border-transparent",
                index >= patternStartIndexInText && index < patternStartIndexInText + pattern.length && "bg-primary/10", // Highlight window under pattern
                index === text_pointer && "ring-2 ring-accent scale-110 z-10 bg-accent/30", // Current text char
                comparison_result === 'match' && index === text_pointer && "bg-green-500/30 text-green-700 dark:text-green-300",
                comparison_result === 'mismatch' && index === text_pointer && "bg-destructive/30 text-destructive-foreground"
              )}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-1 text-muted-foreground">Pattern:</h3>
        <div className="flex space-x-1 p-2 bg-muted rounded overflow-x-auto whitespace-nowrap" style={{ paddingLeft: `${patternStartIndexInText * 28}px` }}> {/* Approximate alignment */}
          {patternChars.map((char, index) => (
            <span
              key={`pattern-${index}`}
              className={cn(
                "inline-block p-1 rounded min-w-[20px] text-center border border-transparent",
                index === pattern_pointer && "ring-2 ring-accent scale-110 z-10 bg-accent/30", // Current pattern char
                comparison_result === 'match' && index === pattern_pointer && "bg-green-500/30 text-green-700 dark:text-green-300",
                comparison_result === 'mismatch' && index === pattern_pointer && "bg-destructive/30 text-destructive-foreground"
              )}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {type === 'KMP' && lpsArray && (
        <div>
          <h3 className="font-semibold mb-1 text-muted-foreground">LPS Array (for Pattern):</h3>
          <div className="flex space-x-1 p-2 bg-muted rounded">
            {lpsArray.map((val, index) => (
              <div key={`lps-${index}`} className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground">{patternChars[index]}</span>
                <span className="inline-block p-1 rounded min-w-[20px] text-center border bg-secondary">
                  {val}
                </span>
              </div>
            ))}
          </div>
          {pattern_pointer !== undefined && lpsArray[pattern_pointer-1] !== undefined && comparison_result === 'mismatch' && (
            <p className="text-xs mt-1">Mismatch. Next j = LPS[{pattern_pointer-1}] = {lpsArray[pattern_pointer-1]}</p>
          )}
        </div>
      )}

      {type === 'RabinKarp' && (
        <div className="mt-2 space-y-1 text-xs">
          {current_text_window && <p>Current Text Window: <Badge variant="secondary">{current_text_window}</Badge></p>}
          {text_hash !== undefined && <p>Text Window Hash: <Badge variant={pattern_hash === text_hash ? "default" : "outline"}>{text_hash}</Badge></p>}
          {pattern_hash !== undefined && <p>Pattern Hash: <Badge variant="default">{pattern_hash}</Badge></p>}
          {spurious_hit === true && <p className="text-orange-600 dark:text-orange-400 font-semibold">Spurious Hit! Hashes match, characters do not.</p>}
          {spurious_hit === false && pattern_hash === text_hash && comparison_result !== 'mismatch' && <p className="text-green-600 dark:text-green-400 font-semibold">Hashes match. Verifying characters...</p>}

        </div>
      )}

      {comparison_result && <p className="mt-2 text-center font-semibold">Comparison: <Badge variant={comparison_result === 'match' ? 'default' : 'destructive'}>{comparison_result}</Badge></p>}
      {pattern_shift !== undefined && <p className="mt-1 text-center text-sm">Pattern shifts by: {pattern_shift}</p>}
      {match_found_at_index !== undefined && (
        <p className="mt-2 text-center font-bold text-green-600 dark:text-green-400 text-lg">
          Pattern found at index {match_found_at_index}!
        </p>
      )}
    </div>
  );
}
