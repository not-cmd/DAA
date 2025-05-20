// src/components/simulation/graph-visualizer.tsx
"use client";

import React, { useMemo, useState, useEffect } from 'react';
import type { SimulationStep } from '@/types';
import { cn } from '@/lib/utils';

interface GraphVisualizerProps {
  graphData: Record<string, [string, number][]>;
  nodes: string[];
  stepData: SimulationStep;
  startNode?: string;
}

interface NodePosition {
  id: string;
  x: number;
  y: number;
}

export function GraphVisualizer({ graphData, nodes: nodeIds, stepData, startNode }: GraphVisualizerProps) {
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    // Simple circular layout for nodes
    const newPositions: Record<string, { x: number; y: number }> = {};
    const numNodes = nodeIds.length;
    const radius = Math.min(200, numNodes * 30); // Adjust radius based on number of nodes
    const centerX = 250;
    const centerY = 150;

    nodeIds.forEach((nodeId, index) => {
      const angle = (index / numNodes) * 2 * Math.PI;
      newPositions[nodeId] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
    setNodePositions(newPositions);
  }, [nodeIds]);

  const edges = useMemo(() => {
    const allEdges: { from: string; to: string; weight: number }[] = [];
    Object.entries(graphData).forEach(([fromNode, neighbors]) => {
      neighbors.forEach(([toNode, weight]) => {
        // Avoid duplicate edges for undirected graphs if represented symmetrically
        if (!allEdges.some(e => (e.from === toNode && e.to === fromNode))) {
          allEdges.push({ from: fromNode, to: toNode, weight });
        }
      });
    });
    return allEdges;
  }, [graphData]);

  const { current_node, distances, visited_nodes, edge_considered } = stepData;

  return (
    <div className="relative w-full h-[350px] border rounded-md bg-muted/30 overflow-hidden p-2">
      <svg width="100%" height="100%" viewBox="0 0 500 300">
        {/* Edges */}
        {edges.map((edge, index) => {
          const posFrom = nodePositions[edge.from];
          const posTo = nodePositions[edge.to];
          if (!posFrom || !posTo) return null;

          const isConsideredEdge = edge_considered && 
            ((edge_considered[0] === edge.from && edge_considered[1] === edge.to) || 
             (edge_considered[0] === edge.to && edge_considered[1] === edge.from));

          return (
            <g key={`edge-${index}`}>
              <line
                x1={posFrom.x}
                y1={posFrom.y}
                x2={posTo.x}
                y2={posTo.y}
                stroke={isConsideredEdge ? "hsl(var(--accent))" : "hsl(var(--border))"}
                strokeWidth={isConsideredEdge ? 3 : 1.5}
                className="transition-all duration-300"
              />
              <text
                x={(posFrom.x + posTo.x) / 2 + (posFrom.y === posTo.y ? 0 : 5)} // Offset for clarity
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
          
          let fillColor = "hsl(var(--secondary))";
          if (isStart) fillColor = "hsl(var(--blue-500))"; // Special color for start node
          if (isVisited) fillColor = "hsl(var(--primary)/50)";
          if (isCurrent) fillColor = "hsl(var(--primary))";


          return (
            <g key={`node-group-${nodeId}`} transform={`translate(${pos.x}, ${pos.y})`}>
              <circle
                cx="0"
                cy="0"
                r="15"
                fill={fillColor}
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1"
                className="transition-all duration-300"
              />
              <text
                x="0"
                y="4" // Adjusted for better vertical centering
                textAnchor="middle"
                fill={isCurrent ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))"}
                fontSize="12"
                fontWeight="bold"
              >
                {nodeId}
              </text>
              {distances && distances[nodeId] !== undefined && (
                 <text
                    x="0"
                    y="28" // Position distance below node
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="10"
                 >
                   {distances[nodeId] === Infinity ? '∞' : distances[nodeId]}
                 </text>
              )}
            </g>
          );
        })}
      </svg>
       {stepData.action && (
         <p className="absolute bottom-1 left-2 text-xs text-muted-foreground p-1 bg-background/70 rounded">
           {stepData.action}
         </p>
       )}
    </div>
  );
}
