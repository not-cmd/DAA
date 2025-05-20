
// src/components/simulation/graph-visualizer.tsx
"use client";

import React, { useMemo, useState, useEffect } from 'react';
import type { SimulationStep } from '@/types';
import { cn } from '@/lib/utils';

interface GraphVisualizerProps {
  graphData: Record<string, [string, number][]>; // Adjacency list: node -> [[neighbor, weight], ...]
  nodes: string[]; // List of all node IDs
  stepData: SimulationStep;
  startNode?: string;
  highlightedMstEdges?: { from: string; to: string; weight: number }[]; // For Prim/Kruskal MST
}

interface NodePosition {
  id: string;
  x: number;
  y: number;
}

export function GraphVisualizer({ graphData, nodes: nodeIds, stepData, startNode, highlightedMstEdges }: GraphVisualizerProps) {
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    const newPositions: Record<string, { x: number; y: number }> = {};
    const numNodes = nodeIds.length;
    if (numNodes === 0) return;

    const baseRadius = 100;
    const radiusIncrement = 15;
    const radius = Math.min(200, baseRadius + numNodes * radiusIncrement); 
    const centerX = 250;
    const centerY = 150;

    nodeIds.forEach((nodeId, index) => {
      if (numNodes === 1) {
        newPositions[nodeId] = { x: centerX, y: centerY };
      } else {
        const angle = (index / numNodes) * 2 * Math.PI;
        newPositions[nodeId] = {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        };
      }
    });
    setNodePositions(newPositions);
  }, [nodeIds]);

  const edges = useMemo(() => {
    const allEdges: { from: string; to: string; weight: number; id: string }[] = [];
    const addedEdges = new Set<string>(); // To avoid duplicate edges in undirected graphs

    Object.entries(graphData).forEach(([fromNode, neighbors]) => {
      neighbors.forEach(([toNode, weight]) => {
        const edgeId1 = `${fromNode}-${toNode}`;
        const edgeId2 = `${toNode}-${fromNode}`;
        if (!addedEdges.has(edgeId1) && !addedEdges.has(edgeId2)) {
          allEdges.push({ from: fromNode, to: toNode, weight, id: edgeId1 });
          addedEdges.add(edgeId1);
          addedEdges.add(edgeId2);
        }
      });
    });
    return allEdges;
  }, [graphData]);

  const { current_node, distances, visited_nodes, edge_considered, mst_edges: stepMstEdges } = stepData;
  const finalMstEdgesToHighlight = highlightedMstEdges || stepMstEdges;


  return (
    <div className="relative w-full h-[350px] border rounded-md bg-muted/30 overflow-hidden p-2">
      <svg width="100%" height="100%" viewBox="0 0 500 300">
        {/* Edges */}
        {edges.map((edge) => {
          const posFrom = nodePositions[edge.from];
          const posTo = nodePositions[edge.to];
          if (!posFrom || !posTo) return null;

          const isConsideredEdge = edge_considered && 
            ((edge_considered[0] === edge.from && edge_considered[1] === edge.to) || 
             (edge_considered[0] === edge.to && edge_considered[1] === edge.from));
          
          const isMstEdge = finalMstEdgesToHighlight?.some(mstEdge => 
            (mstEdge.from === edge.from && mstEdge.to === edge.to) ||
            (mstEdge.from === edge.to && mstEdge.to === edge.from)
          );

          let strokeColor = "hsl(var(--border))";
          let strokeWidth = 1.5;

          if (isMstEdge) {
            strokeColor = "hsl(var(--accent))"; // Use accent for final MST edges
            strokeWidth = 3;
          } else if (isConsideredEdge) {
            strokeColor = "hsl(var(--primary))"; // Use primary for considered edges during algorithm run
            strokeWidth = 2.5;
          }
          
          return (
            <g key={`edge-${edge.id}`}>
              <line
                x1={posFrom.x}
                y1={posFrom.y}
                x2={posTo.x}
                y2={posTo.y}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                className="transition-all duration-300"
              />
              <text
                x={(posFrom.x + posTo.x) / 2 + (posFrom.y === posTo.y ? 0 : 5)} 
                y={(posFrom.y + posTo.y) / 2 + (posFrom.x === posTo.x ? 0 : -5)}
                fontSize="10"
                fill="hsl(var(--foreground))"
                textAnchor="middle"
              >
                {edge.weight}
              </text>
            </g>
          );
        })}

        {/* Nodes */}
        {nodeIds.map((nodeId) => {
          const pos = nodePositions[nodeId];
          if (!pos) return null;

          const isCurrent = current_node === nodeId;
          const isVisited = visited_nodes?.includes(nodeId);
          const isStart = startNode === nodeId;
          
          let fillColor = "hsl(var(--card))"; // Default node fill
          let strokeColorNode = "hsl(var(--primary))"; // Default node stroke

          if (isStart) {
            fillColor = "hsl(var(--primary)/30)"; 
            strokeColorNode = "hsl(var(--primary))";
          }
          if (isVisited) {
            fillColor = "hsl(var(--primary)/60)";
          }
          if (isCurrent) {
            fillColor = "hsl(var(--primary))";
            strokeColorNode = "hsl(var(--primary-foreground))";
          }
          

          return (
            <g key={`node-group-${nodeId}`} transform={`translate(${pos.x}, ${pos.y})`}>
              <circle
                cx="0"
                cy="0"
                r="15"
                fill={fillColor}
                stroke={strokeColorNode}
                strokeWidth="2"
                className="transition-all duration-300"
              />
              <text
                x="0"
                y="4" 
                textAnchor="middle"
                fill={isCurrent ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))"}
                fontSize="12"
                fontWeight="bold"
              >
                {nodeId}
              </text>
              {distances && distances[nodeId] !== undefined && distances[nodeId] !== null && (
                 <text
                    x="0"
                    y="28" 
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="10"
                 >
                   {distances[nodeId] === Infinity ? '∞' : String(distances[nodeId])}
                 </text>
              )}
            </g>
          );
        })}
      </svg>
       {(stepData.action || (finalMstEdgesToHighlight && stepData.total_mst_cost !== undefined)) && (
         <div className="absolute bottom-1 left-2 text-xs text-muted-foreground p-1 bg-background/70 rounded space-y-0.5">
           {stepData.action && <p>{stepData.action}</p>}
           {finalMstEdgesToHighlight && stepData.total_mst_cost !== undefined && (
            <p className="font-semibold">Final MST Cost: {stepData.total_mst_cost}</p>
           )}
         </div>
       )}
    </div>
  );
}

    