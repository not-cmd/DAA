
// src/components/simulation/table-visualizer.tsx
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import type { SimulationStep } from '@/types'; // Assuming DPTableCell might be part of SimulationStep or a separate type

export interface DPTableCell {
  value: string | number;
  highlight?: boolean;
  type?: 'cost' | 'root' | 'default' | 'lcs_path'; // Added 'lcs_path'
  arrowFrom?: ('top' | 'left' | 'diag')[]; 
}

interface TableVisualizerProps {
  tableData: DPTableCell[][];
  highlightCell?: [number, number];
  title?: string;
  string1?: string; 
  string2?: string; 
  items?: {name?: string; value: number; weight: number}[]; 
  capacity?: number; 
  keys?: number[]; 
  lcsPathCells?: {row: number, col: number}[]; // For highlighting LCS reconstruction
  finalLcsString?: string; // To display the final LCS string
}

export function TableVisualizer({
  tableData,
  highlightCell,
  title,
  string1,
  string2,
  items,
  capacity,
  keys,
  lcsPathCells,
  finalLcsString
}: TableVisualizerProps) {
  if (!tableData || tableData.length === 0) {
    return <div className="p-4 text-muted-foreground">Table data is empty or not available.</div>;
  }

  const numRows = tableData.length;
  const numCols = tableData[0]?.length || 0;

  const getColHeader = (colIndex: number): string | number => {
    if (string2) return colIndex === 0 ? '' : string2[colIndex - 1] || `S2[${colIndex-1}]`;
    if (capacity !== undefined) return colIndex; 
    if (keys) return colIndex === 0 ? '' : keys[colIndex - 1] || `K${colIndex}`; 
    return colIndex;
  };

  const getRowHeader = (rowIndex: number): string | number => {
    if (string1) return rowIndex === 0 ? '' : string1[rowIndex - 1] || `S1[${rowIndex-1}]`;
    if (items) return rowIndex === 0 ? '' : items[rowIndex - 1]?.name || `Item ${rowIndex}`; 
    if (keys) return rowIndex === 0 ? '' : keys[rowIndex - 1] || `K${rowIndex}`; 
    return rowIndex;
  };


  return (
    <div className="overflow-x-auto p-2">
      <Table className="min-w-full border-collapse border border-border shadow-md rounded-lg">
        {title && <TableCaption className="text-lg font-semibold mb-2 py-2">{title}</TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead className="border border-border p-2 bg-muted w-16 sticky left-0 z-10">
              { (string1 && string2) || (items && capacity !== undefined) || (keys) ? (keys ? 'i\\j' : (items ? 'Item\\Cap' : 'S1\\S2')) : ''}
            </TableHead>
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <TableHead key={`col-h-${colIndex}`} className="border border-border p-2 font-semibold bg-muted text-center">
                {getColHeader(colIndex)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              <TableHead className="border border-border p-2 font-semibold bg-muted text-center w-16 sticky left-0 z-10">
                {getRowHeader(rowIndex)}
              </TableHead>
              {row.map((cell, colIndex) => {
                const cellContent = typeof cell === 'object' && cell !== null ? cell.value : cell;
                const isBaseHighlighted = (highlightCell && highlightCell[0] === rowIndex && highlightCell[1] === colIndex) || (typeof cell === 'object' && cell?.highlight);
                const cellType = (typeof cell === 'object' && cell !== null) ? cell.type : 'default';
                
                const isLcsPathCell = lcsPathCells?.some(p => p.row === rowIndex && p.col === colIndex);

                let cellBgColor = 'bg-background';
                if (isLcsPathCell) {
                    cellBgColor = 'bg-orange-300 dark:bg-orange-700';
                } else if (isBaseHighlighted) {
                    cellBgColor = cellType === 'cost' ? 'bg-blue-200 dark:bg-blue-700' : 
                                  cellType === 'root' ? 'bg-green-200 dark:bg-green-700' : 
                                  'bg-accent/30';
                }

                return (
                  <TableCell
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={cn(
                      "border border-border p-2 text-center min-w-[40px] h-12 transition-colors duration-300 relative",
                      cellBgColor,
                      (isBaseHighlighted || isLcsPathCell) && "font-bold ring-2 ring-ring"
                    )}
                  >
                    {cellContent === Infinity ? '∞' : (cellContent ?? '')}
                    {/* Conceptual arrows for LCS - actual drawing is complex */}
                    {typeof cell === 'object' && cell?.arrowFrom?.includes('diag') && <span className="absolute top-0 left-0 text-xs transform -translate-x-1/2 -translate-y-1/2">↖</span>}
                    {typeof cell === 'object' && cell?.arrowFrom?.includes('left') && <span className="absolute left-0 top-1/2 text-xs transform -translate-x-full -translate-y-1/2">←</span>}
                    {typeof cell === 'object' && cell?.arrowFrom?.includes('top') && <span className="absolute top-0 left-1/2 text-xs transform -translate-x-1/2 -translate-y-full">↑</span>}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {finalLcsString && (
        <div className="mt-4 p-2 text-center">
          <p className="font-semibold">Longest Common Subsequence: <span className="text-accent font-bold text-lg">{finalLcsString}</span> (Length: {finalLcsString.length})</p>
        </div>
      )}
    </div>
  );
}

    