// src/components/simulation/board-visualizer.tsx
"use client";

import React from 'react';
import type { SimulationStep } from '@/types';
import { cn } from '@/lib/utils';

interface BoardVisualizerProps {
  boardSize: number;
  stepData: SimulationStep;
}

export function BoardVisualizer({ boardSize, stepData }: BoardVisualizerProps) {
  const board = stepData.board_state || Array(boardSize).fill(null).map(() => Array(boardSize).fill(0));
  const placements = stepData.queen_placements || [];

  // Reconstruct board from placements if board_state is not directly provided for current step
  let displayBoard = board;
  if (placements.length > 0 && !stepData.board_state) {
    const newBoard = Array(boardSize).fill(null).map(() => Array(boardSize).fill(0));
    placements.forEach(p => {
      if (p.valid && newBoard[p.row]) { // Check if p.row is valid index
         newBoard[p.row][p.col] = 'Q';
      }
    });
    displayBoard = newBoard;
  }
  
  const lastPlacement = placements.length > 0 ? placements[placements.length-1] : null;

  return (
    <div className="flex flex-col items-center p-2">
      {stepData.action && <p className="text-sm text-muted-foreground mb-2 text-center">{stepData.action}</p>}
      <div
        className="grid gap-0.5 border border-border bg-muted shadow-md"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
          width: `${Math.min(boardSize * 50, 300)}px`, // Max width 300px
          height: `${Math.min(boardSize * 50, 300)}px`,
        }}
      >
        {displayBoard.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isLightSquare = (rowIndex + colIndex) % 2 === 0;
            const isQueen = cell === 'Q' || cell === 1;
            const isCurrentTry = lastPlacement && lastPlacement.row === rowIndex && lastPlacement.col === colIndex;
            
            let cellBg = isLightSquare ? 'bg-background' : 'bg-muted-foreground/20';
            if (isCurrentTry && !lastPlacement.valid) cellBg = 'bg-destructive/50';
            else if (isCurrentTry && lastPlacement.valid) cellBg = 'bg-green-500/50';


            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={cn(
                  "flex items-center justify-center aspect-square",
                  cellBg,
                  isQueen && "text-2xl md:text-3xl font-bold",
                  isCurrentTry && "ring-2 ring-accent"
                )}
                title={`(${rowIndex}, ${colIndex})`}
              >
                {isQueen ? '♛' : ''}
              </div>
            );
          })
        )}
      </div>
      {stepData.backtrack_from && (
        <p className="text-sm text-destructive mt-2">Backtracking from ({stepData.backtrack_from.row}, {stepData.backtrack_from.col})</p>
      )}
      {stepData.solution_found && (
         <p className="text-sm text-green-600 dark:text-green-400 font-semibold mt-2">Solution Found!</p>
      )}
    </div>
  );
}
