// src/components/simulation/simulation-area.tsx
"use client";

import React from 'react';
import type { SimulationData, SimulationStep } from '@/types';
import { ArrayVisualizer } from './array-visualizer';
import { TableVisualizer } //, DPTableCell
from './table-visualizer';
import { GraphVisualizer } from './graph-visualizer';
import { BoardVisualizer } from './board-visualizer';
import { StringVisualizer } from './string-visualizer';
import { Card, CardContent } from '@/components/ui/card';

interface SimulationAreaProps {
  simulationData: SimulationData;
  currentStep: number;
}

export function SimulationArea({ simulationData, currentStep }: SimulationAreaProps) {
  const stepData = simulationData.steps[currentStep] as SimulationStep | undefined;

  if (!stepData) {
    return <div className="p-4 text-center text-muted-foreground">No simulation data for this step.</div>;
  }

  const renderVisualizer = () => {
    switch (simulationData.type) {
      case 'MergeSort':
      case 'QuickSort':
        return <ArrayVisualizer 
                  stepData={stepData} 
                  initialArray={simulationData.initial_array || []} 
                  currentFullArray={stepData.array || simulationData.initial_array || []}
                />;
      case 'ZeroOneKnapsack':
      case 'LCS':
      case 'OptimalBST': // OptimalBST also uses a table-like structure for costs/roots
        const dpTable = simulationData.initial_dp_table || stepData.cost_matrix || stepData.root_matrix; // Fallback for OptimalBST
        const numRows = simulationData.type === 'OptimalBST' ? (simulationData.keys?.length || 0) +1 : simulationData.dp_table_dimensions?.rows || dpTable?.length || 0;
        const numCols = simulationData.type === 'OptimalBST' ? (simulationData.keys?.length || 0) +1 : simulationData.dp_table_dimensions?.cols || dpTable?.[0]?.length || 0;
        
        // Construct table data for TableVisualizer
        let tableCells: any[][] = Array(numRows).fill(null).map(() => Array(numCols).fill({ value: '' }));

        if (simulationData.type === 'ZeroOneKnapsack' || simulationData.type === 'LCS') {
           // Use dp_row from current step if available for ZeroOneKnapsack or reconstruct for LCS
           if(stepData.dp_row && stepData.cell_coords?.[0] !== undefined){
             tableCells[stepData.cell_coords[0]] = stepData.dp_row.map(v => ({value: v}));
           } else if(stepData.cell_coords && stepData.value !== undefined) {
             // Fallback if dp_row is not available for current step, update only current cell
             // This logic might need to be smarter to persist previous cells
             if (tableCells[stepData.cell_coords[0]]) {
                tableCells[stepData.cell_coords[0]][stepData.cell_coords[1]] = { value: stepData.value, highlight: true };
             }
           }
        } else if (simulationData.type === 'OptimalBST') {
            if(stepData.cost_matrix_cell) {
                if(!tableCells[stepData.cost_matrix_cell.i]) tableCells[stepData.cost_matrix_cell.i] = [];
                tableCells[stepData.cost_matrix_cell.i][stepData.cost_matrix_cell.j] = { value: stepData.cost_matrix_cell.value, highlight: true, type: 'cost' };
            }
            if(stepData.root_matrix_cell) {
                if(!tableCells[stepData.root_matrix_cell.i]) tableCells[stepData.root_matrix_cell.i] = [];
                // Assuming root_matrix is displayed separately or merged, for simplicity display in same table
                tableCells[stepData.root_matrix_cell.i][stepData.root_matrix_cell.j] = { value: `R:${stepData.root_matrix_cell.value}`, highlight: true, type: 'root' };
            }
        }
        
        return <TableVisualizer 
                 // @ts-ignore
                 tableData={tableCells} 
                 highlightCell={stepData.cell_coords} 
                 title={simulationData.type === 'OptimalBST' ? `Cost/Root Table (Step: ${stepData.stage || ''})` : `${simulationData.type} Table`}
                 string1={simulationData.string1}
                 string2={simulationData.string2}
                 items={simulationData.items}
                 capacity={simulationData.capacity}
                 keys={simulationData.keys} // For OptimalBST headers
                />;
      case 'Dijkstra':
        return <GraphVisualizer 
                  graphData={simulationData.graph || {}} 
                  nodes={simulationData.nodes || []}
                  stepData={stepData} 
                  startNode={simulationData.start_node}
                />;
      case 'NQueens':
        return <BoardVisualizer 
                  boardSize={simulationData.board_size || 0} 
                  stepData={stepData} 
                />;
      case 'KMP':
      case 'RabinKarp':
        return <StringVisualizer 
                  text={simulationData.text || ""} 
                  pattern={simulationData.pattern || ""} 
                  lpsArray={simulationData.lps_array}
                  stepData={stepData}
                  type={simulationData.type}
                />;
      case 'FractionalKnapsack':
      case 'SubsetSum':
         // These might need custom visualizers or can be represented textually for now
         return (
            <div className="p-4 border rounded-md shadow bg-muted">
              <h4 className="font-semibold mb-2">{simulationData.type} State:</h4>
              {simulationData.type === 'FractionalKnapsack' && stepData.item && (
                <div>
                  <p>Considering: {stepData.item.name} (V:{stepData.item.value}, W:{stepData.item.weight}, R:{stepData.item.ratio?.toFixed(2)})</p>
                  <p>Fraction taken: {stepData.fraction?.toFixed(2)}</p>
                  <p>Current Weight in Knapsack: {stepData.current_weight}/{simulationData.capacity}</p>
                  <p>Current Value in Knapsack: {stepData.current_value?.toFixed(2)}</p>
                </div>
              )}
              {simulationData.type === 'SubsetSum' && (
                <div>
                  <p>Target Sum: {simulationData.target_sum}</p>
                  <p>Set: [{simulationData.set?.join(', ')}]</p>
                  <p>Current Subset: [{stepData.current_subset?.join(', ')}] (Sum: {stepData.current_sum})</p>
                  {stepData.item_considered !== undefined && <p>Considering item: {stepData.item_considered} (Included: {stepData.included ? 'Yes' : 'No'})</p>}
                </div>
              )}
            </div>
          );
      default:
        return <div className="p-4 text-center text-muted-foreground">Visualizer for {simulationData.type} not implemented yet. Raw step data: <pre className="text-xs text-left">{JSON.stringify(stepData, null, 2)}</pre></div>;
    }
  };

  return (
    <Card className="min-h-[300px] flex items-center justify-center bg-background shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-2 md:p-4 w-full h-full">
        {renderVisualizer()}
      </CardContent>
    </Card>
  );
}
