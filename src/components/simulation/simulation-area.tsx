
// src/components/simulation/simulation-area.tsx
"use client";

import React from 'react';
import type { SimulationData, SimulationStep } from '@/types';
import { ArrayVisualizer } from './array-visualizer';
import { TableVisualizer } 
from './table-visualizer';
import { GraphVisualizer } from './graph-visualizer';
import { BoardVisualizer } from './board-visualizer';
import { StringVisualizer } from './string-visualizer';
import { ControlStructuresVisualizer } from './control-structures-visualizer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
      case 'MaxMin': 
        return <ArrayVisualizer 
                  stepData={stepData} 
                  initialArray={simulationData.initial_array || []} 
                  currentFullArray={stepData.array || simulationData.initial_array || []}
                />;
      case 'ControlStructures': 
        return <ControlStructuresVisualizer
                  stepData={stepData}
                  initialArray={simulationData.initial_array || []}
                  initialVariables={simulationData.initial_variables || {}}
                />;
      case 'ZeroOneKnapsack':
      case 'LCS':
      case 'OptimalBST': 
        const dpTable = simulationData.initial_dp_table || stepData.dp_table || stepData.cost_matrix || stepData.root_matrix; 
        const numRows = simulationData.type === 'OptimalBST' ? (simulationData.keys?.length || 0) +1 : simulationData.dp_table_dimensions?.rows || dpTable?.length || 0;
        const numCols = simulationData.type === 'OptimalBST' ? (simulationData.keys?.length || 0) +1 : simulationData.dp_table_dimensions?.cols || dpTable?.[0]?.length || 0;
        
        let tableCells: any[][] = dpTable || Array(numRows).fill(null).map(() => Array(numCols).fill({ value: '' }));

        if (simulationData.type === 'ZeroOneKnapsack' || (simulationData.type === 'LCS' && !stepData.dp_table)) {
           if(stepData.dp_row && stepData.cell_coords?.[0] !== undefined && tableCells[stepData.cell_coords[0]]){
             // This logic seems flawed for full table update, dp_table should be preferred if available
             // tableCells[stepData.cell_coords[0]] = stepData.dp_row.map(v => ({value: v}));
           } else if(stepData.cell_coords && stepData.value !== undefined) {
             if (tableCells[stepData.cell_coords[0]] && tableCells[stepData.cell_coords[0]][stepData.cell_coords[1]]) {
                tableCells[stepData.cell_coords[0]][stepData.cell_coords[1]] = { value: stepData.value, highlight: true };
             }
           }
        } else if (simulationData.type === 'OptimalBST' && !stepData.dp_table) {
            if(stepData.cost_matrix_cell) {
                if(!tableCells[stepData.cost_matrix_cell.i]) tableCells[stepData.cost_matrix_cell.i] = [];
                tableCells[stepData.cost_matrix_cell.i][stepData.cost_matrix_cell.j] = { value: stepData.cost_matrix_cell.value, highlight: true, type: 'cost' };
            }
            if(stepData.root_matrix_cell) {
                if(!tableCells[stepData.root_matrix_cell.i]) tableCells[stepData.root_matrix_cell.i] = [];
                tableCells[stepData.root_matrix_cell.i][stepData.root_matrix_cell.j] = { value: `R:${stepData.root_matrix_cell.value}`, highlight: true, type: 'root' };
            }
        }
        
        return <TableVisualizer 
                 tableData={tableCells} 
                 highlightCell={stepData.cell_coords} 
                 title={simulationData.type === 'OptimalBST' ? `Cost/Root Table (Stage: ${stepData.stage || ''})` : `${simulationData.type} Table`}
                 string1={simulationData.string1}
                 string2={simulationData.string2}
                 items={simulationData.items}
                 capacity={simulationData.capacity}
                 keys={simulationData.keys}
                 lcsPathCells={simulationData.type === 'LCS' ? stepData.lcs_reconstruction_path : undefined}
                 finalLcsString={simulationData.type === 'LCS' ? stepData.final_lcs_string : undefined}
                />;
      case 'Dijkstra':
      case 'Kruskal': 
      case 'Prim': 
      case 'BellmanFord': // Uses GraphVisualizer
      case 'TSP': // Basic graph display for now
      case 'FloydWarshall': // Basic graph display for now
      case 'HamiltonianCycle': // Basic graph display
      case 'GraphColoring': // Basic graph display
        return <GraphVisualizer 
                  graphData={simulationData.graph || {}} 
                  nodes={simulationData.nodes || []}
                  stepData={stepData} 
                  startNode={simulationData.start_node}
                  highlightedMstEdges={(simulationData.type === 'Kruskal' || simulationData.type === 'Prim') ? stepData.mst_edges : undefined}
                />;
      case 'NQueens':
        return <BoardVisualizer 
                  boardSize={simulationData.board_size || 0} 
                  stepData={stepData} 
                />;
      case 'KMP':
      case 'RabinKarp':
      case 'NaiveStringMatching':
      case 'FiniteAutomataStringMatching':
        return <StringVisualizer 
                  text={simulationData.text || ""} 
                  pattern={simulationData.pattern || ""} 
                  lpsArray={simulationData.lps_array}
                  stepData={stepData}
                  type={simulationData.type as 'KMP' | 'RabinKarp' | 'NaiveStringMatching' | 'FiniteAutomataStringMatching'}
                />;
      case 'FractionalKnapsack':
      case 'ActivitySelection': 
      case 'JobSequencing': 
      case 'SubsetSum':
      case 'Fibonacci':
      case 'CoinChangeGreedy':
      case 'HuffmanCoding':
      case 'MatrixChainMultiplication':
      // Branch and Bound types - for now, textual display from action/description
      case 'FifteenPuzzle':
      case 'ZeroOneKnapsackBB':
      case 'TSPBB':
      case 'JobSequencingBB':
         return (
            <Card className="m-4 p-4 shadow-md bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">{simulationData.type} Simulation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                {stepData.action && <p><strong>Action:</strong> {stepData.action}</p>}
                {stepData.description && <p className="text-muted-foreground"><em>{stepData.description}</em></p>}
                
                {/* Specific textual details for simple greedy/DP/BB algos */}
                {simulationData.type === 'Fibonacci' && (
                  <>
                    {stepData.fib_n !== undefined && <p>Calculating F({stepData.fib_n})</p>}
                    {stepData.dp_table_fib && <p>DP Table: [{stepData.dp_table_fib.join(', ')}]</p>}
                    {stepData.fib_val !== undefined && <p className="font-semibold">Result: F({stepData.fib_n}) = {stepData.fib_val}</p>}
                  </>
                )}
                {simulationData.type === 'CoinChangeGreedy' && (
                    <>
                        {stepData.item && <p>Considering coin: {stepData.item.value}</p>}
                        {stepData.remaining_amount !== undefined && <p>Remaining amount: {stepData.remaining_amount}</p>}
                        {stepData.coins_used && <p>Coins used so far: [{stepData.coins_used.join(', ')}]</p>}
                        {stepData.total_coins !== undefined && stepData.remaining_amount === 0 && <p className="font-semibold">Total coins: {stepData.total_coins}</p>}
                    </>
                )}
                 {simulationData.type === 'HuffmanCoding' && (
                    <>
                        {stepData.huffman_tree_description && <p>Tree Construction: {stepData.huffman_tree_description}</p>}
                        {stepData.huffman_codes && <div className="mt-2">Final Codes: <pre className="bg-background p-2 rounded text-xs">{JSON.stringify(stepData.huffman_codes, null, 2)}</pre></div>}
                    </>
                )}
                {simulationData.type === 'MatrixChainMultiplication' && (
                     <>
                        {stepData.min_multiplications !== undefined && <p className="font-semibold">Minimum Multiplications: {stepData.min_multiplications}</p>}
                        {stepData.optimal_parenthesization && <p>Optimal Parenthesization: {stepData.optimal_parenthesization}</p>}
                    </>
                )}
                {/* Basic BB output */}
                { (simulationData.type === 'ZeroOneKnapsackBB' || simulationData.type === 'TSPBB' || simulationData.type === 'JobSequencingBB') && (
                    <>
                        {stepData.bb_node_id && <p>Node: {stepData.bb_node_id}</p>}
                        {stepData.bb_decision && <p>Decision: {stepData.bb_decision}</p>}
                        {stepData.bb_profit !== undefined && <p>Current Profit: {stepData.bb_profit}</p>}
                        {stepData.bb_weight !== undefined && <p>Current Weight: {stepData.bb_weight}</p>}
                        {stepData.bb_upper_bound !== undefined && <p>Upper Bound: {stepData.bb_upper_bound?.toFixed(2)}</p>}
                        {stepData.bb_pruned && <p className="text-destructive">Branch Pruned.</p>}
                        {stepData.bb_solution_items && <p>Solution Items: {JSON.stringify(stepData.bb_solution_items)}</p>}
                        {stepData.bb_max_profit && <p>Max Profit: {stepData.bb_max_profit}</p>}
                        {stepData.tsp_tour_bb && <p>TSP Tour: {stepData.tsp_tour_bb.join(' -> ')}</p>}
                        {stepData.tsp_tour_cost_bb !== undefined && <p>TSP Tour Cost: {stepData.tsp_tour_cost_bb}</p>}
                         {stepData.bb_scheduled_jobs && <p>Scheduled Jobs: {JSON.stringify(stepData.bb_scheduled_jobs)}</p>}
                    </>
                )}
                {simulationData.type === 'FifteenPuzzle' && (
                     <>
                        {stepData.puzzle_board_state && <div>Current Board: <pre className="bg-background p-1 rounded text-xs">{stepData.puzzle_board_state.map(r => r.join(' ')).join('\n')}</pre></div>}
                        {stepData.puzzle_cost !== undefined && <p>Cost (g): {stepData.puzzle_cost}</p>}
                        {stepData.puzzle_heuristic !== undefined && <p>Heuristic (h): {stepData.puzzle_heuristic}</p>}
                        {stepData.solution_path && <p className="font-semibold">Solution Path: {stepData.solution_path.join(', ')}</p>}
                    </>
                )}
              </CardContent>
            </Card>
          );
      default:
        return (
            <Card className="m-4 p-4 shadow-md bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">{simulationData.type} Simulation</CardTitle>
                 <CardDescription>Visualizer for this algorithm is not yet implemented. Showing raw step data.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                 {stepData.action && <p><strong>Action:</strong> {stepData.action}</p>}
                 {stepData.description && <p className="text-muted-foreground"><em>{stepData.description}</em></p>}
                 <details className="mt-2 text-xs">
                    <summary className="cursor-pointer">Raw Step Data (Debug)</summary>
                    <pre className="p-2 bg-background rounded-md overflow-x-auto mt-1">{JSON.stringify(stepData, null, 2)}</pre>
                 </details>
              </CardContent>
            </Card>
        );
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

    