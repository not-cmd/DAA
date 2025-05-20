// src/components/simulation/table-visualizer.tsx
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

export interface DPTableCell {
  value: string | number;
  highlight?: boolean;
  type?: 'cost' | 'root' | 'default'; // For OptimalBST or other complex tables
  arrowFrom?: ('top' | 'left' | 'diag')[]; // For LCS path reconstruction
}

interface TableVisualizerProps {
  tableData: DPTableCell[][];
  highlightCell?: [number, number];
  title?: string;
  string1?: string; // For LCS row headers
  string2?: string; // For LCS col headers
  items?: {name?: string; value: number; weight: number}[]; // For Knapsack row headers
  capacity?: number; // For Knapsack col headers
  keys?: number[]; // For OptimalBST headers
}

export function TableVisualizer({
  tableData,
  highlightCell,
  title,
  string1,
  string2,
  items,
  capacity,
  keys
}: TableVisualizerProps) {
  if (!tableData || tableData.length === 0) {
    return <div className="p-4 text-muted-foreground">Table data is empty or not available.</div>;
  }

  const numRows = tableData.length;
  const numCols = tableData[0]?.length || 0;

  const getColHeader = (colIndex: number): string | number => {
    if (string2) return colIndex === 0 ? '' : string2[colIndex - 1] || `S2[${colIndex-1}]`;
    if (capacity !== undefined) return colIndex; // Weight for Knapsack
    if (keys) return colIndex === 0 ? '' : keys[colIndex - 1] || `K${colIndex}`; // Keys for OptimalBST
    return colIndex;
  };

  const getRowHeader = (rowIndex: number): string | number => {
    if (string1) return rowIndex === 0 ? '' : string1[rowIndex - 1] || `S1[${rowIndex-1}]`;
    if (items) return rowIndex === 0 ? '' : items[rowIndex - 1]?.name || `Item ${rowIndex}`; // Items for Knapsack
    if (keys) return rowIndex === 0 ? '' : keys[rowIndex - 1] || `K${rowIndex}`; // Keys for OptimalBST
    return rowIndex;
  };


  return (
    <div className="overflow-x-auto p-2">
      {title && <TableCaption className="text-lg font-semibold mb-2">{title}</TableCaption>}
      <Table className="min-w-full border-collapse border border-border shadow-md rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="border border-border p-2 bg-muted w-16">
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
              <TableHead className="border border-border p-2 font-semibold bg-muted text-center w-16">
                {getRowHeader(rowIndex)}
              </TableHead>
              {row.map((cell, colIndex) => {
                const cellContent = typeof cell === 'object' && cell !== null ? cell.value : cell;
                const isHighlighted = (highlightCell && highlightCell[0] === rowIndex && highlightCell[1] === colIndex) || (typeof cell === 'object' && cell?.highlight);
                const cellType = (typeof cell === 'object' && cell !== null) ? cell.type : 'default';
                
                let cellBgColor = 'bg-background';
                if (isHighlighted) {
                    cellBgColor = cellType === 'cost' ? 'bg-blue-200 dark:bg-blue-700' : 
                                  cellType === 'root' ? 'bg-green-200 dark:bg-green-700' : 
                                  'bg-accent/30';
                }

                return (
                  <TableCell
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={cn(
                      "border border-border p-2 text-center min-w-[40px] h-12 transition-colors duration-300",
                      cellBgColor,
                      isHighlighted && "font-bold ring-2 ring-accent"
                    )}
                  >
                    {cellContent === Infinity ? '∞' : (cellContent ?? '')}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
