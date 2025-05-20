
import type { AlgorithmData, SampleQuestion, SubTopic, Topic, SimulationData, SimulationStep } from '@/types';
import { LayoutDashboard, Coins, Brain, GitFork, Type, Settings2, Lightbulb, Sparkles, Milestone, Calculator, BarChart3, Atom, Puzzle, Workflow, Route, Binary, Magnet, Share2 } from 'lucide-react';

// Existing rawData for detailed simulations (MergeSort, QuickSort, etc.)
// This data is preserved for its rich simulation steps.
const rawData: Record<string, Record<string, any[]>> = {
  "Introduction to Algorithms": {
    "Merge Sort": [
      {
        "question": "Simulate Merge Sort on the array [38, 27, 43, 3, 9, 82, 10]. Show the splitting and merging steps.",
        "simulation_data": {
          "type": "MergeSort",
          "initial_array": [38, 27, 43, 3, 9, 82, 10],
          "steps": [
            {"action": "Divide: [38, 27, 43, 3] and [9, 82, 10]", "array": [38, 27, 43, 3, 9, 82, 10]},
            {"action": "Divide: [38, 27] and [43, 3]", "array": [38, 27, 43, 3], "highlight": [0,1,2,3]},
            {"action": "Divide: [38] and [27]", "array": [38, 27], "highlight": [0,1]},
            {"action": "Base case: [38]", "array": [38], "highlight": [0]},
            {"action": "Base case: [27]", "array": [27], "highlight": [1]},
            {"action": "Merge [38] and [27] -> [27, 38]", "array": [38, 27], "merged": [27, 38], "highlight": [0,1]},
            {"action": "Divide: [43] and [3]", "array": [43, 3], "highlight": [2,3]},
            {"action": "Base case: [43]", "array": [43], "highlight": [2]},
            {"action": "Base case: [3]", "array": [3], "highlight": [3]},
            {"action": "Merge [43] and [3] -> [3, 43]", "array": [43, 3], "merged": [3, 43], "highlight": [2,3]},
            {"action": "Merge [27, 38] and [3, 43] -> [3, 27, 38, 43]", "array": [27, 38, 3, 43], "merged": [3, 27, 38, 43], "highlight": [0,1,2,3]},
            {"action": "Divide: [9, 82] and [10]", "array": [9, 82, 10], "highlight": [4,5,6]},
            {"action": "Divide: [9] and [82]", "array": [9, 82], "highlight": [4,5]},
            {"action": "Base case: [9]", "array": [9], "highlight": [4]},
            {"action": "Base case: [82]", "array": [82], "highlight": [5]},
            {"action": "Merge [9] and [82] -> [9, 82]", "array": [9, 82], "merged": [9, 82], "highlight": [4,5]},
            {"action": "Base case: [10]", "array": [10], "highlight": [6]},
            {"action": "Merge [9, 82] and [10] -> [9, 10, 82]", "array": [9, 82, 10], "merged": [9, 10, 82], "highlight": [4,5,6]},
            {"action": "Merge [3, 27, 38, 43] and [9, 10, 82] -> [3, 9, 10, 27, 38, 43, 82]", "array": [3, 27, 38, 43, 9, 10, 82], "merged": [3, 9, 10, 27, 38, 43, 82], "highlight": [0,1,2,3,4,5,6]}
          ]
        }
      }
    ],
    "Quick Sort": [
      {
        "question": "Simulate Quick Sort on the array [7, 2, 1, 6, 8, 5, 3, 4] using the last element as the pivot.",
        "simulation_data": {
          "type": "QuickSort",
          "initial_array": [7, 2, 1, 6, 8, 5, 3, 4],
          "pivot_strategy": "last",
          "steps": [
            {"action": "Initial array: [7, 2, 1, 6, 8, 5, 3, 4]. Pivot: 4 (last element)", "array": [7, 2, 1, 6, 8, 5, 3, 4], "pivot_index": 7, "pivot_value": 4 },
            {"action": "Partitioning around 4. Result: [2, 1, 3, 4, 8, 5, 6, 7]", "array": [2, 1, 3, 4, 8, 5, 6, 7], "less": [2,1,3], "greater": [8,5,6,7], "equal": [4], "partitioning": [2,1,3]},
            {"action": "Sort left: [2, 1, 3]. Pivot: 3", "array": [2, 1, 3], "pivot_index": 2, "pivot_value": 3},
            {"action": "Partitioning [2, 1, 3] around 3. Result: [2, 1, 3]", "array": [2, 1, 3], "less": [2,1], "greater": [], "equal": [3], "partitioning": [2,1]},
            {"action": "Sort left: [2, 1]. Pivot: 1", "array": [2, 1], "pivot_index": 1, "pivot_value": 1},
            {"action": "Partitioning [2, 1] around 1. Result: [1, 2]", "array": [1, 2], "less": [], "greater": [2], "equal": [1], "partitioning": []},
            {"action": "Sort left of [1,2]: [] (empty)", "array": []},
            {"action": "Sort right of [1,2]: [2]. Base case.", "array": [2]},
            {"action": "Left side sorted: [1, 2, 3]", "array": [1, 2, 3]},
            {"action": "Sort right: [8, 5, 6, 7]. Pivot: 7", "array": [8, 5, 6, 7], "pivot_index": 3, "pivot_value": 7},
            {"action": "Partitioning [8, 5, 6, 7] around 7. Result: [5, 6, 7, 8]", "array": [5, 6, 7, 8], "less": [5,6], "greater": [8], "equal": [7], "partitioning": [5,6]},
            {"action": "Sort left: [5, 6]. Pivot: 6", "array": [5, 6], "pivot_index": 1, "pivot_value": 6},
            {"action": "Partitioning [5, 6] around 6. Result: [5, 6]", "array": [5, 6], "less": [5], "greater": [], "equal": [6], "partitioning": [5]},
            {"action": "Sort left of [5,6]: [5]. Base case.", "array": [5]},
            {"action": "Sort right of [5,6]: [] (empty)", "array": []},
            {"action": "Sort right of [5,6,7,8]: [8]. Base case.", "array": [8]},
            {"action": "Right side sorted: [5, 6, 7, 8]", "array": [5, 6, 7, 8]},
            {"action": "Final sorted array: [1, 2, 3, 4, 5, 6, 7, 8]", "array": [1, 2, 3, 4, 5, 6, 7, 8]}
          ]
        }
      }
    ]
  },
  "Greedy Method": {
    "Fractional Knapsack": [
      {
        "question": "Given a knapsack with a capacity of 50 and items (value, weight): (60, 10), (100, 20), (120, 30). Use the greedy approach.",
        "simulation_data": {
          "type": "FractionalKnapsack",
          "capacity": 50,
          "items": [
            {"value": 60, "weight": 10, "ratio": 6, "name": "Item1 (60,10)"},
            {"value": 100, "weight": 20, "ratio": 5, "name": "Item2 (100,20)"},
            {"value": 120, "weight": 30, "ratio": 4, "name": "Item3 (120,30)"}
          ],
          "order": "value_per_weight (descending)",
          "steps": [
            {"action": "Select Item1 (ratio 6). Take full (10 units). Weight: 10/50. Value: 60.", "item_index": 0, "item": {"value": 60, "weight": 10, "ratio": 6, "name": "Item1"}, "fraction": 1, "current_weight": 10, "current_value": 60},
            {"action": "Select Item2 (ratio 5). Take full (20 units). Weight: 30/50. Value: 160.", "item_index": 1, "item": {"value": 100, "weight": 20, "ratio": 5, "name": "Item2"}, "fraction": 1, "current_weight": 30, "current_value": 160},
            {"action": "Select Item3 (ratio 4). Remaining capacity 20. Take 20/30 units. Weight: 50/50. Value: 160 + 120*(20/30) = 240.", "item_index": 2, "item": {"value": 120, "weight": 30, "ratio": 4, "name": "Item3"}, "fraction": 0.6666666666666666, "current_weight": 50, "current_value": 240.0},
            {"action": "Knapsack full. Final Value: 240. Items taken: Item1 (100%), Item2 (100%), Item3 (66.7%)."}
          ]
        }
      }
    ],
    "Dijkstra’s Algorithm": [ // Raw data for Dijkstra will be merged with subTopicCompleteDetails
      {
        "question": "Find the shortest path from 'A' in graph: {'A': [('B', 10), ('C', 3)], 'B': [('C', 1), ('D', 2)], 'C': [('B', 4), ('D', 8), ('E', 2)], 'D': [('E', 7)], 'E': []}.",
        "simulation_data": {
          "type": "Dijkstra",
          "graph": {"A": [["B", 10], ["C", 3]], "B": [["C", 1], ["D", 2]], "C": [["B", 4], ["D", 8], ["E", 2]], "D": [["E", 7]], "E": []},
          "nodes": ["A", "B", "C", "D", "E"],
          "start_node": "A",
          "steps": [
            {"action": "Initialize distances: A=0, others=Infinity. Visited: []. Current: A", "current_node": "A", "distances": {"A": 0, "B": Infinity, "C": Infinity, "D": Infinity, "E": Infinity}, "visited_nodes": []},
            {"action": "Neighbors of A: B (0+10=10), C (0+3=3). Update dist.", "distances": {"A": 0, "B": 10, "C": 3, "D": Infinity, "E": Infinity}, "updated_distance_for": "B, C", "edge_considered": ["A", "B", 10]},
            {"action": "Visited: [A]. Next node: C (dist 3)", "current_node": "C", "distances": {"A": 0, "B": 10, "C": 3, "D": Infinity, "E": Infinity}, "visited_nodes": ["A"]},
            {"action": "Neighbors of C: B (3+4=7 < 10), D (3+8=11), E (3+2=5). Update dist.", "distances": {"A": 0, "B": 7, "C": 3, "D": 11, "E": 5}, "updated_distance_for": "B, D, E", "edge_considered": ["C", "B", 4]},
            {"action": "Visited: [A, C]. Next node: E (dist 5)", "current_node": "E", "distances": {"A": 0, "B": 7, "C": 3, "D": 11, "E": 5}, "visited_nodes": ["A", "C"]},
            {"action": "Neighbors of E: (none).", "distances": {"A": 0, "B": 7, "C": 3, "D": 11, "E": 5}},
            {"action": "Visited: [A, C, E]. Next node: B (dist 7)", "current_node": "B", "distances": {"A": 0, "B": 7, "C": 3, "D": 11, "E": 5}, "visited_nodes": ["A", "C", "E"]},
            {"action": "Neighbors of B: C (visited), D (7+2=9 < 11). Update dist.", "distances": {"A": 0, "B": 7, "C": 3, "D": 9, "E": 5}, "updated_distance_for": "D", "edge_considered": ["B", "D", 2]},
            {"action": "Visited: [A, C, E, B]. Next node: D (dist 9)", "current_node": "D", "distances": {"A": 0, "B": 7, "C": 3, "D": 9, "E": 5}, "visited_nodes": ["A", "C", "E", "B"]},
            {"action": "Neighbors of D: E (visited).", "distances": {"A": 0, "B": 7, "C": 3, "D": 9, "E": 5}},
            {"action": "All nodes visited. Final shortest distances from A.", "final_distances": {"A": 0, "B": 7, "C": 3, "D": 9, "E": 5}, "visited_nodes": ["A", "C", "E", "B", "D"], "description": "Shortest Paths: A->C (3), A->C->E (5), A->C->B (7), A->C->B->D (9)."}
          ]
        }
      }
    ]
  },
  "Dynamic Programming (DP)": {
    "0/1 Knapsack": [
      {
        "question": "Solve the 0/1 Knapsack with capacity 5 and items (value, weight): (60, 2), (100, 3), (120, 4).",
        "simulation_data": {
          "type": "ZeroOneKnapsack",
          "capacity": 5,
          "items": [{"value": 60, "weight": 2, "name": "I1(60,2)"}, {"value": 100, "weight": 3, "name": "I2(100,3)"}, {"value": 120, "weight": 4, "name": "I3(120,4)"}],
          "initial_dp_table": [
            [{value:0}, {value:0}, {value:0}, {value:0}, {value:0}, {value:0}],
            [{value:0}, {value:0}, {value:0}, {value:0}, {value:0}, {value:0}],
            [{value:0}, {value:0}, {value:0}, {value:0}, {value:0}, {value:0}],
            [{value:0}, {value:0}, {value:0}, {value:0}, {value:0}, {value:0}]
          ],
          "steps": [
            {"action": "Item 1 (60,2). Cap 2: dp[1][2]=60", "cell_coords": [1,2], "value": 60, "dp_row": [0,0,60,60,60,60]},
            {"action": "Item 1 (60,2). Cap 3: dp[1][3]=60", "cell_coords": [1,3], "value": 60},
            {"action": "Item 1 (60,2). Cap 4: dp[1][4]=60", "cell_coords": [1,4], "value": 60},
            {"action": "Item 1 (60,2). Cap 5: dp[1][5]=60", "cell_coords": [1,5], "value": 60},
            {"action": "Item 2 (100,3). Cap 3: dp[2][3]=max(dp[1][3], 100+dp[1][0])=100", "cell_coords": [2,3], "value": 100, "dp_row": [0,0,60,100,100,160]},
            {"action": "Item 2 (100,3). Cap 4: dp[2][4]=max(dp[1][4], 100+dp[1][1])=100", "cell_coords": [2,4], "value": 100},
            {"action": "Item 2 (100,3). Cap 5: dp[2][5]=max(dp[1][5], 100+dp[1][2])=160", "cell_coords": [2,5], "value": 160},
            {"action": "Item 3 (120,4). Cap 4: dp[3][4]=max(dp[2][4], 120+dp[2][0])=120", "cell_coords": [3,4], "value": 120, "dp_row": [0,0,60,100,120,180]},
            {"action": "Item 3 (120,4). Cap 5: dp[3][5]=max(dp[2][5], 120+dp[2][1])=180", "cell_coords": [3,5], "value": 180},
            {"action": "Max value: 180. Table filled.", "value": 180, "dp_table": [
                [{value:0},{value:0},{value:0},{value:0},{value:0},{value:0}],
                [{value:0},{value:0},{value:60},{value:60},{value:60},{value:60}],
                [{value:0},{value:0},{value:60},{value:100},{value:100},{value:160}],
                [{value:0},{value:0},{value:60},{value:100},{value:120},{value:180}]
            ]}
          ]
        }
      }
    ],
    "Longest Common Subsequence (LCS)": [
      {
        "question": "Find the LCS of 'ABCBDAB' and 'BDCABA'. Show the DP table and backtracking.",
        "simulation_data": {
          "type": "LCS",
          "string1": "ABCBDAB",
          "string2": "BDCABA",
          "initial_dp_table": Array(8).fill(null).map(() => Array(7).fill({value:0})),
          "steps": [
            {"action": "Initialize DP table (m+1 x n+1) with 0s.", "dp_table": Array(8).fill(null).map(() => Array(7).fill({value:0})), "description": "Table dimensions: (len(S1)+1) x (len(S2)+1)." },
            {"action": "Filling cell dp[1][1] (A vs B). S1[0]!=S2[0]. dp[1][1]=max(dp[0][1],dp[1][0]) = 0.", "cell_coords": [1,1], "value": 0, "description":"S1[0]='A', S2[0]='B'. Not equal. Take max of cell above (dp[0][1]=0) and cell to left (dp[1][0]=0)."},
            {"action": "Filling cell dp[1][5] (A vs A). S1[0]==S2[4]. dp[1][5]=dp[0][4]+1 = 1.", "cell_coords": [1,5], "value": 1, "dp_table": [[{value:0}],[{value:0},{value:0},{value:0},{value:0},{value:0},{value:1},{value:1}]], "description":"S1[0]='A', S2[4]='A'. Equal. Take diagonal (dp[0][4]=0) + 1. Arrow from dp[0][4]."},
            {"action": "Continuing table fill... Cell dp[2][1] (B vs B). S1[1]==S2[0]. dp[2][1]=dp[1][0]+1 = 1.", "cell_coords": [2,1], "value": 1, "description": "S1[1]='B', S2[0]='B'. Equal. Take diagonal (dp[1][0]=0) + 1. Arrow from dp[1][0]."},
            {"action": "Table filling complete. LCS Length: 4 (from dp[7][6]).", "dp_table": [
                [{value:0, arrowFrom:[]},{value:0, arrowFrom:[]},{value:0, arrowFrom:[]},{value:0, arrowFrom:[]},{value:0, arrowFrom:[]},{value:0, arrowFrom:[]},{value:0, arrowFrom:[]}],
                [{value:0, arrowFrom:[]},{value:0, arrowFrom:['top']},{value:0, arrowFrom:['top']},{value:0, arrowFrom:['top']},{value:0, arrowFrom:['top']},{value:1, arrowFrom:['diag']},{value:1, arrowFrom:['left']}],
                [{value:0, arrowFrom:[]},{value:1, arrowFrom:['diag']},{value:1, arrowFrom:['left']},{value:1, arrowFrom:['left']},{value:1, arrowFrom:['diag']},{value:1, arrowFrom:['left']},{value:2, arrowFrom:['diag']}],
                [{value:0, arrowFrom:[]},{value:1, arrowFrom:['top']},{value:1, arrowFrom:['top']},{value:2, arrowFrom:['diag']},{value:2, arrowFrom:['left']},{value:2, arrowFrom:['left']},{value:2, arrowFrom:['top']}],
                [{value:0, arrowFrom:[]},{value:1, arrowFrom:['top']},{value:2, arrowFrom:['diag']},{value:2, arrowFrom:['top']},{value:2, arrowFrom:['diag']},{value:2, arrowFrom:['left']},{value:3, arrowFrom:['diag']}],
                [{value:0, arrowFrom:[]},{value:1, arrowFrom:['top']},{value:2, arrowFrom:['top']},{value:2, arrowFrom:['top']},{value:3, arrowFrom:['diag']},{value:3, arrowFrom:['left']},{value:3, arrowFrom:['top']}],
                [{value:0, arrowFrom:[]},{value:1, arrowFrom:['top']},{value:2, arrowFrom:['top']},{value:2, arrowFrom:['top']},{value:3, arrowFrom:['top']},{value:4, arrowFrom:['diag']},{value:4, arrowFrom:['left']}],
                [{value:0, arrowFrom:[]},{value:1, arrowFrom:['top']},{value:2, arrowFrom:['top']},{value:2, arrowFrom:['top']},{value:3, arrowFrom:['top']},{value:4, arrowFrom:['top']},{value:4, arrowFrom:['diag']}]
             ], "cell_coords": [7,6], "value": 4, "description": "The value in the bottom-right cell (dp[m][n]) gives the length of the LCS."},
            {"action": "Backtracking from dp[7][6]. S1[6](B)==S2[5](A) is false. S1[6](B)==S2[5](B). Add 'B'. Move to dp[6][5].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5}], "current_lcs_char":"B", "description": "S1[6]='B', S2[5]='B'. Chars match. Add 'B' to LCS. Move diagonally up-left."},
            {"action": "Backtracking from dp[6][5]. S1[5](A)==S2[4](A). Add 'A'. Move to dp[5][4].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4}], "current_lcs_char":"A", "description": "S1[5]='A', S2[4]='A'. Chars match. Add 'A' to LCS. LCS so far: 'AB' (prepended). Move diagonally up-left."},
            {"action": "Backtracking from dp[5][4]. S1[4](D)!=S2[3](C). dp[4][4](3) >= dp[5][3](2). Move to dp[4][4] (up).", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4}], "description": "S1[4]='D', S2[3]='C'. Chars don't match. Move to cell with max value: dp[i-1][j] (up) or dp[i][j-1] (left). Here, dp[4][4]=3. Move up."},
            {"action": "Backtracking from dp[4][4]. S1[3](B)!=S2[3](C). dp[3][4](2) == dp[4][3](2). Move to dp[3][4] (up, preferred on tie).", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4}], "description": "S1[3]='B', S2[3]='C'. Chars don't match. dp[3][4]=2, dp[4][3]=2. Preferring up (arbitrary choice on tie)."},
            {"action": "Backtracking from dp[3][4]. S1[2](C)==S2[2](C). Add 'C'. Move to dp[2][3].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3}], "current_lcs_char":"C", "description": "S1[2]='C', S2[2]='C'. Chars match. Add 'C' to LCS. LCS: 'CAB'. Move diagonally up-left."},
            {"action": "Backtracking from dp[2][3]. S1[1](B)!=S2[1](D). dp[1][3](1) >= dp[2][2](1). Move to dp[1][3] (up, preferred on tie).", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3},{row:1,col:3}], "description": "S1[1]='B', S2[1]='D'. Chars don't match. dp[1][3]=1, dp[2][2]=1. Preferring up."},
            {"action": "Backtracking from dp[1][3]. S1[0](A)!=S2[2](C). dp[0][3](0) < dp[1][2](1). Move to dp[1][2] (left).", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3},{row:1,col:3},{row:1,col:2}], "description": "S1[0]='A', S2[2]='C'. Chars don't match. dp[0][3]=0, dp[1][2]=1. Move left."},
            {"action": "Backtracking from dp[1][2]. S1[0](A)!=S2[1](D). dp[0][2](0) < dp[1][1](0). Move to dp[1][1] (left - error in example logic, should be max). Corrected: dp[0][2]=0, dp[1][1]=0. Move to dp[0][2] (up).", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3},{row:1,col:3},{row:1,col:2},{row:0,col:2}], "description": "S1[0]='A', S2[1]='D'. Chars don't match. dp[0][2]=0, dp[1][1]=0. Move to dp[0][2]. Stop as row is 0."},
            {"action": "Backtracking complete. Reconstructed LCS (reversed): 'BCAB'. Length: 4.", "final_lcs_string":"BCAB", "value": 4, "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3},{row:1,col:3},{row:1,col:2},{row:0,col:2}], "description":"Path ends. Final LCS string is 'BCAB'."}
          ]
        }
      }
    ]
  },
  "Backtracking & Branch-and-Bound": {
    "N-Queens Problem": [ // rawData for NQueens will be merged
      {
        "question": "Solve the 4-Queens problem. Show placements and backtracking.",
        "simulation_data": {
          "type": "NQueens",
          "board_size": 4,
          "steps": [
            {"action": "Place Q at (0,0)", "board_state": [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], "queen_placements": [{"row":0, "col":0, "valid":true}]},
            {"action": "Place Q at (1,2)", "board_state": [[1,0,0,0],[0,0,1,0],[0,0,0,0],[0,0,0,0]], "queen_placements": [{"row":0, "col":0, "valid":true}, {"row":1, "col":2, "valid":true}]},
            {"action": "Try (2,0): Conflict!", "queen_placements": [{"row":0, "col":0, "valid":true}, {"row":1, "col":2, "valid":true}, {"row":2, "col":0, "valid":false}]},
            {"action": "Backtrack from (1,2). Current board state refers to state before trying (1,2)'s children.", "backtrack_from": {"row":1, "col":2}, "board_state": [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], "queen_placements": [{"row":0, "col":0, "valid":true}]},
            {"action": "Try Q at (0,1) instead of (0,0) to find the common solution (0,1), (1,3), (2,0), (3,2). (Skipping intermediate steps for this example)", "queen_placements": []},
            {"action": "Place Q at (0,1)", "board_state": [[0,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], "queen_placements": [{"row":0, "col":1, "valid":true}]},
            {"action": "Place Q at (1,3)", "board_state": [[0,1,0,0],[0,0,0,1],[0,0,0,0],[0,0,0,0]], "queen_placements": [{"row":0, "col":1, "valid":true},{"row":1, "col":3, "valid":true}]},
            {"action": "Place Q at (2,0)", "board_state": [[0,1,0,0],[0,0,0,1],[1,0,0,0],[0,0,0,0]], "queen_placements": [{"row":0, "col":1, "valid":true},{"row":1, "col":3, "valid":true},{"row":2, "col":0, "valid":true}]},
            {"action": "Place Q at (3,2). Solution found!", "board_state": [[0,1,0,0],[0,0,0,1],[1,0,0,0],[0,0,1,0]], "queen_placements": [{"row":0, "col":1, "valid":true},{"row":1, "col":3, "valid":true},{"row":2, "col":0, "valid":true},{"row":3, "col":2, "valid":true}],"solution_found": true}
          ]
        }
      }
    ]
  },
  "String Matching": {
    "KMP Algorithm": [ // rawData for KMP will be merged
      {
        "question": "Simulate KMP for pattern 'ABABC' in text 'ABABDABACDABABCABAB'.",
        "simulation_data": {
          "type": "KMP",
          "text": "ABABDABACDABABCABAB",
          "pattern": "ABABC",
          "lps_array": [0, 0, 1, 2, 0],
          "steps": [
            {"action": "i=0, j=0. T[0]=A, P[0]=A. Match. j=1", "text_pointer":0, "pattern_pointer":0, "comparison_result":"match"},
            {"action": "i=1, j=1. T[1]=B, P[1]=B. Match. j=2", "text_pointer":1, "pattern_pointer":1, "comparison_result":"match"},
            {"action": "i=2, j=2. T[2]=A, P[2]=A. Match. j=3", "text_pointer":2, "pattern_pointer":2, "comparison_result":"match"},
            {"action": "i=3, j=3. T[3]=B, P[3]=B. Match. j=4", "text_pointer":3, "pattern_pointer":3, "comparison_result":"match"},
            {"action": "i=4, j=4. T[4]=D, P[4]=C. Mismatch. j=lps[j-1]=lps[3]=2", "text_pointer":4, "pattern_pointer":4, "comparison_result":"mismatch", "pattern_shift": 2},
            {"action": "i=4, j=2. T[4]=D, P[2]=A. Mismatch. j=lps[j-1]=lps[1]=0", "text_pointer":4, "pattern_pointer":2, "comparison_result":"mismatch", "pattern_shift": 2},
            {"action": "i=4, j=0. T[4]=D, P[0]=A. Mismatch. i=5, j=0", "text_pointer":4, "pattern_pointer":0, "comparison_result":"mismatch"},
            // ... (more steps omitted for brevity) ...
            {"action": "Pattern found at text index 10. i=15, j=5. Match. (P[4]=C, T[14]=C)", "text_pointer":14, "pattern_pointer":4, "comparison_result":"match", "match_found_at_index": 10},
            {"action": "After finding match at index 10, j becomes lps[4]=0. i remains 15. Continue search...", "text_pointer":15, "pattern_pointer":0 }
          ]
        }
      }
    ]
  },
   "Advanced Topics": {
    "Optimal Binary Search Trees": [ // rawData for OptimalBST will be merged
      {
        "question": "Construct an optimal BST for keys {10, 20, 30, 40} with probabilities {0.3, 0.2, 0.1, 0.4}.",
        "simulation_data": {
          "type": "OptimalBST",
          "keys": [10, 20, 30, 40],
          "probabilities": [0.3, 0.2, 0.1, 0.4],
          "steps": [
            {"stage": "Initialization (length 1)", "description": "Cost[i][i] = p[i], Root[i][i] = key[i]", "cost_matrix_cell": {"i":0, "j":0, "value":0.3}, "root_matrix_cell": {"i":0, "j":0, "value":10}},
            {"stage": "Initialization (length 1)", "description": "Cost[1][1] = p[1]=0.2, Root[1][1] = key[1]=20", "cost_matrix_cell": {"i":1, "j":1, "value":0.2}, "root_matrix_cell": {"i":1, "j":1, "value":20}},
            {"stage": "Initialization (length 1)", "description": "Cost[2][2] = p[2]=0.1, Root[2][2] = key[2]=30", "cost_matrix_cell": {"i":2, "j":2, "value":0.1}, "root_matrix_cell": {"i":2, "j":2, "value":30}},
            {"stage": "Initialization (length 1)", "description": "Cost[3][3] = p[3]=0.4, Root[3][3] = key[3]=40", "cost_matrix_cell": {"i":3, "j":3, "value":0.4}, "root_matrix_cell": {"i":3, "j":3, "value":40}},
            {"stage": "Length 2: Keys {10, 20}", "description": "Calculating cost for keys 10, 20. Min cost with root 10 or 20.", "sub_problem": {"i":0, "j":1, "k_min": 0, "cost": 0.8}, "cost_matrix_cell": {"i":0, "j":1, "value":0.8}, "root_matrix_cell": {"i":0, "j":1, "value":10}},
             // ... More steps ...
            {"stage": "Final", "description": "Optimal cost for all keys = Cost[0][3] = 2.2. Root is 40. Final Cost Table and Root Table shown.", "optimal_cost": 2.2, "current_tree_structure": {"root": 40, "left": {"root": 10, "left": null, "right": {"root":20, "left":null, "right": {"root":30}}}, "right": null}, "dp_table": [ /* Final Cost Table */ ]}
          ]
        }
      }
    ]
  }
};

const ICONS: Record<string, React.ElementType> = {
  "LayoutDashboard": LayoutDashboard,
  "Coins": Coins,
  "Brain": Brain,
  "Milestone": Milestone,
  "Type": Type,
  "Settings2": Settings2,
};

const APP_TOPICS_CONFIG = [
  {
    title: "Introduction to Algorithms",
    iconName: "LayoutDashboard",
    subtopics: [
      { title: "Control Structures", detailsKey: "Control Structures" },
      { title: "Algorithm Analysis", detailsKey: "Algorithm Analysis (Intro)" },
      { title: "Recurrence Relations", detailsKey: "Recurrence Relations (Intro)" },
      { title: "Max-Min (Divide & Conquer)", detailsKey: "Max-Min" },
      { title: "Merge Sort (Divide & Conquer)", detailsKey: "Merge Sort", rawDataKey: "Merge Sort" },
      { title: "Quick Sort (Divide & Conquer)", detailsKey: "Quick Sort", rawDataKey: "Quick Sort" },
      { title: "Strassen’s Matrix Multiplication (Divide & Conquer)", detailsKey: "Strassen’s Matrix Multiplication" },
    ]
  },
  {
    title: "Greedy Method",
    iconName: "Coins",
    subtopics: [
      { title: "Fractional Knapsack", detailsKey: "Fractional Knapsack", rawDataKey: "Fractional Knapsack"},
      { title: "Activity Selection", detailsKey: "Activity Selection" },
      { title: "Job Sequencing with Deadlines", detailsKey: "Job Sequencing" },
      { title: "Coin Change (Greedy)", detailsKey: "Coin Change (Greedy)" },
      { title: "Huffman Coding", detailsKey: "Huffman Coding" },
      { title: "Kruskal’s Algorithm (MST)", detailsKey: "Kruskal’s Algorithm" },
      { title: "Prim’s Algorithm (MST)", detailsKey: "Prim’s Algorithm" },
      { title: "Dijkstra’s Algorithm", detailsKey: "Dijkstra’s Algorithm", rawDataKey: "Dijkstra’s Algorithm"},
    ]
  },
  {
    title: "Dynamic Programming (DP)",
    iconName: "Brain",
    subtopics: [
      { title: "DP Foundations", detailsKey: "DP Foundations" },
      { title: "Fibonacci Numbers (DP)", detailsKey: "Fibonacci (DP)" },
      { title: "0/1 Knapsack (DP)", detailsKey: "0/1 Knapsack", rawDataKey: "0/1 Knapsack" },
      { title: "Coin Change (DP)", detailsKey: "Coin Change (DP)" },
      { title: "Longest Common Subsequence (LCS)", detailsKey: "LCS", rawDataKey: "Longest Common Subsequence (LCS)"},
      { title: "Matrix Chain Multiplication", detailsKey: "Matrix Chain Multiplication" },
      { title: "Traveling Salesperson Problem (TSP DP)", detailsKey: "TSP (DP)" },
      { title: "Floyd-Warshall Algorithm", detailsKey: "Floyd-Warshall Algorithm" },
      { title: "Bellman-Ford Algorithm", detailsKey: "Bellman-Ford Algorithm" },
    ]
  },
  {
    title: "Backtracking & Branch-and-Bound",
    iconName: "Milestone",
    subtopics: [
      { title: "N-Queens Problem (Backtracking)", detailsKey: "N-Queens Problem", rawDataKey: "N-Queens Problem" },
      { title: "Graph Coloring (Backtracking)", detailsKey: "Graph Coloring" },
      { title: "Subset Sum Problem (Backtracking)", detailsKey: "Subset Sum Problem" },
      { title: "Hamiltonian Cycle (Backtracking)", detailsKey: "Hamiltonian Cycle" },
      { title: "15-Puzzle Problem (Branch-and-Bound)", detailsKey: "15-Puzzle Problem" },
      { title: "0/1 Knapsack (Branch-and-Bound)", detailsKey: "0/1 Knapsack (BB)" },
      { title: "TSP (Branch-and-Bound)", detailsKey: "TSP (BB)" },
      { title: "Job Sequencing (Branch-and-Bound)", detailsKey: "Job Sequencing (BB)" },
    ]
  },
  {
    title: "String Matching",
    iconName: "Type",
    subtopics: [
      { title: "Naive String Matching", detailsKey: "Naive String Matching" },
      { title: "Rabin-Karp Algorithm", detailsKey: "Rabin-Karp Algorithm" },
      { title: "KMP Algorithm", detailsKey: "KMP Algorithm", rawDataKey: "KMP Algorithm" },
      { title: "Finite Automata Based Matching", detailsKey: "Finite Automata Matching" },
      { title: "String Matching Concepts", detailsKey: "String Matching Concepts" },
    ]
  },
  {
    title: "Advanced Topics",
    iconName: "Settings2",
    subtopics: [
       { title: "Optimal Binary Search Trees", detailsKey: "Optimal BST", rawDataKey: "Optimal Binary Search Trees" },
    ]
  }
];

const subTopicCompleteDetails: Record<string, Partial<Omit<SubTopic, 'id' | 'title' | 'sample_questions'> & { sample_questions_data?: any[] }>> = {
  "Control Structures": {
    brief_explanation: "Control structures are the fundamental building blocks of algorithms that dictate the order or flow in which instructions are executed. They include conditional statements (like if-else) for decision-making and loops (like for, while) for repetition of tasks.",
    pseudocode: `// Conditional Statement (IF-ELSE)
ALGORITHM CheckEvenOdd(number)
  IF number MOD 2 EQUALS 0 THEN
    PRINT number + " is Even"
  ELSE
    PRINT number + " is Odd"
  ENDIF
END ALGORITHM

// Loop (FOR) - Summing array elements
ALGORITHM SumArray(array_A, size_N)
  sum = 0
  FOR i = 0 TO N-1
    sum = sum + array_A[i]
  ENDFOR
  RETURN sum
END ALGORITHM`,
    python_code: `def check_even_odd(number):
  if number % 2 == 0:
    print(f"{number} is Even")
  else:
    print(f"{number} is Odd")

def sum_array(array_a):
  current_sum = 0
  for item in array_a:
    current_sum += item
  return current_sum`,
    time_complexity: "IF-ELSE: O(1). FOR/WHILE loops: Typically O(n) if they iterate n times over a collection.",
    space_complexity: "Generally O(1) for the structures themselves.",
    advantages: "Essential for creating logic and performing repetitive tasks. Allows algorithms to adapt to different inputs and conditions.",
    disadvantages: "Deeply nested structures can be hard to read and debug. Off-by-one errors in loops are common mistakes. Incorrect conditions can lead to infinite loops or wrong results.",
    sample_questions_data: [{
      question: "Given an array [1, 2, 3, 4, 5, 6], print all even numbers and count the total number of odd numbers.",
      simulation_data: {
        type: "ControlStructures",
        initial_array: [1, 2, 3, 4, 5, 6],
        initial_variables: { odd_count: 0, iteration: 0 },
        steps: [
          { action: "Initialize 'odd_count' to 0. Start loop to iterate through the input array: [1, 2, 3, 4, 5, 6].", current_array_item: null, variable_states: { odd_count: 0, iteration: 0}, output_log: ["Loop started."]},
          { action: "Processing item at index 0: '1'. Check IF '1' % 2 == 0.", current_array_item: 1, variable_states: { odd_count: 0, iteration: 1 }, output_log: ["Checking item: 1"], description: "1 % 2 is 1 (not 0), so it's Odd."},
          { action: "Condition (1 % 2 == 0) is FALSE. Execute ELSE block: Increment 'odd_count'.", current_array_item: 1, variable_states: { odd_count: 1, iteration: 1 }, output_log: ["Item '1' is Odd. odd_count is now 1."], description: "odd_count = 0 + 1 = 1."},
          { action: "Processing item at index 1: '2'. Check IF '2' % 2 == 0.", current_array_item: 2, variable_states: { odd_count: 1, iteration: 2 }, output_log: ["Checking item: 2"], description: "2 % 2 is 0, so it's Even."},
          { action: "Condition (2 % 2 == 0) is TRUE. Execute IF block: Print '2'.", current_array_item: 2, variable_states: { odd_count: 1, iteration: 2 }, output_log: ["Item '2' is Even. Printed: 2"], description: "Output: 2"},
          { action: "Processing item at index 2: '3'. Check IF '3' % 2 == 0.", current_array_item: 3, variable_states: { odd_count: 1, iteration: 3 }, output_log: ["Checking item: 3"], description: "3 % 2 is 1 (not 0), so it's Odd."},
          { action: "Condition (3 % 2 == 0) is FALSE. Execute ELSE block: Increment 'odd_count'.", current_array_item: 3, variable_states: { odd_count: 2, iteration: 3 }, output_log: ["Item '3' is Odd. odd_count is now 2."], description: "odd_count = 1 + 1 = 2."},
          { action: "Processing item at index 3: '4'. Check IF '4' % 2 == 0.", current_array_item: 4, variable_states: { odd_count: 2, iteration: 4 }, output_log: ["Checking item: 4"], description: "4 % 2 is 0, so it's Even."},
          { action: "Condition (4 % 2 == 0) is TRUE. Execute IF block: Print '4'.", current_array_item: 4, variable_states: { odd_count: 2, iteration: 4 }, output_log: ["Item '4' is Even. Printed: 4"], description: "Output: 4"},
          { action: "Processing item at index 4: '5'. Check IF '5' % 2 == 0.", current_array_item: 5, variable_states: { odd_count: 2, iteration: 5 }, output_log: ["Checking item: 5"], description: "5 % 2 is 1 (not 0), so it's Odd."},
          { action: "Condition (5 % 2 == 0) is FALSE. Execute ELSE block: Increment 'odd_count'.", current_array_item: 5, variable_states: { odd_count: 3, iteration: 5 }, output_log: ["Item '5' is Odd. odd_count is now 3."], description: "odd_count = 2 + 1 = 3."},
          { action: "Processing item at index 5: '6'. Check IF '6' % 2 == 0.", current_array_item: 6, variable_states: { odd_count: 3, iteration: 6 }, output_log: ["Checking item: 6"], description: "6 % 2 is 0, so it's Even."},
          { action: "Condition (6 % 2 == 0) is TRUE. Execute IF block: Print '6'.", current_array_item: 6, variable_states: { odd_count: 3, iteration: 6 }, output_log: ["Item '6' is Even. Printed: 6"], description: "Output: 6"},
          { action: "Loop finished. All items processed.", current_array_item: null, variable_states: { odd_count: 3, iteration: 6}, output_log: ["Loop finished."] },
          { action: "Final Result: Even numbers printed are 2, 4, 6. Total odd_count is 3.", current_array_item: null, variable_states: { odd_count: 3, iteration: 6}, output_log: ["Final odd_count: 3. Even numbers printed: 2, 4, 6."] }
        ]
      }
    }]
  },
  "Algorithm Analysis (Intro)": {
    brief_explanation: "Analyzing algorithm efficiency in terms of time (how long it takes) and space (how much memory it uses), often using Big O notation to describe performance relative to input size (Best, Worst, Average cases).",
    pseudocode: `// Not an algorithm itself, but concepts applied to algorithms.
// Example: Analyzing a simple loop
Count = 0
FOR i = 1 TO N
  FOR j = 1 TO N
    Count = Count + 1 // This operation runs N*N times
  ENDFOR
ENDFOR
// Time Complexity: O(N^2)`,
    python_code: `# No specific Python code for analysis itself. Analysis is applied to code.
# Example:
def count_operations(n):
    count = 0
    for i in range(n): # Runs N times
        for j in range(n): # Runs N times for each i
            count += 1 # Basic operation
    return count # Total operations = N*N`,
    time_complexity: "Focuses on deriving Time Complexity (e.g., O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n))",
    space_complexity: "Focuses on deriving Space Complexity (e.g., O(1), O(n))",
    advantages: "Predicts performance, helps choose efficient algorithms, identifies bottlenecks.",
    disadvantages: "Asymptotic analysis might not reflect real-world performance for small inputs due to constant factors or specific hardware. Worst-case can be overly pessimistic.",
    sample_questions_data: [{
        question: "What is the time complexity of an algorithm that iterates through an array once to find an element?",
        simulation_data: { type: "AlgorithmAnalysis", steps: [{ action: "Discussing linear search complexity.", description: "Linear search checks each element. Best case: O(1) (element is first). Worst case: O(n) (element is last or not found). Average case: O(n)."}] }
    }]
  },
  "Recurrence Relations (Intro)": {
    brief_explanation: "Equations or inequalities that describe a function in terms of its value on smaller inputs. Commonly used for analyzing recursive algorithms. Solved using methods like Substitution, Recursion Tree, or Master Theorem.",
    pseudocode: `// Example: Recurrence for Merge Sort
T(n) = 2T(n/2) + O(n)  // Two subproblems of size n/2, O(n) to merge
T(1) = O(1)             // Base case`,
    python_code: `# Recurrence relations are mathematical, not directly coded, but arise from code:
def merge_sort(arr): # T(n)
    if len(arr) <= 1: # O(1)
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])  # T(n/2)
    right = merge_sort(arr[mid:]) # T(n/2)
    # return merge(left, right)     # O(n) for merge operation
# Resulting in T(n) = 2T(n/2) + O(n)`,
    time_complexity: "Methods (Substitution, Recursion Tree, Master Theorem) are used to find the Big O complexity from the relation.",
    space_complexity: "Can also help analyze space used by recursion stack.",
    advantages: "Provides a formal way to analyze recursive algorithms. Master Theorem offers quick solutions for common recurrence forms.",
    disadvantages: "Solving them can be complex. Master Theorem has specific applicability conditions.",
     sample_questions_data: [{
        question: "Solve T(n) = 2T(n/2) + n using the Master Theorem.",
        simulation_data: { type: "RecurrenceRelations", steps: [{ action: "Applying Master Theorem.", description: "Here a=2, b=2, f(n)=n. log_b(a) = log_2(2) = 1. Since f(n) = Theta(n^log_b(a)), it's Case 2. Solution: T(n) = Theta(n log n)."}] }
    }]
  },
  "Max-Min": { 
    brief_explanation: "A divide and conquer algorithm to find both the maximum and minimum elements in an array efficiently by minimizing comparisons.",
    pseudocode: `ALGORITHM MaxMin(arr, low, high)
  IF low = high THEN RETURN arr[low], arr[low]
  IF high = low + 1 THEN
    IF arr[low] < arr[high] THEN RETURN arr[high], arr[low]
    ELSE RETURN arr[low], arr[high]
  ENDIF
  mid = (low + high) / 2
  max1, min1 = MaxMin(arr, low, mid)
  max2, min2 = MaxMin(arr, mid + 1, high)
  RETURN MAX(max1, max2), MIN(min1, min2)
END ALGORITHM`,
    python_code: `def find_max_min_dc(arr, low, high):
    if low == high: return arr[low], arr[low]
    if high == low + 1:
        return (arr[high], arr[low]) if arr[low] < arr[high] else (arr[low], arr[high])
    mid = (low + high) // 2
    max1, min1 = find_max_min_dc(arr, low, mid)
    max2, min2 = find_max_min_dc(arr, mid + 1, high)
    return max(max1, max2), min(min1, min2)`,
    time_complexity: "O(n). Roughly 3n/2 comparisons.",
    space_complexity: "O(log n) due to recursion stack.",
    advantages: "More efficient in comparisons than finding max and min independently.",
    disadvantages: "Recursive overhead for small arrays.",
    sample_questions_data: [{
      question: "Find max and min in [10, 5, 30, 1, 50, 0] using Divide and Conquer.",
      simulation_data: {
        type: "MaxMin", initial_array: [10, 5, 30, 1, 50, 0],
        steps: [
          { action: "Initial call: MaxMin([10,5,30,1,50,0], 0, 5)", array_segment: [10,5,30,1,50,0]},
          { action: "Divide: mid = 2. Left: [10,5,30] (0,2), Right: [1,50,0] (3,5)", left_segment: [10,5,30], right_segment: [1,50,0]},
          { action: "Left: MaxMin([10,5,30],0,2) -> (Max:30, Min:5)", array_segment: [10,5,30], max_val:30, min_val:5},
          { action: "Right: MaxMin([1,50,0],3,5) -> (Max:50, Min:0)", array_segment: [1,50,0], max_val:50, min_val:0},
          { action: "Combine: Max(30,50)=50, Min(5,0)=0. Final: Max=50, Min=0", final_max:50, final_min:0}
        ]
      }
    }]
  },
  "Merge Sort": { 
    brief_explanation: "A stable, comparison-based sorting algorithm using the divide and conquer paradigm. It divides the array into halves, recursively sorts them, and then merges the sorted halves.",
    time_complexity: "O(n log n) in all cases (worst, average, best)",
    space_complexity: "O(n) due to the auxiliary space required for merging",
    advantages: "Guaranteed O(n log n) performance. Stable sort.",
    disadvantages: "Requires O(n) extra space. Can be slower than Quick Sort on average for arrays.",
    pseudocode: `ALGORITHM MergeSort(arr, low, high)
  IF low < high THEN
    mid = (low + high) / 2
    MergeSort(arr, low, mid)
    MergeSort(arr, mid + 1, high)
    Merge(arr, low, mid, high)
  ENDIF
END ALGORITHM`,
    python_code: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L, R = arr[:mid], arr[mid:]
        merge_sort(L); merge_sort(R)
        i=j=k=0
        while i < len(L) and j < len(R):
            if L[i] < R[j]: arr[k]=L[i]; i+=1
            else: arr[k]=R[j]; j+=1
            k+=1
        while i < len(L): arr[k]=L[i]; i+=1; k+=1
        while j < len(R): arr[k]=R[j]; j+=1; k+=1
    return arr`,
  },
  "Quick Sort": { 
    brief_explanation: "An efficient, in-place sorting algorithm using divide and conquer. It picks an element as a pivot and partitions the array around it.",
    time_complexity: "Average: O(n log n). Worst: O(n^2).",
    space_complexity: "O(log n) on average. O(n) worst case.",
    advantages: "Fast on average. In-place partitioning variants.",
    disadvantages: "Worst-case O(n^2). Not stable.",
    pseudocode: `ALGORITHM QuickSort(arr, low, high)
  IF low < high THEN
    pi = Partition(arr, low, high)
    QuickSort(arr, low, pi - 1)
    QuickSort(arr, pi + 1, high)
  ENDIF
END ALGORITHM`,
    python_code: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
# def partition(arr,low,high): ... (Lomuto example)
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
  },
  "Strassen’s Matrix Multiplication": {
    brief_explanation: "A divide and conquer algorithm for matrix multiplication, faster than O(n^3). Uses 7 recursive multiplications.",
    pseudocode: `STRASSEN(A, B) // A, B are n x n matrices
  IF n = 1 THEN RETURN A[0][0] * B[0][0]
  Partition A, B into four n/2 x n/2 submatrices
  P1 = STRASSEN(A11 + A22, B11 + B22)
  P2 = STRASSEN(A21 + A22, B11)
  // ... P3 to P7 ...
  C11 = P1 + P4 - P5 + P7
  // ... C12, C21, C22 ...
  RETURN C`,
    python_code: `# Strassen's Python code is extensive. Placeholder:
def strassen(A, B): return "[[Result of Strassen's]]"`,
    time_complexity: "O(n^log2(7)) approx O(n^2.807)",
    space_complexity: "O(n^2) for submatrices.",
    advantages: "Asymptotically faster for large n.",
    disadvantages: "Higher constant factor, complex, numerical stability issues.",
    sample_questions_data: [{
        question: "Explain Strassen's conceptually for 2x2 matrices.",
        simulation_data: { type: "Strassen", steps: [{ action: "Illustrate P1-P7 for 2x2 conceptual submatrices.", description: "Strassen reduces 8 multiplications to 7 for 2x2 blocks using specific sums/differences."}] }
    }]
  },
  "Fractional Knapsack": {
    brief_explanation: "Greedy algorithm to maximize value in a knapsack where items can be taken in fractions. Sort by value-to-weight ratio.",
    time_complexity: "O(n log n) for sorting.",
    space_complexity: "O(1) or O(n) for sorting copy.",
    advantages: "Simple, efficient, optimal for fractional version.",
    disadvantages: "Doesn't work for 0/1 Knapsack.",
     pseudocode: `ALGORITHM FractionalKnapsack(capacity, items)
  FOR EACH item: item.ratio = item.value / item.weight
  Sort items by item.ratio desc
  total_value = 0; current_weight = 0
  FOR EACH item IN sorted_items
    IF current_weight + item.weight <= capacity THEN
      Take whole item; Add item.value to total_value
    ELSE
      fraction = (capacity - current_weight) / item.weight
      total_value += item.value * fraction; BREAK
    ENDIF
  ENDFOR
  RETURN total_value`,
    python_code: `def fractional_knapsack(capacity, items_list):
    for item in items_list: item['ratio'] = item['value'] / item['weight']
    items_list.sort(key=lambda x: x['ratio'], reverse=True)
    val = 0; wt = 0
    for item in items_list:
        if wt + item['weight'] <= capacity:
            wt += item['weight']; val += item['value']
        else:
            val += item['value'] * ((capacity - wt) / item['weight']); break
    return val`,
  },
  "Activity Selection": {
    brief_explanation: "Select max non-overlapping activities. Greedy: sort by finish times, pick first, then next compatible.",
    pseudocode: `ALGORITHM ActivitySelection(activities)
  Sort activities by finish_time
  selected_activities = [activities[0]]
  last_finish_time = activities[0].finish_time
  FOR i = 1 TO n-1
    IF activities[i].start_time >= last_finish_time THEN
      Add activities[i] to selected_activities
      last_finish_time = activities[i].finish_time
    ENDIF
  ENDFOR
  RETURN selected_activities`,
    python_code: `def activity_selection(activities): # activities: list of [start, finish, id]
    activities.sort(key=lambda x: x[1]) # Sort by finish times
    selected_activities = []
    if not activities: return selected_activities

    selected_activities.append(activities[0])
    last_finish_time = activities[0][1]

    for i in range(1, len(activities)):
        if activities[i][0] >= last_finish_time:
            selected_activities.append(activities[i])
            last_finish_time = activities[i][1]
    return selected_activities`,
    time_complexity: "O(n log n) for sorting, O(n) for selection.",
    space_complexity: "O(n) for sorted list/result.",
    advantages: "Simple, efficient, optimal. Intuitive greedy choice.",
    disadvantages: "Requires sorting by finish times. Only works if activities are pre-sorted or sortable by finish time.",
    sample_questions_data: [{
      question: "Activities (ID, start, finish): (A1,1,4), (A2,3,5), (A3,0,6), (A4,5,7), (A5,3,9), (A6,5,9), (A7,6,10), (A8,8,11), (A9,8,12), (A10,2,14), (A11,12,16). Select max non-overlapping.",
      simulation_data: {
        type: "ActivitySelection",
        items: [ // Assuming items are already {id, start_time, finish_time}
            {"id":"A1","start_time":1,"finish_time":4}, {"id":"A2","start_time":3,"finish_time":5},
            {"id":"A3","start_time":0,"finish_time":6}, {"id":"A4","start_time":5,"finish_time":7},
            {"id":"A5","start_time":3,"finish_time":9}, {"id":"A6","start_time":5,"finish_time":9},
            {"id":"A7","start_time":6,"finish_time":10}, {"id":"A8","start_time":8,"finish_time":11},
            {"id":"A9","start_time":8,"finish_time":12}, {"id":"A10","start_time":2,"finish_time":14},
            {"id":"A11","start_time":12,"finish_time":16}
        ],
        steps: [
          {action: "Initial Activities (unsorted):", description: "A1(1,4), A2(3,5), A3(0,6), A4(5,7), A5(3,9), A6(5,9), A7(6,10), A8(8,11), A9(8,12), A10(2,14), A11(12,16).", variable_states: { selected_activities: [], last_finish_time: "N/A" } },
          {action: "Step 1: Sort activities by their finish times in ascending order.", description: "Sorted: A1(1,4), A2(3,5), A4(5,7), A3(0,6) -> incorrect, A3 should be earlier. Corrected Sort: A1(1,4), A2(3,5), A3(0,6), A4(5,7), A7(6,10), A8(8,11), A9(8,12), A5(3,9), A6(5,9), A10(2,14), A11(12,16). Actual Sorted by finish: A1(1,4), A2(3,5), A3(0,6), A4(5,7), A5(3,9), A6(5,9), A7(6,10), A8(8,11), A9(8,12), A10(2,14), A11(12,16). Let's use this: A1(f:4), A2(f:5), A3(f:6), A4(f:7), A5(f:9), A6(f:9), A7(f:10), A8(f:11), A9(f:12), A10(f:14), A11(f:16)", variable_states: { selected_activities: [], last_finish_time: "N/A" }, items: [{"id":"A1","start_time":1,"finish_time":4}, {"id":"A2","start_time":3,"finish_time":5}, {"id":"A3","start_time":0,"finish_time":6}, {"id":"A4","start_time":5,"finish_time":7}, {"id":"A5","start_time":3,"finish_time":9}, {"id":"A6","start_time":5,"finish_time":9}, {"id":"A7","start_time":6,"finish_time":10}, {"id":"A8","start_time":8,"finish_time":11},{"id":"A9","start_time":8,"finish_time":12},{"id":"A10","start_time":2,"finish_time":14},{"id":"A11","start_time":12,"finish_time":16}]},
          {action: "Step 2: Select the first activity from the sorted list: A1(1,4).", description: "A1 is selected. Last finish time (LFT) = 4. Selected: [A1].", item: {"id":"A1","start_time":1,"finish_time":4}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 } },
          {action: "Step 3: Consider A2(start:3, finish:5).", description: "Is A2.start_time (3) >= LFT (4)? No (3 < 4). Skip A2.", item: {"id":"A2","start_time":3,"finish_time":5}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 }},
          {action: "Step 4: Consider A3(start:0, finish:6).", description: "Is A3.start_time (0) >= LFT (4)? No (0 < 4). Skip A3.", item: {"id":"A3","start_time":0,"finish_time":6}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 }},
          {action: "Step 5: Consider A4(start:5, finish:7).", description: "Is A4.start_time (5) >= LFT (4)? Yes. Select A4. LFT = A4.finish_time = 7. Selected: [A1, A4].", item: {"id":"A4","start_time":5,"finish_time":7}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 } },
          {action: "Step 6: Consider A5(start:3, finish:9).", description: "Is A5.start_time (3) >= LFT (7)? No (3 < 7). Skip A5.", item: {"id":"A5","start_time":3,"finish_time":9}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 }},
          {action: "Step 7: Consider A6(start:5, finish:9).", description: "Is A6.start_time (5) >= LFT (7)? No (5 < 7). Skip A6.", item: {"id":"A6","start_time":5,"finish_time":9}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 }},
          {action: "Step 8: Consider A7(start:6, finish:10).", description: "Is A7.start_time (6) >= LFT (7)? No (6 < 7). Skip A7.", item: {"id":"A7","start_time":6,"finish_time":10}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 }},
          {action: "Step 9: Consider A8(start:8, finish:11).", description: "Is A8.start_time (8) >= LFT (7)? Yes. Select A8. LFT = A8.finish_time = 11. Selected: [A1, A4, A8].", item: {"id":"A8","start_time":8,"finish_time":11}, variable_states: { selected_activities: ["A1", "A4", "A8"], last_finish_time: 11 } },
          {action: "Step 10: Consider A9(start:8, finish:12).", description: "Is A9.start_time (8) >= LFT (11)? No (8 < 11). Skip A9.", item: {"id":"A9","start_time":8,"finish_time":12}, variable_states: { selected_activities: ["A1", "A4", "A8"], last_finish_time: 11 }},
          {action: "Step 11: Consider A10(start:2, finish:14).", description: "Is A10.start_time (2) >= LFT (11)? No (2 < 11). Skip A10.", item: {"id":"A10","start_time":2,"finish_time":14}, variable_states: { selected_activities: ["A1", "A4", "A8"], last_finish_time: 11 }},
          {action: "Step 12: Consider A11(start:12, finish:16).", description: "Is A11.start_time (12) >= LFT (11)? Yes. Select A11. LFT = A11.finish_time = 16. Selected: [A1, A4, A8, A11].", item: {"id":"A11","start_time":12,"finish_time":16}, variable_states: { selected_activities: ["A1", "A4", "A8", "A11"], last_finish_time: 16 } },
          {action: "Finished. All activities processed. Selected activities:", description: "A1(1,4), A4(5,7), A8(8,11), A11(12,16). Total 4 activities.", variable_states: { selected_activities: ["A1", "A4", "A8", "A11"], last_finish_time: 16}}
      ]}
    }]
  },
   "Job Sequencing": {
    brief_explanation: "Schedule unit-time jobs with deadlines and profits to maximize total profit. Greedy: Sort by profit. Schedule in latest possible slot.",
    pseudocode: `JOB_SEQUENCING(jobs)
  Sort jobs by profit desc
  max_deadline = find max deadline
  time_slots = array[max_deadline], all FREE
  total_profit = 0
  FOR EACH job (j_id, d, p) IN sorted_jobs
    FOR slot = MIN(d, max_deadline) - 1 DOWNTO 0 
      IF time_slots[slot] IS FREE THEN
        time_slots[slot] = j_id; total_profit += p; BREAK
      ENDIF
    ENDFOR
  ENDFOR
  RETURN total_profit`,
    python_code: `def job_sequencing(jobs): # jobs: list of [id, deadline, profit]
    jobs.sort(key=lambda x: x[2], reverse=True) # Sort by profit descending
    
    if not jobs: return 0, []
    max_d = 0
    for job_id, deadline, profit_val in jobs: # corrected variable name
        if deadline > max_d:
            max_d = deadline
            
    slots = [-1] * max_d  # To store job IDs scheduled in slots
    scheduled_jobs_info = [None] * max_d # To store full job info
    total_profit = 0
    
    for job_id, deadline, p_val in jobs:
        # Try to place the job in the latest possible slot before its deadline
        # Deadline is 1-indexed, slots are 0-indexed
        for i in range(min(max_d, deadline) - 1, -1, -1):
            if slots[i] == -1:  # If slot is free
                slots[i] = job_id
                scheduled_jobs_info[i] = {'id': job_id, 'deadline': deadline, 'profit': p_val}
                total_profit += p_val
                break # Job scheduled, move to next job
                
    final_schedule = [job for job in scheduled_jobs_info if job is not None]
    return total_profit, final_schedule`,
    time_complexity: "O(n log n + n*m) where n is jobs, m is max deadline. Can be O(n log n) with DSU.",
    space_complexity: "O(m) for slots, O(n) for sorting copy.",
    advantages: "Simple greedy strategy. Effective for maximizing profit with unit execution times.",
    disadvantages: "Naive slot finding can be slow (O(m) per job). Assumes unit execution time for all jobs.",
    sample_questions_data: [{
      question: "Jobs (ID,Deadline,Profit): (J1,2,100), (J2,1,19), (J3,2,27), (J4,1,25), (J5,3,15). Maximize profit.",
      simulation_data: {
        type: "JobSequencing",
        items: [
            {"id":"J1","deadline":2,"profit":100}, {"id":"J2","deadline":1,"profit":19},
            {"id":"J3","deadline":2,"profit":27}, {"id":"J4","deadline":1,"profit":25},
            {"id":"J5","deadline":3,"profit":15}
        ],
        steps: [
          {action: "Initial Jobs: J1(D2,P100), J2(D1,P19), J3(D2,P27), J4(D1,P25), J5(D3,P15).", description: "Find maximum deadline among all jobs. Max Deadline = 3.", variable_states:{time_slots:["Free", "Free", "Free"], total_profit:0, max_deadline:3}},
          {action: "Step 1: Sort jobs by profit in descending order.", description: "Sorted: J1(P100,D2), J3(P27,D2), J4(P25,D1), J2(P19,D1), J5(P15,D3). Initialize time slots: [_, _, _] (for deadlines 1, 2, 3). Total Profit = 0.", variable_states:{time_slots:["Free", "Free", "Free"], total_profit:0}},
          {action: "Step 2: Process Job J1 (P100, D2).", description: "Deadline=2. Try latest available slot up to D2-1=slot 1. Slot 1 is free. Schedule J1 in slot 1. Profit = 100.", item:{"id":"J1"}, current_value:100, variable_states:{time_slots:["Free","J1","Free"], total_profit:100}},
          {action: "Step 3: Process Job J3 (P27, D2).", description: "Deadline=2. Try latest available slot up to D2-1=slot 1. Slot 1 is taken by J1. Try slot D2-2=slot 0. Slot 0 is free. Schedule J3 in slot 0. Profit = 100+27=127.", item:{"id":"J3"}, current_value:127, variable_states:{time_slots:["J3","J1","Free"], total_profit:127}},
          {action: "Step 4: Process Job J4 (P25, D1).", description: "Deadline=1. Try latest available slot up to D1-1=slot 0. Slot 0 is taken by J3. Cannot schedule J4.", item:{"id":"J4"}, current_value:127, variable_states:{time_slots:["J3","J1","Free"], total_profit:127}},
          {action: "Step 5: Process Job J2 (P19, D1).", description: "Deadline=1. Try latest available slot up to D1-1=slot 0. Slot 0 is taken by J3. Cannot schedule J2.", item:{"id":"J2"}, current_value:127, variable_states:{time_slots:["J3","J1","Free"], total_profit:127}},
          {action: "Step 6: Process Job J5 (P15, D3).", description: "Deadline=3. Try latest available slot up to D3-1=slot 2. Slot 2 is free. Schedule J5 in slot 2. Profit = 127+15=142.", item:{"id":"J5"}, current_value:142, variable_states:{time_slots:["J3","J1","J5"], total_profit:142}},
          {action: "All jobs processed. Final Profit: 142.", description: "Scheduled Jobs in slots: [J3 (Profit 27, Deadline 2, Used Slot 0/D1)], [J1 (Profit 100, Deadline 2, Used Slot 1/D2)], [J5 (Profit 15, Deadline 3, Used Slot 2/D3)].", variable_states:{time_slots:["J3","J1","J5"], total_profit:142, final_schedule: ["J3","J1","J5"]}}
      ]}
    }]
  },
  "Coin Change (Greedy)": { brief_explanation: "Tries to make change using the largest denominations first. Works for canonical coin systems.",
    pseudocode: `ALGORITHM GreedyCoinChange(coins, amount)
  Sort coins desc
  count = 0; result_coins = []
  FOR EACH coin IN sorted_coins
    WHILE amount >= coin
      amount -= coin; ADD coin to result_coins; count++
    ENDWHILE
    IF amount = 0 THEN BREAK
  ENDFOR
  IF amount = 0 THEN RETURN result_coins, count
  ELSE RETURN "Cannot make exact change"`,
    python_code: `def greedy_coin_change(coins_available, target_amount):
    coins_available.sort(reverse=True)
    num_coins = 0; result = []; amt = target_amount
    for coin in coins_available:
        while amt >= coin:
            amt -= coin; result.append(coin); num_coins += 1
        if amt == 0: break
    return (num_coins, result) if amt == 0 else (-1, [])`,
    time_complexity: "O(C log C + A/min_coin) if sorting. O(N) if sorted and N is #coins.",
    space_complexity: "O(Target/min_coin) for result list.",
    advantages: "Simple, fast for canonical systems (like USD, EUR). Intuitive.",
    disadvantages: "Not optimal for all coin systems (e.g., coins {1, 3, 4} for amount 6, greedy gives 4+1+1=3 coins, optimal is 3+3=2 coins).",
    sample_questions_data: [{ question: "Make change for 30 using coins {1, 5, 10, 25}.", simulation_data: { type: "CoinChangeGreedy", coins: [1,5,10,25], amount: 30, steps: [
      {action: "Initial state: Target Amount = 30. Coins (sorted desc): [25, 10, 5, 1]. Coins Used: [], Total Coins: 0.", description: "The greedy approach picks the largest possible coin denomination that doesn't exceed the remaining amount.", coins_used:[], total_coins:0, remaining_amount:30, item: null},
      {action: "Step 1: Consider coin 25.", description: "Current amount (30) >= coin value (25). Take one 25 coin. Remaining amount = 30 - 25 = 5.", item: {value:25}, coins_used:[25], total_coins:1, remaining_amount:5},
      {action: "Step 2: Consider coin 25 again.", description: "Current amount (5) < coin value (25). Cannot take another 25 coin. Move to next smaller coin.", item: {value:25}, coins_used:[25], total_coins:1, remaining_amount:5},
      {action: "Step 3: Consider coin 10.", description: "Current amount (5) < coin value (10). Cannot take 10 coin. Move to next smaller coin.", item: {value:10}, coins_used:[25], total_coins:1, remaining_amount:5},
      {action: "Step 4: Consider coin 5.", description: "Current amount (5) >= coin value (5). Take one 5 coin. Remaining amount = 5 - 5 = 0.", item: {value:5}, coins_used:[25,5], total_coins:2, remaining_amount:0},
      {action: "Step 5: Amount is 0. Solution found.", description: "Remaining amount is 0. The process stops as change has been made.", coins_used:[25,5], total_coins:2, remaining_amount:0, item: null},
      {action: "Final Solution: Coins used are [25, 5]. Total coins: 2.", description: "The algorithm successfully made change for 30 using 2 coins.", coins_used:[25,5], total_coins:2, remaining_amount:0, item: null}
    ]} }]
  },
  "Huffman Coding": { brief_explanation: "Lossless data compression using variable-length codes based on character frequencies.",
  pseudocode: `HUFFMAN(chars_freq)
  Create min-priority queue (PQ) with leaf nodes (char, freq).
  WHILE PQ size > 1
    Extract node1, node2 (min freqs).
    Create new_node (freq = n1.f + n2.f, left=n1, right=n2).
    Insert new_node into PQ.
  ENDFOR
  Root = PQ.extract_min(). Traverse tree to assign codes.`,
  python_code: `import heapq
class HuffmanNode: # ... (see previous full code)
def get_huffman_codes(char_freq_map): # ... (see previous full code)
    # This is a complex implementation.
    # For simulation, focus on tree building steps and code assignment.
    if not char_freq_map: return {}
    if len(char_freq_map) == 1: return {list(char_freq_map.keys())[0]: "0"}
    # Simplified:
    # 1. Build priority queue.
    # 2. Repeatedly merge two smallest nodes.
    # 3. Traverse final tree to get codes.
    return {"A":"00", "B":"01"} # Placeholder codes`,
  time_complexity: "O(n log n) for heap operations.",
  space_complexity: "O(n) for tree and codes.",
  advantages: "Optimal prefix codes, efficient compression for non-uniform frequencies.",
  disadvantages: "Requires two passes (one to build frequencies, one to encode) or sending frequency table along with compressed data. Not ideal for data with uniform frequencies.",
  sample_questions_data: [{ question: "Huffman codes for A:5, B:9, C:12.", simulation_data: { type: "HuffmanCoding", items: [{'char':'A','freq':5},{'char':'B','freq':9},{'char':'C','freq':12}], steps: [
    {action: "Initial Priority Queue (Min-Heap): [(A:5), (B:9), (C:12)]", description: "Nodes are ordered by frequency. Leaf nodes for each character and its frequency.", huffman_tree_description:"PQ: [A(5), B(9), C(12)]"},
    {action: "Step 1: Extract A(5) and B(9) (the two smallest frequencies).", description: "These will become children of a new internal node.", huffman_tree_description:"Extracted: A(5), B(9)"},
    {action: "Step 2: Merge A(5) and B(9) to form internal node I1 with frequency = 5 + 9 = 14.", description: "Convention: Left child can be the smaller of the two (A), Right child the larger (B). I1 has A as left child (edge '0') and B as right child (edge '1').", huffman_tree_description:"I1(14) [left=A(5), right=B(9)]"},
    {action: "Step 3: Insert I1(14) back into PQ. PQ: [(C:12), (I1:14)]", description: "PQ is re-sorted based on frequency.", huffman_tree_description:"PQ: [C(12), I1(14)]"},
    {action: "Step 4: Extract C(12) and I1(14) (the two smallest frequencies).", description: "These will become children of the root node.", huffman_tree_description:"Extracted: C(12), I1(14)"},
    {action: "Step 5: Merge C(12) and I1(14) to form Root node with frequency = 12 + 14 = 26.", description: "Convention: Left child C(12), Right child I1(14). Root has C as left child (edge '0') and I1 as right child (edge '1').", huffman_tree_description:"Root(26) [left=C(12), right=I1(14)]"},
    {action: "Step 6: PQ contains only Root(26). Tree construction complete.", description: "Final tree: Root(26) -> C(12)[left], I1(14)[right]; I1(14) -> A(5)[left], B(9)[right].", huffman_tree_description:"Root(26){ C(12)[0], I1(14)[1]{ A(5)[0], B(9)[1] } }"},
    {action: "Step 7: Traverse tree to assign codes (Left edge = '0', Right edge = '1').", description: "Code for C: Path Root->C = '0'. Code for A: Path Root->I1->A = '10'. Code for B: Path Root->I1->B = '11'.", huffman_codes:{"C":"0", "A":"10", "B":"11"}, huffman_tree_description:"Final Codes - C:0, A:10, B:11"}
  ]} }] },
  "Kruskal’s Algorithm": { brief_explanation: "Greedy MST algorithm. Sorts edges by weight, adds if no cycle formed.",
  pseudocode: `KRUSKAL(Graph G)
  MST = []
  DSU dsu_for_V
  Sort edges E by weight
  FOR EACH edge (u,v,w) IN sorted_edges
    IF FIND_SET(u) != FIND_SET(v) THEN
      ADD (u,v) to MST; UNION_SETS(u,v)
    ENDIF
  ENDFOR
  RETURN MST`,
  python_code: `class DSU: # ... (see previous full code)
def kruskal_mst(num_vertices, edges_list): # edges: (u,v,w)
    edges_list.sort(key=lambda x: x[2])
    mst = []; dsu = DSU(num_vertices); cost = 0
    for u,v,w in edges_list:
        if dsu.union(u,v): # Returns True if u and v were in different sets (no cycle)
            mst.append({'from':chr(65+u),'to':chr(65+v),'weight':w}); cost += w
            if len(mst) == num_vertices -1 : break # Optimization: MST has V-1 edges
    return mst, cost`,
  time_complexity: "O(E log E) or O(E log V) for sorting and DSU.",
  space_complexity: "O(V+E).",
  advantages: "Simple. Works on disconnected graphs (MST forest). Conceptually easy to understand.",
  disadvantages: "Edge sorting can be bottleneck. DSU operations can be complex to implement efficiently from scratch.",
  sample_questions_data: [{ question: "MST using Kruskal's. Graph: (A-B,1), (A-C,4), (B-C,2), (B-D,5), (C-D,3). V: A,B,C,D (0,1,2,3)", simulation_data: { type: "Kruskal", nodes: ["A","B","C","D"], graph: {"A":[["B",1],["C",4]], "B":[["A",1],["C",2],["D",5]], "C":[["A",4],["B",2],["D",3]],"D":[["B",5],["C",3]]},
  edges_list_for_sim: [[0,1,1,"A-B"], [0,2,4,"A-C"], [1,2,2,"B-C"], [1,3,5,"B-D"], [2,3,3,"C-D"]], // Represents A=0, B=1, C=2, D=3, added string name for clarity
  steps: [
    {action: "Step 1: Sort all edges by weight (ascending).", description: "Edges: (A-B,1), (B-C,2), (C-D,3), (A-C,4), (B-D,5). Initialize Disjoint Set Union (DSU): {A},{B},{C},{D}. MST edges = [], Total Cost = 0.", mst_edges:[], total_mst_cost:0, visited_nodes:[], edge_considered:null},
    {action: "Step 2: Consider edge (A-B,1).", description: "Find(A) is {A}, Find(B) is {B}. They are different sets. Add (A-B,1) to MST. Perform Union(A,B). DSU: {A,B},{C},{D}. MST: [(A-B,1)]. Cost = 1.", edge_considered: {from:"A",to:"B",weight:1}, visited_nodes: ["A","B"], mst_edges:[{from:"A",to:"B",weight:1}], total_mst_cost:1},
    {action: "Step 3: Consider edge (B-C,2).", description: "Find(B) is {A,B}, Find(C) is {C}. Different sets. Add (B-C,2) to MST. Perform Union(B,C). DSU: {A,B,C},{D}. MST: [(A-B,1), (B-C,2)]. Cost = 1+2=3.", edge_considered: {from:"B",to:"C",weight:2}, visited_nodes: ["A","B","C"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2}], total_mst_cost:3},
    {action: "Step 4: Consider edge (C-D,3).", description: "Find(C) is {A,B,C}, Find(D) is {D}. Different sets. Add (C-D,3) to MST. Perform Union(C,D). DSU: {A,B,C,D}. MST: [(A-B,1), (B-C,2), (C-D,3)]. Cost = 3+3=6. MST has V-1=3 edges. Algorithm can terminate.", edge_considered: {from:"C",to:"D",weight:3}, visited_nodes: ["A","B","C","D"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6},
    {action: "Step 5: Consider edge (A-C,4).", description: "Find(A) is {A,B,C,D}, Find(C) is {A,B,C,D}. Same set. Adding (A-C,4) would form a cycle. Skip.", edge_considered: {from:"A",to:"C",weight:4}},
    {action: "Step 6: Consider edge (B-D,5).", description: "Find(B) is {A,B,C,D}, Find(D) is {A,B,C,D}. Same set. Adding (B-D,5) would form a cycle. Skip.", edge_considered: {from:"B",to:"D",weight:5}},
    {action: "All edges processed or MST complete. Final MST Edges: (A-B,1), (B-C,2), (C-D,3).", description: "Total Cost of MST is 6.", mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6, visited_nodes:["A","B","C","D"]}
  ]} }] },
  "Prim’s Algorithm": { brief_explanation: "Greedy MST. Builds tree one vertex at a time, adding cheapest edge from a vertex in MST to one outside.",
  pseudocode: `PRIM(Graph G, start_vertex s)
  min_cost[v] = infinity; parent[v] = null; in_mst[v] = false
  min_cost[s] = 0
  PQ = min-priority queue with all vertices (key=min_cost)
  MST_edges = []
  WHILE PQ not empty
    u = PQ.extract_min()
    in_mst[u] = true
    IF parent[u] != null THEN ADD (parent[u], u) to MST_edges
    FOR EACH neighbor v of u
      IF !in_mst[v] AND weight(u,v) < min_cost[v] THEN
        min_cost[v] = weight(u,v); parent[v] = u; PQ.decrease_key(v)
      ENDIF
    ENDFOR
  ENDFOR
  RETURN MST_edges`,
  python_code: `import heapq
def prim_mst(num_vertices, adj_list_map, start_node_idx=0): # adj_list_map: {u_idx:[(v_idx,w),...]}
    min_cost_to_reach = [float('inf')] * num_vertices
    parent_in_mst = [-1] * num_vertices # Stores parent of vertex i in the MST
    in_mst_set = [False] * num_vertices
    
    # (cost_to_reach_node, node_to_add_to_mst, node_already_in_mst_that_connects_it)
    pq = [(0, start_node_idx, -1)] 
    min_cost_to_reach[start_node_idx] = 0
    
    mst_edges_result = []
    total_mst_cost_val = 0
    
    while pq and len(mst_edges_result) < num_vertices -1 : # Optimization for early exit
        cost, u, prev_u_in_mst = heapq.heappop(pq)
        
        if in_mst_set[u]: # If already included in MST, skip
            continue
            
        in_mst_set[u] = True
        total_mst_cost_val += cost # Add cost of edge that connected u to MST
        
        if prev_u_in_mst != -1: # Avoid adding a "null" edge for the start node
            mst_edges_result.append({'from': chr(65 + prev_u_in_mst), 'to': chr(65 + u), 'weight': cost})

        # For neighbors of u
        for v_neighbor, weight_uv in adj_list_map.get(u, []):
            if not in_mst_set[v_neighbor] and weight_uv < min_cost_to_reach[v_neighbor]:
                min_cost_to_reach[v_neighbor] = weight_uv
                parent_in_mst[v_neighbor] = u # Store u as potential parent for v_neighbor
                heapq.heappush(pq, (weight_uv, v_neighbor, u)) # u is the node in MST connecting to v_neighbor
                
    return mst_edges_result, total_mst_cost_val`,
  time_complexity: "O(E log V) with binary heap/adj list. O(V^2) with adj matrix.",
  space_complexity: "O(V+E).",
  advantages: "Faster than Kruskal's for dense graphs (with adj matrix or Fibonacci heap). Conceptually simpler than Kruskal's DSU part for some.",
  disadvantages: "Slightly more complex than Kruskal's edge sorting for sparse graphs. May not handle disconnected graphs as naturally as Kruskal's (builds one tree).",
  sample_questions_data: [{ question: "MST using Prim's from A. Graph: (A-B,1), (A-C,4), (B-C,2), (B-D,5), (C-D,3)", simulation_data: { type: "Prim", nodes: ["A","B","C","D"], start_node:"A", graph: {"A":[["B",1],["C",4]], "B":[["A",1],["C",2],["D",5]], "C":[["A",4],["B",2],["D",3]],"D":[["B",5],["C",3]]},
  adj_list_for_sim: {0:[[1,1],[2,4]], 1:[[0,1],[2,2],[3,5]], 2:[[0,4],[1,2],[3,3]], 3:[[1,5],[2,3]]}, // A=0, B=1, C=2, D=3
  steps: [
    {action: "Step 1: Start at A. Initialize min_cost[A]=0, others=Infinity. PQ: [(0,A,-1)]. MST Edges: [], Cost: 0.", current_node: "A", distances:{"A":0,"B":Infinity,"C":Infinity,"D":Infinity}, visited_nodes: [], mst_edges:[], total_mst_cost:0, description: "PQ stores (cost_to_reach_node, node_to_add, connecting_node_in_mst)."},
    {action: "Step 2: Pop A (cost 0, from -1) from PQ. Add A to MST set. Current MST Cost=0.", description: "Neighbors of A: B(cost 1 via A), C(cost 4 via A). Update min_cost for B and C. Add (1,B,A) and (4,C,A) to PQ. PQ:[(1,B,A), (4,C,A)].", current_node: "A", visited_nodes: ["A"], mst_edges:[], total_mst_cost:0, edge_considered:null},
    {action: "Step 3: Pop B (cost 1, from A) from PQ. Add edge (A-B,1) to MST. Current MST Cost=1.", description: "Add B to MST set. Neighbors of B: C(cost 2 via B - update C's cost from 4 to 2, parent A to B), D(cost 5 via B). PQ:[(2,C,B), (4,C,A_stale), (5,D,B)].", current_node: "B", visited_nodes: ["A","B"], mst_edges:[{from:"A",to:"B",weight:1}], total_mst_cost:1, edge_considered:{from:"A",to:"B",weight:1}},
    {action: "Step 4: Pop C (cost 2, from B) from PQ. Add edge (B-C,2) to MST. Current MST Cost=1+2=3.", description: "Add C to MST set. Neighbors of C: D(cost 3 via C - update D's cost from 5 to 3, parent B to C). PQ:[(3,D,C), (4,C,A_stale_ignore), (5,D,B_stale)].", current_node: "C", visited_nodes: ["A","B","C"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2}], total_mst_cost:3, edge_considered:{from:"B",to:"C",weight:2}},
    {action: "Step 5: Pop D (cost 3, from C) from PQ. Add edge (C-D,3) to MST. Current MST Cost=3+3=6.", description: "Add D to MST set. PQ is now empty (or remaining items are stale/more expensive). MST has V-1 edges.", current_node: "D", visited_nodes: ["A","B","C","D"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6, edge_considered:{from:"C",to:"D",weight:3}},
    {action: "Final MST Edges: (A-B,1), (B-C,2), (C-D,3). Total Cost: 6.", description: "All nodes included in MST. The final MST edges are highlighted.", mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6, visited_nodes:["A","B","C","D"]}
  ]} }] },
  "Dijkstra’s Algorithm": {
    brief_explanation: "Finds shortest paths from a single source to all other vertices in a weighted graph (non-negative weights).",
    time_complexity: "O(V^2) or O((V+E)logV).",
    space_complexity: "O(V).",
    advantages: "Efficient, guarantees shortest paths for non-negative weights.",
    disadvantages: "Fails with negative edge weights.",
    pseudocode: `DIJKSTRA(Graph G, source s)
  dist[v] = infinity; prev[v] = undefined; dist[s] = 0
  PQ = min-priority queue of vertices (key=dist)
  WHILE PQ not empty
    u = PQ.extract_min()
    FOR EACH neighbor v of u
      alt = dist[u] + weight(u,v)
      IF alt < dist[v] THEN
        dist[v] = alt; prev[v] = u; PQ.decrease_key(v)
      ENDIF
    ENDFOR
  ENDFOR
  RETURN dist, prev`,
    python_code: `import heapq
def dijkstra(graph_adj, start_node): # graph_adj: {node:[(neighbor,weight),...]}
    dist = {n: float('inf') for n in graph_adj}; prev = {n:None for n in graph_adj}
    dist[start_node] = 0; pq = [(0, start_node)] # (current_distance_from_start, node_id)
    
    # Store paths for reconstruction later if needed
    paths = {node: [] for node in graph_adj}
    paths[start_node] = [start_node]

    while pq:
        d, u = heapq.heappop(pq)
        
        if d > dist[u]: continue # Already found shorter path, skip stale entry in PQ
        
        for v_neighbor, weight_uv in graph_adj.get(u,[]):
            if dist[u] + weight_uv < dist[v_neighbor]:
                dist[v_neighbor] = dist[u] + weight_uv
                prev[v_neighbor] = u
                paths[v_neighbor] = paths[u] + [v_neighbor] # Update path to neighbor
                heapq.heappush(pq, (dist[v_neighbor],v_neighbor))
                
    return dist, prev, paths`,
  },
  "DP Foundations": { brief_explanation: "Key concepts: Overlapping Subproblems, Optimal Substructure. Approaches: Memoization (top-down recursive with cache) and Tabulation (bottom-up iterative).",
  pseudocode: `// Memoization (Fibonacci)
memo[]; FUNCTION Fib_Memo(n) ...
// Tabulation (Fibonacci)
dp_table[]; FUNCTION Fib_Tab(n) ...`,
  python_code: `def fib_memo(n, memo={}): ...
def fib_tab(n): ...`,
  time_complexity: "Reduces exponential to polynomial.",
  space_complexity: "Varies by problem (memo table or DP table size).",
  advantages: "Solves complex problems efficiently, optimal solutions.",
  disadvantages: "Identifying state/transitions can be hard. Space can be high.",
  sample_questions_data: [{ question: "Explain Overlapping Subproblems with Fibonacci.", simulation_data: { type: "Generic", steps: [
    {action: "Naive Fib(5) calls Fib(4) & Fib(3)."},
    {action: "Fib(4) calls Fib(3) & Fib(2). Fib(3) computed twice."},
    {action: "DP stores Fib(k) results to avoid re-computation."}
  ]} }] },
  "Fibonacci (DP)": { brief_explanation: "Calculating F(n) = F(n-1) + F(n-2) using DP.",
  pseudocode: `// Tabulation
ALGORITHM Fibonacci_DP(n)
  IF n <= 1 THEN RETURN n
  dp_table = array of size n+1
  dp_table[0] = 0
  dp_table[1] = 1
  FOR i = 2 TO n
    dp_table[i] = dp_table[i-1] + dp_table[i-2]
  ENDFOR
  RETURN dp_table[n]`,
  python_code: `def fib_tabulation(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n], dp # Return table for visualization`,
  time_complexity: "O(n) with DP.",
  space_complexity: "O(n) for standard DP, O(1) for optimized tabulation.",
  advantages: "Huge improvement over O(2^n) naive recursion. Easy to understand.",
  disadvantages: "Matrix exponentiation (O(log n)) is faster for very large n, but more complex.",
  sample_questions_data: [{ question: "Calculate F(6) using tabulation.", simulation_data: { type: "Fibonacci", n_fibonacci: 6, steps: [
    {action: "Initialize dp_table for n=6. dp_table size will be n+1 (7 elements).", description: "dp_table will store F(0) to F(6).", dp_table_fib: [undefined,undefined,undefined,undefined,undefined,undefined,undefined], fib_n: 0, current_val_text:"Initializing DP table"},
    {action: "Base case: dp[0] = 0.", description: "F(0) = 0.", dp_table_fib: [0,undefined,undefined,undefined,undefined,undefined,undefined], fib_n: 0, current_val_text:"dp[0] = 0"},
    {action: "Base case: dp[1] = 1.", description: "F(1) = 1.", dp_table_fib: [0,1,undefined,undefined,undefined,undefined,undefined], fib_n: 1, current_val_text:"dp[1] = 1"},
    {action: "Calculate dp[2] = dp[1] + dp[0] = 1 + 0 = 1.", description: "F(2) = F(1) + F(0). Filling dp_table[2].", dp_table_fib: [0,1,1,undefined,undefined,undefined,undefined], fib_n: 2, fib_val:1, current_val_text:"dp[2] = dp[1] + dp[0] = 1"},
    {action: "Calculate dp[3] = dp[2] + dp[1] = 1 + 1 = 2.", description: "F(3) = F(2) + F(1). Filling dp_table[3].", dp_table_fib: [0,1,1,2,undefined,undefined,undefined], fib_n: 3, fib_val:2, current_val_text:"dp[3] = dp[2] + dp[1] = 2"},
    {action: "Calculate dp[4] = dp[3] + dp[2] = 2 + 1 = 3.", description: "F(4) = F(3) + F(2). Filling dp_table[4].", dp_table_fib: [0,1,1,2,3,undefined,undefined], fib_n: 4, fib_val:3, current_val_text:"dp[4] = dp[3] + dp[2] = 3"},
    {action: "Calculate dp[5] = dp[4] + dp[3] = 3 + 2 = 5.", description: "F(5) = F(4) + F(3). Filling dp_table[5].", dp_table_fib: [0,1,1,2,3,5,undefined], fib_n: 5, fib_val:5, current_val_text:"dp[5] = dp[4] + dp[3] = 5"},
    {action: "Calculate dp[6] = dp[5] + dp[4] = 5 + 3 = 8.", description: "F(6) = F(5) + F(4). Filling dp_table[6].", dp_table_fib: [0,1,1,2,3,5,8], fib_n: 6, fib_val:8, current_val_text:"dp[6] = dp[5] + dp[4] = 8"},
    {action: "Result: F(6) = 8.", description: "The value at dp[6] is the final answer. DP Table: [0, 1, 1, 2, 3, 5, 8].", fib_n: 6, fib_val:8, dp_table_fib: [0,1,1,2,3,5,8], current_val_text:"Final result: F(6) = 8"}
  ]} }] },
  "0/1 Knapsack": {
    brief_explanation: "Maximize value in knapsack of fixed capacity, items taken whole or not at all.",
    time_complexity: "O(N*W).",
    space_complexity: "O(N*W), can be O(W).",
    advantages: "Optimal for 0/1 version. Classic DP.",
    disadvantages: "Pseudo-polynomial time complexity.",
    pseudocode: `KNAPSACK_01(vals, wts, cap, n)
  dp[n+1][cap+1]
  FOR i=1 TO n: FOR w=1 TO cap:
    IF wts[i-1] <= w THEN
      dp[i][w] = MAX(vals[i-1]+dp[i-1][w-wts[i-1]], dp[i-1][w])
    ELSE dp[i][w] = dp[i-1][w]
  RETURN dp[n][cap]`,
    python_code: `def knapsack_01(values, weights, capacity):
    n = len(values); dp = [[0]*(capacity+1) for _ in range(n+1)]
    for i in range(1,n+1):
        for w_cap in range(1,capacity+1): # Renamed w to w_cap for clarity
            # current item is item i-1 in 0-indexed values/weights
            if weights[i-1] <= w_cap: 
                # Option 1: Include item i-1
                # Value = value of item i-1 + max value for remaining capacity (w_cap - weights[i-1]) using previous i-1 items
                val_incl = values[i-1] + dp[i-1][w_cap-weights[i-1]]
                # Option 2: Exclude item i-1
                # Value = max value for same capacity w_cap using previous i-1 items
                val_excl = dp[i-1][w_cap]
                dp[i][w_cap] = max(val_incl, val_excl)
            else: # Item i-1 weight > current capacity w_cap, cannot include
                dp[i][w_cap] = dp[i-1][w_cap] 
    return dp[n][capacity]`,
  },
  "Coin Change (DP)": { brief_explanation: "Min coins for an amount using given denominations.",
  pseudocode: `MIN_COIN_CHANGE_DP(coins, amount)
  dp[amount+1] = infinity; dp[0]=0
  FOR i=1 TO amount: FOR coin IN coins:
    IF coin <= i AND dp[i-coin]!=infinity THEN
      dp[i] = MIN(dp[i], 1 + dp[i-coin])
  RETURN dp[amount] if dp[amount]!=infinity else "Cannot make change"`,
  python_code: `def min_coin_change_dp(coins, amount):
    dp = [float('inf')]*(amount+1); dp[0]=0
    for i in range(1,amount+1):
        for coin in coins:
            if coin <= i and dp[i-coin]!=float('inf'):
                dp[i] = min(dp[i], 1+dp[i-coin])
    return dp[amount] if dp[amount]!=float('inf') else -1`,
  time_complexity: "O(num_coins * amount).",
  space_complexity: "O(amount).",
  advantages: "Optimal for any coin system. Robust.",
  disadvantages: "Less intuitive than greedy for simple cases.",
  sample_questions_data: [{ question: "Min coins for amount 11, coins {1,2,5}.", simulation_data: { type: "CoinChangeDP", coins: [1,2,5], amount: 11, steps: [
    {action: "dp[0]=0. Init dp[1..11]=inf.", variable_states: {dp_table_preview:"[0,inf,inf,...]"}},
    {action: "Amt 1: Coin 1 => dp[1]=dp[0]+1=1.", variable_states: {dp_table_preview:"[0,1,inf,...]"}},
    {action: "Amt 2: Coin 1 => dp[1]+1=2. Coin 2 => dp[0]+1=1. dp[2]=1.", variable_states: {dp_table_preview:"[0,1,1,inf,...]"}},
    // ... (more steps) ...
    {action: "Amt 11: Coin 1 => dp[10]+1. Coin 2 => dp[9]+1. Coin 5 => dp[6]+1. Min is 3 (e.g. 5+5+1). dp[11]=3."},
    {action: "Final min coins for 11 is 3."}
  ]} }] },
  "LCS": {
    brief_explanation: "Longest subsequence common to two sequences. Solved using DP.",
    time_complexity: "O(m*n).",
    space_complexity: "O(m*n), can be O(min(m,n)).",
    advantages: "Optimal. DP table allows reconstruction.",
    disadvantages: "Space can be high for long sequences.",
    pseudocode: `LCS_LEN(X, Y)
  m=len(X); n=len(Y); dp[m+1][n+1]
  FOR i=1 TO m: FOR j=1 TO n:
    IF X[i-1]=Y[j-1] THEN dp[i][j] = 1+dp[i-1][j-1]
    ELSE dp[i][j] = MAX(dp[i-1][j], dp[i][j-1])
  RETURN dp[m][n]`,
    python_code: `def lcs_length_and_string(S1, S2):
    m, n = len(S1), len(S2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if S1[i-1] == S2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    # Reconstruct LCS string
    lcs_str = ""
    i_idx, j_idx = m, n # Renamed for clarity
    while i_idx > 0 and j_idx > 0:
        if S1[i_idx-1] == S2[j_idx-1]:
            lcs_str = S1[i_idx-1] + lcs_str
            i_idx -= 1
            j_idx -= 1
        elif dp[i_idx-1][j_idx] > dp[i_idx][j_idx-1]:
            i_idx -= 1
        else:
            j_idx -= 1
            
    return dp[m][n], lcs_str`,
  },
  "Matrix Chain Multiplication": { brief_explanation: "Optimal parenthesization of matrix chain to minimize scalar multiplications.",
  pseudocode: `MATRIX_CHAIN_ORDER(p) // p: dimensions array
  n = len(p)-1; dp[n][n]; s[n][n] // dp for cost, s for split
  FOR i=1 TO n: dp[i][i]=0
  FOR chain_len=2 TO n: FOR i=1 TO n-chain_len+1:
    j = i+chain_len-1; dp[i][j]=inf
    FOR k=i TO j-1:
      cost = dp[i][k]+dp[k+1][j] + p[i-1]*p[k]*p[j]
      IF cost < dp[i][j]: dp[i][j]=cost; s[i][j]=k
  RETURN dp[1][n], s`,
  python_code: `import sys
def matrix_chain_order(dims): # dims[i-1]xdims[i] for A_i
    n=len(dims)-1 # Number of matrices
    dp=[[0]*n for _ in range(n)] # dp[i][j] = min cost for A_i...A_j
    s=[[0]*n for _ in range(n)] # s[i][j] = split point k for A_i...A_j

    for chain_len in range(2, n + 1): # chain_len is the length of the subchain
        for i in range(n - chain_len + 1):
            j = i + chain_len - 1
            dp[i][j] = sys.maxsize
            for k in range(i, j): # k is the split point: (A_i...A_k)(A_{k+1}...A_j)
                # dims are 0-indexed. For A_i (matrix i, 0-indexed), dims are dims[i] x dims[i+1]
                # Cost = cost(A_i..A_k) + cost(A_{k+1}..A_j) + dims[i]*dims[k+1]*dims[j+1]
                cost = dp[i][k] + dp[k+1][j] + dims[i]*dims[k+1]*dims[j+1]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    s[i][j] = k # Store k for reconstruction
    # To reconstruct:
    # def get_parenthesization(s_table, i, j): ...
    return dp[0][n-1], s # min cost for A_0...A_{n-1} and split table`,
  time_complexity: "O(n^3).",
  space_complexity: "O(n^2).",
  advantages: "Finds optimal parenthesization, significantly reducing multiplications compared to naive order.",
  disadvantages: "Cubic time complexity can be slow for very large number of matrices. Requires matrices to be compatible for multiplication.",
  sample_questions_data: [{ question: "Optimal order for A1(10x30), A2(30x5), A3(5x60). p=[10,30,5,60] (dims array). Matrices are A0, A1, A2.", simulation_data: { type: "MatrixChainMultiplication", matrices_dimensions: [10,30,5,60], steps: [
    {action: "Initialize: dp[i][i]=0 for all i. (Cost of multiplying a single matrix is 0).", description: "dp[0][0]=0 (A0), dp[1][1]=0 (A1), dp[2][2]=0 (A2). 's' table for splits not shown here for brevity.", min_multiplications: 0},
    {action: "Chain Length L=2: Calculate costs for chains of 2 matrices.", description: "dp[i][j] = min cost for A_i...A_j (0-indexed matrices)."},
    {action: "  dp[0][1] (A0*A1): Dims p[0],p[1],p[2] = 10,30,5. Cost = p[0]*p[1]*p[2] = 10*30*5 = 1500.", description: "Matrices A0(10x30), A1(30x5). Split k=0. s[0][1]=0.", min_multiplications: 1500, current_calculation_text: "Cost(A0xA1) = 10*30*5 = 1500"},
    {action: "  dp[1][2] (A1*A2): Dims p[1],p[2],p[3] = 30,5,60. Cost = p[1]*p[2]*p[3] = 30*5*60 = 9000.", description: "Matrices A1(30x5), A2(5x60). Split k=1. s[1][2]=1.", min_multiplications: 9000, current_calculation_text: "Cost(A1xA2) = 30*5*60 = 9000"},
    {action: "Chain Length L=3: Calculate cost for A0*A1*A2 (dp[0][2]).", description: "This involves (A0...Ak) * (A(k+1)...A2). Possible splits k=0."},
    {action: "  Try k=0: (A0) * (A1*A2). Cost = dp[0][0] + dp[1][2] + p[0]*p[1]*p[3].", description: "p[0]=10 (rows A0), p[1]=30 (cols A0/rows A1), p[3]=60 (cols A2). Common dimension for split is p[k+1]=p[1]=30. Cost = 0 + 9000 + 10*30*60 = 9000 + 18000 = 27000.", min_multiplications: 27000, current_calculation_text: "k=0: (A0)x(A1A2) -> dp[0][0]+dp[1][2]+(10*30*60) = 0+9000+18000=27000"},
    {action: "  Try k=1: (A0*A1) * (A2). Cost = dp[0][1] + dp[2][2] + p[0]*p[2]*p[3].", description: "p[0]=10 (rows A0), p[2]=5 (cols A1/rows A2), p[3]=60 (cols A2). Common dimension for split is p[k+1]=p[2]=5. Cost = 1500 + 0 + 10*5*60 = 1500 + 3000 = 4500.", min_multiplications: 4500, current_calculation_text: "k=1: (A0A1)x(A2) -> dp[0][1]+dp[2][2]+(10*5*60) = 1500+0+3000=4500"},
    {action: "  Minimum for dp[0][2] is 4500. So, dp[0][2]=4500, s[0][2]=1 (split after A1).", description: "The split at k=1 ((A0*A1)*A2) is optimal for the chain A0A1A2.", min_multiplications: 4500, optimal_parenthesization: "((A0xA1)xA2)"},
    {action: "Final min cost for A0*A1*A2 is 4500.", min_multiplications: 4500, optimal_parenthesization: "((A0xA1)xA2) from s[0][2]=1 -> (A0...A1)(A2...A2). This indicates the final multiplication is between (A0A1) and A2."}
  ]} }] },
  "TSP (DP)": { brief_explanation: "Traveling Salesperson Problem (Held-Karp DP). Shortest tour visiting all cities once.",
  pseudocode: `TSP_DP(graph_matrix)
  n=num_cities; dp[2^n][n] = infinity
  dp[1][0]=0 // Mask '1' (city 0 visited), end at city 0, cost 0
  FOR mask=1 TO 2^n-1: FOR i=0 TO n-1: // i is current end city
    IF (mask>>i)&1: // If city i in mask
      FOR j=0 TO n-1: // j is previous city
        IF i!=j AND (mask>>j)&1:
          prev_mask = mask XOR (1<<i)
          IF dp[prev_mask][j]!=inf:
            dp[mask][i] = MIN(dp[mask][i], dp[prev_mask][j] + graph[j][i])
  min_tour = inf
  FOR i=1 TO n-1: // Last city before returning to 0
    IF dp[(1<<n)-1][i]!=inf:
      min_tour = MIN(min_tour, dp[(1<<n)-1][i] + graph[i][0])
  RETURN min_tour`,
  python_code: `import sys
def tsp_dp(graph): # graph is adjacency matrix
    n=len(graph); dp=[[float('inf')]*n for _ in range(1<<n)]; dp[1][0]=0 # dp[mask][last_city_idx]
    for mask in range(1, 1<<n):
        for i in range(n): # i is the current last city in the path for this mask
            if (mask>>i)&1: # If city i is in the current set of visited cities (mask)
                for j in range(n): # j is the previous city visited before i
                    if i!=j and (mask>>j)&1: # If j is also in the mask and j != i
                        prev_mask=mask^(1<<i) # Mask representing cities visited before reaching i
                        if dp[prev_mask][j]!=float('inf') and graph[j][i]!=float('inf'):
                            dp[mask][i]=min(dp[mask][i],dp[prev_mask][j]+graph[j][i])
    
    final_mask=(1<<n)-1 # Mask with all cities visited
    min_cost=float('inf')
    # Find the cost to return to the start city (0) from all possible last cities
    for i in range(1,n): # Last city cannot be the start city 0 initially
        if dp[final_mask][i]!=float('inf') and graph[i][0]!=float('inf'):
            min_cost=min(min_cost,dp[final_mask][i]+graph[i][0])
            
    return min_cost if n > 1 else (0 if n==1 else float('inf'))`,
  time_complexity: "O(n^2 * 2^n).",
  space_complexity: "O(n * 2^n).",
  advantages: "Solves TSP optimally. Better than brute-force O(n!).",
  disadvantages: "Exponential, impractical for large n (>20-25).",
  sample_questions_data: [{ question: "TSP for 4 cities, cost matrix given. Find min tour cost.", simulation_data: { type: "TSP", num_nodes: 4, cost_matrix: [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]], steps: [
    {action: "Initialize dp[1][0]=0 (Mask 0001, City 0 visited, end at City 0, Cost 0). All other dp entries = Infinity.", description: "Start city is 0. 'dp[mask][last_city]' stores cost of path visiting cities in 'mask', ending at 'last_city'."},
    {action: "Processing masks of size 2 (2 cities visited):", description: "Iterate through masks with two set bits, one of which is city 0."},
    {action: "  Mask 0011 (Cities {0,1}), end at City 1: dp[0011][1] = dp[0001][0] + cost[0][1] = 0 + 10 = 10.", description: "Path 0->1. Cost 10."},
    {action: "  Mask 0101 (Cities {0,2}), end at City 2: dp[0101][2] = dp[0001][0] + cost[0][2] = 0 + 15 = 15.", description: "Path 0->2. Cost 15."},
    {action: "  Mask 1001 (Cities {0,3}), end at City 3: dp[1001][3] = dp[0001][0] + cost[0][3] = 0 + 20 = 20.", description: "Path 0->3. Cost 20."},
    {action: "Processing masks of size 3 (3 cities visited):", description: "Iterate through masks with three set bits."},
    {action: "  Mask 0111 ({0,1,2}), end at C2: dp[0111][2] = min(dp[0011][1]+cost[1][2], dp[0101][0]+cost[0][2]<-impossible). dp[0011][1]+cost[1][2] = 10+35=45. Path 0->1->2.", description: "Path 0->1->2. Cost 45."},
    {action: "  Mask 0111 ({0,1,2}), end at C1: dp[0111][1] = dp[0101][2]+cost[2][1] = 15+35=50. Path 0->2->1.", description: "Path 0->2->1. Cost 50."},
    {action: "Processing final mask 1111 (All cities {0,1,2,3} visited):", description: "Calculate costs to complete the tour by returning to city 0 from each possible last city (1, 2, or 3)."},
    {action: "  Path ending at C1 (e.g., 0->2->3->1): dp[1111][1] = min(...). Suppose it's 70. Tour: 70 + cost[1][0] = 70 + 10 = 80.", description: "Example: Cost of 0->...->1 is 70. Add cost of 1->0 (10). Total 80."},
    {action: "  Path ending at C2 (e.g., 0->1->3->2): dp[1111][2] = min(...). Suppose it's 65. Tour: 65 + cost[2][0] = 65 + 15 = 80.", description: "Example: Cost of 0->...->2 is 65. Add cost of 2->0 (15). Total 80."},
    {action: "  Path ending at C3 (e.g., 0->1->2->3): dp[1111][3] = min(...). Suppose it's 75. Tour: 75 + cost[3][0] = 75 + 20 = 95.", description: "Example: Cost of 0->...->3 is 75. Add cost of 3->0 (20). Total 95."},
    {action: "Minimum tour cost is 80.", tsp_tour_cost: 80, tsp_tour: ["0","1","3","2","0"], description: "The overall minimum from all possible complete tours is 80. One such tour is 0-1-3-2-0."}
  ]} }] },
  "Floyd-Warshall Algorithm": { brief_explanation: "All-pairs shortest paths. Handles positive/negative edges (no negative cycles). O(V^3).",
  pseudocode: `FLOYD_WARSHALL(W_matrix)
  dist = W
  FOR k=0 TO n-1: FOR i=0 TO n-1: FOR j=0 TO n-1:
    IF dist[i][k] + dist[k][j] < dist[i][j] THEN
      dist[i][j] = dist[i][k] + dist[k][j]
  RETURN dist`,
  python_code: `def floyd_warshall(graph_matrix): # graph_matrix: adj matrix with Infinity for no edge, 0 for self-loops
    n=len(graph_matrix); dist=[row[:] for row in graph_matrix]
    for k_intermediate in range(n): # k_intermediate is the intermediate vertex
        for i_source in range(n): # i_source is the source vertex
            for j_dest in range(n): # j_dest is the destination vertex
                # If path from i to j via k is shorter than current direct/indirect path
                if dist[i_source][k_intermediate]!=float('inf') and \
                   dist[k_intermediate][j_dest]!=float('inf') and \
                   dist[i_source][k_intermediate]+dist[k_intermediate][j_dest] < dist[i_source][j_dest]:
                    dist[i_source][j_dest] = dist[i_source][k_intermediate]+dist[k_intermediate][j_dest]
    return dist`,
  time_complexity: "O(V^3).",
  space_complexity: "O(V^2).",
  advantages: "Simple, finds all-pairs shortest paths, handles negative edges (detects negative cycles if diagonal becomes negative).",
  disadvantages: "High time complexity for large graphs.",
  sample_questions_data: [{ question: "All-pairs shortest paths. Graph: (0-1,3), (0-2,8), (1-2,2), (2-0,5), (2-1,1). Nodes: 0,1,2. Initial Matrix D0:", simulation_data: { type: "FloydWarshall", num_nodes:3, cost_matrix: [[0,3,8],[Infinity,0,2],[5,1,0]], steps: [
    {action: "Initial dist matrix (D0): [[0,3,8],[Inf,0,2],[5,1,0]]", dp_table: [[{value:0},{value:3},{value:8}],[{value:Infinity},{value:0},{value:2}],[{value:5},{value:1},{value:0}]], description:"D[i][j] is current shortest path from i to j not using intermediate vertices yet (or only those with index < current k)."},
    {action: "k=0 (Intermediate vertex 0). Iterate through all (i,j) pairs.", dp_table: [[{value:0},{value:3},{value:8}],[{value:Infinity},{value:0},{value:2}],[{value:5},{value:1},{value:0}]], description:"Check if D[i][j] can be improved by D[i][0]+D[0][j]. For D0, no changes typically occur as paths via 0 are usually direct or already optimal for initial setup."},
    {action: "  (i=1, j=2): D[1][2] vs D[1][0]+D[0][2] => min(2, Inf+8) = 2. No change.", description:"Path 1->2 is 2. Path 1->0->2 is Inf. D[1][2] remains 2."},
    {action: "k=1 (Intermediate vertex 1). Update paths considering 1 as intermediate.", dp_table: [[{value:0},{value:3},{value:5}],[{value:Infinity},{value:0},{value:2}],[{value:5},{value:1},{value:0}]], description:"Check if D[i][j] can be improved by D[i][1]+D[1][j]."},
    {action: "  (i=0, j=2): D[0][2] vs D[0][1]+D[1][2] => min(8, 3+2=5). D[0][2] becomes 5. Path 0->1->2.", description:"Path 0->2 was 8. Path 0->1->2 is 3+2=5. Update D[0][2] to 5."},
    {action: "  (i=2, j=0): D[2][0] vs D[2][1]+D[1][0] => min(5, 1+Inf) = 5. No change.", description:"Path 2->0 is 5. Path 2->1->0 is Inf. D[2][0] remains 5."},
    {action: "k=2 (Intermediate vertex 2). Update paths considering 2 as intermediate.", dp_table: [[{value:0},{value:3},{value:5}],[{value:7},{value:0},{value:2}],[{value:5},{value:1},{value:0}]], description:"Check if D[i][j] can be improved by D[i][2]+D[2][j]."},
    {action: "  (i=1, j=0): D[1][0] vs D[1][2]+D[2][0] => min(Inf, 2+5=7). D[1][0] becomes 7. Path 1->2->0.", description:"Path 1->0 was Inf. Path 1->2->0 is 2+5=7. Update D[1][0] to 7."},
    {action: "  (i=0, j=1): D[0][1] vs D[0][2]+D[2][1] => min(3, 5+1=6). No change.", description:"Path 0->1 is 3. Path 0->2->1 is 5+1=6. D[0][1] remains 3."},
    {action: "Final shortest paths matrix (D_num_nodes or D3): [[0,3,5],[7,0,2],[5,1,0]].", dp_table: [[{value:0},{value:3},{value:5}],[{value:7},{value:0},{value:2}],[{value:5},{value:1},{value:0}]], description:"This table shows shortest path cost between any pair of nodes after considering all intermediates."}
  ]} }] },
  "Bellman-Ford Algorithm": { brief_explanation: "Single-source shortest paths. Handles negative edges, detects negative cycles. O(V*E).",
  pseudocode: `BELLMAN_FORD(Graph G, source s)
  dist[v]=inf; prev[v]=null; dist[s]=0
  FOR i=1 TO |V|-1: FOR EACH edge (u,v,w) IN E:
    IF dist[u]!=inf AND dist[u]+w < dist[v] THEN
      dist[v]=dist[u]+w; prev[v]=u
  FOR EACH edge (u,v,w) IN E: // Check negative cycles
    IF dist[u]!=inf AND dist[u]+w < dist[v] THEN RETURN "Negative Cycle"
  RETURN dist, prev`,
  python_code: `def bellman_ford(num_v, edges, start_node): # edges: (u_idx,v_idx,w) list
    dist = [float('inf')]*num_v; dist[start_node]=0
    predecessor = [None]*num_v

    for iteration_count in range(num_v-1): # Relax edges |V|-1 times
        changed_in_iteration = False
        for u,v,w in edges:
            if dist[u]!=float('inf') and dist[u]+w < dist[v]: 
                dist[v]=dist[u]+w
                predecessor[v] = u
                changed_in_iteration = True
        if not changed_in_iteration and iteration_count > 0: # Optimization
            break
            
    # Check for negative-weight cycles in one more iteration
    negative_cycle_found = False
    for u,v,w in edges:
        if dist[u]!=float('inf') and dist[u]+w < dist[v]: 
            negative_cycle_found = True
            # Optionally, can trace back the cycle using predecessor array
            break # Found one, no need to check further
            
    return dist, predecessor, "Negative Cycle Detected" if negative_cycle_found else None`,
  time_complexity: "O(V*E).",
  space_complexity: "O(V).",
  advantages: "Handles negative edges, detects negative cycles.",
  disadvantages: "Slower than Dijkstra for graphs without negative edges.",
  sample_questions_data: [{ question: "Shortest paths from S. Edges: (S,A,2), (S,B,5), (A,B,-4), (B,C,1). Nodes: S=0,A=1,B=2,C=3", simulation_data: { type: "BellmanFord", num_nodes:4, start_node:0, edges_list: [[0,1,2],[0,2,5],[1,2,-4],[2,3,1]], nodes_map: {0:'S',1:'A',2:'B',3:'C'}, steps: [
    {action: "Iteration 0: Initialize dist[S]=0, others=Infinity.", description: "Distances: {S:0, A:Inf, B:Inf, C:Inf}. Predecessors: {S:N, A:N, B:N, C:N}.", final_distances: {"S":0, "A":Infinity, "B":Infinity, "C":Infinity}},
    {action: "Iteration 1: Relax all edges.", description: "Loop through each edge and update distances if a shorter path is found."},
    {action: "  Edge(S,A,2): dist[A]=min(Inf, dist[S]+2) = 0+2=2. pred[A]=S.", description: "Dist: {S:0, A:2, B:Inf, C:Inf}", final_distances: {"S":0, "A":2, "B":Infinity, "C":Infinity}},
    {action: "  Edge(S,B,5): dist[B]=min(Inf, dist[S]+5) = 0+5=5. pred[B]=S.", description: "Dist: {S:0, A:2, B:5, C:Inf}", final_distances: {"S":0, "A":2, "B":5, "C":Infinity}},
    {action: "  Edge(A,B,-4): dist[B]=min(5, dist[A]-4) = 2-4=-2. pred[B]=A.", description: "Dist: {S:0, A:2, B:-2, C:Inf}", final_distances: {"S":0, "A":2, "B":-2, "C":Infinity}},
    {action: "  Edge(B,C,1): dist[C]=min(Inf, dist[B]+1) = -2+1=-1. pred[C]=B.", description: "Dist: {S:0, A:2, B:-2, C:-1}", final_distances: {"S":0, "A":2, "B":-2, "C":-1}},
    {action: "Iteration 2: Relax all edges again. (|V|-1 = 3 iterations total for 4 nodes).", description: "Check for further improvements."},
    {action: "  Edge(S,A,2): dist[S]+2 (0+2=2) not < dist[A](2). No change.", description: "Dist: {S:0, A:2, B:-2, C:-1}"},
    {action: "  Edge(S,B,5): dist[S]+5 (0+5=5) not < dist[B](-2). No change.", description: "Dist: {S:0, A:2, B:-2, C:-1}"},
    {action: "  Edge(A,B,-4): dist[A]-4 (2-4=-2) not < dist[B](-2). No change.", description: "Dist: {S:0, A:2, B:-2, C:-1}"},
    {action: "  Edge(B,C,1): dist[B]+1 (-2+1=-1) not < dist[C](-1). No change.", description: "Dist: {S:0, A:2, B:-2, C:-1}. No changes in Iteration 2."},
    {action: "Iteration 3: Relax all edges. (No changes expected as Iteration 2 had none).", description: "Distances have stabilized."},
    {action: "Negative cycle check: Perform one more iteration over edges.", description: "If any dist[u]+w < dist[v] after |V|-1 iterations, a negative cycle exists."},
    {action: "  Check Edge(A,B,-4): dist[A]-4 (-2) is not < dist[B](-2). No cycle indicated here.", description: "Checking all edges..."},
    {action: "Final Distances from S: {S:0, A:2, B:-2, C:-1}. No negative cycle detected in this graph.", final_distances: {"S":0, "A":2, "B":-2, "C":-1}, negative_cycle_detected: false, description:"Shortest paths: S->A (2), S->A->B (-2), S->A->B->C (-1)."}
  ]} }] },
  "N-Queens Problem": {
    brief_explanation: "Place N queens on N×N board, no two attack. Solved via backtracking.",
    time_complexity: "Roughly O(N!), pruned by checks.",
    space_complexity: "O(N) for board/recursion stack.",
    advantages: "Effective backtracking illustration.",
    disadvantages: "Slow for large N.",
    pseudocode: `SOLVE_NQUEENS(board, col, N)
  IF col >= N THEN PRINT solution; RETURN true
  FOR row = 0 TO N-1
    IF IsSafe(board, row, col, N) THEN
      board[row][col] = 1
      IF SolveNQueens(board, col + 1, N) THEN RETURN true
      board[row][col] = 0 // Backtrack
  RETURN false`,
    python_code: `def solve_n_queens(n):
    board = [[0]*n for _ in range(n)]; solutions=[]
    def is_safe(r,c): # ... (check row, diagonals)
        for i in range(c): # Check left row
            if board[r][i] == 1: return False
        for i,j in zip(range(r,-1,-1), range(c,-1,-1)): # Check upper-left diagonal
            if board[i][j] == 1: return False
        for i,j in zip(range(r,n,1), range(c,-1,-1)): # Check lower-left diagonal
            if board[i][j] == 1: return False
        return True
    def solve(col):
        if col==n: solutions.append(["".join("Q" if cell else "." for cell in row) for row in board]); return
        for r_idx in range(n):
            if is_safe(r_idx,col):
                board[r_idx][col]=1; solve(col+1); board[r_idx][col]=0 # Backtrack
    solve(0); return solutions`,
  },
  "Graph Coloring": { brief_explanation: "Assign colors to vertices, no adjacent same color. M-coloring or find chromatic number.",
  pseudocode: `GRAPH_COLORING_UTIL(graph, m, color_assign, v_idx)
  IF v_idx = NumVertices THEN RETURN true
  FOR c = 1 TO m
    IF IsSafeToColor(graph, v_idx, c, color_assign) THEN
      color_assign[v_idx] = c
      IF GRAPH_COLORING_UTIL(graph, m, color_assign, v_idx + 1) THEN RETURN true
      color_assign[v_idx] = 0 // Backtrack
  RETURN false`,
  python_code: `def graph_coloring(graph_adj, num_colors): # graph_adj: {v_name:[neighbor_names]}
    vertices_list = list(graph_adj.keys())
    vertex_color_map = {v_name: 0 for v_name in vertices_list} # 0 means no color
    num_v = len(vertices_list)

    def is_safe_to_color(vertex_name, color_to_try):
        for neighbor_name in graph_adj.get(vertex_name, []):
            if vertex_color_map.get(neighbor_name) == color_to_try:
                return False
        return True

    def solve_coloring(vertex_idx):
        if vertex_idx == num_v: # All vertices are colored
            return True 
        
        current_vertex_name = vertices_list[vertex_idx]
        for color_val in range(1, num_colors + 1): # Try colors 1 to m
            if is_safe_to_color(current_vertex_name, color_val):
                vertex_color_map[current_vertex_name] = color_val # Assign color
                if solve_coloring(vertex_idx + 1): # Recur for next vertex
                    return True
                vertex_color_map[current_vertex_name] = 0 # Backtrack: reset color if next step fails
        return False # No color worked for this vertex at this stage

    solution_exists_flag = solve_coloring(0) # Start with the first vertex (index 0)
    return solution_exists_flag, (vertex_color_map if solution_exists_flag else {})`,
  time_complexity: "O(m^V * V) in worst case, where m is number of colors, V is vertices.",
  space_complexity: "O(V) for recursion stack and color assignments.",
  advantages: "Solves coloring decision/search problems. Illustrates backtracking.",
  disadvantages: "NP-hard. Very slow for large graphs and many colors.",
  sample_questions_data: [{ question: "Color graph with 3 colors. V:{A,B,C,D}. E:{(A-B),(A-C),(B-C),(C-D)}.", simulation_data: { type: "GraphColoring", num_colors:3, graph: {"A":["B","C"],"B":["A","C"],"C":["A","B","D"],"D":["C"]}, steps: [
    {action: "Start. Vertices: A,B,C,D. Max Colors m=3. Attempt to color vertex A.", description: "Colors: 1=Red, 2=Green, 3=Blue. Initial assignment: {}", final_coloring:{}},
    {action: "Vertex A: Try Color 1 (Red). Is it safe? Yes (no colored neighbors). Assign A=Red.", description: "Neighbors of A: B,C. Current: {A:1}", final_coloring:{A:1}},
    {action: "Vertex B: Try Color 1 (Red). Is it safe? No (A is Red, A-B edge).", description: "Current: {A:1, B:0}", final_coloring:{A:1, B:0}},
    {action: "Vertex B: Try Color 2 (Green). Is it safe? Yes. Assign B=Green.", description: "Neighbors of B: A,C. Current: {A:1, B:2}", final_coloring:{A:1, B:2}},
    {action: "Vertex C: Try Color 1 (Red). Is it safe? No (A is Red, A-C edge).", description: "Current: {A:1, B:2, C:0}", final_coloring:{A:1, B:2, C:0}},
    {action: "Vertex C: Try Color 2 (Green). Is it safe? No (B is Green, B-C edge).", description: "Current: {A:1, B:2, C:0}", final_coloring:{A:1, B:2, C:0}},
    {action: "Vertex C: Try Color 3 (Blue). Is it safe? Yes. Assign C=Blue.", description: "Neighbors of C: A,B,D. Current: {A:1, B:2, C:3}", final_coloring:{A:1, B:2, C:3}},
    {action: "Vertex D: Try Color 1 (Red). Is it safe? Yes (C is Blue, C-D edge). Assign D=Red.", description: "Neighbors of D: C. Current: {A:1, B:2, C:3, D:1}", final_coloring:{A:1, B:2, C:3, D:1}},
    {action: "All vertices (A,B,C,D) colored. Solution found.", description: "Final Coloring: A:Red(1), B:Green(2), C:Blue(3), D:Red(1).", final_coloring:{A:1,B:2,C:3,D:1}, solution_found: true}
  ]} }] },
  "Subset Sum Problem": { brief_explanation: "Is there a subset summing to a target? Solved via backtracking or DP.",
  pseudocode: `IS_SUBSET_SUM(set, n, target)
  IF target=0 THEN RETURN true
  IF n=0 AND target!=0 THEN RETURN false
  IF set[n-1] > target THEN RETURN IS_SUBSET_SUM(set, n-1, target)
  RETURN IS_SUBSET_SUM(set,n-1,target) OR IS_SUBSET_SUM(set,n-1,target-set[n-1])`,
  python_code: `def is_subset_sum(num_set, target_sum):
    def solve(idx, current_sum):
        if current_sum==target_sum: return True
        if idx==len(num_set) or current_sum > target_sum: return False
        # Option 1: Include num_set[idx]
        if solve(idx+1, current_sum+num_set[idx]): return True
        # Option 2: Exclude num_set[idx]
        if solve(idx+1, current_sum): return True
        return False
    return solve(0,0)`,
  time_complexity: "O(2^n) for backtracking.",
  space_complexity: "O(n) for recursion stack.",
  advantages: "Simple backtracking. Can find actual subset.",
  disadvantages: "NP-complete. Exponential time.",
  sample_questions_data: [{ question: "Subset of {2,4,6,10} sums to 16?", simulation_data: { type: "SubsetSum", set: [2,4,6,10], target_sum: 16, steps: [
    {action: "Start. Current Sum=0. Considering Item 2 (at index 0).", current_subset:[], current_sum:0, item_considered:2},
    {action: "Option 1: Include 2. New Sum=2. Consider Item 4 (index 1).", current_subset:[2], current_sum:2, item_considered:4, included:true},
    {action: "  Option 1.1: Include 4. New Sum=6. Consider Item 6 (index 2).", current_subset:[2,4], current_sum:6, item_considered:6, included:true},
    {action: "    Option 1.1.1: Include 6. New Sum=12. Consider Item 10 (index 3).", current_subset:[2,4,6], current_sum:12, item_considered:10, included:true},
    {action: "      Option 1.1.1.1: Include 10. New Sum=22. Target (16) exceeded. Backtrack.", current_subset:[2,4,6,10], current_sum:22, solution_found: false, description:"22 > 16, this path is invalid."},
    {action: "      Option 1.1.1.2: Exclude 10. Sum=12. No more items. Backtrack.", current_subset:[2,4,6], current_sum:12, solution_found: false, description:"Reached end of set, sum != target."},
    {action: "    Option 1.1.2: Exclude 6 (from sum 6). New Sum=6. Consider Item 10 (index 3).", current_subset:[2,4], current_sum:6, item_considered:10, included:false},
    {action: "      Option 1.1.2.1: Include 10. New Sum=16. Target Found!", current_subset:[2,4,10], current_sum:16, solution_found: true, description:"Subset [2,4,10] sums to 16."},
    {action: "Solution [2,4,10] found. (Further backtracking could find other solutions if needed)."}
  ]} }] },
  "Hamiltonian Cycle": { brief_explanation: "Cycle visiting each vertex exactly once. NP-complete.",
  pseudocode: `HAMILTONIAN_UTIL(graph, path, pos)
  IF pos = NumVertices THEN
    IF graph[path[pos-1]][path[0]]=1 THEN RETURN true ELSE RETURN false
  FOR v_cand = 1 TO NumVertices-1
    IF IsSafeToAdd(v_cand, graph, path, pos) THEN
      path[pos]=v_cand
      IF HAMILTONIAN_UTIL(graph, path, pos+1) THEN RETURN true
      path[pos]=-1 // Backtrack
  RETURN false`,
  python_code: `def hamiltonian_cycle(graph_matrix): # Adjacency matrix
    n=len(graph_matrix); path=[-1]*n; path[0]=0 # Start at vertex 0
    
    def is_safe(v_candidate, current_pos_in_path):
        # Check if connected to previous vertex in path
        if graph_matrix[path[current_pos_in_path-1]][v_candidate] == 0: 
            return False
        # Check if already visited
        if v_candidate in path[:current_pos_in_path]: 
            return False
        return True

    def solve(current_pos_in_path):
        if current_pos_in_path == n: # All vertices included in path
            # Check if last vertex connects back to the first one
            return graph_matrix[path[current_pos_in_path-1]][path[0]] == 1
        
        for v_try in range(1, n): # Try all other vertices (vertex 0 is start)
            if is_safe(v_try, current_pos_in_path):
                path[current_pos_in_path] = v_try
                if solve(current_pos_in_path + 1): 
                    return True
                path[current_pos_in_path] = -1 # Backtrack
        return False

    if solve(1): # Start solving from the second position in path (pos=1)
        return True, path + [path[0]] # Return cycle
    else:
        return False, []`,
  time_complexity: "O(N!).",
  space_complexity: "O(N).",
  advantages: "Finds cycle if exists.",
  disadvantages: "NP-complete. Highly inefficient.",
  sample_questions_data: [{ question: "Hamiltonian cycle for V:0,1,2,3. E:(0-1),(1-2),(2-3),(3-0),(0-2).", simulation_data: { type: "HamiltonianCycle", num_nodes:4, graph: [[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]], steps: [
    {action: "Start Path=[0,_,_,_]. Current Position (pos)=1. Exploring from vertex 0.", description: "Vertex 0 is fixed as start. Trying to build a path of length N.", hamiltonian_cycle_path:[0]},
    {action: "Pos=1: Try vertex 1. Is (0-1) an edge? Yes. Is 1 already in path [0]? No. Add 1. Path=[0,1,_,_]. Recurse for pos=2.", description: "Path: 0->1. Next vertex to find for position 2.", hamiltonian_cycle_path:[0,1]},
    {action: "Pos=2: Try vertex 2. Is (1-2) an edge? Yes. Is 2 already in path [0,1]? No. Add 2. Path=[0,1,2,_]. Recurse for pos=3.", description: "Path: 0->1->2. Next vertex to find for position 3.", hamiltonian_cycle_path:[0,1,2]},
    {action: "Pos=3: Try vertex 3. Is (2-3) an edge? Yes. Is 3 already in path [0,1,2]? No. Add 3. Path=[0,1,2,3]. Recurse for pos=4.", description: "Path: 0->1->2->3. All N=4 vertices are in path.", hamiltonian_cycle_path:[0,1,2,3]},
    {action: "Pos=4 (all vertices visited). Check if last vertex (3) connects to first (0). Is (3-0) an edge? Yes, graph[3][0]==0 (No, this example data graph[3][0]=0. Let's assume it was 1 for a cycle for example purpose). If graph[3][0]==1, cycle found.", description: "Path is [0,1,2,3]. For a cycle, graph[path[3]][path[0]] (graph[3][0]) must be 1. In this data, it's 0. So, NO cycle with this path. Backtrack.", solution_found: false},
    {action: "Backtrack from Path=[0,1,2,3]. Remove 3. Path=[0,1,2,_]. No other choices for pos=3 from (2). Backtrack.", description: "No other vertex than 3 can be tried at pos=3 from vertex 2. Remove 2. Path=[0,1,_,_].", hamiltonian_cycle_path:[0,1,2]},
    {action: "Pos=2 (from 1): Try vertex 3 (if (1-3) edge exists and 3 not in [0,1])... (This example will not find a cycle if graph[3][0]=0). Assuming a different graph or path for illustration: e.g. Path: 0->2->3->1. Check graph[1][0].", description: "The simulation would continue exploring other paths by backtracking until a valid Hamiltonian cycle is found or all possibilities are exhausted."},
    {action: "Example of a found cycle (if graph allows): Path [0,2,3,1]. Check edge (1-0). If exists, Hamiltonian Cycle Found: [0,2,3,1,0].", hamiltonian_cycle_path:[0,2,3,1,0], solution_found: true, description: "This step shows a hypothetical successful outcome if the graph data supported it."}
  ]} }] },
  "15-Puzzle Problem": { brief_explanation: "Sliding puzzle. Solved via A* or Branch and Bound.",
  pseudocode: `SOLVE_15PUZZLE_BB(initial_state, goal_state)
  PQ = Min-PQ of nodes (state, cost_g, heuristic_h)
  visited = set()
  root = (initial, 0, Heuristic(initial))
  WHILE PQ not empty
    curr_node = PQ.extract_min()
    IF curr_node.state = goal THEN RETURN path
    ADD curr_node.state to visited
    FOR EACH valid_move: next_state = ApplyMove(...)
      IF next_state NOT IN visited:
        child_node = (next_state, g+1, Heuristic(next_state))
        PQ.add(child_node)
  RETURN "No solution"`,
  python_code: `# Full A* for 15-Puzzle is complex. Placeholder.
def solve_15_puzzle(initial, goal): return "Path (conceptual)"`,
  time_complexity: "Exponential (O(b^d)). Depends on heuristic.",
  space_complexity: "Exponential.",
  advantages: "Classic AI search. Demonstrates heuristic search.",
  disadvantages: "Large state space. Solvability depends on parity.",
  sample_questions_data: [{ question: "Solve 3-Puzzle: Initial [[1,2],[0,3]], Goal [[1,2],[3,0]]. (0 is blank)", simulation_data: { type: "FifteenPuzzle", initial_board:[[1,2],[0,3]], goal_board:[[1,2],[3,0]], steps: [
    {action: "Start Node: Initial State [[1,2],[ ,3]]. Blank at (1,0). Cost g=0. Heuristic h=1 (tile '3' is 1 Manhattan distance from goal). Total f=g+h=1.", description: "Possible moves for blank: Right, Up. Priority Queue (PQ) stores (f_cost, g_cost, state, path). PQ: [(1, 0, [[1,2],[0,3]], [])].", puzzle_board_state:[[1,2],[0,3]], puzzle_cost:0, puzzle_heuristic:1, bb_decision: "Expand initial state."},
    {action: "Pop node with f=1 from PQ. State: [[1,2],[ ,3]]. Path: [].", description: "Explore children of this state."},
    {action: "  Move 1: Blank Right. New state: [[1,2],[3, ]]. Blank at (1,1). Cost g=1. Heuristic h=0 (all tiles in place). f=1+0=1.", description: "Path: ['Right']. Add to PQ: (1, 1, [[1,2],[3, ]], ['Right']).", puzzle_board_state:[[1,2],[3,0]], puzzle_cost:1, puzzle_heuristic:0, bb_decision: "Consider Move: Blank Right"},
    {action: "  Move 2: Blank Up. New state: [[1,2],[ ,3]] -> [[ ,2],[1,3]]. Blank at (0,0). Cost g=1. Heuristic h=2 ('1' and '3' misplaced). f=1+2=3.", description: "Path: ['Up']. Add to PQ: (3, 1, [[0,2],[1,3]], ['Up']).", puzzle_board_state:[[0,2],[1,3]], puzzle_cost:1, puzzle_heuristic:2, bb_decision: "Consider Move: Blank Up"},
    {action: "PQ Pop node with f=1 (lowest f-cost). State: [[1,2],[3, ]]. Path: ['Right'].", description: "This state is the GOAL state! [[1,2],[3,0]].", puzzle_board_state:[[1,2],[3,0]], puzzle_cost:1, puzzle_heuristic:0},
    {action: "Goal state [[1,2],[3, ]] reached! Path: ['Right'].", description: "The current state matches the goal state. Solution found.", solution_path: ["Move Blank Right"], solution_found: true}
  ]} }] },
  "0/1 Knapsack (BB)": { brief_explanation: "0/1 Knapsack using Branch and Bound. Prunes unpromising branches using upper bounds.",
  pseudocode: `KNAPSACK_BB(items, capacity)
  Sort items by v/w ratio desc.
  PQ = Max-PQ of nodes (profit, weight, level, upper_bound)
  max_profit = 0
  root = (0,0,0, UpperBound(...))
  WHILE PQ not empty
    cp,cw,level,ub = PQ.extract_max()
    IF ub <= max_profit THEN CONTINUE
    IF level = N THEN max_profit=MAX(max_profit,cp); CONTINUE
    // Option 1: Include item[level]
    IF cw+item[level].w <= cap:
      profit_incl=cp+item[level].v; ub_incl=UpperBound(...)
      IF ub_incl > max_profit: PQ.add(...)
    // Option 2: Exclude item[level]
    ub_excl=UpperBound(...); IF ub_excl > max_profit: PQ.add(...)
  RETURN max_profit`,
  python_code: `# Full Knapsack BB is complex. Placeholder.
def knapsack_bb(values,weights,capacity): return "Max Profit (BB)"`,
  time_complexity: "Exponential O(2^n), but often better due to pruning.",
  space_complexity: "Exponential for PQ.",
  advantages: "Can be more efficient than DP for some instances. Finds optimal solution.",
  disadvantages: "Relies on good bounding function. Worst-case exponential. Complex to implement.",
  sample_questions_data: [{ question: "0/1 Knapsack BB. Items (ID,V,W,Ratio): I1(10,2,5), I2(10,4,2.5), I3(12,6,2), I4(18,9,2). Capacity 15. (Items sorted by ratio for BB).", simulation_data: { type: "ZeroOneKnapsackBB", items:[{'name':'I1','value':10,'weight':2,'ratio':5},{'name':'I2','value':10,'weight':4,'ratio':2.5},{'name':'I3','value':12,'weight':6,'ratio':2},{'name':'I4','value':18,'weight':9,'ratio':2}], capacity:15, steps: [
    {action: "Initialize: MaxProfit = 0. Create PQ (stores nodes: UB, Profit, Weight, Level). Items sorted by V/W ratio: I1, I2, I3, I4.", description: "Level indicates current item being considered (0 to N-1).", bb_max_profit:0},
    {action: "Root Node (Level 0): Current Profit(cp)=0, Weight(cw)=0. Calculate Upper Bound (UB) using fractional knapsack for remaining items {I1,I2,I3,I4} and capacity 15.", description: "UB = I1(10) + I2(10) + I3(12) + I4(18 * (15-2-4-6)/9) = 10+10+12 + 18*(3/9) = 32 + 6 = 38. Add (UB=38, cp=0, cw=0, Lvl=0) to PQ.", bb_node_id:"Root", bb_profit:0, bb_weight:0, bb_upper_bound:38},
    {action: "Pop Node from PQ: (UB=38, cp=0, cw=0, Lvl=0). MaxProfit=0. UB > MaxProfit. Consider Item I1 (V=10, W=2).", bb_node_id:"Root", bb_decision:"Process I1 (Level 0)"},
    {action: "  Branch 1 (Include I1): cp=10, cw=2. Lvl=1. Remaining cap=13. UB_incl = 10 + FracKnap({I2,I3,I4}, cap=13) = 10 + (10+12+18*(13-4-6)/9) = 10 + 22 + 18*(3/9) = 10+22+6 = 38. Add (UB=38, cp=10, cw=2, Lvl=1) to PQ.", bb_node_id:"N1_Incl_I1", bb_profit:10, bb_weight:2, bb_upper_bound:38, bb_decision:"Node after Including I1"},
    {action: "  Branch 2 (Exclude I1): cp=0, cw=0. Lvl=1. Remaining cap=15. UB_excl = 0 + FracKnap({I2,I3,I4}, cap=15) = (10+12+18*(15-4-6)/9) = 22 + 18*(5/9) = 22 + 10 = 32. Add (UB=32, cp=0, cw=0, Lvl=1) to PQ.", bb_node_id:"N2_Excl_I1", bb_profit:0, bb_weight:0, bb_upper_bound:32, bb_decision:"Node after Excluding I1"},
    {action: "Pop Node from PQ: (UB=38, cp=10, cw=2, Lvl=1). MaxProfit=0. UB > MaxProfit. Consider Item I2 (V=10, W=4).", bb_node_id:"N1_Incl_I1", bb_decision:"Process I2 (Level 1)"},
    {action: "    Branch 1.1 (Include I1, Include I2): cp=20, cw=6. Lvl=2. Rem cap=9. UB = 20 + FracKnap({I3,I4}, cap=9) = 20 + (12+18*(9-6)/9) = 20+12+6=38. Add (UB=38, P=20,W=6,Lvl=2). Update MaxProfit=20 (if cp > MaxProfit).", bb_node_id:"N1.1_Incl_I2", bb_profit:20, bb_weight:6, bb_upper_bound:38, bb_decision:"Node after Including I2", bb_max_profit:20},
    {action: "    Branch 1.2 (Include I1, Exclude I2): cp=10, cw=2. Lvl=2. Rem cap=13. UB = 10 + FracKnap({I3,I4}, cap=13) = 10 + (12+18*(13-6)/9) = 10+12+14 = 36. Add (UB=36, P=10,W=2,Lvl=2).", bb_node_id:"N1.2_Excl_I2", bb_profit:10, bb_weight:2, bb_upper_bound:36, bb_decision:"Node after Excluding I2"},
    {action: "Pop Node from PQ: (UB=38, cp=20, cw=6, Lvl=2). MaxProfit=20. UB > MaxProfit. Consider Item I3 (V=12, W=6).", bb_node_id:"N1.1_Incl_I2", bb_decision:"Process I3 (Level 2)"},
    {action: "      Branch 1.1.1 (Incl I1,I2,I3): cp=32, cw=12. Lvl=3. Rem cap=3. UB = 32 + FracKnap({I4}, cap=3) = 32 + 18*(3/9) = 32+6=38. Add. MaxProfit=32.", bb_node_id:"N1.1.1_Incl_I3", bb_profit:32, bb_weight:12, bb_upper_bound:38, bb_decision:"Node after Including I3", bb_max_profit:32},
    {action: "      Branch 1.1.2 (Incl I1,I2,Excl I3): cp=20, cw=6. Lvl=3. Rem cap=9. UB = 20 + FracKnap({I4}, cap=9) = 20 + 18*(9/9) = 20+18=38. Add. MaxProfit still 32.", bb_node_id:"N1.1.2_Excl_I3", bb_profit:20, bb_weight:6, bb_upper_bound:38, bb_decision:"Node after Excluding I3"},
    {action: "Pop Node from PQ: (UB=38, cp=32, cw=12, Lvl=3). MaxProfit=32. Consider Item I4 (V=18,W=9).", bb_node_id:"N1.1.1_Incl_I3", bb_decision:"Process I4 (Level 3)"},
    {action: "        Branch 1.1.1.1 (Incl I1,I2,I3,I4): cw = 12+9=21 > cap(15). Cannot include I4. Path ends.", bb_decision:"Try Including I4 - Fails (overweight)"},
    {action: "        Branch 1.1.1.2 (Incl I1,I2,I3,Excl I4): cp=32, cw=12. Lvl=4 (all items considered). Profit is 32. MaxProfit remains 32. This is a complete solution.", bb_node_id:"N1.1.1.2_Excl_I4", bb_profit:32, bb_weight:12, bb_upper_bound:32, bb_decision:"Node after Excluding I4 - Leaf", bb_max_profit:32, bb_solution_items:[{'name':'I1'},{'name':'I2'},{'name':'I3'}]},
    {action: "Continue popping from PQ. Many nodes might be pruned if their UB <= current MaxProfit (32).", description: "Eventually, all promising nodes are explored."},
    {action: "Final solution: After exploring all viable branches, suppose MaxProfit is 38 (e.g., I1,I2,I4 with specific bounds logic). Items: I1(V10,W2) + I4(V18,W9) = P28, W11 (This path was not optimal in earlier steps, actual optimal is 38). Suppose optimal path is I1,I2, and part of I3/I4. For 0/1, assume final solution is (I1,I2,I4) with P=38, W=15 (Example with different items or a mistake in UB logic for simplicity here). Let's correct to a valid 0/1: Max profit is 32 (I1,I2,I3).", bb_solution_items:[{'name':'I1'},{'name':'I2'},{'name':'I3'}], bb_max_profit:32, description:"This trace is illustrative. Actual BB explores many nodes and prunes. A feasible solution with profit 32 (Items I1,I2,I3) was found."}
  ]} }] },
  "TSP (BB)": { brief_explanation: "TSP using Branch and Bound. Explores partial tours, prunes using lower bounds.",
  pseudocode: `TSP_BB(cost_matrix)
  min_tour_cost = inf; PQ = Min-PQ (lower_bound, cost, city, level, path)
  initial_lb = LowerBound(...)
  PQ.add((initial_lb,0,0,1,path_with_city0))
  WHILE PQ not empty
    lb,cc,curr_city,lvl,curr_path = PQ.extract_min()
    IF lb >= min_tour_cost THEN CONTINUE
    IF lvl=N THEN // All visited
      IF cost_matrix[curr_city][path[0]]!=inf:
        tour_cost = cc + cost_matrix[curr_city][path[0]]
        min_tour_cost = MIN(min_tour_cost, tour_cost)
      CONTINUE
    FOR next_city=0 TO N-1: IF !visited[next_city] AND edge_exists:
      new_path=...; new_cost=...; new_lb=LowerBound(...)
      IF new_lb < min_tour_cost: PQ.add(...)
  RETURN min_tour_cost`,
  python_code: `# Full TSP BB is complex. Placeholder.
def tsp_bb(cost_matrix): return "Min Tour Cost (BB)"`,
  time_complexity: "Exponential O(N!), but prunes better than brute force.",
  space_complexity: "Exponential for PQ.",
  advantages: "Can solve larger instances than DP for some graphs. Optimal solution.",
  disadvantages: "NP-hard. Relies on good lower bound calculation, which can be complex. Worst-case performance is still poor.",
  sample_questions_data: [{ question: "TSP BB for 4 cities, cost matrix given. City 0 is start/end.", simulation_data: { type: "TSPBB", num_nodes:4, cost_matrix: [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]], steps: [
    {action: "Start at City 0. Path=[0]. Level=1. Calculate initial Lower Bound (LB) for root node (e.g., sum of min two edges from each city / 2, or MST cost if applicable). MinTourCost=Infinity.", description: "A common LB is to sum min edge from each row + min edge from each col (reduced cost matrix). Assume LB for root is 70 (example).", bb_node_id:"Root", tsp_tour_bb:[0], bb_current_cost:0, bb_lower_bound:70, tsp_min_tour_cost:Infinity},
    {action: "PQ Pop: (LB=70, Path=[0], City=0, Lvl=1). Current MinTourCost=Infinity. LB < MinTourCost. Expand children (next cities from 0).", bb_node_id:"Root", bb_decision:"Expand from city 0"},
    {action: "  Child 1: Go to City 1. Path=[0,1]. Current Cost=cost[0][1]=10. Lvl=2. Calculate LB for this path (e.g., 10 + LB on remaining cities {2,3} starting from 1, returning to 0). Assume LB_01 = 80. Push(LB=80, Cost=10, Path=[0,1], City=1, Lvl=2).", bb_node_id:"N_0_1", tsp_tour_bb:[0,1], bb_current_cost:10, bb_lower_bound:80},
    {action: "  Child 2: Go to City 2. Path=[0,2]. Current Cost=cost[0][2]=15. Lvl=2. Assume LB_02 = 80. Push(LB=80, Cost=15, Path=[0,2], City=2, Lvl=2).", bb_node_id:"N_0_2", tsp_tour_bb:[0,2], bb_current_cost:15, bb_lower_bound:80},
    {action: "  Child 3: Go to City 3. Path=[0,3]. Current Cost=cost[0][3]=20. Lvl=2. Assume LB_03 = 75. Push(LB=75, Cost=20, Path=[0,3], City=3, Lvl=2).", bb_node_id:"N_0_3", tsp_tour_bb:[0,3], bb_current_cost:20, bb_lower_bound:75},
    {action: "PQ Pop: (LB=75, Path=[0,3], City=3, Lvl=2). Current MinTourCost=Infinity. LB < MinTourCost. Expand children from City 3 (not 0 or 3).", bb_node_id:"N_0_3", bb_decision:"Expand from city 3 (Path 0->3)"},
    {action: "    Child 3.1: Go to City 1 (from 3). Path=[0,3,1]. Cost=20+cost[3][1]=20+25=45. Lvl=3. Assume LB_031=80. Push(LB=80, Cost=45, Path=[0,3,1], City=1, Lvl=3).", bb_node_id:"N_0_3_1", tsp_tour_bb:[0,3,1], bb_current_cost:45, bb_lower_bound:80},
    {action: "    Child 3.2: Go to City 2 (from 3). Path=[0,3,2]. Cost=20+cost[3][2]=20+30=50. Lvl=3. Assume LB_032=80. Push(LB=80, Cost=50, Path=[0,3,2], City=2, Lvl=3).", bb_node_id:"N_0_3_2", tsp_tour_bb:[0,3,2], bb_current_cost:50, bb_lower_bound:80},
    {action: "PQ Pop: (LB=80, Path=[0,1], City=1, Lvl=2) - Assuming this gets popped next if LBs are similar.", bb_node_id:"N_0_1", bb_decision:"Expand from city 1 (Path 0->1)"},
    {action: "      Child 1.1: Go to City 2 (from 1). Path=[0,1,2]. Cost=10+cost[1][2]=10+35=45. Lvl=3. LB_012=?. Push.", bb_node_id:"N_0_1_2", tsp_tour_bb:[0,1,2], bb_current_cost:45, bb_lower_bound:85 /*example*/},
    {action: "      Child 1.2: Go to City 3 (from 1). Path=[0,1,3]. Cost=10+cost[1][3]=10+25=35. Lvl=3. LB_013=?. Push.", bb_node_id:"N_0_1_3", tsp_tour_bb:[0,1,3], bb_current_cost:35, bb_lower_bound:78 /*example*/},
    {action: "PQ Pop: (LB=78, Path=[0,1,3], City=3, Lvl=3). MinTourCost=Inf. Expand from 3. Only unvisited is 2.", bb_node_id:"N_0_1_3", bb_decision:"Expand from city 3 (Path 0->1->3)"},
    {action: "        Child 1.2.1: Go to City 2 (from 3). Path=[0,1,3,2]. Cost=35+cost[3][2]=35+30=65. Lvl=4 (all cities visited).", bb_node_id:"N_0_1_3_2", tsp_tour_bb:[0,1,3,2], bb_current_cost:65},
    {action: "        Complete tour: Path [0,1,3,2]. Add cost back to start: cost[2][0]=15. Total Tour Cost = 65 + 15 = 80. Update MinTourCost=80.", tsp_tour_bb:["0","1","3","2","0"], tsp_tour_cost_bb:80, tsp_min_tour_cost:80, description: "Found a complete tour. MinTourCost is now 80."},
    {action: "Continue exploring other promising nodes in PQ. If a node's LB >= 80, prune it (e.g. N_0_2 with LB=80, N_0_3_1 with LB=80 might be pruned or explored if ties allowed).", bb_pruned: true, description:"Nodes with LB >= current MinTourCost (80) are not explored further."},
    {action: "Final minimum tour cost found: 80.", tsp_tour_cost_bb:80, tsp_tour: ["0","1","3","2","0"], tsp_min_tour_cost:80}
  ]} }] },
  "Job Sequencing (BB)": { brief_explanation: "Job Sequencing with Deadlines via Branch and Bound to maximize profit.",
  pseudocode: `JOB_SEQ_BB(jobs)
  Sort jobs by profit desc.
  PQ = Max-PQ (upper_bound, profit, schedule, level)
  max_profit = 0
  root_ub = UpperBound_JobSeq(...)
  PQ.add((root_ub,0,empty_schedule,0))
  WHILE PQ not empty
    ub,cp,sched,lvl = PQ.extract_max()
    IF ub <= max_profit THEN CONTINUE
    IF lvl = N THEN max_profit=MAX(max_profit,cp); CONTINUE
    // Option 1: Include job[lvl] (if schedulable)
    IF can_schedule(job[lvl], sched):
      new_sched=...; profit_incl=cp+job[lvl].profit
      ub_incl=UpperBound_JobSeq(...)
      IF ub_incl > max_profit: PQ.add(...)
    // Option 2: Exclude job[lvl]
    ub_excl=UpperBound_JobSeq(...)
    IF ub_excl > max_profit: PQ.add(...)
  RETURN max_profit`,
  python_code: `# Full Job Sequencing BB is complex. Placeholder.
def job_sequencing_bb(jobs): return "Max Profit (JobSeq BB)"`,
  time_complexity: "Exponential O(2^n), but prunes.",
  space_complexity: "Exponential for PQ.",
  advantages: "Optimal for NP-hard problem. Pruning helps.",
  disadvantages: "Relies on good upper bound. Worst-case exponential.",
  sample_questions_data: [{ question: "Job Sequencing BB. Jobs (ID,D,P): (J1,2,100), (J2,1,19), (J3,2,27). Max_D=2. Jobs sorted by profit: J1, J3, J2.", simulation_data: { type: "JobSequencingBB", items: [{'id':'J1','deadline':2,'profit':100},{'id':'J3','deadline':2,'profit':27},{'id':'J2','deadline':1,'profit':19}], capacity:2 /*max_slots*/, steps: [
    {action: "Initialize: MaxProfit = 0. Jobs sorted by profit: J1(P100,D2), J3(P27,D2), J2(P19,D1). Max Deadline = 2 slots.", description: "PQ stores (UB, current_profit, schedule_array, level). Level indicates current job index.", bb_max_profit:0, bb_scheduled_jobs:[]},
    {action: "Root Node (Level 0): cp=0, Schedule=[Free,Free]. Calculate Upper Bound (UB) = Sum of profits of all jobs if they could all be scheduled fractionally or ideally = 100+27+19 = 146. Add (UB=146, cp=0, S=[], Lvl=0) to PQ.", bb_node_id:"Root", bb_profit:0, bb_upper_bound:146, bb_scheduled_jobs:[]},
    {action: "Pop Node (Root, UB=146). MaxProfit=0. UB > MaxProfit. Consider Job J1 (P100,D2) at Level 0.", bb_node_id:"Root", bb_decision:"Process J1 (Level 0)"},
    {action: "  Branch 1 (Include J1): J1 can be scheduled in slot 1 (D2-1). cp=100. Schedule=[_,J1]. Lvl=1. UB_incl = 100 + (Profits of J3,J2 if schedulable) = 100 + 27 (J3 in slot 0) = 127. Add (UB=127, cp=100, S=[_,J1], Lvl=1). Update MaxProfit=100.", bb_node_id:"N_Incl_J1", bb_profit:100, bb_upper_bound:127, bb_decision:"Node after Including J1", bb_scheduled_jobs:[{id:'J1',slot:1,profit:100}], bb_max_profit:100},
    {action: "  Branch 2 (Exclude J1): cp=0. Schedule=[Free,Free]. Lvl=1. UB_excl = 0 + (Profits of J3,J2 if schedulable) = 27 (J3 in slot 1) + 19 (J2 in slot 0) = 46. Add (UB=46, cp=0, S=[], Lvl=1).", bb_node_id:"N_Excl_J1", bb_profit:0, bb_upper_bound:46, bb_decision:"Node after Excluding J1", bb_scheduled_jobs:[]},
    {action: "Pop Node (Incl J1, UB=127). MaxProfit=100. UB > MaxProfit. Consider Job J3 (P27,D2) at Level 1.", bb_node_id:"N_Incl_J1", bb_decision:"Process J3 (Level 1)"},
    {action: "    Branch 1.1 (Incl J1, Incl J3): J3 can be scheduled in slot 0 (D2-1, slot 1 taken). cp=100+27=127. Schedule=[J3,J1]. Lvl=2. UB_incl = 127 + (Profit of J2 if schedulable) = 127 (J2 D1, slot 0 taken). Add (UB=127, cp=127, S=[J3,J1], Lvl=2). Update MaxProfit=127.", bb_node_id:"N_InclJ1_InclJ3", bb_profit:127, bb_upper_bound:127, bb_decision:"Node after Including J3", bb_scheduled_jobs:[{id:'J3',slot:0,profit:27},{id:'J1',slot:1,profit:100}], bb_max_profit:127},
    {action: "    Branch 1.2 (Incl J1, Excl J3): cp=100. Schedule=[_,J1]. Lvl=2. UB_excl = 100 + (Profit of J2 if schedulable) = 100 + 19 (J2 in slot 0) = 119. Add (UB=119, cp=100, S=[_,J1], Lvl=2).", bb_node_id:"N_InclJ1_ExclJ3", bb_profit:100, bb_upper_bound:119, bb_decision:"Node after Excluding J3", bb_scheduled_jobs:[{id:'J1',slot:1,profit:100}]},
    {action: "Pop Node (InclJ1,InclJ3, UB=127). MaxProfit=127. UB not > MaxProfit (it's equal, explore). Consider J2 (P19,D1) at Level 2.", bb_node_id:"N_InclJ1_InclJ3", bb_decision:"Process J2 (Level 2)"},
    {action: "      Branch 1.1.1 (Incl J1,Incl J3, Incl J2): J2 (D1) needs slot 0. Slot 0 taken by J3. Cannot schedule J2. Path ends.", bb_decision:"Try Include J2 - Fails (no slot)", bb_pruned:false /*Not pruned by UB, but by feasibility*/},
    {action: "      Branch 1.1.2 (Incl J1,Incl J3, Excl J2): cp=127. Schedule=[J3,J1]. Lvl=3 (all jobs processed). Profit is 127. MaxProfit remains 127. This is a complete feasible schedule.", bb_node_id:"N_InclJ1_InclJ3_ExclJ2", bb_profit:127, bb_upper_bound:127, bb_decision:"Node after Excluding J2 - Leaf", bb_scheduled_jobs:[{id:'J3',slot:0,profit:27},{id:'J1',slot:1,profit:100}], bb_max_profit:127},
    {action: "Pop Node (InclJ1,ExclJ3, UB=119). MaxProfit=127. UB(119) < MaxProfit(127). Prune this branch.", bb_node_id:"N_InclJ1_ExclJ3", bb_pruned:true, description:"This node cannot lead to a better solution than current MaxProfit."},
    {action: "Pop Node (ExclJ1, UB=46). MaxProfit=127. UB(46) < MaxProfit(127). Prune this branch.", bb_node_id:"N_Excl_J1", bb_pruned:true, description:"This node cannot lead to a better solution."},
    {action: "PQ empty. Final Max Profit: 127. Jobs Scheduled: J1 (in slot 1 for D2), J3 (in slot 0 for D1).", bb_scheduled_jobs:[{id:'J3',slot:0,profit:27,deadline:2},{id:'J1',slot:1,profit:100,deadline:2}], bb_max_profit:127, description:"The optimal schedule yields profit 127."}
  ]} }] },
  "Naive String Matching": { brief_explanation: "Checks pattern at every possible start position by sliding one char at a time.",
  pseudocode: `NAIVE_MATCH(Text T, Pattern P)
  n=len(T); m=len(P)
  FOR s=0 TO n-m
    match=true
    FOR j=0 TO m-1: IF P[j]!=T[s+j] THEN match=false; BREAK
    IF match THEN PRINT "Pattern at " + s`,
  python_code: `def naive_search(text,pattern):
    n,m=len(text),len(pattern); occurrences=[]
    for i in range(n-m+1): # i is the starting index in text for comparison
        # Compare pattern with text substring text[i:i+m]
        if text[i:i+m]==pattern: 
            occurrences.append(i)
    return occurrences`,
  time_complexity: "O((n-m+1)*m) ~ O(n*m).",
  space_complexity: "O(1).",
  advantages: "Simple. No preprocessing.",
  disadvantages: "Inefficient, many redundant comparisons.",
  sample_questions_data: [{ question: "Find 'ABC' in 'ABXABCYABC'.", simulation_data: { type: "NaiveStringMatching", text:"ABXABCYABC", pattern:"ABC", steps: [
    {action: "Start search. Text='ABXABCYABC', Pattern='ABC'.", description: "Iterate through all possible starting positions 's' of the pattern in the text.", text_pointer:0, pattern_pointer:0, current_text_window: "ABX"},
    {action: "Shift s=0. Compare P[0..2]='ABC' with T[0..2]='ABX'.", description: "Comparing P with text window starting at index 0."},
    {action: "  T[0](A) == P[0](A). Match. Continue.", text_pointer:0, pattern_pointer:0, comparison_result:"match", current_text_window:"ABX"},
    {action: "  T[1](B) == P[1](B). Match. Continue.", text_pointer:1, pattern_pointer:1, comparison_result:"match", current_text_window:"ABX"},
    {action: "  T[2](X) != P[2](C). Mismatch. Pattern does not match at s=0.", text_pointer:2, pattern_pointer:2, comparison_result:"mismatch", current_text_window:"ABX"},
    {action: "Shift s=1. Compare P[0..2]='ABC' with T[1..3]='BXA'.", description: "Comparing P with text window starting at index 1."},
    {action: "  T[1](B) != P[0](A). Mismatch. Pattern does not match at s=1.", text_pointer:1, pattern_pointer:0, comparison_result:"mismatch", current_text_window:"BXA"},
    {action: "Shift s=2. Compare P[0..2]='ABC' with T[2..4]='XAB'.", description: "Comparing P with text window starting at index 2."},
    {action: "  T[2](X) != P[0](A). Mismatch. Pattern does not match at s=2.", text_pointer:2, pattern_pointer:0, comparison_result:"mismatch", current_text_window:"XAB"},
    {action: "Shift s=3. Compare P[0..2]='ABC' with T[3..5]='ABC'.", description: "Comparing P with text window starting at index 3."},
    {action: "  T[3](A) == P[0](A). Match.", text_pointer:3, pattern_pointer:0, comparison_result:"match", current_text_window:"ABC"},
    {action: "  T[4](B) == P[1](B). Match.", text_pointer:4, pattern_pointer:1, comparison_result:"match", current_text_window:"ABC"},
    {action: "  T[5](C) == P[2](C). Match. All characters match! Pattern found at index s=3.", text_pointer:5, pattern_pointer:2, comparison_result:"match", match_found_at_index:3, current_text_window:"ABC"},
    {action: "Shift s=4. Compare P[0..2]='ABC' with T[4..6]='BCY'.", description: "Comparing P with text window starting at index 4."},
    {action: "  T[4](B) != P[0](A). Mismatch. Pattern does not match at s=4.", text_pointer:4, pattern_pointer:0, comparison_result:"mismatch", current_text_window:"BCY"},
    {action: "Shift s=5. Compare P[0..2]='ABC' with T[5..7]='CYA'.", description: "Comparing P with text window starting at index 5."},
    {action: "  T[5](C) != P[0](A). Mismatch. Pattern does not match at s=5.", text_pointer:5, pattern_pointer:0, comparison_result:"mismatch", current_text_window:"CYA"},
    {action: "Shift s=6. Compare P[0..2]='ABC' with T[6..8]='YAB'.", description: "Comparing P with text window starting at index 6."},
    {action: "  T[6](Y) != P[0](A). Mismatch. Pattern does not match at s=6.", text_pointer:6, pattern_pointer:0, comparison_result:"mismatch", current_text_window:"YAB"},
    {action: "Shift s=7. Compare P[0..2]='ABC' with T[7..9]='ABC'.", description: "Comparing P with text window starting at index 7."},
    {action: "  T[7](A) == P[0](A). Match.", text_pointer:7, pattern_pointer:0, comparison_result:"match", current_text_window:"ABC"},
    {action: "  T[8](B) == P[1](B). Match.", text_pointer:8, pattern_pointer:1, comparison_result:"match", current_text_window:"ABC"},
    {action: "  T[9](C) == P[2](C). Match. All characters match! Pattern found at index s=7.", text_pointer:9, pattern_pointer:2, comparison_result:"match", match_found_at_index:7, current_text_window:"ABC"},
    {action: "No more possible shifts (n-m = 10-3 = 7, s_max=7). Search complete.", description:"Found occurrences at indices 3 and 7."}
  ]} }] },
  "Rabin-Karp Algorithm": { brief_explanation: "Uses hashing for pattern matching. Efficiently updates text substring hash (rolling hash).",
  pseudocode: `RABIN_KARP(Text T, Pattern P, prime q, alphabet_size d)
  n=len(T); m=len(P)
  h_val = d^(m-1) MOD q // Precompute d^(m-1)
  h_pat = hash(P[0..m-1])
  h_txt = hash(T[0..m-1])
  FOR s=0 TO n-m
    IF h_pat=h_txt THEN 
      IF P[0..m-1] = T[s..s+m-1] THEN PRINT "Pattern at " + s // Verify (spurious hit check)
    IF s < n-m THEN // If not the last window
      h_txt = (d*(h_txt - val(T[s])*h_val) + val(T[s+m])) MOD q // Rolling hash update
      IF h_txt < 0 THEN h_txt = h_txt + q // Ensure positive
  ENDFOR`,
  python_code: `def rabin_karp(text, pattern, q=101, d=256): # q prime, d alphabet size
    n,m=len(text),len(pattern); 
    if m > n: return []
    
    h_val=pow(d,m-1,q); # d^(m-1) % q
    p_hash,t_hash=0,0; 
    occurrences=[]
    
    # Calculate initial hash for pattern and first text window
    for i in range(m): 
        p_hash=(d*p_hash + ord(pattern[i])) % q; 
        t_hash=(d*t_hash + ord(text[i])) % q
        
    for s in range(n-m+1): # Slide the pattern over text one by one
        current_text_window = text[s:s+m]
        # Check if hashes match
        if p_hash==t_hash:
            # If hashes match, verify characters (to handle spurious hits)
            if pattern==current_text_window: 
                occurrences.append(s)
        
        # Calculate hash for next window: Remove leading digit, add trailing digit
        if s < n-m:
            t_hash = (d*(t_hash - ord(text[s])*h_val) + ord(text[s+m])) % q
            if t_hash < 0: # Ensure hash is positive
                t_hash += q
    return occurrences`,
  time_complexity: "Avg/Best: O(n+m). Worst: O(n*m) with bad hash/collisions.",
  space_complexity: "O(1).",
  advantages: "Efficient on average. Good for multiple pattern matching.",
  disadvantages: "Worst-case bad with collisions. Relies on good hash function.",
  sample_questions_data: [{ question: "Find 'test' in 'this is a test text'. q=101, d=256.", simulation_data: { type: "RabinKarp", text: "this is a test text", pattern: "test", steps: [
    {action: "Calculate hash of P='test' (H_P). Calculate hash of T[0..3]='this' (H_T0).", description: "h_val = d^(m-1) % q. H_P and H_T0 computed. (Example: H_P=X, H_T0=Y)", text_pointer:0, text_hash:"Hash('this')", pattern_hash:"Hash('test')", current_text_window:"this"},
    {action: "s=0: H_P != H_T0. Slide window.", description: "Compare hashes. If not equal, roll to next window."},
    // ... intermediate steps for rolling hash and comparisons ...
    {action: "s=10: Current window T[10..13]='test'. Calculate/Roll H_T10.", description: "Roll hash for ' is ', then 'is a', ..., until 'test'. Let Hash('test') from text be H_T_text.", text_pointer:10, current_text_window:"test", text_hash:"Hash('test')_text", pattern_hash:"Hash('test')_pattern"},
    {action: "Compare H_P with H_T_text. Hashes match!", description: "Since hashes match, verify characters: 'test' == 'test'. Genuine match.", text_pointer:10, text_hash:"Hash('test')_text", pattern_hash:"Hash('test')_pattern", match_found_at_index:10, spurious_hit:false},
    {action: "s=11: Roll hash from 'test' to 'est '. H_P != H_T11.", description: "Continue sliding and comparing."},
    {action: "Search complete. Found at index 10.", description:"All windows checked."}
  ]} }] },
  "KMP Algorithm": {
    brief_explanation: "Efficient string matching. Preprocesses pattern (LPS array) to avoid redundant comparisons by smart shifts on mismatch.",
    time_complexity: "O(n+m). O(m) for LPS, O(n) for matching.",
    space_complexity: "O(m) for LPS array.",
    advantages: "Linear time. Avoids re-comparing text characters.",
    disadvantages: "LPS computation can be non-trivial initially.",
    pseudocode: `KMP_MATCHER(T, P)
  lps = Compute_LPS_Array(P)
  i=0 (text); j=0 (pattern)
  WHILE i < len(T)
    IF P[j]=T[i] THEN i++; j++
    IF j=len(P) THEN PRINT "Found at " + (i-j); j=lps[j-1]
    ELSE IF i<len(T) AND P[j]!=T[i] THEN
      IF j!=0 THEN j=lps[j-1] ELSE i++
  ENDWHILE`,
    python_code: `def compute_lps(pattern): # ... (see previous full code)
    m=len(pattern); lps=[0]*m; length=0; i=1
    while i<m:
        if pattern[i]==pattern[length]: length+=1; lps[i]=length; i+=1
        else:
            if length!=0: length=lps[length-1]
            else: lps[i]=0; i+=1
    return lps
def kmp_search(text,pattern): # ... (see previous full code)
    n,m=len(text),len(pattern); 
    if m == 0: return []
    if m > n: return []
    lps=compute_lps(pattern); occurrences=[]
    i=0 # index for text
    j=0 # index for pattern
    while i<n:
        if pattern[j]==text[i]: 
            i+=1; j+=1
        
        if j==m: 
            occurrences.append(i-j)
            j=lps[j-1] # Continue search for more occurrences
        elif i<n and pattern[j]!=text[i]:
            # Mismatch after j matches
            # Do not match lps[0..lps[j-1]] characters,
            # they will match anyway
            if j!=0: 
                j=lps[j-1]
            else: 
                i+=1
    return occurrences`,
  },
  "Finite Automata Matching": { brief_explanation: "Builds Finite Automaton (FA) from pattern. Text processed char by char. Reaching accept state = pattern found.",
  pseudocode: `FA_MATCHER(Text T, TransitionFunc delta, pattern_len m)
  q=0 // current state
  FOR i=0 TO len(T)-1
    q = delta(q, T[i])
    IF q = m THEN PRINT "Pattern found ending at " + i
  ENDFOR`,
  python_code: `def compute_transition_function(pattern, alphabet):
    # This is a non-trivial function to implement correctly.
    # It involves simulating KMP's LPS logic for each state and character.
    # Placeholder for conceptual understanding:
    m = len(pattern)
    TF = [[0] * len(alphabet) for _ in range(m + 1)] # Transition Function
    # For state q and character a, TF[q][char_to_idx(a)] is next state.
    # Fill TF based on pattern and alphabet.
    # Example for pattern "AB" and alphabet {'A','B'}:
    # TF[0]['A']=1, TF[0]['B']=0
    # TF[1]['A']=1, TF[1]['B']=2 (accept state for "AB")
    # TF[2]['A']=1, TF[2]['B']=0 (after "AB", if 'A' comes, it's start of new "A"; if 'B', no prefix)
    # This is highly simplified. Real computation uses KMP's LPS logic.
    return TF # This would be a 2D array.

def fa_matcher(text, pattern, alphabet_map): # alphabet_map: {'A':0, 'B':1, ...}
    m = len(pattern)
    if m == 0: return []
    
    # TF = compute_transition_function(pattern, list(alphabet_map.keys())) # This is complex
    # For simulation, let's assume a pre-computed or simplified TF
    # Example TF for pattern "abab" and alphabet {'a':0, 'b':1}
    # States: 0,1,2,3,4 (4 is accept)
    #       a  b
    # Q0 -> 1  0
    # Q1 -> 1  2
    # Q2 -> 3  0
    # Q3 -> 1  4 (Accept)
    # Q4 -> 3  0 (After match, next state if 'a' or 'b')
    # This needs to be correctly generated based on KMP logic.
    # Simplified placeholder TF for "abab"
    TF_example = {
        ("abab", {'a':0, 'b':1}): [
            [1,0], # state 0
            [1,2], # state 1 (a)
            [3,0], # state 2 (ab)
            [1,4], # state 3 (aba)
            [3,0]  # state 4 (abab) - accept
        ]
    }
    TF = TF_example.get((pattern, alphabet_map), [[0]*len(alphabet_map)]*(m+1)) # Fallback if not defined

    current_state = 0
    occurrences = []
    for i, char_in_text in enumerate(text):
        if char_in_text not in alphabet_map: # Handle chars not in alphabet
             current_state = 0 # Reset or specific logic
             continue
        char_idx = alphabet_map[char_in_text]
        current_state = TF[current_state][char_idx]
        if current_state == m: # Reached accept state
            occurrences.append(i - m + 1)
    return occurrences`,
  time_complexity: "O(n) matching after O(m*|Sigma|) preprocessing.",
  space_complexity: "O(m*|Sigma|) for transition table.",
  advantages: "Fast matching. Conceptually powerful.",
  disadvantages: "Preprocessing complex & costly for large alphabets.",
  sample_questions_data: [{ question: "Match 'abab' using FA. Text 'ababcab'. Alphabet {a,b}. (Assume TF is precomputed).", simulation_data: { type: "FiniteAutomataStringMatching", pattern:"abab", text:"ababcab", alphabet:['a','b'], 
  steps: [
    {action: "Start. FA for 'abab'. Initial state q=0.", description: "Text: 'ababcab'", current_fa_state:0},
    {action: "Read T[0]='a'. Transition: delta(q0,'a') -> q1.", description: "State becomes 1 (matched 'a').", current_fa_state:1, text_pointer:0},
    {action: "Read T[1]='b'. Transition: delta(q1,'b') -> q2.", description: "State becomes 2 (matched 'ab').", current_fa_state:2, text_pointer:1},
    {action: "Read T[2]='a'. Transition: delta(q2,'a') -> q3.", description: "State becomes 3 (matched 'aba').", current_fa_state:3, text_pointer:2},
    {action: "Read T[3]='b'. Transition: delta(q3,'b') -> q4 (Accept State!).", description: "Pattern 'abab' found ending at index 3.", current_fa_state:4, match_found_at_index:0, text_pointer:3},
    {action: "Read T[4]='c'. Not in alphabet. Reset to q0 (or as per FA design).", description: "Assuming 'c' resets. State becomes 0.", current_fa_state:0, text_pointer:4},
    {action: "Read T[5]='a'. Transition: delta(q0,'a') -> q1.", description: "State becomes 1.", current_fa_state:1, text_pointer:5},
    {action: "Read T[6]='b'. Transition: delta(q1,'b') -> q2.", description: "State becomes 2.", current_fa_state:2, text_pointer:6},
    {action: "End of text. Search complete. Found at index 0.", description:"Final state q2."}
  ]} }] },
  "String Matching Concepts": { brief_explanation: "Foundations: Prefix Function (LPS), Suffix Trees/Arrays, Rolling Hash.",
  pseudocode: `// LPS (KMP): See KMP.
// Rolling Hash (Rabin-Karp): H_next = ((H_curr - val(old_char)*d^(m-1))*d + val(new_char))%q`,
  python_code: `// LPS computation: See KMP code.
// Rolling hash update: See Rabin-Karp code.`,
  time_complexity: "N/A (concepts). LPS: O(m). Rolling hash update: O(1).",
  space_complexity: "N/A. LPS: O(m). Suffix Tree/Array: O(n) build.",
  advantages: "Fundamental for efficient string algorithms.",
  disadvantages: "Suffix trees complex. Hash collisions.",
  sample_questions_data: [{ question: "Rolling Hash for 'ab' in 'cab'. d=26, q=101.", simulation_data: { type: "Generic", steps: [
    {action: "Hash('ca') = (c*26^1 + a*26^0)%101 = (2*26+0)%101 = 52."},
    {action: "Update for 'ab': OldH=52, OldC='c'(2), NewC='b'(1). d^(m-1)=26^1=26."},
    {action: "NewH = ((52-2*26)*26+1)%101 = 1. Hash('ab') also 1."}
  ]} }] },
  "Optimal BST": {
    brief_explanation: "Constructs BST with minimal expected search cost given key access probabilities.",
    time_complexity: "O(n^3) or O(n^2) with Knuth's optimization.",
    space_complexity: "O(n^2) for DP tables.",
    advantages: "Finds best BST structure for given probabilities.",
    disadvantages: "Complex. Requires accurate probabilities.",
    pseudocode: `OPTIMAL_BST(keys, probs_p, N)
  cost[N+1][N]; root[N+1][N]
  FOR i=0 TO N-1: cost[i][i]=probs_p[i]; root[i][i]=i
  FOR L=2 TO N: FOR i=0 TO N-L:
    j=i+L-1; cost[i][j]=inf; sum_p=SUM(probs_p[k] for k=i to j)
    FOR r=i TO j:
      c_left=(r>i)?cost[i][r-1]:0; c_right=(r<j)?cost[r+1][j]:0
      curr_cost = c_left+c_right+sum_p
      IF curr_cost < cost[i][j]: cost[i][j]=curr_cost; root[i][j]=r
  RETURN cost[0][N-1]`,
    python_code: `def optimal_bst(keys, probs): # keys sorted, probs correspond
    n=len(keys)
    # cost[i][j] = min cost for BST from keys[i] to keys[j]
    # root_table[i][j] stores the root of the optimal BST for keys[i..j]
    cost=[[0.0]*n for _ in range(n)]
    root_table=[[0]*n for _ in range(n)]

    # Sum of probabilities table (prefix sums can optimize this)
    prob_sum_val = [[0.0]*n for _ in range(n)]

    for i in range(n):
        cost[i][i] = probs[i]
        root_table[i][i] = i
        prob_sum_val[i][i] = probs[i]
    
    for i in range(n):
        for j in range(i + 1, n):
            prob_sum_val[i][j] = prob_sum_val[i][j-1] + probs[j]

    for L in range(2, n + 1): # L is length of the key sequence
        for i in range(n - L + 1):
            j = i + L - 1 # Ending index of subsequence
            cost[i][j] = float('inf')
            current_sum_p = prob_sum_val[i][j] # Sum of probs from keys[i] to keys[j]
            
            for r_idx in range(i, j + 1): # r_idx is the potential root (keys[r_idx])
                # Cost of left subtree (keys[i]..keys[r_idx-1])
                c_left = cost[i][r_idx-1] if r_idx > i else 0 
                # Cost of right subtree (keys[r_idx+1]..keys[j])
                c_r = cost[r_idx+1][j] if r_idx < j else 0
                
                current_total_cost = c_left + c_r + current_sum_p
                
                if current_total_cost < cost[i][j]:
                    cost[i][j] = current_total_cost
                    root_table[i][j] = r_idx
                    
    return cost[0][n-1], root_table # Min cost and root table for reconstruction`,
  },
};


const generatedAlgorithmData: AlgorithmData = APP_TOPICS_CONFIG.map((topicConfig, topicIndex) => {
  const topic: Topic = {
    id: `topic-${topicIndex}`,
    title: topicConfig.title,
    icon: ICONS[topicConfig.iconName] || Sparkles, // Fallback icon
    subtopics: topicConfig.subtopics.map((subTopicConfig, subtopicIndex) => {
      const detailsKey = subTopicConfig.detailsKey || subTopicConfig.title;
      const baseDetails = subTopicCompleteDetails[detailsKey] || {};

      let sampleQuestions: SampleQuestion[] = [];
      const rawDataTopic = rawData[topicConfig.title]; // Check against the main topic title of rawData
      // Use subTopicConfig.rawDataKey if provided for specific mapping, otherwise use subTopicConfig.title
      const rawDataSubTopicKey = subTopicConfig.rawDataKey || subTopicConfig.title;
      const rawDataSubTopicArray = rawDataTopic ? rawDataTopic[rawDataSubTopicKey] : undefined;


      if (rawDataSubTopicArray && rawDataSubTopicArray.length > 0) {
        sampleQuestions = rawDataSubTopicArray.map((q: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q.question,
          simulation_data: q.simulation_data as SimulationData,
          solution_steps: q.simulation_data.steps.map((step: SimulationStep, i: number) => step.description || step.action || `Step ${i+1}: Description missing.`),
        }));
      } else if (baseDetails.sample_questions_data && baseDetails.sample_questions_data.length > 0) {
        sampleQuestions = baseDetails.sample_questions_data.map((q_data: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q_data.question,
          simulation_data: q_data.simulation_data as SimulationData,
          solution_steps: q_data.simulation_data.steps.map((step: SimulationStep, i: number) => step.description || step.action || `Step ${i+1}: Description missing.`),
        }));
      } else {
        // Generic fallback if no specific sample questions are found in rawData or subTopicCompleteDetails
        sampleQuestions = [{
          id: `question-${topicIndex}-${subtopicIndex}-0`,
          question: `Sample question for ${subTopicConfig.title}. (Simulation to be implemented)`,
          simulation_data: { type: "Generic", steps: [{ action: `Simulation details to be implemented for this topic: ${subTopicConfig.title}.`, description:"Please define detailed steps if you want a specific simulation here." }] },
          solution_steps: ["Solution steps to be implemented."],
        }];
      }

      const subTopicEntry: SubTopic = {
        id: `subtopic-${topicIndex}-${subtopicIndex}`,
        title: subTopicConfig.title,
        brief_explanation: baseDetails.brief_explanation || `Brief explanation for ${subTopicConfig.title} to be added.`,
        pseudocode: baseDetails.pseudocode || `Pseudocode for ${subTopicConfig.title} to be added.`,
        python_code: baseDetails.python_code || `# Python code for ${subTopicConfig.title} to be implemented.`,
        time_complexity: baseDetails.time_complexity || "To be determined.",
        space_complexity: baseDetails.space_complexity || "To be determined.",
        advantages: baseDetails.advantages || "Advantages to be listed.",
        disadvantages: baseDetails.disadvantages || "Disadvantages to be listed.",
        sample_questions: sampleQuestions,
      };
      return subTopicEntry;
    }),
  };
  return topic;
});

export const ALGORITHM_DATA: AlgorithmData = generatedAlgorithmData;

export const getSubTopicByIds = (topicId: string, subTopicId: string): SubTopic | undefined => {
  const topic = ALGORITHM_DATA.find(t => t.id === topicId);
  return topic?.subtopics.find(st => st.id === subTopicId);
};

export const getQuestionByIds = (topicId: string, subTopicId: string, questionId: string): SampleQuestion | undefined => {
  const subTopic = getSubTopicByIds(topicId, subTopicId);
  return subTopic?.sample_questions.find(q => q.id === questionId);
};
