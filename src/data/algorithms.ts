
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
            {"action": "All nodes visited. Final shortest distances from A: {A:0, B:7, C:3, D:9, E:5}.", "final_distances": {"A": 0, "B": 7, "C": 3, "D": 9, "E": 5}, "visited_nodes": ["A", "C", "E", "B", "D"]}
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
            {"action": "Initialize DP table (m+1 x n+1) with 0s.", "dp_table": Array(8).fill(null).map(() => Array(7).fill({value:0})) },
            {"action": "Comparing X[0](A) with Y[0..5]. Y[4](A) matches. dp[1][5] = dp[0][4]+1 = 1.", "cell_coords": [1,5], "value": 1, "dp_table": [[{value:0}/*...*/],[{value:0}/*...*/,{value:0},{value:0},{value:0},{value:0},{value:1},{value:1}]] /* simplified table update */},
            {"action": "Comparing X[1](B) with Y[0..5]. Y[0](B) matches, dp[2][1]=dp[1][0]+1=1. Y[5](B) matches, dp[2][6]=dp[1][5]+1=2.", "cell_coords": [2,6], "value": 2, "description": "If chars match: LCS[i][j] = LCS[i-1][j-1] + 1. Else: max(LCS[i-1][j], LCS[i][j-1])."},
            {"action": "Table filling complete. LCS Length: 4.", "dp_table": [ // Final Table
                [{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0}],
                [{value:0},{value:0},{value:0},{value:0},{value:0},{value:1},{value:1}],
                [{value:0},{value:1},{value:1},{value:1},{value:1},{value:1},{value:2}],
                [{value:0},{value:1},{value:1},{value:2},{value:2},{value:2},{value:2}],
                [{value:0},{value:1},{value:2},{value:2},{value:2},{value:2},{value:3}],
                [{value:0},{value:1},{value:2},{value:2},{value:3},{value:3},{value:3}],
                [{value:0},{value:1},{value:2},{value:2},{value:3},{value:4},{value:4}],
                [{value:0},{value:1},{value:2},{value:2},{value:3},{value:4},{value:4}]
             ], "cell_coords": [7,6], "value": 4},
            {"action": "Backtracking from dp[7][6]. X[6](B)==Y[5](B). Add 'B'. Move to dp[6][5].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5}], "final_lcs_string":"B... (reconstructing)", "dp_table": [ /* same final table */ ]},
            {"action": "Backtracking from dp[6][5]. X[5](A)==Y[4](A). Add 'A'. Move to dp[5][4].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4}], "final_lcs_string":"AB..."},
            {"action": "Backtracking from dp[5][4]. X[4](D)!=Y[3](C). dp[4][4](2) > dp[5][3](2) (or equal, check preference). Move to dp[4][4] (up).", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4}]},
            {"action": "Backtracking from dp[4][4]. X[3](B)==Y[1](D). (Mistake in sample text trace, X[3] is B, Y[1] is D. This step assumes a match for BCBA for example) Assume BCBA. Y[1](C) for string2='BDCABA'. X[3](B) != Y[1](D). Move to dp[3][4] or dp[4][3]. Let's say dp[3][4](2) is chosen.", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4}]},
            {"action": "Backtracking from dp[3][4]. X[2](C)==Y[2](C). Add 'C'. Move to dp[2][3].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3}], "final_lcs_string":"CAB..."},
            {"action": "Backtracking from dp[2][3]. X[1](B)==Y[0](B). Add 'B'. Move to dp[1][2].", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3},{row:1,col:2}], "final_lcs_string":"BCAB"},
             {"action": "Backtracking finished. Final LCS: 'BCAB'. Length: 4.", "lcs_reconstruction_path": [{row:7,col:6},{row:6,col:5},{row:5,col:4},{row:4,col:4},{row:3,col:4},{row:2,col:3},{row:1,col:2},{row:0,col:1} /* example path */], "final_lcs_string":"BCAB", "value": 4}
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
  "Introduction to Algorithms": LayoutDashboard,
  "Greedy Method": Coins,
  "Dynamic Programming (DP)": Brain,
  "Backtracking & Branch-and-Bound": Milestone,
  "String Matching": Type,
  "Advanced Topics": Settings2,
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
    advantages: "Essential for creating logic and performing repetitive tasks.",
    disadvantages: "Deeply nested structures can be hard to read. Off-by-one errors in loops are common.",
    sample_questions_data: [{
      question: "Given an array [1, 2, 3, 4, 5, 6], print all even numbers and count the total number of odd numbers.",
      simulation_data: {
        type: "ControlStructures",
        initial_array: [1, 2, 3, 4, 5, 6],
        initial_variables: { odd_count: 0, iteration: 0 },
        steps: [
          { action: "Initialize odd_count = 0. Start loop over the input array.", variable_states: { odd_count: 0, iteration: 0}, output_log: ["Loop started."]},
          { action: "Processing item: 1. Condition: 1 % 2 != 0 (Odd). Action: Increment odd_count.", current_array_item: 1, variable_states: { odd_count: 1, iteration: 1 }, output_log: ["Item '1' is Odd. odd_count is now 1."]},
          { action: "Processing item: 2. Condition: 2 % 2 == 0 (Even). Action: Print 2.", current_array_item: 2, variable_states: { odd_count: 1, iteration: 2 }, output_log: ["Item '2' is Even. Printed: 2"]},
          { action: "Processing item: 3. Condition: 3 % 2 != 0 (Odd). Action: Increment odd_count.", current_array_item: 3, variable_states: { odd_count: 2, iteration: 3 }, output_log: ["Item '3' is Odd. odd_count is now 2."]},
          { action: "Processing item: 4. Condition: 4 % 2 == 0 (Even). Action: Print 4.", current_array_item: 4, variable_states: { odd_count: 2, iteration: 4 }, output_log: ["Item '4' is Even. Printed: 4"]},
          { action: "Processing item: 5. Condition: 5 % 2 != 0 (Odd). Action: Increment odd_count.", current_array_item: 5, variable_states: { odd_count: 3, iteration: 5 }, output_log: ["Item '5' is Odd. odd_count is now 3."]},
          { action: "Processing item: 6. Condition: 6 % 2 == 0 (Even). Action: Print 6.", current_array_item: 6, variable_states: { odd_count: 3, iteration: 6 }, output_log: ["Item '6' is Even. Printed: 6"]},
          { action: "Loop finished. Final odd_count: 3.", variable_states: { odd_count: 3, iteration: 6}, output_log: ["Loop finished. Total odd numbers: 3."] }
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
  selected = [activities[0]]
  last_finish = activities[0].finish_time
  FOR i = 1 TO n-1
    IF activities[i].start_time >= last_finish_time THEN
      Add activities[i] to selected
      last_finish_time = activities[i].finish_time
    ENDIF
  ENDFOR
  RETURN selected`,
    python_code: `def activity_selection(activities):
    activities.sort(key=lambda x: x[1]) # Sort by finish times
    selected = [activities[0]]
    last_finish = activities[0][1]
    for i in range(1, len(activities)):
        if activities[i][0] >= last_finish:
            selected.append(activities[i])
            last_finish = activities[i][1]
    return selected`,
    time_complexity: "O(n log n) for sorting, O(n) for selection.",
    space_complexity: "O(n) for sorted list/result.",
    advantages: "Simple, efficient, optimal.",
    disadvantages: "Requires sorting by finish times.",
    sample_questions_data: [{
      question: "Activities (start, finish): (1,4), (3,5), (0,6), (5,7). Select max non-overlapping.",
      simulation_data: {
        type: "ActivitySelection",
        items: [{"id":"A1","start_time":1,"finish_time":4}, {"id":"A2","start_time":3,"finish_time":5}, {"id":"A3","start_time":0,"finish_time":6}, {"id":"A4","start_time":5,"finish_time":7}],
        steps: [
          {action: "Sort by finish: A1(1,4), A2(3,5), A3(0,6), A4(5,7).", variable_states: { selected_activities: [], last_finish_time: "N/A" } },
          {action: "Select A1(1,4). Last finish = 4.", item: {"id":"A1","start_time":1,"finish_time":4}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 } },
          {action: "Consider A2(3,5). Start 3 < 4. Skip.", item: {"id":"A2","start_time":3,"finish_time":5}},
          {action: "Consider A4(5,7). Start 5 >= 4. Select A4. Last finish = 7.", item: {"id":"A4","start_time":5,"finish_time":7}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 } },
          {action: "Finished. Selected: A1, A4.", variable_states: { selected_activities: ["A1", "A4"]}}
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
    jobs.sort(key=lambda x: x[2], reverse=True)
    max_d = max(j[1] for j in jobs)
    slots = [-1] * max_d; profit = 0
    for job_id, deadline, p_val in jobs:
        for i in range(min(max_d, deadline) - 1, -1, -1):
            if slots[i] == -1:
                slots[i] = job_id; profit += p_val; break
    return profit, [s for s in slots if s != -1]`,
    time_complexity: "O(n log n + n*m). Can be O(n log n) with DSU.",
    space_complexity: "O(m) for slots, O(n) for sorting copy.",
    advantages: "Simple greedy strategy. Effective for maximizing profit.",
    disadvantages: "Naive slot finding can be slow.",
    sample_questions_data: [{
      question: "Jobs (ID,D,P): (J1,2,100), (J2,1,19), (J3,2,27). Maximize profit.",
      simulation_data: { type: "JobSequencing", items: [{"id":"J1","deadline":2,"profit":100},{"id":"J2","deadline":1,"profit":19},{"id":"J3","deadline":2,"profit":27}], steps: [
          {action: "Sort: J1(100,2), J3(27,2), J2(19,1). Max_D=2. Slots=[_,_]. Profit=0."},
          {action: "Job J1(100,D2). Slot 1 free. Schedule J1. Slots=[_,J1]. Profit=100.", item:{"id":"J1"}, current_value:100, variable_states:{time_slots:["_","J1"]}},
          {action: "Job J3(27,D2). Slot 1 taken. Slot 0 free. Schedule J3. Slots=[J3,J1]. Profit=127.", item:{"id":"J3"}, current_value:127, variable_states:{time_slots:["J3","J1"]}},
          {action: "Job J2(19,D1). Slot 0 taken. Cannot schedule. Profit=127.", item:{"id":"J2"}, current_value:127},
          {action: "Final Profit: 127. Scheduled: J3 (slot 0), J1 (slot 1)."}
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
    time_complexity: "O(C log C + A/min_coin) if sorting. O(N) if sorted.",
    space_complexity: "O(Target/min_coin) for result list.",
    advantages: "Simple, fast for canonical systems.",
    disadvantages: "Not optimal for all coin systems.",
    sample_questions_data: [{ question: "Make change for 30 using coins {1, 5, 10, 25}.", simulation_data: { type: "CoinChangeGreedy", coins: [1,5,10,25], amount: 30, steps: [
      {action: "Sort coins (desc): [25, 10, 5, 1]. Amount = 30. Result: [], Count: 0", coins_used:[], total_coins:0, remaining_amount:30},
      {action: "Coin 25. 30 >= 25. Take 25. Amount = 5. Result: [25], Count: 1", coins_used:[25], total_coins:1, remaining_amount:5},
      {action: "Coin 10. 5 < 10. Skip.", remaining_amount:5},
      {action: "Coin 5. 5 >= 5. Take 5. Amount = 0. Result: [25, 5], Count: 2", coins_used:[25,5], total_coins:2, remaining_amount:0},
      {action: "Amount is 0. Final coins: [25, 5]. Total: 2 coins."}
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
  advantages: "Optimal prefix codes, efficient compression.",
  disadvantages: "Requires two passes or sending frequency table. Not ideal for uniform frequencies.",
  sample_questions_data: [{ question: "Huffman codes for A:5, B:9, C:12.", simulation_data: { type: "HuffmanCoding", items: [{'char':'A','freq':5},{'char':'B','freq':9},{'char':'C','freq':12}], steps: [
    {action: "PQ: (A:5), (B:9), (C:12)"},
    {action: "Extract A(5), B(9). Merge to I1(14). PQ: [C:12, I1:14]"},
    {action: "Extract C(12), I1(14). Merge to Root(26). PQ: [Root:26]"},
    {action: "Traverse tree. E.g., C=0, I1=1 => (A=10, B=11). Codes: {C:0, A:10, B:11}", huffman_codes:{"C":"0", "A":"10", "B":"11"}, huffman_tree_description:"Root(26) -> C(12) [0], Internal(14) [1] -> A(5)[0], B(9)[1]"}
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
        if dsu.union(u,v):
            mst.append({'from':chr(65+u),'to':chr(65+v),'weight':w}); cost += w
            if len(mst) == num_vertices -1 : break
    return mst, cost`,
  time_complexity: "O(E log E) or O(E log V) for sorting and DSU.",
  space_complexity: "O(V+E).",
  advantages: "Simple. Works on disconnected graphs (MST forest).",
  disadvantages: "Edge sorting can be bottleneck.",
  sample_questions_data: [{ question: "MST using Kruskal's. Graph: (A-B,1), (A-C,4), (B-C,2), (B-D,5), (C-D,3). V: A,B,C,D (0,1,2,3)", simulation_data: { type: "Kruskal", nodes: ["A","B","C","D"], graph: {"A":[["B",1],["C",4]], "B":[["A",1],["C",2],["D",5]], "C":[["A",4],["B",2],["D",3]],"D":[["B",5],["C",3]]},
  edges_list_for_sim: [[0,1,1], [0,2,4], [1,2,2], [1,3,5], [2,3,3]],
  steps: [
    {action: "Edges sorted: (A-B,1), (B-C,2), (C-D,3), (A-C,4), (B-D,5). MST = []. DSU: {A}{B}{C}{D}", mst_edges:[], total_mst_cost:0},
    {action: "Consider (A-B,1). Add. MST: [(A-B,1)]. DSU: {A,B}{C}{D}", edge_considered: ["A","B",1], visited_nodes: ["A","B"], mst_edges:[{from:"A",to:"B",weight:1}], total_mst_cost:1},
    {action: "Consider (B-C,2). Add. MST: [(A-B,1), (B-C,2)]. DSU: {A,B,C}{D}", edge_considered: ["B","C",2], visited_nodes: ["A","B","C"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2}], total_mst_cost:3},
    {action: "Consider (C-D,3). Add. MST: [(A-B,1), (B-C,2), (C-D,3)]. DSU: {A,B,C,D}", edge_considered: ["C","D",3], visited_nodes: ["A","B","C","D"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6},
    {action: "Consider (A-C,4). Skip (cycle).", edge_considered: ["A","C",4]},
    {action: "Consider (B-D,5). Skip (cycle).", edge_considered: ["B","D",5]},
    {action: "Final MST Edges: (A-B,1), (B-C,2), (C-D,3). Total Cost: 6.", mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6}
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
def prim_mst(num_vertices, adj_list, start_node_idx=0): # adj_list: {u:[(v,w),...]}
    # ... (full implementation is longer, see previous detailed response)
    # Simplified:
    min_cost = [float('inf')] * num_vertices; parent = [-1]*num_vertices
    in_mst = [False]*num_vertices; pq = [(0, start_node_idx, -1)] # (cost, to_node, from_node)
    min_cost[start_node_idx]=0; mst_edges=[]; total_cost=0
    while pq:
        cost, u, prev_u = heapq.heappop(pq)
        if in_mst[u]: continue
        in_mst[u]=True; total_cost += cost
        if prev_u != -1: mst_edges.append({'from':chr(65+prev_u),'to':chr(65+u),'weight':cost})
        if u in adj_list:
            for v,w_uv in adj_list[u]:
                if not in_mst[v] and w_uv < min_cost[v]:
                    min_cost[v]=w_uv; parent[v]=u; heapq.heappush(pq, (w_uv,v,u))
    return mst_edges, total_cost`,
  time_complexity: "O(E log V) with binary heap/adj list. O(V^2) with adj matrix.",
  space_complexity: "O(V+E).",
  advantages: "Faster than Kruskal's for dense graphs (with adj matrix or Fibonacci heap).",
  disadvantages: "Slightly more complex than Kruskal's.",
  sample_questions_data: [{ question: "MST using Prim's from A. Graph: (A-B,1), (A-C,4), (B-C,2), (B-D,5), (C-D,3)", simulation_data: { type: "Prim", nodes: ["A","B","C","D"], start_node:"A", graph: {"A":[["B",1],["C",4]], "B":[["A",1],["C",2],["D",5]], "C":[["A",4],["B",2],["D",3]],"D":[["B",5],["C",3]]},
  adj_list_for_sim: {0:[[1,1],[2,4]], 1:[[0,1],[2,2],[3,5]], 2:[[0,4],[1,2],[3,3]], 3:[[1,5],[2,3]]},
  steps: [
    {action: "Start A. PQ:[(0,A,-)]. min_cost[A]=0. MST Edges: [], Cost: 0", current_node: "A", distances:{"A":0,"B":Infinity,"C":Infinity,"D":Infinity}, visited_nodes: [], mst_edges:[], total_mst_cost:0},
    {action: "Pop A. Add to MST. Neighbors: B(cost 1 from A), C(cost 4 from A). PQ:[(1,B,A), (4,C,A)].", current_node: "A", visited_nodes: ["A"], mst_edges:[], total_mst_cost:0, edge_considered:null},
    {action: "Pop B (cost 1 from A). Add (A-B,1). Neighbors of B: C(cost 2, update C's cost in PQ), D(cost 5). PQ:[(2,C,B), (4,C,A - stale), (5,D,B)].", current_node: "B", visited_nodes: ["A","B"], mst_edges:[{from:"A",to:"B",weight:1}], total_mst_cost:1, edge_considered:{from:"A",to:"B",weight:1}},
    {action: "Pop C (cost 2 from B). Add (B-C,2). Neighbors of C: D(cost 3). PQ:[(3,D,C), (5,D,B - stale)].", current_node: "C", visited_nodes: ["A","B","C"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2}], total_mst_cost:3, edge_considered:{from:"B",to:"C",weight:2}},
    {action: "Pop D (cost 3 from C). Add (C-D,3). PQ empty.", current_node: "D", visited_nodes: ["A","B","C","D"], mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6, edge_considered:{from:"C",to:"D",weight:3}},
    {action: "Final MST Edges: (A-B,1), (B-C,2), (C-D,3). Total Cost: 6.", mst_edges:[{from:"A",to:"B",weight:1},{from:"B",to:"C",weight:2},{from:"C",to:"D",weight:3}], total_mst_cost:6}
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
    dist[start_node] = 0; pq = [(0, start_node)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w_uv in graph_adj.get(u,[]):
            if dist[u] + w_uv < dist[v]:
                dist[v] = dist[u] + w_uv; prev[v] = u; heapq.heappush(pq, (dist[v],v))
    return dist, prev`,
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
  pseudocode: `// See DP Foundations`,
  python_code: `// See DP Foundations. Optimized Tabulation:
def fib_opt_tab(n):
    if n <= 1: return n
    a,b=0,1
    for _ in range(2,n+1): c=a+b; a=b; b=c
    return b`,
  time_complexity: "O(n) with DP.",
  space_complexity: "O(n) for standard DP, O(1) for optimized tabulation.",
  advantages: "Huge improvement over O(2^n) naive recursion.",
  disadvantages: "Matrix exponentiation (O(log n)) is faster for very large n.",
  sample_questions_data: [{ question: "Calculate F(6) using tabulation.", simulation_data: { type: "Fibonacci", n_fibonacci: 6, steps: [
    {action: "Initialize dp_table for n=6. dp[0]=0, dp[1]=1.", dp_table_fib: [0,1,undefined,undefined,undefined,undefined,undefined], fib_n: 0, fib_val:0},
    {action: "dp[2] = dp[1]+dp[0] = 1+0=1.", dp_table_fib: [0,1,1], fib_n: 2, fib_val:1},
    {action: "dp[3] = dp[2]+dp[1] = 1+1=2.", dp_table_fib: [0,1,1,2], fib_n: 3, fib_val:2},
    {action: "dp[4] = dp[3]+dp[2] = 2+1=3.", dp_table_fib: [0,1,1,2,3], fib_n: 4, fib_val:3},
    {action: "dp[5] = dp[4]+dp[3] = 3+2=5.", dp_table_fib: [0,1,1,2,3,5], fib_n: 5, fib_val:5},
    {action: "dp[6] = dp[5]+dp[4] = 5+3=8.", dp_table_fib: [0,1,1,2,3,5,8], fib_n: 6, fib_val:8},
    {action: "Result F(6) = 8.", fib_n: 6, fib_val:8}
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
        for w in range(1,capacity+1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1]+dp[i-1][w-weights[i-1]], dp[i-1][w])
            else: dp[i][w] = dp[i-1][w]
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
    python_code: `def lcs_length(X,Y):
    m,n=len(X),len(Y); dp=[[0]*(n+1) for _ in range(m+1)]
    for i in range(1,m+1):
        for j in range(1,n+1):
            if X[i-1]==Y[j-1]: dp[i][j]=1+dp[i-1][j-1]
            else: dp[i][j]=max(dp[i-1][j],dp[i][j-1])
    # ... (reconstruction logic needed for full LCS string) ...
    return dp[m][n]`,
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
    n=len(dims)-1; dp=[[0]*n for _ in range(n)]; s=[[0]*n for _ in range(n)]
    for chain_len in range(2,n+1):
        for i in range(n-chain_len+1):
            j=i+chain_len-1; dp[i][j]=sys.maxsize
            for k in range(i,j):
                cost = dp[i][k]+dp[k+1][j] + dims[i]*dims[k+1]*dims[j+1]
                if cost < dp[i][j]: dp[i][j]=cost; s[i][j]=k
    # reconstruct_path(s, i, j) to get parenthesization
    return dp[0][n-1] # min cost for A_0...A_{n-1}`,
  time_complexity: "O(n^3).",
  space_complexity: "O(n^2).",
  advantages: "Finds optimal parenthesization.",
  disadvantages: "Cubic time complexity.",
  sample_questions_data: [{ question: "Optimal order for A1(10x30), A2(30x5), A3(5x60). p=[10,30,5,60].", simulation_data: { type: "MatrixChainMultiplication", matrices_dimensions: [10,30,5,60], steps: [
    {action: "dp[i][i]=0. dp[0][0]=0, dp[1][1]=0, dp[2][2]=0."},
    {action: "L=2: dp[0][1] (A0*A1) = 10*30*5=1500. dp[1][2] (A1*A2) = 30*5*60=9000."},
    {action: "L=3: dp[0][2] (A0*A1*A2). Try k=0: (A0)(A1*A2)=dp[0][0]+dp[1][2]+10*30*60 = 0+9000+18000=27000."},
    {action: "L=3: dp[0][2]. Try k=1: (A0*A1)(A2)=dp[0][1]+dp[2][2]+10*5*60 = 1500+0+3000=4500."},
    {action: "Min cost for A0*A1*A2 is 4500. Optimal: ((A0*A1)*A2).", min_multiplications: 4500, optimal_parenthesization: "((A0*A1)*A2)"}
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
    n=len(graph); dp=[[float('inf')]*n for _ in range(1<<n)]; dp[1][0]=0
    for mask in range(1, 1<<n):
        for i in range(n):
            if (mask>>i)&1:
                for j in range(n):
                    if i!=j and (mask>>j)&1:
                        prev_mask=mask^(1<<i)
                        if dp[prev_mask][j]!=float('inf'):
                            dp[mask][i]=min(dp[mask][i],dp[prev_mask][j]+graph[j][i])
    final_mask=(1<<n)-1; min_cost=float('inf')
    for i in range(1,n):
        if dp[final_mask][i]!=float('inf'):
            min_cost=min(min_cost,dp[final_mask][i]+graph[i][0])
    return min_cost if n > 1 else 0`,
  time_complexity: "O(n^2 * 2^n).",
  space_complexity: "O(n * 2^n).",
  advantages: "Solves TSP optimally. Better than brute-force O(n!).",
  disadvantages: "Exponential, impractical for large n (>20-25).",
  sample_questions_data: [{ question: "TSP for 4 cities, cost matrix given. Find min tour cost.", simulation_data: { type: "TSP", num_nodes: 4, cost_matrix: [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]], steps: [
    {action: "dp[1][0]=0 (Mask 0001, City 0, Cost 0)."},
    {action: "Mask 0011 (0,1), end at 1: dp[3][1]=dp[1][0]+cost[0][1]=10."},
    // ... many steps for filling DP table ...
    {action: "Final mask 1111. Consider paths ending at 1,2,3 then returning to 0."},
    {action: "Example: Path 0-1-3-2-0. dp[1111][2] = cost of 0-1-3-2. Add cost[2][0].", tsp_tour_cost: 80, tsp_tour: ["0","1","3","2","0"], description: "Example. Shortest tour for this matrix is 0-1-3-2-0 with cost 80."}
  ]} }] },
  "Floyd-Warshall Algorithm": { brief_explanation: "All-pairs shortest paths. Handles positive/negative edges (no negative cycles). O(V^3).",
  pseudocode: `FLOYD_WARSHALL(W_matrix)
  dist = W
  FOR k=0 TO n-1: FOR i=0 TO n-1: FOR j=0 TO n-1:
    IF dist[i][k] + dist[k][j] < dist[i][j] THEN
      dist[i][j] = dist[i][k] + dist[k][j]
  RETURN dist`,
  python_code: `def floyd_warshall(graph_matrix): # graph_matrix: adj matrix with inf for no edge
    n=len(graph_matrix); dist=[row[:] for row in graph_matrix]
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k]!=float('inf') and dist[k][j]!=float('inf') and dist[i][k]+dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k]+dist[k][j]
    return dist`,
  time_complexity: "O(V^3).",
  space_complexity: "O(V^2).",
  advantages: "Simple, finds all-pairs shortest paths, handles negative edges.",
  disadvantages: "High time complexity for large graphs.",
  sample_questions_data: [{ question: "All-pairs shortest paths. Graph: (0-1,3), (0-2,8), (1-2,2), (2-0,5), (2-1,1)", simulation_data: { type: "FloydWarshall", num_nodes:3, cost_matrix: [[0,3,8],[Infinity,0,2],[5,1,0]], steps: [
    {action: "Initial dist matrix (D0): [[0,3,8],[inf,0,2],[5,1,0]]", dp_table: [[{value:0},{value:3},{value:8}],[{value:Infinity},{value:0},{value:2}],[{value:5},{value:1},{value:0}]]},
    {action: "k=0 (intermediate 0). No changes to D0 in this case.", dp_table: [[{value:0},{value:3},{value:8}],[{value:Infinity},{value:0},{value:2}],[{value:5},{value:1},{value:0}]]},
    {action: "k=1 (intermediate 1). D1[0][2]=min(8, D0[0][1]+D0[1][2]=3+2=5). Updated.", dp_table: [[{value:0},{value:3},{value:5}],[{value:Infinity},{value:0},{value:2}],[{value:5},{value:1},{value:0}]]},
    {action: "k=2 (intermediate 2). D2[1][0]=min(inf, D1[1][2]+D1[2][0]=2+5=7). Updated.", dp_table: [[{value:0},{value:3},{value:5}],[{value:7},{value:0},{value:2}],[{value:5},{value:1},{value:0}]]},
    {action: "Final shortest paths matrix D2: [[0,3,5],[7,0,2],[5,1,0]]."}
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
  python_code: `def bellman_ford(num_v, edges, start_node): # edges: (u,v,w) list
    dist = [float('inf')]*num_v; dist[start_node]=0
    for _ in range(num_v-1):
        for u,v,w in edges:
            if dist[u]!=float('inf') and dist[u]+w < dist[v]: dist[v]=dist[u]+w
    for u,v,w in edges: # Check negative cycles
        if dist[u]!=float('inf') and dist[u]+w < dist[v]: return None, "Negative Cycle"
    return dist, None # None for predecessors for simplicity here`,
  time_complexity: "O(V*E).",
  space_complexity: "O(V).",
  advantages: "Handles negative edges, detects negative cycles.",
  disadvantages: "Slower than Dijkstra for graphs without negative edges.",
  sample_questions_data: [{ question: "Shortest paths from S. Edges: (S,A,2), (S,B,5), (A,B,-4), (B,C,1). S=0,A=1,B=2,C=3", simulation_data: { type: "BellmanFord", num_nodes:4, start_node:0, edges_list: [[0,1,2],[0,2,5],[1,2,-4],[2,3,1]], nodes_map: {0:'S',1:'A',2:'B',3:'C'}, steps: [
    {action: "Iter 1: Init dist[S]=0, others=inf.", final_distances: {S:0, A:Infinity, B:Infinity, C:Infinity}},
    {action: "Iter 1, Edge(S,A,2): dist[A]=2. Edge(S,B,5): dist[B]=5.", final_distances: {S:0, A:2, B:5, C:Infinity}},
    {action: "Iter 1, Edge(A,B,-4): dist[B]=min(5, 2-4=-2). dist[B]=-2.", final_distances: {S:0, A:2, B:-2, C:Infinity}},
    {action: "Iter 1, Edge(B,C,1): dist[C]=min(inf, -2+1=-1). dist[C]=-1.", final_distances: {S:0, A:2, B:-2, C:-1}},
    {action: "Iter 2 & 3 (V-1 iterations): No further changes for this graph."},
    {action: "Negative cycle check: No changes. Final Dists: S:0, A:2, B:-2, C:-1.", final_distances: {S:0, A:2, B:-2, C:-1}, negative_cycle_detected: false}
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
  python_code: `def graph_coloring(graph_adj, num_colors): # graph_adj: {v:[neighbors]}
    vertices=list(graph_adj.keys()); colors={v:0 for v in vertices}
    def is_safe(v,c):
        for neighbor in graph_adj.get(v,[]):
            if colors.get(neighbor)==c: return False
        return True
    def solve(v_idx):
        if v_idx==len(vertices): return True
        curr_v = vertices[v_idx]
        for c_val in range(1,num_colors+1):
            if is_safe(curr_v,c_val):
                colors[curr_v]=c_val
                if solve(v_idx+1): return True
                colors[curr_v]=0 # Backtrack
        return False
    return solve(0), colors if solve(0) else ({},{})`,
  time_complexity: "O(m^V * V).",
  space_complexity: "O(V).",
  advantages: "Solves coloring decision/search.",
  disadvantages: "NP-hard. Slow for large graphs.",
  sample_questions_data: [{ question: "Color graph with 3 colors. V:A,B,C,D. E:(A-B),(A-C),(B-C),(C-D).", simulation_data: { type: "GraphColoring", num_colors:3, graph: {"A":["B","C"],"B":["A","C"],"C":["A","B","D"],"D":["C"]}, steps: [
    {action: "Color A=1 (Red). Assignment: {A:1}"},
    {action: "Color B. Try 1(Red)-conflict. Try 2(Green). Assign: {A:1,B:2}"},
    {action: "Color C. Try 1(Red)-conflict A. Try 2(Green)-conflict B. Try 3(Blue). Assign: {A:1,B:2,C:3}"},
    {action: "Color D. Try 1(Red)-safe. Assign: {A:1,B:2,C:3,D:1}"},
    {action: "Solution found: A:1(Red), B:2(Green), C:3(Blue), D:1(Red).", final_coloring:{A:1,B:2,C:3,D:1}}
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
        return solve(idx+1, current_sum+num_set[idx]) or solve(idx+1, current_sum)
    return solve(0,0)`,
  time_complexity: "O(2^n) for backtracking.",
  space_complexity: "O(n) for recursion stack.",
  advantages: "Simple backtracking. Can find actual subset.",
  disadvantages: "NP-complete. Exponential time.",
  sample_questions_data: [{ question: "Subset of {2,4,6,10} sums to 16?", simulation_data: { type: "SubsetSum", set: [2,4,6,10], target_sum: 16, steps: [
    {action: "Start. sum=0. Item 2.", current_subset:[], current_sum:0},
    {action: "Incl 2. sum=2. Item 4.", current_subset:[2], current_sum:2},
    {action: "Incl 4. sum=6. Item 6.", current_subset:[2,4], current_sum:6},
    {action: "Incl 6. sum=12. Item 10.", current_subset:[2,4,6], current_sum:12},
    {action: "Incl 10. sum=22. >16. Backtrack.", current_subset:[2,4,6,10], current_sum:22, solution_found: false},
    {action: "Excl 10 from [2,4,6]. sum=12. End. Backtrack."},
    {action: "Excl 6 from [2,4]. sum=6. Item 10.", current_subset:[2,4], current_sum:6},
    {action: "Incl 10. sum=16. Target Found! Subset: [2,4,10]", current_subset:[2,4,10], current_sum:16, solution_found: true}
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
    n=len(graph_matrix); path=[-1]*n; path[0]=0
    def is_safe(v,pos):
        if graph_matrix[path[pos-1]][v]==0: return False # Not connected
        if v in path[:pos]: return False # Already visited
        return True
    def solve(pos):
        if pos==n: return graph_matrix[path[pos-1]][path[0]]==1
        for v_cand in range(1,n):
            if is_safe(v_cand,pos):
                path[pos]=v_cand
                if solve(pos+1): return True
                path[pos]=-1 # Backtrack
        return False
    return (solve(1), path + [path[0]] if solve(1) else [])`,
  time_complexity: "O(N!).",
  space_complexity: "O(N).",
  advantages: "Finds cycle if exists.",
  disadvantages: "NP-complete. Highly inefficient.",
  sample_questions_data: [{ question: "Hamiltonian cycle for V:0,1,2,3. E:(0-1),(1-2),(2-3),(3-0),(0-2).", simulation_data: { type: "HamiltonianCycle", num_nodes:4, graph: [[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]], steps: [
    {action: "Path=[0,_,_,_]. Pos=1. Try 1. Path=[0,1,_,_].", hamiltonian_cycle_path:[0]},
    {action: "Pos=2. Try 2. Path=[0,1,2,_].", hamiltonian_cycle_path:[0,1,2]},
    {action: "Pos=3. Try 3. Path=[0,1,2,3].", hamiltonian_cycle_path:[0,1,2,3]},
    {action: "All visited. Check edge 3-0. Exists (in sample graph). Solution: [0,1,2,3,0].", solution_found: true, hamiltonian_cycle_path:[0,1,2,3,0]}
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
  sample_questions_data: [{ question: "Solve 3-Puzzle: Initial [[1,2],[0,3]], Goal [[1,2],[3,0]].", simulation_data: { type: "FifteenPuzzle", initial_board:[[1,2],[0,3]], goal_board:[[1,2],[3,0]], steps: [
    {action: "Initial: [[1,2],[ ,3]]. g=0, h=1(misplaced 3). f=1.", puzzle_board_state:[[1,2],[0,3]], puzzle_cost:0, puzzle_heuristic:1},
    {action: "Move blank Right: [[1,2],[3, ]]. g=1, h=0. f=1.", puzzle_board_state:[[1,2],[3,0]], puzzle_cost:1, puzzle_heuristic:0},
    {action: "Goal reached. Path: Move blank Right.", solution_path: ["Move Right"]}
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
  advantages: "Can be more efficient than DP for some instances.",
  disadvantages: "Relies on good bounding function. Worst-case exponential.",
  sample_questions_data: [{ question: "0/1 Knapsack BB. Items (v,w): (10,2),(10,4),(12,6),(18,9). Cap 15.", simulation_data: { type: "ZeroOneKnapsackBB", items:[{'value':10,'weight':2},{'value':10,'weight':4},{'value':12,'weight':6},{'value':18,'weight':9}], capacity:15, steps: [
    {action: "Sort by v/w. Root: p=0,w=0,lvl=0. UB=calc_frac_knap(...)=38 (example). MaxP=0."},
    {action: "Pop Root. UB=38. Lvl=0 (item (10,2))."},
    {action: "  Incl (10,2): p=10,w=2,lvl=1. UB_incl=10+calc_frac_knap(rem,cap13)=38. Push. MaxP=10."},
    {action: "  Excl (10,2): p=0,w=0,lvl=1. UB_excl=0+calc_frac_knap(rem_no_10,2,cap15)=28. Push."},
    {action: "Pop (UB=38, Incl (10,2) node). Lvl=1 (item (10,4)). MaxP=10."},
    {action: "    Incl (10,4): p=20,w=6,lvl=2. UB=20+calc_frac_knap(rem,cap9)=38. Push. MaxP=20."},
    // ... Many steps ...
    {action: "Eventually, a path like (Incl 10,2), (Excl 10,4), (Excl 12,6), (Incl 18,9) -> p=28, w=11 is found. MaxP=28.", bb_solution_items:[{'value':10,'weight':2},{'value':18,'weight':9}], bb_max_profit:28 }
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
  advantages: "Can solve larger instances than DP for some graphs.",
  disadvantages: "NP-hard. Relies on good lower bound.",
  sample_questions_data: [{ question: "TSP BB for 4 cities, cost matrix given.", simulation_data: { type: "TSPBB", num_nodes:4, cost_matrix: [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]], steps: [
    {action: "Start 0. Path=[0]. LB=calc_initial_lb (e.g., 70). MinTour=inf."},
    {action: "Pop (LB=70,...). Expand to 1: Path=[0,1], Cost=10. New LB (e.g., 75). Push."},
    {action: "Expand to 2: Path=[0,2], Cost=15. New LB (e.g., 80). Push."},
    // ... Many steps, pruning based on LB vs MinTour ...
    {action: "Path [0,1,3,2] Cost=10+25+30=65. Lvl=4. Tour cost=65+cost[2][0]=65+15=80. MinTour=80.", tsp_tour_bb:["0","1","3","2","0"], tsp_tour_cost_bb:80}
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
  sample_questions_data: [{ question: "Job Sequencing BB. Jobs (ID,D,P): (J1,2,100), (J2,1,19), (J3,2,27). Max_D=2.", simulation_data: { type: "JobSequencingBB", items: [{'id':'J1','deadline':2,'profit':100},{'id':'J2','deadline':1,'profit':19},{'id':'J3','deadline':2,'profit':27}], steps: [
    {action: "Sort: J1,J3,J2. Root: UB=100(J1)+27(J3)=127. MaxP=0."},
    {action: "Pop Root. Lvl=0(J1). UB=127."},
    {action: "  Incl J1: p=100, Sched=[_,J1]. UB_incl=100+UB(J3,J2 with slot 0 free)=100+27=127. Push. MaxP=100."},
    {action: "  Excl J1: p=0, Sched=[_,_]. UB_excl=UB(J3,J2 with slots 0,1 free)=27+19=46. Push."},
    // ... Many steps, pruning ...
    {action: "Final Max Profit: 127. Jobs: J1, J3.", bb_scheduled_jobs:[{id:'J1'},{id:'J3'}], bb_max_profit:127}
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
    for i in range(n-m+1):
        if text[i:i+m]==pattern: occurrences.append(i)
    return occurrences`,
  time_complexity: "O((n-m+1)*m) ~ O(n*m).",
  space_complexity: "O(1).",
  advantages: "Simple. No preprocessing.",
  disadvantages: "Inefficient, many redundant comparisons.",
  sample_questions_data: [{ question: "Find 'ABC' in 'ABXABCYABC'.", simulation_data: { type: "NaiveStringMatching", text:"ABXABCYABC", pattern:"ABC", steps: [
    {action: "s=0: 'ABX' vs 'ABC'. Mismatch at T[2](X).", text_pointer:0, pattern_pointer:2, comparison_result: "mismatch"},
    {action: "s=3: 'ABC' vs 'ABC'. Match! Found at 3.", text_pointer:3, pattern_pointer:2, comparison_result: "match", match_found_at_index:3},
    {action: "s=7: 'ABC' vs 'ABC'. Match! Found at 7.", text_pointer:7, pattern_pointer:2, comparison_result: "match", match_found_at_index:7}
  ]} }] },
  "Rabin-Karp Algorithm": { brief_explanation: "Uses hashing for pattern matching. Efficiently updates text substring hash (rolling hash).",
  pseudocode: `RABIN_KARP(Text T, Pattern P, prime q, alphabet_size d)
  n=len(T); m=len(P)
  h_pat = hash(P)
  h_txt = hash(T[0..m-1])
  FOR s=0 TO n-m
    IF h_pat=h_txt THEN IF P = T[s..s+m-1] THEN PRINT "Pattern at " + s // Verify
    IF s < n-m THEN h_txt = RecomputeHash(h_txt, T[s], T[s+m], d_m_minus_1) // Rolling hash
  ENDFOR`,
  python_code: `def rabin_karp(text, pattern, q=101, d=256): # q prime, d alphabet size
    n,m=len(text),len(pattern); h_val=pow(d,m-1,q); p_hash,t_hash=0,0; res=[]
    for i in range(m): p_hash=(d*p_hash+ord(pattern[i]))%q; t_hash=(d*t_hash+ord(text[i]))%q
    for s in range(n-m+1):
        if p_hash==t_hash and pattern==text[s:s+m]: res.append(s)
        if s<n-m: t_hash=(d*(t_hash-ord(text[s])*h_val)+ord(text[s+m]))%q
                  if t_hash<0: t_hash+=q
    return res`,
  time_complexity: "Avg/Best: O(n+m). Worst: O(n*m) with bad hash/collisions.",
  space_complexity: "O(1).",
  advantages: "Efficient on average. Good for multiple pattern matching.",
  disadvantages: "Worst-case bad with collisions. Relies on good hash function.",
  sample_questions_data: [{ question: "Find 'test' in 'this is a test text'. q=101, d=256.", simulation_data: { type: "RabinKarp", text: "this is a test text", pattern: "test", steps: [
    {action: "P_hash('test')=H_P. T_hash('this')=H_T0.", text_pointer:0, text_hash:"H_T0", pattern_hash:"H_P"},
    {action: "s=10: T_hash('test')=H_T10. H_P == H_T10. Verify: 'test'=='test'. Match! Index 10.", text_pointer:10, text_hash:"H_P", pattern_hash:"H_P", match_found_at_index:10, spurious_hit:false},
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
    n,m=len(text),len(pattern); lps=compute_lps(pattern); occurrences=[]
    i=j=0
    while i<n:
        if pattern[j]==text[i]: i+=1; j+=1
        if j==m: occurrences.append(i-j); j=lps[j-1]
        elif i<n and pattern[j]!=text[i]:
            if j!=0: j=lps[j-1]
            else: i+=1
    return occurrences`,
  },
  "Finite Automata Matching": { brief_explanation: "Builds Finite Automaton (FA) from pattern. Text processed char by char. Reaching accept state = pattern found.",
  pseudocode: `FA_MATCHER(Text T, TransitionFunc delta, pattern_len m)
  q=0 // current state
  FOR i=0 TO len(T)-1
    q = delta(q, T[i])
    IF q = m THEN PRINT "Pattern found ending at " + i
  ENDFOR`,
  python_code: `def fa_matcher(text, pattern, alphabet): # alphabet: list of chars
    # compute_transition_function(pattern, alphabet) is complex
    # delta = compute_transition_function(...)
    # For simulation, assume delta is precomputed or simplified.
    # Example delta for pattern "ab" and alphabet ['a','b']:
    # delta = [[1,0], [1,2], [1,0]] # State 0: a->1,b->0. State 1:a->1,b->2(accept). State 2:a->1,b->0
    # Placeholder:
    # delta = ...
    # current_state = 0; occurrences = []
    # for i, char_in_text in enumerate(text):
    #   char_idx = alphabet.index(char_in_text) # Simplified
    #   current_state = delta[current_state][char_idx]
    #   if current_state == len(pattern): occurrences.append(i - len(pattern) + 1)
    return "Occurrences (conceptual from FA)"`,
  time_complexity: "O(n) matching after O(m*|Sigma|) preprocessing.",
  space_complexity: "O(m*|Sigma|) for transition table.",
  advantages: "Fast matching. Conceptually powerful.",
  disadvantages: "Preprocessing complex & costly for large alphabets.",
  sample_questions_data: [{ question: "Match 'abab' using FA. Text 'ababcab'. Alphabet {a,b}.", simulation_data: { type: "FiniteAutomataStringMatching", pattern:"abab", text:"ababcab", alphabet:['a','b'], steps: [
    {action: "Build/Use FA for 'abab'. Initial state q=0."},
    {action: "T[0]='a': q=0 -> delta(0,'a') -> q=1.", current_fa_state:1},
    {action: "T[1]='b': q=1 -> delta(1,'b') -> q=2.", current_fa_state:2},
    {action: "T[2]='a': q=2 -> delta(2,'a') -> q=3.", current_fa_state:3},
    {action: "T[3]='b': q=3 -> delta(3,'b') -> q=4 (Accept!). Found at index 0.", current_fa_state:4, match_found_at_index:0},
    {action: "T[4]='c': Not in alphabet/No transition. q=delta(4,'c') or reset (e.g. q=0).", current_fa_state:0, description:"'c' not in alphabet or FA resets."},
    {action: "T[5]='a': q=0 -> delta(0,'a') -> q=1.", current_fa_state:1},
    {action: "T[6]='b': q=1 -> delta(1,'b') -> q=2.", current_fa_state:2}
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
    n=len(keys); cost=[[0.0]*n for _ in range(n)];
    prob_sum=[[0.0]*n for _ in range(n)]
    for i in range(n): prob_sum[i][i]=probs[i]; cost[i][i]=probs[i]
    for i in range(n):
        for j in range(i+1,n): prob_sum[i][j]=prob_sum[i][j-1]+probs[j]
    for L in range(2,n+1):
        for i in range(n-L+1):
            j=i+L-1; cost[i][j]=float('inf')
            current_sum_p=prob_sum[i][j]
            for r_idx in range(i,j+1):
                c_l = cost[i][r_idx-1] if r_idx>i else 0
                c_r = cost[r_idx+1][j] if r_idx<j else 0
                c_total = c_l+c_r+current_sum_p
                if c_total < cost[i][j]: cost[i][j]=c_total
    return cost[0][n-1]`,
  },
};


const generatedAlgorithmData: AlgorithmData = APP_TOPICS_CONFIG.map((topicConfig, topicIndex) => {
  const topic: Topic = {
    id: `topic-${topicIndex}`,
    title: topicConfig.title,
    icon: ICONS[topicConfig.iconName] || Sparkles,
    subtopics: topicConfig.subtopics.map((subTopicConfig, subtopicIndex) => {
      const detailsKey = subTopicConfig.detailsKey || subTopicConfig.title;
      const baseDetails = subTopicCompleteDetails[detailsKey] || {};

      let sampleQuestions: SampleQuestion[] = [];
      const rawDataTopic = rawData[topicConfig.title];
      const rawDataSubTopicArray = rawDataTopic ? rawDataTopic[subTopicConfig.rawDataKey || subTopicConfig.title] : undefined;

      if (rawDataSubTopicArray && rawDataSubTopicArray.length > 0) {
        sampleQuestions = rawDataSubTopicArray.map((q: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q.question,
          simulation_data: q.simulation_data as SimulationData,
          solution_steps: q.simulation_data.steps.map((step: SimulationStep, i: number) => step.action || `Step ${i+1}: Description missing.`),
        }));
      } else if (baseDetails.sample_questions_data && baseDetails.sample_questions_data.length > 0) {
        sampleQuestions = baseDetails.sample_questions_data.map((q_data: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q_data.question,
          simulation_data: q_data.simulation_data as SimulationData,
          solution_steps: q_data.simulation_data.steps.map((step: SimulationStep, i: number) => step.action || `Step ${i+1}: Description missing.`),
        }));
      } else {
        sampleQuestions = [{
          id: `question-${topicIndex}-${subtopicIndex}-0`,
          question: `Sample question for ${subTopicConfig.title}. (Simulation to be implemented)`,
          simulation_data: { type: "Generic", steps: [{ action: "Simulation details to be implemented for this topic." }] },
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
}

    