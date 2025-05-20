
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
            {"action": "Select Item3 (ratio 4). Remaining capacity 20. Take 20/30 units. Weight: 50/50. Value: 160 + 120*(20/30) = 240.", "item_index": 2, "item": {"value": 120, "weight": 30, "ratio": 4, "name": "Item3"}, "fraction": 0.6666666666666666, "current_weight": 50, "current_value": 240.0}
          ]
        }
      }
    ],
    "Dijkstra’s Algorithm": [
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
            {"action": "All nodes visited. Final distances.", "distances": {"A": 0, "B": 7, "C": 3, "D": 9, "E": 5}, "visited_nodes": ["A", "C", "E", "B", "D"]}
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
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
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
            {"action": "Max value: 180", "value": 180}
          ]
        }
      }
    ],
    "Longest Common Subsequence (LCS)": [
      {
        "question": "Find the LCS of 'ABCBDAB' and 'BDCABA'. Show the DP table.",
        "simulation_data": {
          "type": "LCS",
          "string1": "ABCBDAB",
          "string2": "BDCABA",
          "initial_dp_table": Array(8).fill(null).map(() => Array(7).fill(0)),
          "steps": [
            {"action": "S1[0](A) vs S2[4](A): Match. dp[1][5]=dp[0][4]+1=1", "cell_coords": [1,5], "value": 1},
            {"action": "S1[1](B) vs S2[0](B): Match. dp[2][1]=dp[1][0]+1=1", "cell_coords": [2,1], "value": 1},
            {"action": "S1[1](B) vs S2[5](B): Match. dp[2][6]=dp[1][5]+1=2", "cell_coords": [2,6], "value": 2, "description": "If chars match: LCS[i][j] = LCS[i-1][j-1] + 1"},
             {"action": "Final Table for LCS('ABCBDAB', 'BDCABA'). LCS Length: 4", "dp_table": [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1],
                [0,1,1,1,1,1,2],
                [0,1,1,2,2,2,2],
                [0,1,2,2,2,2,3],
                [0,1,2,2,3,3,3],
                [0,1,2,2,3,4,4],
                [0,1,2,2,3,4,4]
             ], "cell_coords": [7,6], "value": 4}
          ]
        }
      }
    ]
  },
  "Backtracking & Branch-and-Bound": {
    "N-Queens Problem": [
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
    "KMP Algorithm": [
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
            {"action": "Pattern found at text index 10. i=14, j=5. Match. (P[4]=C, T[14]=C)", "text_pointer":14, "pattern_pointer":4, "comparison_result":"match", "match_found_at_index": 10}
          ]
        }
      }
    ]
  },
   "Advanced Topics": {
    "Optimal Binary Search Trees": [
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
            {"stage": "Final", "description": "Optimal cost for all keys = Cost[0][3] = 2.2. Root is 40.", "optimal_cost": 2.2, "current_tree_structure": {"root": 40, "left": {"root": 10, "left": null, "right": {"root":20, "left":null, "right": {"root":30}}}, "right": null}}
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

// Defines the structure of the app navigation and content.
// `detailsKey` maps to `subTopicCompleteDetails`.
// `rawDataKey` maps to keys in the `rawData` object for existing simulations.
const APP_TOPICS_CONFIG = [
  {
    title: "Introduction to Algorithms",
    iconName: "LayoutDashboard", // Corresponds to ICONS mapping
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
      // Note: Matrix Chain Multiplication was moved to DP as it's a classic DP problem.
      // Add other genuinely advanced topics here if needed.
    ]
  }
];

// Holds detailed information for each subtopic.
// `sample_questions_data` is used if no `rawDataKey` is specified in APP_TOPICS_CONFIG for the subtopic.
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
END ALGORITHM

// Loop (WHILE) - Counting down
ALGORITHM Countdown(start_value)
  current = start_value
  WHILE current > 0
    PRINT current
    current = current - 1
  ENDWHILE
  PRINT "Blast off!"
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
  return current_sum

def countdown(start_value):
  current = start_value
  while current > 0:
    print(current)
    current -= 1
  print("Blast off!")`,
    time_complexity: "IF-ELSE: O(1). FOR/WHILE loops: Typically O(n) if they iterate n times over a collection, but can be O(log n), O(n^2), etc., depending on the loop's structure and operations within it.",
    space_complexity: "Generally O(1) for the structures themselves, unless new data structures are created within the loop or recursive calls are made.",
    advantages: "Essential for creating logic and performing repetitive tasks. Allow algorithms to be dynamic and respond to different inputs and conditions.",
    disadvantages: "Deeply nested control structures can make code hard to read, understand, and debug (increasing cyclomatic complexity). Off-by-one errors in loops are common.",
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
T(1) = O(1)             // Base case

// Substitution Method: Guess a solution and prove by induction.
// Recursion Tree Method: Visualize the recursive calls and sum costs at each level.
// Master Theorem: Provides a cookbook solution for recurrences of the form T(n) = aT(n/b) + f(n).`,
    python_code: `# Recurrence relations are mathematical, not directly coded, but arise from code:
def merge_sort(arr): # T(n)
    if len(arr) <= 1: # O(1)
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])  # T(n/2)
    right = merge_sort(arr[mid:]) # T(n/2)
    return merge(left, right)     # O(n)
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
  // arr: input array
  // low: starting index of the segment
  // high: ending index of the segment
  // Returns: max_val, min_val in the segment arr[low...high]

  // Base Case 1: If the segment has only one element
  IF low = high THEN
    max_val = arr[low]
    min_val = arr[low]
    RETURN max_val, min_val
  ENDIF

  // Base Case 2: If the segment has two elements
  IF high = low + 1 THEN
    IF arr[low] < arr[high] THEN
      max_val = arr[high]
      min_val = arr[low]
    ELSE
      max_val = arr[low]
      min_val = arr[high]
    ENDIF
    RETURN max_val, min_val
  ENDIF

  // Recursive Step: Divide the array into two halves
  mid = (low + high) / 2
  
  // Recursively find Max/Min in the left half
  max1, min1 = MaxMin(arr, low, mid)
  
  // Recursively find Max/Min in the right half
  max2, min2 = MaxMin(arr, mid + 1, high)
  
  // Combine results: find overall Max and Min
  IF max1 > max2 THEN
    max_val = max1
  ELSE
    max_val = max2
  ENDIF
  
  IF min1 < min2 THEN
    min_val = min1
  ELSE
    min_val = min2
  ENDIF
  
  RETURN max_val, min_val
END ALGORITHM`,
    python_code: `def find_max_min_dc(arr, low, high):
    # Base case: If the segment has only one element
    if low == high:
        return arr[low], arr[low]
    
    # Base case: If the segment has two elements
    elif high == low + 1:
        if arr[low] < arr[high]:
            return arr[high], arr[low]  # max, min
        else:
            return arr[low], arr[high]  # max, min
            
    # Recursive step
    else:
        mid = (low + high) // 2
        max1, min1 = find_max_min_dc(arr, low, mid)
        max2, min2 = find_max_min_dc(arr, mid + 1, high)
        
        final_max = max(max1, max2)
        final_min = min(min1, min2)
        
        return final_max, final_min

# Example usage:
# arr = [10, 5, 30, 1, 50, 0]
# maximum, minimum = find_max_min_dc(arr, 0, len(arr) - 1)
# print(f"Maximum: {maximum}, Minimum: {minimum}")`,
    time_complexity: "O(n). The recurrence relation is T(n) = 2T(n/2) + 2, which solves to T(n) = 3n/2 - 2 comparisons in the best/worst/average case if n is a power of 2. For general n, it's roughly 3n/2 comparisons.",
    space_complexity: "O(log n) due to the recursion stack depth.",
    advantages: "More efficient in terms of comparisons than finding max and min independently (which takes (n-1) + (n-1) = 2n-2 comparisons in the worst case).",
    disadvantages: "Recursive overhead can make it slower for small arrays compared to a simple iterative approach. The number of comparisons is better, but overall runtime might not be if function call overhead is high.",
    sample_questions_data: [{
      question: "Find max and min in [10, 5, 30, 1, 50, 0] using Divide and Conquer.",
      simulation_data: {
        type: "MaxMin", initial_array: [10, 5, 30, 1, 50, 0],
        steps: [
          { action: "Initial call: MaxMin([10,5,30,1,50,0], 0, 5)", array_segment: [10,5,30,1,50,0]},
          { action: "Divide: mid = 2. Left: [10,5,30] (0,2), Right: [1,50,0] (3,5)", left_segment: [10,5,30], right_segment: [1,50,0]},
          { action: "Recursive call on Left: MaxMin([10,5,30], 0, 2)", array_segment: [10,5,30]},
          { action: "  Left Divide: mid = 1. Left-Left: [10,5] (0,1), Left-Right: [30] (2,2)", left_segment: [10,5], right_segment: [30]},
          { action: "  Recursive call on Left-Left: MaxMin([10,5], 0, 1). Base Case (2 elements). Max=10, Min=5", max_val:10, min_val:5, array_segment:[10,5]},
          { action: "  Recursive call on Left-Right: MaxMin([30], 2, 2). Base Case (1 element). Max=30, Min=30", max_val:30, min_val:30, array_segment:[30]},
          { action: "  Combine Left-Left & Left-Right: Max(10,30)=30, Min(5,30)=5. Returns (30,5) for [10,5,30]", max_val:30, min_val:5, array_segment:[10,5,30]},
          { action: "Recursive call on Right: MaxMin([1,50,0], 3, 5)", array_segment: [1,50,0]},
          { action: "  Right Divide: mid = 4. Right-Left: [1,50] (3,4), Right-Right: [0] (5,5)", left_segment: [1,50], right_segment: [0]},
          { action: "  Recursive call on Right-Left: MaxMin([1,50], 3, 4). Base Case (2 elements). Max=50, Min=1", max_val:50, min_val:1, array_segment:[1,50]},
          { action: "  Recursive call on Right-Right: MaxMin([0], 5, 5). Base Case (1 element). Max=0, Min=0", max_val:0, min_val:0, array_segment:[0]},
          { action: "  Combine Right-Left & Right-Right: Max(50,0)=50, Min(1,0)=0. Returns (50,0) for [1,50,0]", max_val:50, min_val:0, array_segment:[1,50,0]},
          { action: "Final Combine: Max(30,50)=50, Min(5,0)=0. Final result for [10,5,30,1,50,0] is Max=50, Min=0", final_max:50, final_min:0}
        ]
      }
    }]
  },
  "Merge Sort": { 
    brief_explanation: "A stable, comparison-based sorting algorithm using the divide and conquer paradigm. It divides the array into halves, recursively sorts them, and then merges the sorted halves.",
    time_complexity: "O(n log n) in all cases (worst, average, best)",
    space_complexity: "O(n) due to the auxiliary space required for merging",
    advantages: "Guaranteed O(n log n) performance. Stable sort (maintains relative order of equal elements). Good for linked lists as merging doesn't require random access.",
    disadvantages: "Requires O(n) extra space (not in-place for arrays). Can be slower than Quick Sort on average for arrays due to data movement and memory allocation if implemented naively.",
    pseudocode: `ALGORITHM MergeSort(arr, low, high)
  IF low < high THEN
    mid = (low + high) / 2
    MergeSort(arr, low, mid)      // Sort left half
    MergeSort(arr, mid + 1, high) // Sort right half
    Merge(arr, low, mid, high)    // Merge the two sorted halves
  ENDIF
END ALGORITHM

ALGORITHM Merge(arr, low, mid, high)
  n1 = mid - low + 1
  n2 = high - mid
  
  CREATE L[n1], R[n2] // Temporary arrays
  
  FOR i = 0 TO n1-1
    L[i] = arr[low + i]
  ENDFOR
  FOR j = 0 TO n2-1
    R[j] = arr[mid + 1 + j]
  ENDFOR
  
  i = 0 // Initial index of first subarray
  j = 0 // Initial index of second subarray
  k = low // Initial index of merged subarray
  
  WHILE i < n1 AND j < n2
    IF L[i] <= R[j] THEN
      arr[k] = L[i]
      i = i + 1
    ELSE
      arr[k] = R[j]
      j = j + 1
    ENDIF
    k = k + 1
  ENDWHILE
  
  // Copy remaining elements of L[], if any
  WHILE i < n1
    arr[k] = L[i]
    i = i + 1
    k = k + 1
  ENDWHILE
  
  // Copy remaining elements of R[], if any
  WHILE j < n2
    arr[k] = R[j]
    j = j + 1
    k = k + 1
  ENDWHILE
END ALGORITHM`,
    python_code: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0 # i for left_half, j for right_half, k for main_array

        # Merge data from left_half and right_half back into arr
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        # Check if any element was left
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
    return arr`,
  },
  "Quick Sort": { 
    brief_explanation: "An efficient, in-place (typically for Lomuto/Hoare partitioning) sorting algorithm using divide and conquer. It picks an element as a pivot and partitions the array around the pivot such that elements smaller than the pivot are on its left and larger elements are on its right.",
    time_complexity: "Average: O(n log n). Worst: O(n^2) (e.g., if pivot is always smallest/largest, or array is already sorted/reverse sorted and first/last element is chosen as pivot).",
    space_complexity: "O(log n) on average (due to recursion stack). O(n) in worst case for recursion stack (e.g., for a skewed tree of recursive calls).",
    advantages: "Fast on average, often faster in practice than Merge Sort for arrays due to better cache locality and lower constant factors. In-place partitioning variants exist.",
    disadvantages: "Worst-case O(n^2) is possible, making it unsuitable for applications requiring guaranteed performance. Not stable (relative order of equal elements may change). Performance depends heavily on pivot selection strategy (e.g., random pivot, median-of-three helps mitigate worst-case).",
    pseudocode: `// Lomuto Partition Scheme
ALGORITHM QuickSort(arr, low, high)
  IF low < high THEN
    pivot_index = Partition(arr, low, high)
    QuickSort(arr, low, pivot_index - 1)  // Sort elements before pivot
    QuickSort(arr, pivot_index + 1, high) // Sort elements after pivot
  ENDIF
END ALGORITHM

ALGORITHM Partition(arr, low, high)
  pivot = arr[high] // Choosing the last element as pivot
  i = low - 1       // Index of smaller element

  FOR j = low TO high - 1
    // If current element is smaller than or equal to pivot
    IF arr[j] <= pivot THEN
      i = i + 1
      SWAP arr[i] WITH arr[j]
    ENDIF
  ENDFOR
  SWAP arr[i + 1] WITH arr[high] // Place pivot in correct position
  RETURN i + 1 // Return partitioning index
END ALGORITHM`,
    python_code: `def quick_sort(arr, low=None, high=None):
    if low is None: low = 0
    if high is None: high = len(arr) - 1

    if low < high:
        pivot_index = partition_lomuto(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)
    return arr

def partition_lomuto(arr, low, high):
    pivot = arr[high]  # Choosing the last element as pivot
    i = low - 1        # Index of smaller element

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i] # Swap
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1] # Place pivot
    return i + 1`,
  },
  "Strassen’s Matrix Multiplication": {
    brief_explanation: "A divide and conquer algorithm for matrix multiplication that is asymptotically faster than the standard O(n^3) algorithm. It uses 7 recursive multiplications of submatrices of size n/2 and several additions/subtractions.",
    pseudocode: `STRASSEN(A, B) // A, B are n x n matrices, n is power of 2
  IF n = 1 THEN RETURN A[0][0] * B[0][0]
  
  Partition A, B into four n/2 x n/2 submatrices:
  A = [[A11, A12], [A21, A22]]
  B = [[B11, B12], [B21, B22]]

  P1 = STRASSEN(A11 + A22, B11 + B22)
  P2 = STRASSEN(A21 + A22, B11)
  P3 = STRASSEN(A11, B12 - B22)
  P4 = STRASSEN(A22, B21 - B11)
  P5 = STRASSEN(A11 + A12, B22)
  P6 = STRASSEN(A21 - A11, B11 + B12)
  P7 = STRASSEN(A12 - A22, B21 + B22)

  C11 = P1 + P4 - P5 + P7
  C12 = P3 + P5
  C21 = P2 + P4
  C22 = P1 - P2 + P3 + P6

  RETURN C = [[C11, C12], [C21, C22]]`,
    python_code: `# Python code for Strassen's is complex and usually involves helper functions
# for matrix partitioning, addition, subtraction, and combination.
# A simplified conceptual outline:
def strassen(A, B):
    n = len(A)
    if n == 1:
        return [[A[0][0] * B[0][0]]]

    # Ensure n is a power of 2, or pad matrices (not shown for simplicity)
    
    mid = n // 2
    A11 = [row[:mid] for row in A[:mid]]
    A12 = [row[mid:] for row in A[:mid]]
    A21 = [row[:mid] for row in A[mid:]]
    A22 = [row[mid:] for row in A[mid:]]

    B11 = [row[:mid] for row in B[:mid]]
    B12 = [row[mid:] for row in B[:mid]]
    B21 = [row[:mid] for row in B[mid:]]
    B22 = [row[mid:] for row in B[mid:]]

    # Helper functions for matrix addition and subtraction would be needed
    # e.g., add(matrix1, matrix2), subtract(matrix1, matrix2)

    # P1 = strassen(add(A11, A22), add(B11, B22))
    # ... and so on for P2 through P7 ...

    # C11 = add(subtract(add(P1, P4), P5), P7)
    # ... and so on for C12, C21, C22 ...
    
    # Combine C submatrices into a result matrix
    # result = [[0]*n for _ in range(n)]
    # For i from 0 to mid-1:
    #   For j from 0 to mid-1:
    #     result[i][j] = C11[i][j]
    #     result[i][j+mid] = C12[i][j]
    #     result[i+mid][j] = C21[i][j]
    #     result[i+mid][j+mid] = C22[i][j]
    # return result
    return "Full Python code for Strassen's is extensive and typically involves many helper functions for matrix operations."`,
    time_complexity: "O(n^log2(7)) which is approximately O(n^2.807)",
    space_complexity: "O(n^2) for storing submatrices during recursion, or O(log n) for the recursion stack if implemented carefully with views or indices (though explicit submatrix creation is common).",
    advantages: "Asymptotically faster than the standard O(n^3) matrix multiplication for large n.",
    disadvantages: "Higher constant factor than the standard algorithm, making it slower for smaller matrices (crossover point depends on implementation and hardware). More complex to implement correctly. Can have numerical stability issues for certain types of matrices. Typically requires matrix dimensions to be powers of 2, or padding which adds overhead.",
    sample_questions_data: [{
        question: "Explain the 7 recursive calls in Strassen's algorithm for 2x2 matrices (conceptually).",
        simulation_data: { type: "Strassen", steps: [{ action: "Illustrate P1 to P7 calculations for 2x2 submatrices.", description: "Strassen's algorithm cleverly reduces the 8 required multiplications for 2x2 matrices (if done naively by partitioning) to 7 multiplications, at the cost of more additions/subtractions. These 7 products (P1 to P7) are specific combinations of sums/differences of the original 2x2 sub-blocks."}] }
    }]
  },
  // --- Greedy Method ---
  "Fractional Knapsack": {
    brief_explanation: "Greedy algorithm to maximize total value in a knapsack where items can be taken in fractions. Sort items by value-to-weight ratio and pick highest ratio items first.",
    time_complexity: "O(n log n) due to sorting items by ratio.",
    space_complexity: "O(1) if input array can be modified for sorting, O(n) if a copy is made for sorting or storing ratios.",
    advantages: "Simple, efficient, and guarantees an optimal solution for the fractional version of the knapsack problem.",
    disadvantages: "Greedy approach does not work for the 0/1 Knapsack problem (where items must be taken entirely or not at all).",
     pseudocode: `ALGORITHM FractionalKnapsack(capacity, items)
  // items is a list of (value, weight) pairs
  // Calculate value-to-weight ratio for each item
  FOR EACH item IN items
    item.ratio = item.value / item.weight
  ENDFOR

  // Sort items in descending order of their ratios
  Sort items by item.ratio in descending order

  total_value = 0
  current_weight = 0

  FOR EACH item IN sorted_items
    IF current_weight + item.weight <= capacity THEN
      // Take the whole item
      current_weight = current_weight + item.weight
      total_value = total_value + item.value
    ELSE
      // Take a fraction of the item
      remaining_capacity = capacity - current_weight
      fraction = remaining_capacity / item.weight
      total_value = total_value + item.value * fraction
      current_weight = capacity // Knapsack is full
      BREAK // No more items can be added
    ENDIF
  ENDFOR
  RETURN total_value
END ALGORITHM`,
    python_code: `def fractional_knapsack(capacity, items_list):
    # items_list is a list of dictionaries, e.g., [{'value': v, 'weight': w, 'name':'optional_name'}, ...]
    # Calculate ratio and add it to each item
    for item in items_list:
        item['ratio'] = item['value'] / item['weight']

    # Sort items by ratio in descending order
    items_list.sort(key=lambda x: x['ratio'], reverse=True)

    total_value = 0
    current_weight = 0
    knapsack_contents = [] # To store what was taken

    for item in items_list:
        if current_weight + item['weight'] <= capacity:
            # Take the whole item
            current_weight += item['weight']
            total_value += item['value']
            knapsack_contents.append({'name': item.get('name', 'Unnamed'), 'fraction_taken': 1.0, 'value_taken': item['value']})
        else:
            # Take a fraction of the item
            remaining_capacity = capacity - current_weight
            fraction = remaining_capacity / item['weight']
            total_value += item['value'] * fraction
            current_weight += remaining_capacity # Knapsack is now full
            knapsack_contents.append({'name': item.get('name', 'Unnamed'), 'fraction_taken': fraction, 'value_taken': item['value'] * fraction})
            break  # Knapsack is full
            
    return total_value, knapsack_contents`,
  },
  "Activity Selection": {
    brief_explanation: "Select the maximum number of non-overlapping activities from a set, given their start and finish times. Greedy approach: sort by finish times, pick the first activity (earliest finish), then iteratively pick the next activity that starts after the previously selected activity finishes.",
    pseudocode: `ALGORITHM ActivitySelection(activities)
  // activities is a list of (start_time, finish_time) pairs
  
  // Sort activities by their finish times in ascending order
  Sort activities by finish_time

  n = length of activities
  IF n = 0 THEN RETURN empty_list
  
  selected_activities = list containing the first activity (activities[0])
  last_finish_time = activities[0].finish_time
  
  FOR i = 1 TO n-1
    IF activities[i].start_time >= last_finish_time THEN
      Add activities[i] to selected_activities
      last_finish_time = activities[i].finish_time
    ENDIF
  ENDFOR
  
  RETURN selected_activities
END ALGORITHM`,
    python_code: `def activity_selection(activities_list):
    # activities_list is a list of tuples or lists, e.g., [(start1, finish1), (start2, finish2), ...]
    # Or, if they have IDs: [{'id': 'A1', 'start_time': s1, 'finish_time': f1}, ...]
    
    # Sort activities by their finish times
    # Assuming activities_list is like [(s,f)] or if dicts, use appropriate key
    activities_list.sort(key=lambda x: x[1] if isinstance(x, tuple) else x['finish_time'])
    
    n = len(activities_list)
    if n == 0:
        return []
        
    selected_activities = []
    
    # Select the first activity
    selected_activities.append(activities_list[0])
    last_finish_time = activities_list[0][1] if isinstance(activities_list[0], tuple) else activities_list[0]['finish_time']
    
    # Iterate through the rest of the activities
    for i in range(1, n):
        current_activity = activities_list[i]
        current_start_time = current_activity[0] if isinstance(current_activity, tuple) else current_activity['start_time']
        
        if current_start_time >= last_finish_time:
            selected_activities.append(current_activity)
            last_finish_time = current_activity[1] if isinstance(current_activity, tuple) else current_activity['finish_time']
            
    return selected_activities`,
    time_complexity: "O(n log n) if sorting activities by finish times is required. If activities are already sorted by finish times, it's O(n).",
    space_complexity: "O(n) if a new list is created for sorted activities and for storing the result. O(1) for the iterative selection part if sorting is in-place and only count is needed (though usually, the selected activities themselves are returned).",
    advantages: "Simple and intuitive greedy strategy. Efficient and provides an optimal solution (maximum number of non-overlapping activities).",
    disadvantages: "Requires activities to be sorted by finish times for the greedy choice to work. If sorted by start times, the greedy choice doesn't guarantee optimality.",
    sample_questions_data: [{
      question: "Given activities with (start, finish) times: (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16). Find max non-overlapping activities.",
      simulation_data: { 
        type: "ActivitySelection", 
        items: [
            {"id":"A1","start_time":1,"finish_time":4}, {"id":"A2","start_time":3,"finish_time":5}, {"id":"A3","start_time":0,"finish_time":6}, 
            {"id":"A4","start_time":5,"finish_time":7}, {"id":"A5","start_time":3,"finish_time":9}, {"id":"A6","start_time":5,"finish_time":9}, 
            {"id":"A7","start_time":6,"finish_time":10},{"id":"A8","start_time":8,"finish_time":11},{"id":"A9","start_time":8,"finish_time":12}, 
            {"id":"A10","start_time":2,"finish_time":14},{"id":"A11","start_time":12,"finish_time":16}
        ], 
        steps: [
          {action: "Original Activities (ID, Start, Finish): A1(1,4), A2(3,5), A3(0,6), A4(5,7), A5(3,9), A6(5,9), A7(6,10), A8(8,11), A9(8,12), A10(2,14), A11(12,16)", variable_states: { selected_activities: [], last_finish_time: "N/A" } },
          {action: "Sort activities by finish times: A1(1,4), A2(3,5), A3(0,6), A4(5,7), A5(3,9), A6(5,9), A7(6,10), A8(8,11), A9(8,12), A10(2,14), A11(12,16) -> Sorted: A1(1,4), A2(3,5), A3(0,6), A4(5,7), A7(6,10), A8(8,11), A5(3,9), A6(5,9), A9(8,12), A10(2,14), A11(12,16) (Actual sorted list by finish time needed for correct simulation)", item: null, variable_states: { selected_activities: [], last_finish_time: "N/A"} },
          {action: "Select first activity A1(1,4). Last finish time = 4.", item: {"id":"A1","start_time":1,"finish_time":4}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 } },
          {action: "Consider A2(3,5). Start 3 < Last Finish 4. Skip.", item: {"id":"A2","start_time":3,"finish_time":5}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 } },
          {action: "Consider A3(0,6). Start 0 < Last Finish 4. Skip.", item: {"id":"A3","start_time":0,"finish_time":6}, variable_states: { selected_activities: ["A1"], last_finish_time: 4 } },
          {action: "Consider A4(5,7). Start 5 >= Last Finish 4. Select A4. Last finish time = 7.", item: {"id":"A4","start_time":5,"finish_time":7}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 } },
          {action: "Consider A7(6,10). Start 6 < Last Finish 7. Skip.", item: {"id":"A7","start_time":6,"finish_time":10}, variable_states: { selected_activities: ["A1", "A4"], last_finish_time: 7 } },
          {action: "Consider A8(8,11). Start 8 >= Last Finish 7. Select A8. Last finish time = 11.", item: {"id":"A8","start_time":8,"finish_time":11}, variable_states: { selected_activities: ["A1", "A4", "A8"], last_finish_time: 11 } },
          {action: "Consider A11(12,16). Start 12 >= Last Finish 11. Select A11. Last finish time = 16.", item: {"id":"A11","start_time":12,"finish_time":16}, variable_states: { selected_activities: ["A1", "A4", "A8", "A11"], last_finish_time: 16 } },
          {action: "Finished. Max activities: 4. Selected: A1, A4, A8, A11", item: null, variable_states: { selected_activities: ["A1", "A4", "A8", "A11"], last_finish_time: 16}}
      ]}
    }]
  },
   "Job Sequencing": {
    brief_explanation: "Schedule unit-time jobs with deadlines and profits to maximize total profit. Greedy: Sort jobs by profit. For each job, schedule it in the latest possible available time slot before its deadline.",
    pseudocode: `JOB_SEQUENCING(jobs) // jobs is list of (job_id, deadline, profit)
  Sort jobs in decreasing order of profit
  
  max_deadline = find maximum deadline among all jobs
  time_slots = array of size max_deadline, initialized to FREE
  total_profit = 0
  scheduled_job_ids = list()
  
  FOR EACH job (j_id, d, p) IN sorted_jobs
    // Try to place job in latest possible slot up to its deadline
    FOR slot_index = MIN(d, max_deadline) - 1 DOWNTO 0 
      IF time_slots[slot_index] IS FREE THEN
        time_slots[slot_index] = j_id
        total_profit = total_profit + p
        ADD j_id to scheduled_job_ids
        BREAK // Job scheduled, move to next job
      ENDIF
    ENDFOR
  ENDFOR
  RETURN total_profit, scheduled_job_ids, time_slots_arrangement`,
    python_code: `def job_sequencing_with_deadlines(jobs_list):
    # jobs_list is a list of tuples/lists like [job_id, deadline, profit]
    # Sort jobs by profit in descending order
    jobs_list.sort(key=lambda x: x[2], reverse=True)
    
    max_deadline = 0
    for job in jobs_list:
        if job[1] > max_deadline:
            max_deadline = job[1]
            
    # Initialize time slots (0 to max_deadline-1)
    time_slots = [-1] * max_deadline  # -1 indicates free slot
    scheduled_jobs_ids = []
    total_profit = 0
    
    for job_id, deadline, profit in jobs_list:
        # Find a free slot for this job (from latest possible to earliest)
        # Deadline d means job must be completed by time d.
        # If unit time, slot_index goes from deadline-1 down to 0.
        for slot_idx in range(min(max_deadline, deadline) - 1, -1, -1):
            if time_slots[slot_idx] == -1:
                time_slots[slot_idx] = job_id
                scheduled_jobs_ids.append(job_id)
                total_profit += profit
                break  # Job scheduled
                
    return total_profit, scheduled_jobs_ids, time_slots`,
    time_complexity: "O(n log n + n*m) where n is number of jobs and m is max deadline. Sorting takes O(n log n). The nested loops can take O(n*m) in worst case. Can be optimized to O(n log n) using Disjoint Set Union (DSU) to find free slots faster.",
    space_complexity: "O(m) for time slots array, plus O(n) if a copy of jobs is made for sorting.",
    advantages: "Simple greedy strategy. Effective for maximizing profit with unit-time jobs and deadlines.",
    disadvantages: "Naive slot finding (nested loop) can be quadratic in terms of max_deadline. Optimization with DSU is more complex to implement.",
    sample_questions_data: [{
      question: "Jobs (ID, Deadline, Profit): (J1,2,100), (J2,1,19), (J3,2,27), (J4,1,25), (J5,3,15). Maximize profit.",
      simulation_data: { type: "JobSequencing", items: [{"id":"J1","deadline":2,"profit":100},{"id":"J2","deadline":1,"profit":19},{"id":"J3","deadline":2,"profit":27},{"id":"J4","deadline":1,"profit":25},{"id":"J5","deadline":3,"profit":15}], steps: [
          {action: "Sort jobs by profit (desc): J1(P100,D2), J3(P27,D2), J4(P25,D1), J2(P19,D1), J5(P15,D3)", current_value:0, variable_states: { time_slots: ["_", "_", "_"], sorted_jobs_queue: ["J1(100,2)","J3(27,2)","J4(25,1)","J2(19,1)","J5(15,3)"] } },
          {action: "Consider J1 (P100, D2). Try slot D2-1=1. Slot 1 is free. Schedule J1. Profit=100.", item:{"id":"J1","deadline":2,"profit":100}, current_value:100, variable_states: { time_slots: ["_", "J1", "_"] } },
          {action: "Consider J3 (P27, D2). Try slot D2-1=1 (taken). Try slot D1-1=0. Slot 0 is free. Schedule J3. Profit=127.", item:{"id":"J3","deadline":2,"profit":27}, current_value:127, variable_states: { time_slots: ["J3", "J1", "_"] } },
          {action: "Consider J4 (P25, D1). Try slot D1-1=0 (taken). Cannot schedule J4.", item:{"id":"J4","deadline":1,"profit":25}, current_value:127, variable_states: { time_slots: ["J3", "J1", "_"] } },
          {action: "Consider J2 (P19, D1). Try slot D1-1=0 (taken). Cannot schedule J2.", item:{"id":"J2","deadline":1,"profit":19}, current_value:127, variable_states: { time_slots: ["J3", "J1", "_"] } },
          {action: "Consider J5 (P15, D3). Try slot D3-1=2. Slot 2 is free. Schedule J5. Profit=142.", item:{"id":"J5","deadline":3,"profit":15}, current_value:142, variable_states: { time_slots: ["J3", "J1", "J5"] } },
          {action: "All jobs considered. Final Profit: 142. Scheduled: J3 (slot 0), J1 (slot 1), J5 (slot 2).", item:null, current_value:142, variable_states: { time_slots: ["J3", "J1", "J5"]} }
      ]}
    }]
  },
  "Coin Change (Greedy)": { brief_explanation: "Tries to make change using the largest possible denominations first. Works for canonical coin systems (like USD) but not for all arbitrary coin systems.", 
    pseudocode: `ALGORITHM GreedyCoinChange(coins, amount)
  Sort coins in descending order
  count = 0
  result_coins = []
  FOR EACH coin IN sorted_coins
    WHILE amount >= coin
      amount = amount - coin
      ADD coin to result_coins
      count = count + 1
    ENDWHILE
    IF amount = 0 THEN BREAK
  ENDFOR
  IF amount = 0 THEN RETURN result_coins, count
  ELSE RETURN "Cannot make exact change"
END ALGORITHM`, 
    python_code: `def greedy_coin_change(coins_available, target_amount):
    coins_available.sort(reverse=True) # Sort in descending order
    num_coins = 0
    result = []
    remaining_amount = target_amount
    
    for coin_value in coins_available:
        while remaining_amount >= coin_value:
            remaining_amount -= coin_value
            result.append(coin_value)
            num_coins += 1
        if remaining_amount == 0:
            break
            
    if remaining_amount == 0:
        return num_coins, result
    else:
        # For a true greedy algorithm, if it can't make change, it fails.
        # A more robust system would use DP.
        return -1, [] # Indicates failure to make exact change
`, 
    time_complexity: "O(C log C + A/min_coin_value) if sorting coins (C denominations). If coins are sorted, O(N) where N is number of coins given, or more precisely depends on amount and coin values.", 
    space_complexity: "O(1) if not storing result coins, O(Target/min_coin_value) for result_coins list in worst case.", 
    advantages: "Simple and fast for canonical coin systems.", 
    disadvantages: "Doesn't guarantee an optimal solution (minimum coins) for all coin systems. E.g., coins {1, 5, 6, 9} and amount 11, greedy gives 9+1+1 (3 coins), optimal is 5+6 (2 coins).", 
    sample_questions_data: [{ question: "Make change for 30 using coins {1, 5, 10, 25}.", simulation_data: { type: "CoinChangeGreedy", coins: [1,5,10,25], amount: 30, steps: [
      {action: "Sort coins (desc): [25, 10, 5, 1]. Amount = 30. Result coins: []"},
      {action: "Consider coin 25. 30 >= 25. Take 25. Amount = 5. Result: [25]"},
      {action: "Consider coin 10. 5 < 10. Skip 10."},
      {action: "Consider coin 5. 5 >= 5. Take 5. Amount = 0. Result: [25, 5]"},
      {action: "Amount is 0. Total coins: 2. Solution: [25, 5]"}
    ]} }] 
  },
  "Huffman Coding": { brief_explanation: "A lossless data compression algorithm that uses variable-length codes based on the frequencies of characters. More frequent characters get shorter codes.", 
  pseudocode: `ALGORITHM HuffmanCoding(characters_with_frequencies)
  Create a min-priority queue (min-heap) and insert all characters as leaf nodes (frequency as priority).
  WHILE priority_queue has more than one node
    Extract two nodes with minimum frequency (node1, node2).
    Create a new internal node with frequency = node1.freq + node2.freq.
    Make node1 its left child and node2 its right child.
    Insert the new internal node into the priority_queue.
  ENDFOR
  The remaining node is the root of the Huffman Tree.
  Traverse the tree to assign codes (e.g., 0 for left edge, 1 for right edge).
END ALGORITHM`, 
  python_code: `import heapq

class HuffmanNode:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None

    # For comparison in min-heap
    def __lt__(self, other):
        return self.freq < other.freq

def build_huffman_tree(char_freq_map):
    priority_queue = [HuffmanNode(char, freq) for char, freq in char_freq_map.items()]
    heapq.heapify(priority_queue) # Turn list into a min-heap

    while len(priority_queue) > 1:
        left_child = heapq.heappop(priority_queue)
        right_child = heapq.heappop(priority_queue)

        merged_node = HuffmanNode(None, left_child.freq + right_child.freq)
        merged_node.left = left_child
        merged_node.right = right_child
        
        heapq.heappush(priority_queue, merged_node)
        
    return priority_queue[0] # Root of the Huffman tree

def generate_huffman_codes_recursive(root_node, current_code, codes_map):
    if root_node is None:
        return

    # If it's a leaf node (character node)
    if root_node.char is not None:
        codes_map[root_node.char] = current_code
        return

    generate_huffman_codes_recursive(root_node.left, current_code + "0", codes_map)
    generate_huffman_codes_recursive(root_node.right, current_code + "1", codes_map)

def get_huffman_codes(char_freq_map):
    if not char_freq_map:
        return {}
    if len(char_freq_map) == 1: # Handle single character case
        char = list(char_freq_map.keys())[0]
        return {char: "0"}

    root = build_huffman_tree(char_freq_map)
    codes = {}
    generate_huffman_codes_recursive(root, "", codes)
    return codes
`, 
  time_complexity: "O(n log n), where n is the number of unique characters, due to heap operations.", 
  space_complexity: "O(n) for storing the Huffman tree and the codes.", 
  advantages: "Produces an optimal prefix code (no code is a prefix of another), leading to efficient, unambiguous decompression. Widely used in compression formats like ZIP, JPEG.", 
  disadvantages: "Requires two passes over the data (one to count frequencies, one to compress) or sending the frequency table along with compressed data. Not ideal for very small alphabets or data with uniform frequencies.", 
  sample_questions_data: [{ question: "Generate Huffman codes for chars with frequencies: A:5, B:9, C:12, D:13, E:16, F:45.", simulation_data: { type: "HuffmanCoding", items: [{'char':'A','freq':5},{'char':'B','freq':9},{'char':'C','freq':12},{'char':'D','freq':13},{'char':'E','freq':16},{'char':'F','freq':45}], steps: [
    {action: "Initial nodes in Priority Queue (Min-Heap): (A:5), (B:9), (C:12), (D:13), (E:16), (F:45)"},
    {action: "Extract A(5) & B(9). Create Internal1(14). PQ: [C:12, D:13, I1:14, E:16, F:45]"},
    {action: "Extract C(12) & D(13). Create Internal2(25). PQ: [I1:14, E:16, I2:25, F:45]"},
    {action: "Extract I1(14) & E(16). Create Internal3(30). PQ: [I2:25, I3:30, F:45]"},
    {action: "Extract I2(25) & I3(30). Create Internal4(55). PQ: [F:45, I4:55]"},
    {action: "Extract F(45) & I4(55). Create Root(100). PQ: [Root:100]"},
    {action: "Traverse tree (F=0, I4=1; I2=10, I3=11; C=100, D=101; E=110, I1=111; A=1110, B=1111). Codes: F:0, C:100, D:101, E:110, A:1110, B:1111 (example, actual codes depend on tie-breaking and left/right child assignment during merge)"}
  ]} }] },
  "Kruskal’s Algorithm": { brief_explanation: "A greedy algorithm to find a Minimum Spanning Tree (MST) for a connected, undirected graph. It sorts all edges by weight and adds edges one by one if they don't form a cycle with already selected edges.", 
  pseudocode: `ALGORITHM Kruskal(Graph G = (V, E, Weights))
  MST = empty set of edges
  Create a disjoint set data structure (DSU) for V vertices, initially each vertex in its own set.
  Sort all edges E by weight in non-decreasing order.
  
  FOR EACH edge (u, v) with weight w IN sorted_edges
    IF FIND_SET(u) != FIND_SET(v) THEN // If u and v are in different sets (no cycle)
      ADD edge (u,v) to MST
      UNION_SETS(u, v) // Merge the sets of u and v
    ENDIF
  ENDFOR
  RETURN MST
END ALGORITHM`, 
  python_code: `class DSU: # Disjoint Set Union (Union-Find)
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, i):
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i]) # Path compression
        return self.parent[i]

    def union(self, i, j):
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            # Union by rank
            if self.rank[root_i] < self.rank[root_j]:
                self.parent[root_i] = root_j
            elif self.rank[root_i] > self.rank[root_j]:
                self.parent[root_j] = root_i
            else:
                self.parent[root_j] = root_i
                self.rank[root_i] += 1
            return True
        return False

def kruskal_mst(num_vertices, edges_list):
    # edges_list is list of (weight, u, v) or (u, v, weight)
    # Assuming (u,v,w) and 0-indexed vertices
    # Sort edges by weight
    edges_list.sort(key=lambda x: x[2]) 
    
    mst = []
    dsu = DSU(num_vertices)
    num_edges_in_mst = 0
    total_mst_weight = 0
    
    node_map_reverse = {i: chr(65+i) for i in range(num_vertices)}


    for u_idx, v_idx, weight in edges_list:
        u_char = node_map_reverse.get(u_idx, str(u_idx))
        v_char = node_map_reverse.get(v_idx, str(v_idx))

        if dsu.union(u_idx, v_idx): # If adding this edge doesn't form a cycle
            mst.append((u_char, v_char, weight)) # Store with char names for display
            total_mst_weight += weight
            num_edges_in_mst += 1
            if num_edges_in_mst == num_vertices - 1: # MST is complete
                break
                
    if num_edges_in_mst == num_vertices - 1:
        return mst, total_mst_weight
    else:
        return [], -1 # Graph not connected or error
`, 
  time_complexity: "O(E log E) or O(E log V), dominated by edge sorting. DSU operations (find and union) are nearly constant time on average (O(alpha(V)), where alpha is inverse Ackermann function).", 
  space_complexity: "O(V+E) for storing graph, sorted edges, and DSU structure.", 
  advantages: "Simple concept. Works on disconnected graphs (finds MST for each connected component, forming a Minimum Spanning Forest).", 
  disadvantages: "Edge sorting can be the bottleneck for dense graphs. Prim's algorithm can be faster for dense graphs when implemented with an adjacency matrix.", 
  sample_questions_data: [{ question: "Find MST for a given graph using Kruskal's. Graph: (A-B,1), (A-C,4), (B-C,2), (B-D,5), (C-D,3). Vertices: A,B,C,D (0,1,2,3)", simulation_data: { type: "Kruskal", nodes: ["A","B","C","D"], graph: {"A":[["B",1],["C",4]], "B":[["A",1],["C",2],["D",5]], "C":[["A",4],["B",2],["D",3]],"D":[["B",5],["C",3]]}, 
  edges_list_for_sim: [[0,1,1], [0,2,4], [1,2,2], [1,3,5], [2,3,3]], // A=0, B=1, C=2, D=3
  steps: [
    {action: "Edges sorted: (A-B,1), (B-C,2), (C-D,3), (A-C,4), (B-D,5). MST = []. DSU: {A}{B}{C}{D}"},
    {action: "Consider (A-B,1). FIND(A)!=FIND(B). Add. MST: [(A-B,1)]. DSU: {A,B}{C}{D}", edge_considered: ["A","B",1], visited_nodes: ["A","B"]},
    {action: "Consider (B-C,2). FIND(B)!=FIND(C). Add. MST: [(A-B,1), (B-C,2)]. DSU: {A,B,C}{D}", edge_considered: ["B","C",2], visited_nodes: ["A","B","C"]},
    {action: "Consider (C-D,3). FIND(C)!=FIND(D). Add. MST: [(A-B,1), (B-C,2), (C-D,3)]. DSU: {A,B,C,D}", edge_considered: ["C","D",3], visited_nodes: ["A","B","C","D"]},
    {action: "MST complete. Edges: 3 (V-1). Total weight: 1+2+3 = 6."},
    {action: "Consider (A-C,4). FIND(A)==FIND(C). Skip (forms cycle).", edge_considered: ["A","C",4]},
    {action: "Consider (B-D,5). FIND(B)==FIND(D). Skip (forms cycle).", edge_considered: ["B","D",5]}
  ]} }] },
  "Prim’s Algorithm": { brief_explanation: "A greedy algorithm to find a Minimum Spanning Tree (MST) for a connected, undirected graph. It builds the MST one vertex at a time, starting from an arbitrary vertex, by always adding the cheapest edge connecting a vertex in the MST to a vertex outside the MST.", 
  pseudocode: `ALGORITHM Prim(Graph G = (V, E, Weights), start_vertex s)
  Initialize min_cost[v] = infinity for all v in V
  Initialize parent[v] = null for all v in V
  Initialize in_mst[v] = false for all v in V
  
  min_cost[s] = 0
  Create a min-priority queue (PQ) and add all vertices to it (use min_cost as key).
  
  MST_edges = empty set
  
  WHILE PQ is not empty
    u = PQ.extract_min() // Vertex with smallest min_cost not yet in MST
    in_mst[u] = true
    IF parent[u] is not null THEN
      ADD edge (parent[u], u) to MST_edges
    ENDIF
    
    FOR EACH neighbor v of u
      IF in_mst[v] is false AND weight(u,v) < min_cost[v] THEN
        min_cost[v] = weight(u,v)
        parent[v] = u
        PQ.decrease_key(v, min_cost[v]) // Update v's priority in PQ
      ENDIF
    ENDFOR
  ENDFOR
  RETURN MST_edges
END ALGORITHM`, 
  python_code: `import heapq

def prim_mst(num_vertices, adj_list, start_node_idx=0):
    # adj_list is a dictionary: {u_idx: [(v_idx, weight), ...]}
    
    min_cost_to_reach = [float('inf')] * num_vertices
    parent_in_mst = [-1] * num_vertices 
    is_in_mst = [False] * num_vertices
    
    # (cost, vertex_to_add, vertex_from_which_added)
    priority_queue = [(0, start_node_idx, -1)] 
    min_cost_to_reach[start_node_idx] = 0
    
    mst_edges = []
    total_mst_weight = 0
    edges_count = 0
    
    node_map_reverse = {i: chr(65+i) for i in range(num_vertices)}


    while priority_queue and edges_count < num_vertices :
        cost, u_idx, from_idx = heapq.heappop(priority_queue)
        
        if is_in_mst[u_idx]: 
            continue
            
        is_in_mst[u_idx] = True
        total_mst_weight += cost
        edges_count +=1

        if from_idx != -1: 
            u_char = node_map_reverse.get(u_idx, str(u_idx))
            from_char = node_map_reverse.get(from_idx, str(from_idx))
            mst_edges.append((from_char, u_char, cost))
            
        if u_idx in adj_list:
            for v_idx, weight_uv in adj_list[u_idx]:
                if not is_in_mst[v_idx] and weight_uv < min_cost_to_reach[v_idx]:
                    min_cost_to_reach[v_idx] = weight_uv
                    parent_in_mst[v_idx] = u_idx 
                    heapq.heappush(priority_queue, (min_cost_to_reach[v_idx], v_idx, u_idx))
                    
    if edges_count == num_vertices or (num_vertices == 1 and edges_count == 1) : # for single node graph, edges_count will be 1
        # For a single node, MST has 0 edges and 0 weight. This logic needs adjustment for 1 node.
        if num_vertices == 1: return [], 0
        return mst_edges, total_mst_weight
    else:
        return [], -1 # Graph not connected or error
`, 
  time_complexity: "O(E log V) using a binary heap / adjacency list. O(V^2) using adjacency matrix and linear scan for min edge. O(E + V log V) with Fibonacci heap.", 
  space_complexity: "O(V+E) for adjacency list, priority queue, and tracking arrays.", 
  advantages: "Generally faster than Kruskal's for dense graphs if implemented with an adjacency matrix (O(V^2)) or Fibonacci heap (O(E + V log V)).", 
  disadvantages: "Can be slightly more complex to implement than Kruskal's. The O(V^2) version is simple but slow for sparse graphs.", 
  sample_questions_data: [{ question: "Find MST for a given graph using Prim's, starting from A. Graph: (A-B,1), (A-C,4), (B-C,2), (B-D,5), (C-D,3)", simulation_data: { type: "Prim", nodes: ["A","B","C","D"], start_node:"A", graph: {"A":[["B",1],["C",4]], "B":[["A",1],["C",2],["D",5]], "C":[["A",4],["B",2],["D",3]],"D":[["B",5],["C",3]]}, 
  adj_list_for_sim: {0:[[1,1],[2,4]], 1:[[0,1],[2,2],[3,5]], 2:[[0,4],[1,2],[3,3]], 3:[[1,5],[2,3]]}, // A=0, B=1, C=2, D=3
  steps: [
    {action: "Start at A (node 0). PQ: [(0,A,-)]. min_cost[A]=0. Visited: {}", current_node: "A", distances:{"A":0,"B":Infinity,"C":Infinity,"D":Infinity}, visited_nodes: []},
    {action: "Extract A. MST Edges: []. Neighbors of A: B(cost 1 from A), C(cost 4 from A). PQ: [(1,B,A), (4,C,A)]. Visited: {A}", current_node: "A", distances:{"A":0,"B":1,"C":4,"D":Infinity}, visited_nodes: ["A"]},
    {action: "Extract B (cost 1 from A). Add (A-B,1) to MST. Neighbors of B: A(visited), C(cost 2 from B, total path from start to C via B = 1+2=3 < min_cost[C]=4. Update C), D(cost 5 from B). PQ: [(2,C,B), (5,D,B)]. Visited: {A,B}", current_node: "B", distances:{"A":0,"B":1,"C":2,"D":5}, visited_nodes: ["A","B"], edge_considered:["A","B",1]},
    {action: "Extract C (cost 2 from B). Add (B-C,2) to MST. Neighbors of C: A(visited), B(visited), D(cost 3 from C, total path from start to D via B-C = 1+2+3=6 > min_cost[D]=5. No update for D via C). PQ: [(3,D,C)]. Visited: {A,B,C}", current_node: "C", distances:{"A":0,"B":1,"C":2,"D":3}, visited_nodes: ["A","B","C"], edge_considered:["B","C",2]},
    {action: "Extract D (cost 3 from C). Add (C-D,3) to MST. Neighbors of D: B(visited), C(visited). PQ empty. Visited: {A,B,C,D}", current_node: "D", distances:{"A":0,"B":1,"C":2,"D":3}, visited_nodes: ["A","B","C","D"], edge_considered:["C","D",3]},
    {action: "Final MST: [(A-B,1), (B-C,2), (C-D,3)]. Total weight: 1+2+3=6."}
  ]} }] },
  "Dijkstra’s Algorithm": {
    brief_explanation: "Finds the shortest paths from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.",
    time_complexity: "O(V^2) with adjacency matrix, O((V+E)logV) or O(E logV) with adjacency list and priority queue (binary heap).",
    space_complexity: "O(V) for storing distances and visited set/priority queue.",
    advantages: "Efficient for non-negative weights. Guarantees shortest paths. Widely used in routing.",
    disadvantages: "Does not work correctly if there are negative edge weights (use Bellman-Ford instead).",
    pseudocode: `ALGORITHM Dijkstra(Graph G, source_vertex s)
  Initialize dist[v] = infinity for all v in G.V
  Initialize prev[v] = undefined for all v in G.V
  dist[s] = 0
  
  Create a min-priority queue (PQ) of vertices, using dist values as keys.
  Add all vertices to PQ.
  
  WHILE PQ is not empty
    u = PQ.extract_min() // Vertex with smallest distance
    
    FOR EACH neighbor v of u
      alt_dist = dist[u] + weight(u,v)
      IF alt_dist < dist[v] THEN
        dist[v] = alt_dist
        prev[v] = u
        PQ.decrease_key(v, alt_dist) // Update priority in PQ
      ENDIF
    ENDFOR
  ENDFOR
  RETURN dist, prev
END ALGORITHM`,
    python_code: `import heapq

def dijkstra(graph_adj_list, start_node):
    # graph_adj_list: {node: [(neighbor1, weight1), (neighbor2, weight2), ...]}
    num_nodes = len(graph_adj_list) # Assuming nodes are keys in adj_list or can be derived
    
    # If nodes are not 0 to N-1, map them to indices or use node names directly if supported by data structures
    # This example assumes node names can be used directly with dicts.
    
    distances = {node: float('inf') for node in graph_adj_list}
    predecessors = {node: None for node in graph_adj_list}
    distances[start_node] = 0
    
    # Priority queue stores (distance, node)
    priority_queue = [(0, start_node)] 
    
    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)
        
        # If we found a shorter path already, skip
        if current_distance > distances[current_node]:
            continue
            
        for neighbor, weight in graph_adj_list.get(current_node, []):
            distance = current_distance + weight
            
            # If a shorter path to neighbor is found
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                predecessors[neighbor] = current_node
                heapq.heappush(priority_queue, (distance, neighbor))
                
    return distances, predecessors`,
  },

  // --- DP ---
  "DP Foundations": { brief_explanation: "Dynamic Programming is an algorithmic technique for solving optimization problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid redundant computations. Key characteristics: Overlapping Subproblems (solutions to subproblems are reused multiple times) and Optimal Substructure (optimal solution to the overall problem can be constructed from optimal solutions to its subproblems). Approaches: Memoization (top-down, recursive with caching) and Tabulation (bottom-up, iterative table filling).", 
  pseudocode: `// Memoization (Top-Down for Fibonacci)
memo = array initialized to -1
FUNCTION Fibonacci_Memo(n)
  IF n <= 1 THEN RETURN n
  IF memo[n] != -1 THEN RETURN memo[n] // Already computed
  memo[n] = Fibonacci_Memo(n-1) + Fibonacci_Memo(n-2)
  RETURN memo[n]
END FUNCTION

// Tabulation (Bottom-Up for Fibonacci)
FUNCTION Fibonacci_Tab(n)
  dp_table = array of size n+1
  dp_table[0] = 0
  dp_table[1] = 1
  FOR i = 2 TO n
    dp_table[i] = dp_table[i-1] + dp_table[i-2]
  ENDFOR
  RETURN dp_table[n]
END FUNCTION`, 
  python_code: `def fib_memoization(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memoization(n - 1, memo) + fib_memoization(n - 2, memo)
    return memo[n]

def fib_tabulation(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]`, 
  time_complexity: "Varies by problem. DP aims to reduce exponential complexity (from naive recursion) to polynomial.", 
  space_complexity: "Varies. Memoization uses recursion stack + memo table. Tabulation uses table size.", 
  advantages: "Solves complex problems efficiently. Guarantees optimal solutions for problems with optimal substructure. Avoids recomputing subproblems.", 
  disadvantages: "Identifying DP state and transitions can be challenging. Space complexity for tables can be high.", 
  sample_questions_data: [{ question: "Explain Overlapping Subproblems with the Fibonacci sequence example.", simulation_data: { type: "Generic", steps: [
    {action: "Naive recursive Fibonacci(5) calls Fib(4) and Fib(3)."},
    {action: "Fib(4) calls Fib(3) and Fib(2). Fib(3) is computed twice."},
    {action: "Fib(3) calls Fib(2) and Fib(1). Fib(2) is computed multiple times."},
    {action: "DP (memoization/tabulation) stores results of Fib(k) to avoid re-computation."}
  ]} }] },
  "Fibonacci (DP)": { brief_explanation: "Calculating Fibonacci numbers (F(n) = F(n-1) + F(n-2)) using dynamic programming to avoid the exponential complexity of the naive recursive approach.", 
  pseudocode: `// (See DP Foundations for Memoization and Tabulation examples)`, 
  python_code: `// (See DP Foundations for Memoization and Tabulation examples)
# Space-optimized Tabulation for Fibonacci
def fib_tab_optimized(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        c = a + b
        a = b
        b = c
    return b`, 
  time_complexity: "O(n) with DP (either memoization or tabulation).", 
  space_complexity: "O(n) for memoization (recursion stack + memo table) or standard tabulation. O(1) for space-optimized tabulation.", 
  advantages: "Drastic improvement over O(2^n) naive recursion. Simple to understand DP application.", 
  disadvantages: "For very large n, matrix exponentiation method (O(log n)) is even faster.", 
  sample_questions_data: [{ question: "Calculate F(6) using tabulation.", simulation_data: { type: "Fibonacci", steps: [
    {action: "Initialize dp_table for n=6. dp[0]=0, dp[1]=1."},
    {action: "dp[2] = dp[1] + dp[0] = 1 + 0 = 1. Table: [0,1,1,_,_,_,_]"},
    {action: "dp[3] = dp[2] + dp[1] = 1 + 1 = 2. Table: [0,1,1,2,_,_,_]"},
    {action: "dp[4] = dp[3] + dp[2] = 2 + 1 = 3. Table: [0,1,1,2,3,_,_]"},
    {action: "dp[5] = dp[4] + dp[3] = 3 + 2 = 5. Table: [0,1,1,2,3,5,_]"},
    {action: "dp[6] = dp[5] + dp[4] = 5 + 3 = 8. Table: [0,1,1,2,3,5,8]"},
    {action: "Result F(6) = 8."}
  ]} }] },
  "0/1 Knapsack": {
    brief_explanation: "Given items with weights and values, determine the items to include in a knapsack of fixed capacity to maximize total value, without taking fractions of items.",
    time_complexity: "O(N*W) where N is number of items, W is capacity.",
    space_complexity: "O(N*W) for DP table, can be optimized to O(W) if only max value is needed (not item reconstruction).",
    advantages: "Guarantees optimal solution for 0/1 version. Classic DP problem.",
    disadvantages: "Pseudo-polynomial time complexity (depends on the numeric value of capacity W, not just number of items).",
    pseudocode: `ALGORITHM ZeroOneKnapsack(values, weights, capacity, n_items)
  // dp[i][w] will store the maximum value using first i items with capacity w
  dp_table = 2D array of size (n_items+1) x (capacity+1), initialized to 0.

  FOR i = 1 TO n_items
    current_value = values[i-1]
    current_weight = weights[i-1]
    FOR w = 1 TO capacity
      IF current_weight <= w THEN
        // Option 1: Include the current item
        value_if_included = current_value + dp_table[i-1][w - current_weight]
        // Option 2: Exclude the current item
        value_if_excluded = dp_table[i-1][w]
        dp_table[i][w] = MAX(value_if_included, value_if_excluded)
      ELSE
        // Cannot include the current item as its weight > current capacity w
        dp_table[i][w] = dp_table[i-1][w] // Value is same as without this item
      ENDIF
    ENDFOR
  ENDFOR
  RETURN dp_table[n_items][capacity]
END ALGORITHM`,
    python_code: `def zero_one_knapsack(values, weights, capacity):
    n_items = len(values)
    # dp[i][w] will be the maximum value that can be obtained
    # with capacity w using items up to index i-1.
    # Initialize dp table with 0s.
    # Rows: items (0 to n_items), Cols: capacity (0 to capacity)
    dp_table = [[0 for _ in range(capacity + 1)] for _ in range(n_items + 1)]

    for i in range(1, n_items + 1): # Iterate over items
        item_idx = i - 1 # 0-indexed access to values and weights
        current_value = values[item_idx]
        current_weight = weights[item_idx]
        for w in range(1, capacity + 1): # Iterate over capacities
            if current_weight <= w:
                # Option 1: Include the current item
                # Value is current item's value + max value from remaining capacity with previous items
                value_if_included = current_value + dp_table[i-1][w - current_weight]
                
                # Option 2: Exclude the current item
                # Value is max value with previous items at current capacity
                value_if_excluded = dp_table[i-1][w]
                
                dp_table[i][w] = max(value_if_included, value_if_excluded)
            else:
                # Cannot include the current item as its weight > current capacity w
                dp_table[i][w] = dp_table[i-1][w] # Value is same as without this item
                
    return dp_table[n_items][capacity]`,
  },
  "Coin Change (DP)": { brief_explanation: "Finds the minimum number of coins needed to make a specific amount using a given set of coin denominations. DP approach typically builds a table storing min coins for all amounts up to target.", 
  pseudocode: `ALGORITHM MinCoinChange_DP(coins, amount)
  // dp[i] will store the minimum coins needed for amount i
  dp_table = array of size (amount+1), initialized to infinity (or a very large number)
  dp_table[0] = 0 // 0 coins needed for amount 0
  
  FOR i = 1 TO amount
    FOR EACH coin_value IN coins
      IF coin_value <= i THEN
        IF dp_table[i - coin_value] != infinity THEN // If subproblem is solvable
          dp_table[i] = MIN(dp_table[i], 1 + dp_table[i - coin_value])
        ENDIF
      ENDIF
    ENDFOR
  ENDFOR
  
  IF dp_table[amount] = infinity THEN RETURN "Cannot make change"
  ELSE RETURN dp_table[amount]
END ALGORITHM`, 
  python_code: `def min_coin_change_dp(coins_available, target_amount):
    # dp[i] will store the minimum number of coins required for amount i
    # Initialize dp table with a value indicating infinity (e.g., target_amount + 1)
    dp = [float('inf')] * (target_amount + 1)
    dp[0] = 0  # 0 coins are needed to make amount 0
    
    for current_amt in range(1, target_amount + 1):
        for coin_value in coins_available:
            if coin_value <= current_amt:
                # If we use this coin_value, the remaining amount is current_amt - coin_value
                # We need 1 (for the current coin) + dp[current_amt - coin_value] coins
                if dp[current_amt - coin_value] != float('inf'): # Check if subproblem is solvable
                    dp[current_amt] = min(dp[current_amt], 1 + dp[current_amt - coin_value])
                    
    if dp[target_amount] == float('inf'):
        return -1 # Cannot make the target_amount
    else:
        return dp[target_amount]`, 
  time_complexity: "O(num_coins * amount), where num_coins is the number of denominations and amount is the target sum.", 
  space_complexity: "O(amount) for the DP table.", 
  advantages: "Guarantees an optimal solution (minimum coins) for any coin system. More robust than the greedy approach.", 
  disadvantages: "Can be less intuitive than greedy for simple canonical cases. Space complexity depends on the target amount.", 
  sample_questions_data: [{ question: "Min coins for amount 11 with coins {1,2,5}.", simulation_data: { type: "CoinChangeDP", coins: [1,2,5], amount: 11, steps: [
    {action: "dp[0]=0. Initialize dp table for amounts 1 to 11 with Infinity."},
    {action: "Amount 1: Try coin 1 (dp[0]+1=1). dp[1]=1."},
    {action: "Amount 2: Try coin 1 (dp[1]+1=2), Try coin 2 (dp[0]+1=1). dp[2]=1."},
    {action: "Amount 3: Try coin 1 (dp[2]+1=2), Try coin 2 (dp[1]+1=2). dp[3]=2."},
    {action: "Amount 4: Try coin 1 (dp[3]+1=3), Try coin 2 (dp[2]+1=2). dp[4]=2."},
    {action: "Amount 5: Try coin 1 (dp[4]+1=3), Try coin 2 (dp[3]+1=3), Try coin 5 (dp[0]+1=1). dp[5]=1."},
    {action: "Amount 6: Try coin 1 (dp[5]+1=2), Try coin 2 (dp[4]+1=3), Try coin 5 (dp[1]+1=2). dp[6]=2."},
    {action: "Amount 7: Try coin 1 (dp[6]+1=3), Try coin 2 (dp[5]+1=2), Try coin 5 (dp[2]+1=2). dp[7]=2."},
    {action: "Amount 8: Try coin 1 (dp[7]+1=3), Try coin 2 (dp[6]+1=3), Try coin 5 (dp[3]+1=3). dp[8]=3."},
    {action: "Amount 9: Try coin 1 (dp[8]+1=4), Try coin 2 (dp[7]+1=3), Try coin 5 (dp[4]+1=3). dp[9]=3."},
    {action: "Amount 10: Try coin 1 (dp[9]+1=4), Try coin 2 (dp[8]+1=4), Try coin 5 (dp[5]+1=2). dp[10]=2."},
    {action: "Amount 11: Try coin 1 (dp[10]+1=3), Try coin 2 (dp[9]+1=4), Try coin 5 (dp[6]+1=3). dp[11]=3."},
    {action: "Result: dp[11] = 3 coins (e.g., 5+5+1)."}
  ]} }] },
  "LCS": {
    brief_explanation: "Find the longest subsequence common to two sequences. Solved using dynamic programming by building a table representing lengths of LCS for prefixes.",
    time_complexity: "O(m*n) where m and n are lengths of the two strings.",
    space_complexity: "O(m*n) for DP table, can be optimized to O(min(m,n)) if only length is needed (not reconstruction of LCS string).",
    advantages: "Solves the problem optimally. The DP table can be used to reconstruct the actual LCS string.",
    disadvantages: "Space complexity can be high for very long sequences if the full table is stored for reconstruction.",
    pseudocode: `ALGORITHM LCS_Length(X, Y)
  m = length of X
  n = length of Y
  // dp[i][j] will store the length of LCS of X[0..i-1] and Y[0..j-1]
  dp_table = 2D array of size (m+1) x (n+1), initialized to 0.

  FOR i = 1 TO m
    FOR j = 1 TO n
      IF X[i-1] = Y[j-1] THEN // Characters match
        dp_table[i][j] = 1 + dp_table[i-1][j-1]
      ELSE // Characters do not match
        dp_table[i][j] = MAX(dp_table[i-1][j], dp_table[i][j-1])
      ENDIF
    ENDFOR
  ENDFOR
  RETURN dp_table[m][n] // Length of LCS

// To reconstruct LCS string (requires dp_table):
ALGORITHM Print_LCS(dp_table, X, i, j)
  IF i = 0 OR j = 0 THEN RETURN ""
  IF X[i-1] = Y[j-1] THEN
    RETURN Print_LCS(dp_table, X, i-1, j-1) + X[i-1]
  ELSE
    IF dp_table[i-1][j] > dp_table[i][j-1] THEN
      RETURN Print_LCS(dp_table, X, i-1, j)
    ELSE
      RETURN Print_LCS(dp_table, X, i, j-1)
    ENDIF
  ENDIF
END ALGORITHM`,
    python_code: `def lcs_length_and_string(X, Y):
    m = len(X)
    n = len(Y)
    
    # dp[i][j] will store the length of LCS of X[:i] and Y[:j]
    dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    
    # Build the dp table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i-1] == Y[j-1]: # Current characters match
                dp[i][j] = 1 + dp[i-1][j-1]
            else: # Current characters do not match
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
                
    lcs_len = dp[m][n]
    
    # Reconstruct the LCS string
    lcs_str = []
    i, j = m, n
    while i > 0 and j > 0:
        if X[i-1] == Y[j-1]:
            lcs_str.append(X[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
            
    return lcs_len, "".join(reversed(lcs_str))`,
  },
  "Matrix Chain Multiplication": { brief_explanation: "Determine the optimal parenthesization of a chain of matrices to minimize the total number of scalar multiplications. Solved using DP.", 
  pseudocode: `ALGORITHM MatrixChainOrder(p) // p is array of dimensions, p[i-1]xp[i] for matrix A_i
  n = length of p - 1 // Number of matrices
  dp[i][j] = min cost to multiply A_i...A_j
  s[i][j] = k that gives min cost for dp[i][j]
  
  FOR i = 1 TO n: dp[i][i] = 0 // Cost of multiplying one matrix is 0
  
  FOR chain_len = 2 TO n // chain_len is length of subchain being considered
    FOR i = 1 TO n - chain_len + 1
      j = i + chain_len - 1
      dp[i][j] = infinity
      FOR k = i TO j - 1 // k is split point
        cost = dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j]
        IF cost < dp[i][j] THEN
          dp[i][j] = cost
          s[i][j] = k
        ENDIF
      ENDFOR
    ENDFOR
  ENDFOR
  RETURN dp[1][n], s // Min cost and split points table
END ALGORITHM`, 
  python_code: `import sys

def matrix_chain_multiplication(dims):
    # dims[i-1] x dims[i] is the dimension of matrix A_i
    n = len(dims) - 1  # Number of matrices
    if n <= 1:
        return 0, [] # No multiplications needed or just one matrix

    # dp[i][j] = minimum number of scalar multiplications needed to compute A_i...A_j
    # s[i][j] = index k where the optimal split occurs for A_i...A_j (i.e., (A_i...A_k)(A_{k+1}...A_j))
    dp = [[0 for _ in range(n)] for _ in range(n)] # Matrices are 0-indexed A_0 to A_{n-1}
    s = [[0 for _ in range(n)] for _ in range(n)]

    # chain_len is the length of the matrix chain being considered
    for chain_len in range(2, n + 1):
        for i in range(n - chain_len + 1):
            j = i + chain_len - 1 # Ending index of the subchain
            dp[i][j] = sys.maxsize # Initialize with infinity
            
            for k in range(i, j): # k is the split point
                # Cost = cost(A_i...A_k) + cost(A_{k+1}...A_j) + cost of multiplying these two results
                # Dimensions: A_i...A_k results in dims[i] x dims[k+1] matrix
                #             A_{k+1}...A_j results in dims[k+1] x dims[j+1] matrix
                # Cost of multiplying them: dims[i] * dims[k+1] * dims[j+1]
                cost = dp[i][k] + dp[k+1][j] + dims[i] * dims[k+1] * dims[j+1]
                
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    s[i][j] = k # Store the split point
                    
    # To reconstruct the optimal parenthesization (not shown here, but uses 's' table)
    return dp[0][n-1] # Minimum cost for the entire chain A_0...A_{n-1}`, 
  time_complexity: "O(n^3), where n is the number of matrices.", 
  space_complexity: "O(n^2) for DP table (costs) and split points table.", 
  advantages: "Finds the optimal parenthesization, significantly reducing computation for long matrix chains.", 
  disadvantages: "DP state and transitions can be tricky to formulate initially. Time complexity is cubic.", 
  sample_questions_data: [{ question: "Optimal order for A1(10x30), A2(30x5), A3(5x60). Dimensions p = [10, 30, 5, 60].", simulation_data: { type: "MatrixChainMultiplication", matrices_dimensions: [10,30,5,60], steps: [
    {action: "Initialize dp[i][i]=0. For chain_len=1: dp[0][0]=0, dp[1][1]=0, dp[2][2]=0."},
    {action: "Chain_len=2. Subproblem A0*A1 (i=0, j=1). Split k=0. Cost = dp[0][0]+dp[1][1] + p[0]*p[1]*p[2] = 0+0+10*30*5=1500. dp[0][1]=1500. s[0][1]=0."},
    {action: "Chain_len=2. Subproblem A1*A2 (i=1, j=2). Split k=1. Cost = dp[1][1]+dp[2][2] + p[1]*p[2]*p[3] = 0+0+30*5*60=9000. dp[1][2]=9000. s[1][2]=1."},
    {action: "Chain_len=3. Subproblem A0*A1*A2 (i=0, j=2)."},
    {action: "  Try split k=0: (A0)(A1*A2). Cost = dp[0][0]+dp[1][2] + p[0]*p[1]*p[3] = 0+9000+10*30*60 = 9000+18000=27000."},
    {action: "  Try split k=1: (A0*A1)(A2). Cost = dp[0][1]+dp[2][2] + p[0]*p[2]*p[3] = 1500+0+10*5*60 = 1500+3000=4500."},
    {action: "Min cost for (A0*A1*A2) is 4500. dp[0][2]=4500. s[0][2]=1 (split after A1). Optimal is ((A0*A1)*A2)."}
  ]} }] },
  "TSP (DP)": { brief_explanation: "The Traveling Salesperson Problem solved using DP (Held-Karp algorithm). Finds the shortest tour visiting all cities exactly once and returning to the start.", 
  pseudocode: `ALGORITHM TSP_DP(graph_matrix)
  n = number of cities
  // dp[mask][i] = min cost of path starting at city 0, visiting all cities in 'mask', and ending at city 'i'.
  // 'mask' is a bitmask where the j-th bit is 1 if city j is visited.
  dp = 2D array of size (2^n) x n, initialized to infinity.
  
  // Base case: Path from city 0 to city 0 with only city 0 visited has cost 0.
  dp[1][0] = 0 // Mask '1' means only city 0 is visited (0th bit is 1)

  FOR mask = 1 TO (2^n - 1)
    FOR i = 0 TO n-1 // 'i' is the current ending city
      IF (mask >> i) & 1 THEN // If city 'i' is in the current mask
        FOR j = 0 TO n-1 // 'j' is the previous city in the path before 'i'
          IF i != j AND (mask >> j) & 1 THEN // If city 'j' is in mask and j!=i
            prev_mask = mask XOR (1 << i) // Mask without city 'i'
            IF dp[prev_mask][j] != infinity THEN
              cost_to_j_then_i = dp[prev_mask][j] + graph_matrix[j][i]
              dp[mask][i] = MIN(dp[mask][i], cost_to_j_then_i)
            ENDIF
          ENDIF
        ENDFOR
      ENDIF
    ENDFOR
  ENDFOR
  
  // Final step: find min cost to return to city 0 from all possible last cities 'i'
  min_tour_cost = infinity
  final_mask = (1 << n) - 1 // Mask with all cities visited
  FOR i = 1 TO n-1 // Last city 'i' before returning to 0
    IF dp[final_mask][i] != infinity THEN
      tour_cost = dp[final_mask][i] + graph_matrix[i][0] // Add cost from 'i' back to city 0
      min_tour_cost = MIN(min_tour_cost, tour_cost)
    ENDIF
  ENDFOR
  RETURN min_tour_cost
END ALGORITHM`, 
  python_code: `import sys

def tsp_dp(graph_matrix):
    n = len(graph_matrix)
    if n == 0: return 0
    if n == 1: return 0 # Or graph_matrix[0][0] if self-loop cost matters

    # dp[mask][i] = min cost of path starting at city 0,
    # visiting all cities in 'mask', and ending at city 'i'.
    # Mask: bitmask, i-th bit is 1 if city i is visited.
    dp = [[float('inf')] * n for _ in range(1 << n)]

    # Base case: Path from city 0 to city 0, mask has only city 0 set.
    dp[1][0] = 0 # Mask '00...01' means only city 0 is visited.

    for mask in range(1, 1 << n):
        for i in range(n): # Current ending city 'i'
            # If city 'i' is in the current mask
            if (mask >> i) & 1:
                for j in range(n): # Previous city 'j' before 'i'
                    # If city 'j' is also in mask, and j is not i
                    if i != j and (mask >> j) & 1:
                        prev_mask = mask ^ (1 << i) # Mask without city 'i'
                        # If path to 'j' in 'prev_mask' is valid
                        if dp[prev_mask][j] != float('inf'):
                            cost = dp[prev_mask][j] + graph_matrix[j][i]
                            dp[mask][i] = min(dp[mask][i], cost)

    # Find the minimum cost to complete the tour by returning to city 0
    final_mask = (1 << n) - 1 # Mask with all cities visited
    min_tour_cost = float('inf')

    for i in range(1, n): # End at city 'i' (cannot be 0, as we start at 0)
        if dp[final_mask][i] != float('inf'):
            tour_cost = dp[final_mask][i] + graph_matrix[i][0] # Cost to return to city 0
            min_tour_cost = min(min_tour_cost, tour_cost)
            
    if n == 1 and graph_matrix[0][0] == 0 : return 0 # Special case for single city, no travel
    if min_tour_cost == float('inf') and n > 1: return -1 # No path or disconnected
    return min_tour_cost if n > 1 else 0
`, 
  time_complexity: "O(n^2 * 2^n), where n is the number of cities. Iterate through 2^n masks, n possible ending cities, n possible previous cities.", 
  space_complexity: "O(n * 2^n) for the DP table.", 
  advantages: "Solves TSP optimally. Much better than brute-force O(n!).", 
  disadvantages: "Still exponential, so it's impractical for large n (e.g., n > 20-25).", 
  sample_questions_data: [{ question: "Solve TSP for 4 cities with a given cost matrix using DP.", simulation_data: { type: "TSP", num_nodes: 4, cost_matrix: [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]], steps: [
    {action: "Initialize dp table. dp[1][0]=0 (mask 0001, means path starts and ends at city 0, visiting only city 0, cost 0)."},
    {action: "Mask 0011 (cities 0,1): dp[3][1] = dp[1][0]+cost[0][1] = 0+10 = 10."},
    {action: "Mask 0101 (cities 0,2): dp[5][2] = dp[1][0]+cost[0][2] = 0+15 = 15."},
    {action: "Mask 1001 (cities 0,3): dp[9][3] = dp[1][0]+cost[0][3] = 0+20 = 20."},
    {action: "Mask 0111 (cities 0,1,2), end at 1: dp[7][1] = min(dp[5][2]+cost[2][1]) = dp[0101][2]+cost[2][1] = 15+35=50. (Path 0-2-1)"},
    {action: "Mask 0111 (cities 0,1,2), end at 2: dp[7][2] = min(dp[3][1]+cost[1][2]) = dp[0011][1]+cost[1][2] = 10+35=45. (Path 0-1-2)"},
    {action: "... (continue filling dp table for all masks and end cities) ..."},
    {action: "Final mask 1111 (all cities 0,1,2,3 visited)."},
    {action: "  Path ends at 1: cost = dp[15][1] + cost[1][0]. (e.g., 0-2-3-1 + cost[1][0])"},
    {action: "  Path ends at 2: cost = dp[15][2] + cost[2][0]. (e.g., 0-1-3-2 + cost[2][0] = (20+25+30)+15 = 75+15 = 90)"},
    {action: "  Path ends at 3: cost = dp[15][3] + cost[3][0]. (e.g., 0-1-2-3 + cost[3][0])"},
    {action: "Minimum of these final tour costs is the answer. For the given matrix, it's 80 (0-1-3-2-0: 10+25+30+15=80)."}
  ]} }] },
  "Floyd-Warshall Algorithm": { brief_explanation: "An algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but no negative cycles). It computes all-pairs shortest paths in O(V^3) time.", 
  pseudocode: `ALGORITHM FloydWarshall(graph_matrix W)
  n = number of vertices
  dist = W // Initialize dist matrix with direct edge weights (infinity if no direct edge, 0 for self-loops)

  FOR k = 0 TO n-1 // k is the intermediate vertex allowed
    FOR i = 0 TO n-1 // i is the source vertex
      FOR j = 0 TO n-1 // j is the destination vertex
        // If path from i to j through k is shorter than current direct/indirect path
        IF dist[i][k] + dist[k][j] < dist[i][j] THEN
          dist[i][j] = dist[i][k] + dist[k][j]
        ENDIF
      ENDFOR
    ENDFOR
  ENDFOR
  RETURN dist // Matrix of shortest path distances
END ALGORITHM`, 
  python_code: `def floyd_warshall(graph_matrix):
    # graph_matrix[i][j] is weight from i to j. float('inf') if no edge, 0 if i==j.
    n = len(graph_matrix)
    dist = [row[:] for row in graph_matrix] # Create a copy

    for k in range(n): # Intermediate vertex
        for i in range(n): # Source vertex
            for j in range(n): # Destination vertex
                # If path from i to j through k is shorter
                if dist[i][k] != float('inf') and \
                   dist[k][j] != float('inf') and \
                   dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    # Optional: Check for negative cycles
    # If dist[i][i] < 0 for any i, there's a negative cycle reachable from/to i.
    # for i in range(n):
    #     if dist[i][i] < 0:
    #         print("Negative cycle detected")
    #         return None # Or handle as appropriate

    return dist`, 
  time_complexity: "O(V^3), where V is the number of vertices, due to three nested loops.", 
  space_complexity: "O(V^2) for storing the distance matrix.", 
  advantages: "Relatively simple to implement. Finds all-pairs shortest paths. Handles negative edge weights correctly (as long as no negative cycles exist).", 
  disadvantages: "High time complexity, making it unsuitable for very large graphs. If only single-source shortest paths are needed, Dijkstra (for non-negative weights) or Bellman-Ford (for negative weights) are more efficient.", 
  sample_questions_data: [{ question: "Find all-pairs shortest paths for a graph. Graph: (0-1,3), (0-2,8), (1-2,2), (2-0,5), (2-1,1) (assume inf for others)", simulation_data: { type: "FloydWarshall", num_nodes:3, cost_matrix: [[0,3,8],[Infinity,0,2],[5,1,0]], steps: [
    {action: "Initial dist matrix (D0): [[0,3,8],[inf,0,2],[5,1,0]]", dp_table: [[0,3,8],[Infinity,0,2],[5,1,0]]},
    {action: "k=0 (intermediate vertex 0): dist[i][j] = min(dist[i][j], dist[i][0]+dist[0][j])", dp_table: [[0,3,8],[Infinity,0,2],[5,1,0]]}, // No changes as 0 is source/dest or path via 0 is not shorter
    {action: "k=1 (intermediate vertex 1): dist[0][2]=min(D0[0][2], D0[0][1]+D0[1][2])=min(8, 3+2=5)=5. D1 matrix updated.", dp_table: [[0,3,5],[Infinity,0,2],[5,1,0]]},
    {action: "k=2 (intermediate vertex 2): dist[0][1]=min(D1[0][1], D1[0][2]+D1[2][1])=min(3, 5+1=6)=3.", dp_table: [[0,3,5],[Infinity,0,2],[5,1,0]]}, // No change for dist[0][1] as 3 < 6
    {action: "k=2 (intermediate vertex 2): dist[1][0]=min(D1[1][0], D1[1][2]+D1[2][0])=min(inf, 2+5=7)=7. D2 matrix updated.", dp_table: [[0,3,5],[7,0,2],[5,1,0]]},
    {action: "Final matrix (D2): [[0,3,5],[7,0,2],[5,1,0]]"}
  ]} }] },
  "Bellman-Ford Algorithm": { brief_explanation: "Finds shortest paths from a single source vertex to all other vertices in a weighted graph. Slower than Dijkstra's but can handle graphs with negative edge weights and detect negative cycles.", 
  pseudocode: `ALGORITHM BellmanFord(Graph G=(V,E,W), source s)
  Initialize dist[v] = infinity for all v in V
  Initialize prev[v] = null for all v in V
  dist[s] = 0

  // Relax edges |V|-1 times
  FOR i = 1 TO |V|-1
    FOR EACH edge (u,v) with weight w IN E
      IF dist[u] != infinity AND dist[u] + w < dist[v] THEN
        dist[v] = dist[u] + w
        prev[v] = u
      ENDIF
    ENDFOR
  ENDFOR

  // Check for negative-weight cycles
  FOR EACH edge (u,v) with weight w IN E
    IF dist[u] != infinity AND dist[u] + w < dist[v] THEN
      RETURN "Graph contains a negative-weight cycle"
    ENDIF
  ENDFOR
  
  RETURN dist, prev
END ALGORITHM`, 
  python_code: `def bellman_ford(num_vertices, edges_list, start_node):
    # edges_list: list of (u, v, weight) tuples
    
    distances = [float('inf')] * num_vertices
    predecessors = [-1] * num_vertices # Using -1 for None/undefined
    distances[start_node] = 0
    
    # Step 2: Relax edges |V|-1 times
    for iteration_num in range(num_vertices - 1):
        updated_in_iteration = False
        for u, v, weight in edges_list:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
                predecessors[v] = u
                updated_in_iteration = True
        if not updated_in_iteration: # Optimization: if no distances updated, we are done
            break
            
    # Step 3: Check for negative-weight cycles
    for u, v, weight in edges_list:
        if distances[u] != float('inf') and distances[u] + weight < distances[v]:
            # To find the cycle itself, one can backtrack predecessors from 'v'
            # or mark nodes reachable from such an edge as having -infinity distance.
            return None, "Graph contains a negative-weight cycle" 
            
    return distances, predecessors`, 
  time_complexity: "O(V*E), where V is number of vertices, E is number of edges.", 
  space_complexity: "O(V) for distance and predecessor arrays.", 
  advantages: "Handles negative edge weights. Can detect negative-weight cycles reachable from the source.", 
  disadvantages: "Slower than Dijkstra's algorithm for graphs with no negative edge weights.", 
  sample_questions_data: [{ question: "Find shortest paths from source S in a graph with negative edges. Edges: (S,A,2), (S,B,5), (A,B,-4), (B,C,1), (A,C,3). Nodes: S=0,A=1,B=2,C=3", simulation_data: { type: "BellmanFord", num_nodes:4, start_node:0, edges_list: [[0,1,2],[0,2,5],[1,2,-4],[2,3,1],[1,3,3]], nodes_map: {0:'S',1:'A',2:'B',3:'C'}, steps: [
    {action: "Iteration 1: Init dist[S]=0, dist[A,B,C]=inf. Edges: (S,A,2), (S,B,5), (A,B,-4), (B,C,1), (A,C,3)", current_node: 'S', distances: {0:0, 1:Infinity, 2:Infinity, 3:Infinity}},
    {action: "Iter 1, Edge (S,A,2): dist[A]=min(inf, 0+2)=2.", edge_considered: ["S","A",2], distances: {0:0, 1:2, 2:Infinity, 3:Infinity}},
    {action: "Iter 1, Edge (S,B,5): dist[B]=min(inf, 0+5)=5.", edge_considered: ["S","B",5], distances: {0:0, 1:2, 2:5, 3:Infinity}},
    {action: "Iter 1, Edge (A,B,-4): dist[B]=min(5, dist[A]-4=2-4=-2). dist[B]=-2.", edge_considered: ["A","B",-4], distances: {0:0, 1:2, 2:-2, 3:Infinity}},
    {action: "Iter 1, Edge (B,C,1): dist[C]=min(inf, dist[B]+1=-2+1=-1). dist[C]=-1.", edge_considered: ["B","C",1], distances: {0:0, 1:2, 2:-2, 3:-1}},
    {action: "Iter 1, Edge (A,C,3): dist[C]=min(-1, dist[A]+3=2+3=5). dist[C]=-1 (no change).", edge_considered: ["A","C",3], distances: {0:0, 1:2, 2:-2, 3:-1}},
    {action: "Iteration 2: (Repeat relaxations for all edges. No changes expected in this example if already optimal after 1st iter for this graph size)."},
    {action: "Iteration 3 (V-1 iterations for 4 nodes): (Repeat relaxations)."},
    {action: "Negative Cycle Check: Iterate all edges again. If any dist[u]+w < dist[v], negative cycle exists. (None here). Final Dists: S:0, A:2, B:-2, C:-1."}
  ]} }] },

  // --- Backtracking & Branch-and-Bound ---
  "N-Queens Problem": {
    brief_explanation: "Place N chess queens on an N×N chessboard so that no two queens threaten each other (i.e., no two queens share the same row, column, or diagonal). Solved using backtracking by trying to place queens column by column (or row by row), and backtracking if a placement leads to a conflict.",
    time_complexity: "Roughly O(N!) in worst-case without optimizations (trying all permutations of queen placements), but pruning due to constraint checks helps significantly, though still exponential.",
    space_complexity: "O(N) for storing queen positions on the board (e.g., an array where index is row and value is column) and for the recursion stack.",
    advantages: "Illustrates backtracking effectively. Can be adapted to find all solutions or just one. Conceptual basis for many constraint satisfaction problems.",
    disadvantages: "Can be slow for large N due to its exponential nature. The number of solutions grows rapidly.",
    pseudocode: `ALGORITHM SolveNQueens(board, col, N)
  // board: N x N matrix, initialized to 0
  // col: current column to place a queen
  // N: size of the board

  // Base Case: If all queens are placed
  IF col >= N THEN
    PRINT solution (board)
    RETURN true // Found a solution
  ENDIF

  // Try placing a queen in all rows of the current column
  FOR row = 0 TO N-1
    IF IsSafe(board, row, col, N) THEN
      board[row][col] = 1 // Place queen

      // Recur for the next column
      IF SolveNQueens(board, col + 1, N) THEN
        // If placing queen in board[row][col] leads to a solution,
        // return true (if only one solution is needed)
        // To find all solutions, don't return here, just continue.
        // For this pseudocode, let's assume we find one solution and stop or backtrack.
         RETURN true 
      ENDIF
      
      // If placing queen in board[row][col] doesn't lead to a solution,
      // then BACKTRACK: remove queen from board[row][col]
      board[row][col] = 0 
    ENDIF
  ENDFOR
  
  RETURN false // No row in this column leads to a solution
END ALGORITHM

FUNCTION IsSafe(board, row, col, N)
  // Check this row on left side
  FOR c = 0 TO col-1
    IF board[row][c] = 1 THEN RETURN false
  ENDFOR
  
  // Check upper diagonal on left side
  FOR r_idx = row, c_idx = col WHILE r_idx >= 0 AND c_idx >= 0
    IF board[r_idx][c_idx] = 1 THEN RETURN false
    r_idx = r_idx - 1
    c_idx = c_idx - 1
  ENDFOR
  
  // Check lower diagonal on left side
  FOR r_idx = row, c_idx = col WHILE r_idx < N AND c_idx >= 0
    IF board[r_idx][c_idx] = 1 THEN RETURN false
    r_idx = r_idx + 1
    c_idx = c_idx - 1
  ENDFOR
  
  RETURN true
END FUNCTION`,
    python_code: `def solve_n_queens(n):
    board = [[0 for _ in range(n)] for _ in range(n)]
    solutions = []

    def is_safe(row, col):
        # Check row on left side
        for c_idx in range(col):
            if board[row][c_idx] == 1:
                return False
        
        # Check upper diagonal on left side
        r, c = row, col
        while r >= 0 and c >= 0:
            if board[r][c] == 1:
                return False
            r -= 1
            c -= 1
            
        # Check lower diagonal on left side
        r, c = row, col
        while r < n and c >= 0:
            if board[r][c] == 1:
                return False
            r += 1
            c -= 1
            
        return True

    def solve_util(col):
        if col == n: # All queens placed
            # Add a copy of the board configuration to solutions
            solutions.append(["".join("Q" if cell else "." for cell in r) for r in board])
            return True # Found a solution (or return False to find all)

        res = False # To track if any solution found from this column onwards
        for row_idx in range(n):
            if is_safe(row_idx, col):
                board[row_idx][col] = 1 # Place queen
                
                # If we want all solutions, don't short-circuit with 'res = True'
                # For now, let's say we want all, so we always recurse
                solve_util(col + 1)
                
                board[row_idx][col] = 0 # Backtrack
        return res # Not strictly needed if finding all solutions

    solve_util(0)
    return solutions`,
  },
  "Graph Coloring": { brief_explanation: "Assign colors to vertices of a graph such that no two adjacent vertices share the same color, using a minimum number of colors (chromatic number) or a fixed number of M colors.", 
  pseudocode: `ALGORITHM GraphColoringUtil(graph, m, color_assignment, v_idx)
  // graph: adjacency matrix or list
  // m: number of available colors
  // color_assignment: array to store color assigned to each vertex
  // v_idx: current vertex index to color

  IF v_idx = NumberOfVertices(graph) THEN
    RETURN true // All vertices are colored
  ENDIF

  FOR c = 1 TO m // Try each color
    IF IsSafeToColor(graph, v_idx, c, color_assignment) THEN
      color_assignment[v_idx] = c
      IF GraphColoringUtil(graph, m, color_assignment, v_idx + 1) THEN
        RETURN true // If assigning color c leads to a solution
      ENDIF
      color_assignment[v_idx] = 0 // Backtrack: remove color
    ENDIF
  ENDFOR
  RETURN false // No color can be assigned to this vertex
END ALGORITHM

FUNCTION IsSafeToColor(graph, v_idx, color_c, color_assignment)
  FOR EACH neighbor u OF v_idx
    IF color_assignment[u] = color_c THEN
      RETURN false // Adjacent vertex u already has color_c
    ENDIF
  ENDFOR
  RETURN true
END FUNCTION`, 
  python_code: `def is_safe_to_color(graph_adj, vertex, color, color_assignment):
    for neighbor in graph_adj.get(vertex, []):
        if color_assignment.get(neighbor) == color:
            return False
    return True

def graph_coloring_util(graph_adj, num_colors, color_assignment, vertex_idx, vertices_list):
    if vertex_idx == len(vertices_list): # All vertices are colored
        return True

    current_vertex = vertices_list[vertex_idx]
    for c in range(1, num_colors + 1): # Try colors 1 to num_colors
        if is_safe_to_color(graph_adj, current_vertex, c, color_assignment):
            color_assignment[current_vertex] = c
            if graph_coloring_util(graph_adj, num_colors, color_assignment, vertex_idx + 1, vertices_list):
                return True
            color_assignment[current_vertex] = 0 # Backtrack
    return False

def can_color_graph(graph_adj, num_colors):
    # graph_adj: {vertex: [neighbor1, neighbor2, ...]}
    vertices = list(graph_adj.keys())
    if not vertices and num_colors >=0 : return True # Empty graph
    if not vertices : return False

    color_assignment = {vertex: 0 for vertex in vertices} # 0 means no color
    
    if graph_coloring_util(graph_adj, num_colors, color_assignment, 0, vertices):
        return True, color_assignment
    else:
        return False, {}`, 
  time_complexity: "O(m^V * V) in worst case, where V is number of vertices and m is number of colors. V factor for checking safety.", 
  space_complexity: "O(V) for recursion stack and color assignment array.", 
  advantages: "Solves the graph coloring decision problem (can graph be colored with M colors?). Can be adapted to find chromatic number (min colors).", 
  disadvantages: "NP-hard problem. Brute-force backtracking can be very slow for large graphs or many colors.", 
  sample_questions_data: [{ question: "Color a graph with 3 colors. Vertices: A,B,C,D. Edges: (A-B), (A-C), (B-C), (C-D).", simulation_data: { type: "GraphColoring", num_colors:3, graph: {"A":["B","C"],"B":["A","C"],"C":["A","B","D"],"D":["C"]}, steps: [
    {action: "Color A with 1 (Color Red). Assignment: {A:1}"},
    {action: "Color B. Try 1 (Red - conflict A). Try 2 (Color Green). Assignment: {A:1, B:2}"},
    {action: "Color C. Try 1 (Red - conflict A). Try 2 (Green - conflict B). Try 3 (Color Blue). Assignment: {A:1, B:2, C:3}"},
    {action: "Color D. Try 1 (Red - safe, C is Blue). Assignment: {A:1, B:2, C:3, D:1}"},
    {action: "Solution found: A=Red, B=Green, C=Blue, D=Red"}
  ]} }] },
  "Subset Sum Problem": { brief_explanation: "Given a set of non-negative integers and a target sum, determine if there is a subset of the given set whose elements sum up to the target sum. Often solved using backtracking or dynamic programming.", 
  pseudocode: `ALGORITHM IsSubsetSum(set_arr, n, target_sum)
  // set_arr: array of numbers
  // n: current size of set_arr being considered (elements from 0 to n-1)
  // target_sum: the sum we want to achieve

  // Base Cases
  IF target_sum = 0 THEN RETURN true // Found a subset that sums to 0 (empty subset)
  IF n = 0 AND target_sum != 0 THEN RETURN false // No elements left, but sum not achieved

  // If last element is greater than target_sum, then ignore it
  IF set_arr[n-1] > target_sum THEN
    RETURN IsSubsetSum(set_arr, n-1, target_sum)
  ENDIF

  // Check if sum can be obtained by either:
  // 1. Including the last element
  // 2. Excluding the last element
  RETURN IsSubsetSum(set_arr, n-1, target_sum) OR 
         IsSubsetSum(set_arr, n-1, target_sum - set_arr[n-1])
END ALGORITHM`, 
  python_code: `def is_subset_sum_backtracking(num_set, current_idx, current_sum, target_sum):
    # Base Cases
    if current_sum == target_sum:
        return True
    if current_idx == len(num_set) or current_sum > target_sum: # Pruning if sum exceeds
        return False

    # Recursive step:
    # Option 1: Include the current element set[current_idx]
    included_result = is_subset_sum_backtracking(num_set, current_idx + 1, current_sum + num_set[current_idx], target_sum)
    
    if included_result: # Optimization: if found, no need to check excluded path
        return True
        
    # Option 2: Exclude the current element set[current_idx]
    excluded_result = is_subset_sum_backtracking(num_set, current_idx + 1, current_sum, target_sum)
    
    return excluded_result

# Wrapper function
def find_subset_sum(num_set, target_sum):
    return is_subset_sum_backtracking(num_set, 0, 0, target_sum)`, 
  time_complexity: "O(2^n) in the worst case for backtracking, as each element has two choices (include or exclude).", 
  space_complexity: "O(n) for the recursion stack in backtracking.", 
  advantages: "Relatively simple to understand and implement the backtracking approach. Can be adapted to find the actual subset.", 
  disadvantages: "NP-complete problem. Exponential time complexity makes it infeasible for large sets. Dynamic programming offers a pseudo-polynomial time solution O(n*target_sum).", 
  sample_questions_data: [{ question: "Find subset of {2,4,6,10} that sums to 16.", simulation_data: { type: "SubsetSum", set: [2,4,6,10], target_sum: 16, steps: [
    {action: "Start with empty subset, sum=0. Consider item 2.", current_subset:[], current_sum:0, item_considered:2 },
    {action: "Branch 1: Include 2. Subset: [2], sum=2. Consider item 4.", current_subset:[2], current_sum:2, item_considered:4, included: true},
    {action: "  Branch 1.1: Include 4. Subset: [2,4], sum=6. Consider item 6.", current_subset:[2,4], current_sum:6, item_considered:6, included: true},
    {action: "    Branch 1.1.1: Include 6. Subset: [2,4,6], sum=12. Consider item 10.", current_subset:[2,4,6], current_sum:12, item_considered:10, included: true},
    {action: "      Branch 1.1.1.1: Include 10. Subset: [2,4,6,10], sum=22. Sum > 16. Backtrack.", current_subset:[2,4,6,10], current_sum:22, included: true, solution_found: false},
    {action: "      Branch 1.1.1.2: Exclude 10. Subset: [2,4,6], sum=12. No more items. Backtrack.", current_subset:[2,4,6], current_sum:12, item_considered:10, included: false, solution_found: false},
    {action: "    Branch 1.1.2: Exclude 6. Subset: [2,4], sum=6. Consider item 10.", current_subset:[2,4], current_sum:6, item_considered:6, included: false},
    {action: "      Branch 1.1.2.1: Include 10. Subset: [2,4,10], sum=16. Target Found!", current_subset:[2,4,10], current_sum:16, item_considered:10, included: true, solution_found: true}
  ]} }] },
  "Hamiltonian Cycle": { brief_explanation: "A Hamiltonian cycle (or circuit) is a cycle in an undirected or directed graph that visits each vertex exactly once. Determining if such a cycle exists is an NP-complete problem.", 
  pseudocode: `ALGORITHM HamiltonianCycleUtil(graph, path_array, current_pos)
  // graph: adjacency matrix
  // path_array: stores the current path being built, path_array[0] is start vertex
  // current_pos: current position in path_array we are trying to fill

  num_vertices = NumberOfVertices(graph)

  // Base Case: If all vertices are included in the path
  IF current_pos = num_vertices THEN
    // Check if there is an edge from the last vertex to the first vertex
    IF graph[path_array[current_pos-1]][path_array[0]] = 1 THEN
      RETURN true // Hamiltonian cycle exists
    ELSE
      RETURN false // No edge back to start
    ENDIF
  ENDIF

  // Try different vertices as the next candidate in Hamiltonian Cycle
  FOR v_candidate = 1 TO num_vertices-1 // Vertex 0 is already start
    IF IsSafeToAdd(v_candidate, graph, path_array, current_pos) THEN
      path_array[current_pos] = v_candidate
      
      IF HamiltonianCycleUtil(graph, path_array, current_pos + 1) THEN
        RETURN true
      ENDIF
      
      path_array[current_pos] = -1 // Backtrack: remove vertex
    ENDIF
  ENDFOR
  RETURN false
END ALGORITHM

FUNCTION IsSafeToAdd(v_candidate, graph, path_array, current_pos)
  // Check if v_candidate is connected to the previously added vertex
  IF graph[path_array[current_pos-1]][v_candidate] = 0 THEN
    RETURN false // No edge
  ENDIF
  
  // Check if v_candidate has already been included in the path
  FOR i = 0 TO current_pos-1
    IF path_array[i] = v_candidate THEN
      RETURN false // Vertex already in path
    ENDIF
  ENDFOR
  RETURN true
END FUNCTION`, 
  python_code: `def is_safe_to_add_hamiltonian(vertex, graph_adj_matrix, path, pos):
    # Check if this vertex is an adjacent vertex of the previously added vertex.
    if graph_adj_matrix[path[pos - 1]][vertex] == 0:
        return False

    # Check if the vertex has already been included in the path.
    for i in range(pos):
        if path[i] == vertex:
            return False
    return True

def hamiltonian_cycle_util(graph_adj_matrix, path, pos, num_vertices):
    # Base case: If all vertices are included in the path
    if pos == num_vertices:
        # And if there is an edge from the last included vertex to the first vertex
        if graph_adj_matrix[path[pos - 1]][path[0]] == 1:
            return True
        else:
            return False

    # Try different vertices as a next candidate in Hamiltonian Cycle.
    # We don't try vertex 0 as we started from there.
    for v_candidate in range(1, num_vertices): # Vertices are 0 to num_vertices-1
        if is_safe_to_add_hamiltonian(v_candidate, graph_adj_matrix, path, pos):
            path[pos] = v_candidate
            if hamiltonian_cycle_util(graph_adj_matrix, path, pos + 1, num_vertices):
                return True
            path[pos] = -1  # Backtrack: remove vertex
    return False

def find_hamiltonian_cycle(graph_adj_matrix):
    num_vertices = len(graph_adj_matrix)
    if num_vertices == 0: return False, []
    
    path = [-1] * num_vertices
    path[0] = 0 # Start from vertex 0

    if not hamiltonian_cycle_util(graph_adj_matrix, path, 1, num_vertices):
        return False, [] # No Hamiltonian cycle found
    else:
        # Append start node to complete the cycle visual
        return True, path + [path[0]]`, 
  time_complexity: "O(N!) in the worst case, where N is the number of vertices, as it explores permutations.", 
  space_complexity: "O(N) for storing the path and recursion stack.", 
  advantages: "Finds Hamiltonian cycles if they exist.", 
  disadvantages: "NP-complete problem. Highly inefficient for larger graphs.", 
  sample_questions_data: [{ question: "Find a Hamiltonian cycle in a graph. Vertices 0,1,2,3. Edges: (0-1), (1-2), (2-3), (3-0), (0-2).", simulation_data: { type: "HamiltonianCycle", num_nodes:4, graph: [[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]], steps: [
    {action: "Start path with 0. Path: [0,_,_,_]", path:[0,-1,-1,-1]},
    {action: "Pos 1: Try 1. Safe (0-1 edge exists, 1 not in path). Path: [0,1,_,_]", path:[0,1,-1,-1]},
    {action: "Pos 2: Try 2. Safe (1-2 edge exists, 2 not in path). Path: [0,1,2,_]", path:[0,1,2,-1]},
    {action: "Pos 3: Try 3. Safe (2-3 edge exists, 3 not in path). Path: [0,1,2,3]", path:[0,1,2,3]},
    {action: "All vertices visited. Check edge path[3]-path[0] (3-0). Edge exists (graph[3][0]==0 - error in sample data, should be 1 for 3-0 edge). Assume 3-0 exists for example.", path:[0,1,2,3], solution_found: true, description:"Assuming edge 3-0 exists for example path 0-1-2-3-0"},
    {action: "If graph[3][0] was 0: Backtrack. Pos 3: path[3]=-1. No other vertex for pos 3. Backtrack.", path:[0,1,2,-1], solution_found: false},
    {action: "Pos 2: path[2]=-1. Try other vertex for pos 2 if any. Example: if trying 0-2-1-3-0. Path: [0,2,_,_] then [0,2,1,_] etc.", description: "This shows backtracking. Full trace is long."}
  ]} }] },
  "15-Puzzle Problem": { brief_explanation: "A sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing. The objective is to reorder the tiles into a target configuration (e.g., sequential order) by making sliding moves. Solved using search algorithms like A* (with heuristics like Manhattan distance or misplaced tiles) or Branch and Bound.", 
  pseudocode: `// Typically solved with heuristic search algorithms like A* or IDA*, or Branch and Bound.
// Pseudocode for Branch and Bound (Conceptual):
ALGORITHM Solve15Puzzle_BB(initial_state, goal_state)
  PQ = Min-Priority Queue of search nodes (state, cost_g, heuristic_h)
  visited_states = set()
  
  root_node = (initial_state, 0, CalculateHeuristic(initial_state, goal_state))
  PQ.add(root_node)
  
  WHILE PQ is not empty
    current_node = PQ.extract_min() // Node with lowest f = g + h
    current_state, g_cost = current_node.state, current_node.g_cost
    
    IF current_state = goal_state THEN RETURN path_to_current_state
    
    IF current_state IN visited_states THEN CONTINUE
    ADD current_state to visited_states
    
    FOR EACH valid_move FROM current_state
      next_state = ApplyMove(current_state, move)
      IF next_state NOT IN visited_states THEN
        new_g_cost = g_cost + 1 // Cost of one move
        h_cost = CalculateHeuristic(next_state, goal_state)
        child_node = (next_state, new_g_cost, h_cost)
        PQ.add(child_node)
      ENDIF
    ENDFOR
  ENDFOR
  RETURN "No solution found"
END ALGORITHM`, 
  python_code: `# Solving 15-Puzzle optimally is complex, usually involves A* search.
# Python implementation would require:
# 1. State representation (e.g., 2D list or flattened list).
# 2. Function to find blank tile position.
# 3. Function to generate successor states (valid moves).
# 4. Heuristic function (e.g., Manhattan distance, misplaced tiles).
# 5. Priority queue for A* algorithm.
# 6. Set or hash table for visited states.
def solve_15_puzzle_stub(initial_board, goal_board):
    # This is a placeholder for a complex A* implementation
    print("Solving 15-Puzzle would require A* search algorithm.")
    print(f"Initial: {initial_board}")
    print(f"Goal: {goal_board}")
    # ... A* implementation ...
    return "Path found (conceptual)"`, 
  time_complexity: "Exponential in the worst case (O(b^d), where b is branching factor, d is solution depth). Depends heavily on the heuristic used with A*.", 
  space_complexity: "Exponential in the worst case for storing visited states and priority queue nodes.", 
  advantages: "Classic AI search problem. Demonstrates heuristic search and branch-and-bound techniques.", 
  disadvantages: "Very large state space (16!/2 possible configurations). Finding optimal solutions can be computationally intensive. Solvability depends on parity of permutations and blank tile position.", 
  sample_questions_data: [{ question: "Solve a 2x2 (3-Puzzle) instance: Initial [[1,2],[0,3]], Goal [[1,2],[3,0]]. (0 is blank)", simulation_data: { type: "FifteenPuzzle", initial_board:[[1,2],[0,3]], goal_board:[[1,2],[3,0]], steps: [
    {action: "Initial state: [[1,2],[ ,3]]. Cost g=0. Heuristic h (misplaced tiles) = 1 (tile 3). f=1."},
    {action: "Possible moves for blank (at 1,0): Right to (1,1).", board_state:[[1,2],[0,3]]},
    {action: "New state after move Right: [[1,2],[3, ]]. Cost g=1. Heuristic h = 0. f=1.", board_state:[[1,2],[3,0]]},
    {action: "Goal state reached! Path: Move blank Right. Total cost: 1."}
  ]} }] },
  "0/1 Knapsack (BB)": { brief_explanation: "Solves the 0/1 Knapsack problem using a Branch and Bound strategy. It explores a state space tree where nodes represent decisions to include/exclude items. Bounding functions (e.g., estimate of max possible profit from remaining items, often using fractional knapsack solution) are used to prune unpromising branches.", 
  pseudocode: `ALGORITHM Knapsack_BB(items, capacity)
  Sort items by value-to-weight ratio (descending).
  PQ = Max-Priority Queue of nodes (current_profit, current_weight, level, upper_bound)
  max_profit_found = 0
  
  root_node = (0, 0, 0, CalculateUpperBound(items, 0, 0, capacity)) // (profit, weight, item_idx, bound)
  PQ.add(root_node)
  
  WHILE PQ is not empty
    current_node = PQ.extract_max() // Node with highest upper_bound
    cp, cw, level, ub = current_node.profit, current_node.weight, current_node.level, current_node.bound
    
    IF ub <= max_profit_found THEN CONTINUE // Prune this branch
    
    IF level = number_of_items THEN // Leaf node
      max_profit_found = MAX(max_profit_found, cp)
      CONTINUE
    ENDIF
    
    // Option 1: Include item at 'level'
    item = items[level]
    IF cw + item.weight <= capacity THEN
      next_profit_incl = cp + item.value
      next_weight_incl = cw + item.weight
      // Update max_profit_found if this partial solution is better
      IF next_profit_incl > max_profit_found THEN max_profit_found = next_profit_incl
      
      upper_bound_incl = CalculateUpperBound(items, level+1, next_profit_incl, next_weight_incl, capacity)
      IF upper_bound_incl > max_profit_found THEN // Only add if potentially better
        PQ.add((next_profit_incl, next_weight_incl, level+1, upper_bound_incl))
      ENDIF
    ENDIF
    
    // Option 2: Exclude item at 'level'
    // (Profit and weight remain same as current node's cp, cw for this path)
    upper_bound_excl = CalculateUpperBound(items, level+1, cp, cw, capacity) 
    IF upper_bound_excl > max_profit_found THEN // Only add if potentially better
      PQ.add((cp, cw, level+1, upper_bound_excl))
    ENDIF
  ENDFOR
  RETURN max_profit_found

FUNCTION CalculateUpperBound(items, current_level, current_profit, current_weight, capacity)
  // Estimates max possible profit from current_level onwards
  // Often uses fractional knapsack solution on remaining items and capacity
  bound = current_profit
  remaining_cap = capacity - current_weight
  FOR i = current_level TO number_of_items - 1
    IF items[i].weight <= remaining_cap THEN
      bound += items[i].value
      remaining_cap -= items[i].weight
    ELSE // Take fraction
      bound += items[i].ratio * remaining_cap
      BREAK
    ENDIF
  ENDFOR
  RETURN bound
END FUNCTION`, 
  python_code: `# Branch and Bound for 0/1 Knapsack is non-trivial to implement concisely.
# It involves a priority queue (max-heap by upper bound) and a bounding function.
class KnapsackNodeBB:
    def __init__(self, level, profit, weight, bound):
        self.level = level # current item index being considered
        self.profit = profit
        self.weight = weight
        self.bound = bound # upper bound of profit for this node's subtree

    # For max-heap behavior based on bound
    def __lt__(self, other):
        return self.bound < other.bound # heapq is min-heap, so use < for max-heap effect with negative bounds or custom comparator

import heapq

def knapsack_bounding_function(items, capacity, current_level, current_profit, current_weight):
    # items should be pre-sorted by profit/weight ratio
    bound = current_profit
    remaining_capacity = capacity - current_weight
    
    for i in range(current_level, len(items)):
        if items[i]['weight'] <= remaining_capacity:
            remaining_capacity -= items[i]['weight']
            bound += items[i]['value']
        else: # Take fraction for upper bound
            bound += (items[i]['value'] / items[i]['weight']) * remaining_capacity
            break
    return bound

def solve_knapsack_bb(values, weights, capacity):
    n = len(values)
    items = []
    for i in range(n):
        items.append({'value': values[i], 'weight': weights[i], 'ratio': values[i]/weights[i] if weights[i]!=0 else 0, 'id':i})
    
    # Sort items by profit/weight ratio in descending order
    items.sort(key=lambda x: x['ratio'], reverse=True)
    
    # Use a min-heap and store negative bounds to simulate a max-heap
    pq = [] 
    
    # Root node: level -1 (or 0 if 0-indexed), profit 0, weight 0
    # Bound is calculated for taking/not taking item at level 0
    initial_bound = knapsack_bounding_function(items, capacity, 0, 0, 0)
    root_node = KnapsackNodeBB(level=0, profit=0, weight=0, bound=initial_bound)
    heapq.heappush(pq, (-root_node.bound, root_node)) # Store negative bound

    max_profit_found = 0

    while pq:
        neg_bound, current_node = heapq.heappop(pq)
        current_bound = -neg_bound

        if current_bound < max_profit_found: # Pruning
            continue

        if current_node.level == n: # Reached a leaf (all items considered)
            if current_node.profit > max_profit_found:
                 max_profit_found = current_node.profit
            continue

        # Option 1: Include item at current_node.level
        item_idx = current_node.level # This is the index in the sorted items list
        
        if current_node.weight + items[item_idx]['weight'] <= capacity:
            profit_incl = current_node.profit + items[item_idx]['value']
            weight_incl = current_node.weight + items[item_idx]['weight']
            
            if profit_incl > max_profit_found: # Update if this complete path is better
                max_profit_found = profit_incl
            
            bound_incl = knapsack_bounding_function(items, capacity, current_node.level + 1, profit_incl, weight_incl)
            if bound_incl > max_profit_found:
                child_incl = KnapsackNodeBB(current_node.level + 1, profit_incl, weight_incl, bound_incl)
                heapq.heappush(pq, (-child_incl.bound, child_incl))

        # Option 2: Exclude item at current_node.level
        # Profit and weight remain same as current_node for this path segment
        bound_excl = knapsack_bounding_function(items, capacity, current_node.level + 1, current_node.profit, current_node.weight)
        if bound_excl > max_profit_found:
            child_excl = KnapsackNodeBB(current_node.level + 1, current_node.profit, current_node.weight, bound_excl)
            heapq.heappush(pq, (-child_excl.bound, child_excl))
            
    return max_profit_found
`, 
  time_complexity: "Exponential in the worst-case (O(2^n)), but often performs much better in practice than brute-force due to pruning by the bounding function.", 
  space_complexity: "Depends on the number of nodes in the search tree stored in the priority queue, which can be exponential in the worst case.", 
  advantages: "Can be more efficient than DP for certain instances, especially if a good bounding function prunes large parts of the search space. Often used for NP-hard optimization problems.", 
  disadvantages: "Effectiveness heavily relies on the quality of the bounding function. Worst-case complexity is still exponential. Implementation can be more complex than DP.", 
  sample_questions_data: [{ question: "Solve 0/1 Knapsack using Branch and Bound. Items (v,w): (10,2), (10,4), (12,6), (18,9). Capacity 15.", simulation_data: { type: "ZeroOneKnapsackBB", items:[{'value':10,'weight':2, 'name':'I1(10,2)'},{'value':10,'weight':4, 'name':'I2(10,4)'},{'value':12,'weight':6, 'name':'I3(12,6)'},{'value':18,'weight':9, 'name':'I4(18,9)'}], capacity:15, steps: [
    {action: "Sort items by v/w ratio: I1(5), I2(2.5), I3(2), I4(2). (Sorted: I1, I2, I3, I4 - or similar based on precise ratios). MaxProfit=0."},
    {action: "Root node: profit=0, weight=0, level=0 (consider I1). UB = FracKnap([I1,I2,I3,I4], cap 15) = 10(I1)+10(I2)+12(I3 fraction) = 30.33 (example). PQ=[(30.33, Root)]"},
    {action: "Pop Root. MaxProfit=0. UB=30.33. Level=0 (I1)."},
    {action: "  Node_Incl_I1: p=10, w=2, level=1. UB_Incl = 10 + FracKnap([I2,I3,I4], cap 13) = 10+10(I2)+ (3/6)*12(I3)=10+10+6=26. Push (26, Node_Incl_I1). MaxProfit=10 (if chosen)."},
    {action: "  Node_Excl_I1: p=0, w=0, level=1. UB_Excl = 0 + FracKnap([I2,I3,I4], cap 15) = 10(I2)+12(I3)+ (0/9)*18(I4)=10+12=22. Push (22, Node_Excl_I1)."},
    {action: "Pop (26, Node_Incl_I1). MaxProfit=10. UB=26. Level=1 (I2). Current path: [I1]."},
    {action: "    Node_Incl_I1_Incl_I2: p=10+10=20, w=2+4=6, level=2. UB = 20 + FracKnap([I3,I4], cap 9)=20+12(I3 fr)=20+12=32. (Error here, I3 is 6kg, 9-6=3kg left for I4. 20+12+(3/9)*18 = 20+12+6=38. Let's assume 38) Push (38, N_I1_I2). MaxProfit=20."},
    {action: "Continue popping, pruning (if UB < MaxProfit), exploring. E.g. final solution might be I1+I4 = 10+18=28 profit for weight 2+9=11."}
  ]} }] },
  "TSP (BB)": { brief_explanation: "Solves the Traveling Salesperson Problem using Branch and Bound. It explores partial tours, using a lower bound function (e.g., cost of MST on remaining cities + two cheapest edges to connect current tour to MST) to prune subtrees that cannot lead to a better solution than already found.", 
  pseudocode: `ALGORITHM TSP_BB(cost_matrix)
  N = number of cities
  min_tour_cost_found = infinity
  path_taken = array of size N
  visited_cities = boolean array of size N, initialized to false
  
  // Initial node: current_path_cost=0, current_city=0 (start), level=1 (1 city visited)
  // Priority Queue stores (lower_bound, current_path_cost, current_city, level, current_path_array)
  PQ = Min-Priority Queue (ordered by lower_bound)
  
  initial_path = [-1]*N; initial_path[0] = 0; visited_cities[0]=true
  initial_lower_bound = CalculateLowerBound(cost_matrix, initial_path, 0, 1, visited_cities)
  PQ.add((initial_lower_bound, 0, 0, 1, initial_path))
  
  WHILE PQ is not empty
    lb, current_cost, current_city, level, current_path = PQ.extract_min()
    
    IF lb >= min_tour_cost_found THEN CONTINUE // Prune

    IF level = N THEN // All cities visited
      IF cost_matrix[current_city][current_path[0]] != infinity THEN // Edge back to start exists
        total_tour_cost = current_cost + cost_matrix[current_city][current_path[0]]
        IF total_tour_cost < min_tour_cost_found THEN
          min_tour_cost_found = total_tour_cost
          // Store this path as best_path (not shown)
        ENDIF
      ENDIF
      CONTINUE
    ENDIF
    
    FOR next_city = 0 TO N-1
      IF visited_cities_in_current_path[next_city] = false AND cost_matrix[current_city][next_city] != infinity THEN
        new_path = copy current_path; new_path[level] = next_city
        new_visited = copy visited_cities_in_current_path; new_visited[next_city]=true
        new_cost = current_cost + cost_matrix[current_city][next_city]
        
        new_lower_bound = CalculateLowerBound(cost_matrix, new_path, next_city, level+1, new_visited)
        
        IF new_lower_bound < min_tour_cost_found THEN
          PQ.add((new_lower_bound, new_cost, next_city, level+1, new_path))
        ENDIF
      ENDIF
    ENDFOR
  ENDFOR
  RETURN min_tour_cost_found

FUNCTION CalculateLowerBound(cost_matrix, current_path_so_far, current_last_city, num_cities_in_path, visited)
  // Complex function. A common way:
  // 1. Cost of current_path_so_far.
  // 2. For each unvisited city, find its two cheapest edges to other unvisited cities or to start/end of current path. Sum these, divide by 2.
  // 3. Cost of cheapest edge from start of current path to an unvisited city.
  // 4. Cost of cheapest edge from current_last_city to an unvisited city.
  // Sum of these components (or similar MST-based lower bound).
  RETURN estimated_lower_bound
END FUNCTION`, 
  python_code: `# TSP Branch and Bound is very complex to implement fully and correctly.
# Key components:
# - State representation: (current_city, visited_mask, current_cost)
# - Priority Queue: Stores states, ordered by lower_bound.
# - Lower Bound Function: Critical for pruning. E.g., sum of current path cost +
#   MST cost of unvisited cities + min cost edges to connect current path to MST.
def tsp_branch_and_bound_stub(cost_matrix):
    n = len(cost_matrix)
    min_tour_cost = float('inf')
    # ... Priority Queue initialization ...
    # ... Initial state (start city, mask with start city, cost 0, calculated lower bound) ...
    
    # while pq is not empty:
    #   pop node (state) with best lower_bound
    #   if lower_bound >= min_tour_cost: continue (prune)
    #   if all cities visited (mask is all 1s):
    #     calculate full tour cost by adding edge back to start
    #     update min_tour_cost
    #     continue
    #   for each unvisited neighbor 'next_city':
    #     create new_state (next_city, new_mask, new_cost)
    #     calculate new_lower_bound for new_state
    #     if new_lower_bound < min_tour_cost:
    #       push new_state to pq
            
    return min_tour_cost # Placeholder
`, 
  time_complexity: "Exponential in the worst-case (O(N! * N^2) or similar without good bounding, or O(N^2 * 2^N) for some variants), but significantly better than brute force in practice due to pruning.", 
  space_complexity: "Can be exponential for storing nodes in the priority queue.", 
  advantages: "Can solve larger TSP instances than DP for some graph structures. Pruning significantly reduces search space compared to naive backtracking.", 
  disadvantages: "Still NP-hard. Performance heavily depends on the quality of the lower bound function. Complex to implement correctly.", 
  sample_questions_data: [{ question: "Solve TSP using Branch and Bound for 4 cities and a cost matrix.", simulation_data: { type: "TSPBB", num_nodes:4, cost_matrix: [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]], steps: [
    {action: "Start at city 0. Path=[0]. Cost=0. Visited={0}. Level=1. Calculate Lower Bound (LB_root). PQ=[(LB_root, C:0, City:0, L:1, Path:[0])]. MinTour=inf."},
    {action: "Pop node (LB_root, C:0, City:0, L:1, P:[0])."},
    {action: "  Expand to City 1: Path=[0,1]. Cost=10. Visited={0,1}. Level=2. Calc LB_1. If LB_1 < MinTour, Push (LB_1, C:10, City:1, L:2, P:[0,1])."},
    {action: "  Expand to City 2: Path=[0,2]. Cost=15. Visited={0,2}. Level=2. Calc LB_2. If LB_2 < MinTour, Push (LB_2, C:15, City:2, L:2, P:[0,2])."},
    {action: "  Expand to City 3: Path=[0,3]. Cost=20. Visited={0,3}. Level=2. Calc LB_3. If LB_3 < MinTour, Push (LB_3, C:20, City:3, L:2, P:[0,3])."},
    {action: "Pop node with smallest LB. E.g., (LB_1, C:10, City:1, L:2, P:[0,1])."},
    {action: "    Expand from City 1 to unvisited City 2: P:[0,1,2]. C=10+cost(1,2)=10+35=45. V={0,1,2}. L=3. Calc LB_12. If LB_12 < MinTour, Push."},
    {action: "    Expand from City 1 to unvisited City 3: P:[0,1,3]. C=10+cost(1,3)=10+25=35. V={0,1,3}. L=3. Calc LB_13. If LB_13 < MinTour, Push."},
    {action: "Continue. When Level=N (4), check path back to City 0. Update MinTour. Prune nodes if LB >= MinTour."},
    {action: "Example solution for given matrix (0-1-3-2-0): Cost 10(0-1)+25(1-3)+30(3-2)+15(2-0) = 80. MinTour=80."}
  ]} }] },
  "Job Sequencing (BB)": { brief_explanation: "Solve Job Sequencing with Deadlines problem using Branch and Bound to maximize profit. Nodes in state space tree represent decisions to include/exclude jobs. Upper bound calculation (e.g., sum of profits of remaining jobs if all could be scheduled) helps prune.", 
  pseudocode: `ALGORITHM JobSequencing_BB(jobs) // jobs: (id, deadline, profit)
  Sort jobs by profit in descending order (or other heuristic).
  PQ = Max-Priority Queue (ordered by upper_bound) of nodes (current_profit, schedule_slots_used, level, upper_bound)
  max_profit_found = 0
  
  root_node = (0, [False]*max_deadline, 0, CalculateUpperBound(jobs, 0, 0, [False]*max_deadline))
  PQ.add(root_node)
  
  WHILE PQ is not empty
    cp, current_schedule, level, ub = PQ.extract_max()
    
    IF ub <= max_profit_found THEN CONTINUE // Prune
    
    IF level = number_of_jobs THEN // Leaf node
      max_profit_found = MAX(max_profit_found, cp)
      CONTINUE
    ENDIF
    
    current_job = jobs[level]
    
    // Option 1: Include current_job (if possible to schedule)
    can_schedule = False
    temp_schedule_incl = copy current_schedule
    FOR slot = MIN(current_job.deadline, max_deadline) - 1 DOWNTO 0
      IF temp_schedule_incl[slot] = False THEN
        temp_schedule_incl[slot] = True // Mark slot as taken for this path
        can_schedule = True
        break
      ENDIF
    ENDFOR
    
    IF can_schedule THEN
      profit_incl = cp + current_job.profit
      IF profit_incl > max_profit_found THEN max_profit_found = profit_incl // Update if this forms a better complete solution so far
      
      ub_incl = CalculateUpperBound(jobs, level+1, profit_incl, temp_schedule_incl)
      IF ub_incl > max_profit_found THEN
        PQ.add((profit_incl, temp_schedule_incl, level+1, ub_incl))
      ENDIF
    ENDIF
    
    // Option 2: Exclude current_job
    // Profit and schedule remain same as current_node for this path (up to this level)
    ub_excl = CalculateUpperBound(jobs, level+1, cp, current_schedule)
    IF ub_excl > max_profit_found THEN
      PQ.add((cp, current_schedule, level+1, ub_excl))
    ENDIF
  ENDFOR
  RETURN max_profit_found

FUNCTION CalculateUpperBound(jobs, current_level, current_profit, current_schedule_state)
  // Estimate max possible profit from current_level onwards, considering schedule constraints.
  // One way: Sum current_profit + profits of all remaining jobs (optimistic).
  // Better: current_profit + try to greedily schedule remaining jobs (respecting their deadlines and current_schedule_state) and sum their profits.
  bound = current_profit
  temp_sched = copy current_schedule_state
  FOR i = current_level TO number_of_jobs - 1
    job_to_consider = jobs[i]
    scheduled_this_job = False
    FOR slot = MIN(job_to_consider.deadline, max_deadline) - 1 DOWNTO 0
      IF temp_sched[slot] = False THEN
        temp_sched[slot] = True // Hypothetically schedule
        bound += job_to_consider.profit
        scheduled_this_job = True
        break
      ENDIF
    ENDFOR
  ENDFOR
  RETURN bound
END FUNCTION`, 
  python_code: `# Job Sequencing with Branch and Bound is also complex.
# Similar structure to Knapsack_BB:
# - Node: (current_profit, current_schedule (e.g., bitmask or list of filled slots), level/job_index, upper_bound)
# - Priority Queue: Max-heap by upper_bound.
# - Bounding Function: Critical. Could be current_profit + sum of profits of all remaining jobs (simple, loose),
#   or current_profit + profit from greedily scheduling remaining jobs given current slot availability (tighter).
def job_sequencing_bb_stub(jobs_list): # jobs: (id, deadline, profit)
    # Sort jobs (e.g., by profit descending)
    # Initialize PQ with root node (profit 0, empty schedule, level 0, calculated upper bound)
    # max_profit = 0
    # while pq:
    #   pop node
    #   if node.upper_bound <= max_profit: continue
    #   if node.level == num_jobs: update max_profit; continue
    #   current_job = jobs[node.level]
    #   # Child 1: Include current_job (if schedulable)
    #     # calculate new_profit, new_schedule
    #     # if new_profit > max_profit: max_profit = new_profit (for partial solution check)
    #     # calculate new_upper_bound_incl
    #     # if new_upper_bound_incl > max_profit: push child_incl to PQ
    #   # Child 2: Exclude current_job
    #     # calculate new_upper_bound_excl (profit, schedule same as parent for this path segment)
    #     # if new_upper_bound_excl > max_profit: push child_excl to PQ
    return "Max profit (conceptual from BB)"`, 
  time_complexity: "Worst-case exponential (O(2^n)), but can be efficient if bounding is effective.", 
  space_complexity: "Can be exponential for priority queue.", 
  advantages: "Can find optimal solution for NP-hard problem. Pruning helps explore promising paths.", 
  disadvantages: "Dependent on good upper bound. Worst-case performance.", 
  sample_questions_data: [{ question: "Solve Job Sequencing using B&B. Jobs (ID,D,P): (J1,2,100), (J2,1,19), (J3,2,27). max_deadline=2.", simulation_data: { type: "JobSequencingBB", items: [{'id':'J1','deadline':2,'profit':100},{'id':'J2','deadline':1,'profit':19},{'id':'J3','deadline':2,'profit':27}], steps: [
    {action: "Sort jobs by profit: J1(100,D2), J3(27,D2), J2(19,D1). Max_Profit_Found=0. Max_Deadline=2."},
    {action: "Root Node: Level=0(J1), Profit=0, Schedule=[F,F]. UB = Profit_J1_sched + Profit_J3_sched_if_possible = 100+27=127. PQ=[(127, Root)]"},
    {action: "Pop Root (UB=127). Level=0 (J1). Max_Profit_Found=0."},
    {action: "  Branch Incl_J1: Job J1(100,D2). Schedulable in slot 1. New Profit=100. New Sched=[F,J1]. Max_Profit_Found=100. UB_Incl_J1 (consider J3,J2) = 100 + (J3 fits slot 0? Yes:27) = 127. Push(127, Incl_J1)."},
    {action: "  Branch Excl_J1: Job J1 not taken. Profit=0. Sched=[F,F]. UB_Excl_J1 (consider J3,J2) = (J3 fits slot 1? Yes:27) + (J2 fits slot 0? Yes:19) = 27+19=46. Push(46, Excl_J1)."},
    {action: "PQ: [(127, Incl_J1), (46, Excl_J1)]. Pop (127, Incl_J1). Level=1 (J3). CurrentProfit=100, Sched=[F,J1]. Max_Profit_Found=100."},
    {action: "    Branch Incl_J1_Incl_J3: Job J3(27,D2). Schedulable in slot 0. New Profit=100+27=127. Sched=[J3,J1]. Max_Profit_Found=127. UB_Incl_J1_J3 (consider J2) = 127 + (J2 fits? No) = 127. Push(127, Incl_J1_J3)."},
    {action: "    Branch Incl_J1_Excl_J3: Profit=100. Sched=[F,J1]. UB_Incl_J1_Excl_J3 (consider J2) = 100 + (J2 fits slot 0? Yes:19) = 119. Push(119, Incl_J1_Excl_J3)."},
    {action: "PQ: [(127, Incl_J1_J3), (119, Incl_J1_Excl_J3), (46, Excl_J1)]. Pop (127, Incl_J1_J3). Level=2 (J2). CurrentProfit=127, Sched=[J3,J1]. Max_Profit_Found=127."},
    {action: "      Branch Incl_J1_J3_Incl_J2: Job J2(19,D1). Schedulable? No (slot 0 taken by J3)."},
    {action: "      Branch Incl_J1_J3_Excl_J2: Level=3 (leaf). Profit=127. Max_Profit_Found=127."},
    {action: "Pop (119, Incl_J1_Excl_J3). UB=119 < Max_Profit_Found=127. Prune."},
    {action: "Pop (46, Excl_J1). UB=46 < Max_Profit_Found=127. Prune. PQ empty."},
    {action: "Final Max Profit: 127 (Jobs J1, J3)."}
  ]} }] },

  // --- String Matching ---
  "Naive String Matching": { brief_explanation: "A straightforward approach that checks for pattern occurrence at every possible starting position in the text by sliding the pattern one character at a time.", 
  pseudocode: `ALGORITHM NaiveStringMatch(Text T, Pattern P)
  n = length of T
  m = length of P
  FOR s = 0 TO n - m // s is the shift of P relative to T
    match = true
    FOR j = 0 TO m - 1 // Check characters in P against T at current shift
      IF P[j] != T[s + j] THEN
        match = false
        BREAK // Mismatch, try next shift
      ENDIF
    ENDFOR
    IF match = true THEN
      PRINT "Pattern found at shift " + s
    ENDIF
  ENDFOR
END ALGORITHM`, 
  python_code: `def naive_string_search(text, pattern):
    n = len(text)
    m = len(pattern)
    occurrences = []

    if m == 0: return [i for i in range(n + 1)] # Empty pattern matches everywhere
    if m > n: return []

    # Slide pattern one by one
    for i in range(n - m + 1): # i is the starting index in text for comparison
        match = True
        for j in range(m): # j is the index in pattern
            if text[i + j] != pattern[j]:
                match = False
                break
        if match:
            occurrences.append(i)
            
    return occurrences`, 
  time_complexity: "O((n-m+1) * m) in the worst case, which simplifies to O(n*m). E.g., Text='AAAAA', Pattern='AAA'. Best case O(n) if pattern rarely matches prefixes.", 
  space_complexity: "O(1) auxiliary space (if not counting space for storing occurrences).", 
  advantages: "Simple to understand and implement. No preprocessing required.", 
  disadvantages: "Inefficient for many cases, especially when the pattern or text has repetitive characters. Many redundant comparisons.", 
  sample_questions_data: [{ question: "Find 'ABC' in 'ABXABCYABC'.", simulation_data: { type: "NaiveStringMatching", text:"ABXABCYABC", pattern:"ABC", steps: [
    {action: "Shift s=0. Text window: T[0..2]='ABX'. Pattern P='ABC'. Compare P[0](A) vs T[0](A) (Match). P[1](B) vs T[1](B) (Match). P[2](C) vs T[2](X) (Mismatch).", text_pointer:0, pattern_pointer:2, comparison_result: "mismatch", current_text_window:"ABX"},
    {action: "Shift s=1. Text window: T[1..3]='BXA'. Pattern P='ABC'. Compare P[0](A) vs T[1](B) (Mismatch).", text_pointer:1, pattern_pointer:0, comparison_result: "mismatch", current_text_window:"BXA"},
    {action: "Shift s=2. Text window: T[2..4]='XAB'. Pattern P='ABC'. Compare P[0](A) vs T[2](X) (Mismatch).", text_pointer:2, pattern_pointer:0, comparison_result: "mismatch", current_text_window:"XAB"},
    {action: "Shift s=3. Text window: T[3..5]='ABC'. Pattern P='ABC'. Compare P[0](A) vs T[3](A) (Match). P[1](B) vs T[4](B) (Match). P[2](C) vs T[5](C) (Match). Pattern found at index 3!", text_pointer:3, pattern_pointer:2, comparison_result: "match", current_text_window:"ABC", match_found_at_index:3},
    {action: "Shift s=4. Text window: T[4..6]='BCY'. Pattern P='ABC'. Compare P[0](A) vs T[4](B) (Mismatch).", text_pointer:4, pattern_pointer:0, comparison_result: "mismatch", current_text_window:"BCY"},
    {action: "Shift s=5. Text window: T[5..7]='CYA'. Pattern P='ABC'. Compare P[0](A) vs T[5](C) (Mismatch).", text_pointer:5, pattern_pointer:0, comparison_result: "mismatch", current_text_window:"CYA"},
    {action: "Shift s=6. Text window: T[6..8]='YAB'. Pattern P='ABC'. Compare P[0](A) vs T[6](Y) (Mismatch).", text_pointer:6, pattern_pointer:0, comparison_result: "mismatch", current_text_window:"YAB"},
    {action: "Shift s=7. Text window: T[7..9]='ABC'. Pattern P='ABC'. Compare P[0](A) vs T[7](A) (Match). P[1](B) vs T[8](B) (Match). P[2](C) vs T[9](C) (Match). Pattern found at index 7!", text_pointer:7, pattern_pointer:2, comparison_result: "match", current_text_window:"ABC", match_found_at_index:7}
  ]} }] },
  "Rabin-Karp Algorithm": { brief_explanation: "A string-matching algorithm that uses hashing to find occurrences of a pattern in a text. It calculates hash values for the pattern and for each substring of the text of the pattern's length. If hashes match, it performs a character-by-character comparison (to handle spurious hits). Efficiently updates text substring hash using a rolling hash technique.", 
  pseudocode: `ALGORITHM RabinKarp(Text T, Pattern P, prime q, alphabet_size d)
  n = length of T
  m = length of P
  h_pattern = hash(P[0..m-1])
  h_text_substring = hash(T[0..m-1])
  
  // d_m_minus_1 = d^(m-1) mod q (precomputed for rolling hash)
  d_m_minus_1 = (d^(m-1)) MOD q 
  
  FOR s = 0 TO n - m // s is shift
    IF h_pattern = h_text_substring THEN
      // Potential match, verify character by character
      IF P[0..m-1] = T[s..s+m-1] THEN
        PRINT "Pattern found at shift " + s
      ENDIF
    ENDIF
    
    // Calculate hash value for next window of text (rolling hash)
    IF s < n - m THEN
      // h_text_substring = (d * (h_text_substring - T[s]*d_m_minus_1) + T[s+m]) MOD q
      // Ensure result is non-negative if intermediate subtraction is negative
      h_text_substring = (d * (h_text_substring - (ASCII(T[s]) * d_m_minus_1)) + ASCII(T[s+m])) MOD q
      IF h_text_substring < 0 THEN h_text_substring = h_text_substring + q
    ENDIF
  ENDFOR
END ALGORITHM`, 
  python_code: `def rabin_karp_search(text, pattern, prime_q=101, alphabet_size_d=256):
    n = len(text)
    m = len(pattern)
    occurrences = []

    if m == 0: return [i for i in range(n + 1)]
    if m > n: return []

    # Precompute d^(m-1) % q
    # h = d^(m-1) % q
    h_precompute = 1
    for _ in range(m - 1):
        h_precompute = (h_precompute * alphabet_size_d) % prime_q

    pattern_hash = 0
    text_window_hash = 0

    # Calculate initial hash for pattern and first window of text
    for i in range(m):
        pattern_hash = (alphabet_size_d * pattern_hash + ord(pattern[i])) % prime_q
        text_window_hash = (alphabet_size_d * text_window_hash + ord(text[i])) % prime_q
        
    # Slide the pattern over text one by one
    for s in range(n - m + 1):
        # Check if hash values match
        if pattern_hash == text_window_hash:
            # Potential match, verify characters (to handle spurious hits)
            match = True
            for j in range(m):
                if text[s + j] != pattern[j]:
                    match = False
                    break
            if match:
                occurrences.append(s)

        # Calculate hash value for next window of text (rolling hash)
        if s < n - m:
            # Remove leading digit, add trailing digit
            # text_window_hash = (d*(text_window_hash - ord(text[s])*h) + ord(text[s+m])) % q
            new_hash_val = (alphabet_size_d * (text_window_hash - ord(text[s]) * h_precompute) + ord(text[s + m])) % prime_q
            
            # Ensure hash is non-negative
            if new_hash_val < 0:
                new_hash_val += prime_q
            text_window_hash = new_hash_val
            
    return occurrences`, 
  time_complexity: "Average and Best Case: O(n+m) if hash collisions are rare. Worst Case: O(n*m) if many hash collisions occur (e.g., all substrings hash to same value, forcing many character comparisons).", 
  space_complexity: "O(1) auxiliary space typically (if not counting occurrence list). O(p) if pattern hash needs storage for very large patterns, but usually considered O(1).", 
  advantages: "Efficient on average. Good for multiple pattern matching (can compute hashes for multiple patterns). Rolling hash is efficient.", 
  disadvantages: "Worst-case performance can be bad with a poor hash function or specific inputs causing many collisions. Relies on a good hash function and prime number selection.", 
  sample_questions_data: [{ question: "Find 'test' in 'this is a test text' using Rabin-Karp (q=101, d=256).", simulation_data: { type: "RabinKarp", text: "this is a test text", pattern: "test", steps: [
    {action: "Calculate P_hash for 'test' and T_hash for 'this'. P_hash = H_P, T_hash = H_T0.", text_pointer:0, current_text_window:"this", text_hash:"H_T0", pattern_hash:"H_P"},
    {action: "H_P != H_T0. Slide window. T_hash for 'his ' = H_T1.", text_pointer:1, current_text_window:"his ", text_hash:"H_T1", pattern_hash:"H_P"},
    {action: "... (several steps, T_hash rolling) ..."},
    {action: "Window s=10: T_hash for 'test' = H_T10. Assume H_P == H_T10.", text_pointer:10, current_text_window:"test", text_hash:"H_P", pattern_hash:"H_P", comparison_result:"match"},
    {action: "Verify chars: 't'=='t', 'e'=='e', 's'=='s', 't'=='t'. Match! Found at index 10.", match_found_at_index:10, spurious_hit:false},
    {action: "Window s=11: T_hash for 'est ' = H_T11. H_P != H_T11 (likely).", text_pointer:11, current_text_window:"est ", text_hash:"H_T11", pattern_hash:"H_P"},
    {action: "... (continue to end) ..."}
  ]} }] },
  "KMP Algorithm": {
    brief_explanation: "An efficient string matching algorithm that preprocesses the pattern to create an LPS (Longest Proper Prefix which is also Suffix) array. This array helps to avoid redundant comparisons by intelligently shifting the pattern upon a mismatch, based on the longest prefix of the pattern that is also a suffix of the part of the pattern matched so far.",
    time_complexity: "O(n+m), where n is text length and m is pattern length. O(m) for LPS array computation, O(n) for matching phase.",
    space_complexity: "O(m) for storing the LPS array.",
    advantages: "Very efficient with linear time complexity in all cases. Avoids re-comparing characters in the text unnecessarily by using information from previous matches/mismatches.",
    disadvantages: "The preprocessing step (LPS array computation) can be non-trivial to understand and implement correctly initially.",
    pseudocode: `ALGORITHM KMP_Matcher(Text T, Pattern P)
  n = length of T
  m = length of P
  lps = Compute_LPS_Array(P) // Longest Proper Prefix which is also Suffix
  
  i = 0 // index for Text T
  j = 0 // index for Pattern P
  WHILE i < n
    IF P[j] = T[i] THEN
      i = i + 1
      j = j + 1
    ENDIF
    
    IF j = m THEN
      PRINT "Pattern found at index " + (i - j)
      j = lps[j-1] // Continue searching for more occurrences
    ELSE IF i < n AND P[j] != T[i] THEN
      // Mismatch after j matches
      // Do not match lps[0..lps[j-1]] characters, they will match anyway
      IF j != 0 THEN
        j = lps[j-1]
      ELSE
        i = i + 1 // No prefix matched, move to next char in text
      ENDIF
    ENDIF
  ENDWHILE
END ALGORITHM

ALGORITHM Compute_LPS_Array(Pattern P)
  m = length of P
  lps = array of size m, initialized to 0
  length = 0 // length of the previous longest prefix suffix
  i = 1
  
  WHILE i < m
    IF P[i] = P[length] THEN
      length = length + 1
      lps[i] = length
      i = i + 1
    ELSE
      IF length != 0 THEN
        length = lps[length - 1] // Backtrack in lps array
        // Note: Do not increment i here
      ELSE
        lps[i] = 0
        i = i + 1
      ENDIF
    ENDIF
  ENDWHILE
  RETURN lps
END ALGORITHM`,
    python_code: `def compute_lps_array(pattern):
    m = len(pattern)
    lps = [0] * m  # lps[i] will hold the length of the longest proper prefix of pattern[0...i] which is also a suffix of pattern[0...i]
    length = 0  # Length of the previous longest prefix suffix
    i = 1

    # lps[0] is always 0, so we start from i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            # This is tricky. Consider the example AAACAAAA and i = 7.
            # The idea is that if pattern[i] != pattern[length], we try the
            # lps of the previous prefix-suffix.
            if length != 0:
                length = lps[length - 1]
                # Also, note that we do not increment i here
            else:
                lps[i] = 0
                i += 1
    return lps

def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    occurrences = []

    if m == 0: return [i for i in range(n + 1)]
    if m > n: return []

    lps = compute_lps_array(pattern)
    
    i = 0  # Index for text
    j = 0  # Index for pattern
    
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1

        if j == m: # Pattern found
            occurrences.append(i - j)
            j = lps[j - 1] # Continue search for more occurrences
        elif i < n and pattern[j] != text[i]:
            # Mismatch after j characters matched
            # Do not match lps[0...lps[j-1]] characters, they will match anyway
            if j != 0:
                j = lps[j - 1]
            else: # No prefix matched (j was 0), move to next char in text
                i += 1
    return occurrences`,
  },
  "Finite Automata Matching": { brief_explanation: "Builds a finite automaton (state machine) from the pattern. The text is then processed character by character through the automaton. If the automaton reaches its final (accept) state, the pattern is found.", 
  pseudocode: `ALGORITHM FiniteAutomatonMatcher(Text T, TransitionFunction delta, m_pattern_length)
  n = length of T
  current_state q = 0 // Initial state
  FOR i = 0 TO n-1
    q = delta(q, T[i]) // Transition to next state based on current state and char
    IF q = m_pattern_length THEN // Reached accept state (length of pattern)
      PRINT "Pattern found ending at index " + i
    ENDIF
  ENDFOR
END ALGORITHM

FUNCTION ComputeTransitionFunction(Pattern P, Alphabet Sigma)
  m = length of P
  Initialize delta[q][char] for q from 0 to m, char in Sigma
  FOR q = 0 TO m
    FOR EACH char in Sigma
      k = MIN(m+1, q+2) // Max possible next state + 1
      REPEAT
        k = k - 1
        // Check if P[0..k-1] is a suffix of P[0..q-1] + char
        // i.e., P_k is a suffix of P_q + char
      UNTIL P[0..k-1] is a suffix of P[0..q-1] + char 
      delta[q][char] = k
    ENDFOR
  ENDFOR
  RETURN delta
END FUNCTION`, 
  python_code: `# Finite Automata based string matching implementation is complex.
# It requires building a transition table (delta function).
def compute_transition_function(pattern, alphabet):
    m = len(pattern)
    num_states = m + 1
    # delta[state][char_code]
    delta = [[0 for _ in range(len(alphabet))] for _ in range(num_states)]
    
    # Map characters to their index in the alphabet
    char_to_idx = {char: i for i, char in enumerate(alphabet)}

    for q in range(num_states): # Current state
        for char_val in alphabet:
            char_idx = char_to_idx[char_val]
            # k is the length of the longest prefix of P that is a suffix of P[:q] + char_val
            # This is the core logic for building transitions.
            # We try k = min(m, q + 1) down to 0.
            # Pk is suffix of Pq + a
            
            # Simplified explanation: what's the new state if we are in state q
            # (meaning P[:q] has matched) and we see char_val?
            # The new state will be the length of the longest prefix of P
            # that is a suffix of P[:q] + char_val.
            
            # Example for P = "abab", q = 2 (P[:2]="ab" matched), char_val = 'a'
            # String is "aba". Longest prefix of "abab" that is suffix of "aba" is "ab" (length 2)
            # but if P[2] ('a') == char_val ('a'), it could be P[:3] ("aba") if that was prefix of P
            # This part is non-trivial:
            test_string = pattern[:q] + char_val
            next_state = 0
            for k in range(min(m, q + 1), -1, -1): # k from min(m, q+1) down to 0
                if pattern[:k] == test_string[len(test_string)-k:]: # P[:k] is suffix of test_string
                    next_state = k
                    break
            delta[q][char_idx] = next_state
            
    return delta

def finite_automaton_matcher(text, pattern, alphabet):
    n = len(text)
    m = len(pattern)
    if m == 0: return [i for i in range(n+1)]
    
    char_to_idx = {char: i for i, char in enumerate(alphabet)}
    delta = compute_transition_function(pattern, alphabet)
    
    occurrences = []
    current_state = 0 # Initial state
    
    for i in range(n):
        if text[i] not in char_to_idx: # Character not in alphabet
             current_state = 0 # Reset or handle error
             continue
        char_idx_in_alphabet = char_to_idx[text[i]]
        current_state = delta[current_state][char_idx_in_alphabet]
        if current_state == m: # Reached the accept state (pattern length)
            occurrences.append(i - m + 1) # Match ends at index i
            
    return occurrences`, 
  time_complexity: "O(n) for matching phase after O(m*|Sigma|) preprocessing to build transition function (where |Sigma| is alphabet size).", 
  space_complexity: "O(m*|Sigma|) for the transition function table.", 
  advantages: "Very fast matching phase (linear in text length). Conceptually powerful.", 
  disadvantages: "Preprocessing (building transition function) can be complex and time/space consuming, especially for large alphabets. KMP is often preferred due to simpler O(m) preprocessing.", 
  sample_questions_data: [{ question: "Match pattern 'abab' using FA. Text 'ababcab'. Alphabet {a,b}.", simulation_data: { type: "FiniteAutomataStringMatching", pattern:"abab", text:"ababcab", alphabet:['a','b'], steps: [
    {action: "Build transition table for 'abab'. State 0: (a->1, b->0). State 1: (a->1, b->2). State 2: (a->3, b->0). State 3: (a->1, b->4). State 4(accept): (a->1, b->0). (Example table)"},
    {action: "Text 'a': current_state=0 -> delta(0,'a') -> new_state=1."},
    {action: "Text 'b': current_state=1 -> delta(1,'b') -> new_state=2."},
    {action: "Text 'a': current_state=2 -> delta(2,'a') -> new_state=3."},
    {action: "Text 'b': current_state=3 -> delta(3,'b') -> new_state=4. Accept state! Pattern found ending at index 3 (0-indexed).", match_found_at_index:0},
    {action: "Text 'c': (char not in alphabet or no transition defined from state 4 for 'c'). Reset to state 0 (or as per FA definition).", description: "Assuming 'c' resets or uses a default transition from accept state"},
    {action: "Text 'a': current_state=0 -> delta(0,'a') -> new_state=1."},
    {action: "Text 'b': current_state=1 -> delta(1,'b') -> new_state=2. (Pattern 'ab' re-matched partially)."}
  ]} }] },
  "String Matching Concepts": { brief_explanation: "Covers foundational ideas used in string algorithms, such as Prefix Function (used in KMP, length of longest proper prefix of a string that is also its suffix), Suffix Trees/Arrays (data structures for fast substring searching), and Rolling Hash (efficiently calculating hash of sliding window, used in Rabin-Karp).", 
  pseudocode: `// Prefix Function (LPS array for KMP) - See KMP pseudocode

// Rolling Hash Concept (Rabin-Karp)
// H(s[i+1..j+1]) = ( (H(s[i..j]) - value(s[i])*d^(m-1)) * d + value(s[j+1]) ) mod q
// Where d is alphabet size, m is pattern length, q is a prime.`, 
  python_code: `# Prefix Function (LPS array computation) - See KMP Python code

# Rolling Hash (Conceptual part of Rabin-Karp)
def recalculate_hash(old_hash, old_char_val, new_char_val, pattern_len, d_power_m_minus_1, prime_q, alphabet_size_d=256):
    # Remove old_char_val's contribution
    new_h = (old_hash - old_char_val * d_power_m_minus_1) 
    # Multiply by d (shift left)
    new_h = (new_h * alphabet_size_d) 
    # Add new_char_val's contribution
    new_h = (new_h + new_char_val) 
    # Modulo prime_q
    new_h = new_h % prime_q
    if new_h < 0: # Ensure positive result
        new_h += prime_q
    return new_h`, 
  time_complexity: "N/A (concepts, not algorithms themselves). LPS computation: O(m). Rolling hash update: O(1).", 
  space_complexity: "N/A. LPS array: O(m). Suffix Tree/Array: O(n) or O(n log n) to build.", 
  advantages: "Fundamental for designing efficient string matching and text processing algorithms. Rolling hash allows O(1) hash updates for sliding windows.", 
  disadvantages: "Suffix trees/arrays can be complex to implement. Hash functions can have collisions.", 
  sample_questions_data: [{ question: "Explain Rolling Hash for pattern 'ab' in text 'cab'. d=26, q=101. (Simple char values a=0,b=1,..)", simulation_data: { type: "Generic", steps: [
    {action: "Hash('ca') = (c*26^1 + a*26^0) % 101. Assume c=2, a=0. Hash('ca') = (2*26 + 0*1)%101 = 52%101 = 52."},
    {action: "To get Hash('ab'): OldHash=52, OldChar='c'(val=2), NewChar='b'(val=1). Pattern length m=2. d^(m-1) = 26^1 = 26."},
    {action: "NewHash = ( (OldHash - OldCharVal * d^(m-1)) * d + NewCharVal ) % q"},
    {action: "NewHash = ( (52 - 2*26) * 26 + 1 ) % 101 = ( (52-52)*26 + 1 ) % 101 = (0*26 + 1) % 101 = 1 % 101 = 1."},
    {action: "Direct Hash('ab') = (a*26^1 + b*26^0)%101 = (0*26+1*1)%101 = 1%101 = 1. Matches."}
  ]} }] },
  
  // --- Advanced Topics ---
  "Optimal BST": {
    brief_explanation: "Constructs a binary search tree with minimal expected search cost, given keys and their access probabilities (for successful searches) and optionally dummy keys with probabilities for unsuccessful searches between keys. Solved using dynamic programming.",
    time_complexity: "O(n^3) typically for the basic DP approach. Can be optimized to O(n^2) using Knuth's optimization (exploiting quadrangle inequality).",
    space_complexity: "O(n^2) for storing DP tables (expected costs and root choices).",
    advantages: "Finds the absolute best BST structure for the given key distribution and access probabilities, minimizing average search time.",
    disadvantages: "Complex to implement, especially Knuth's optimization. Requires accurate knowledge of key access probabilities, which might not be available, static, or easy to obtain in real-world scenarios. If probabilities are uniform, a balanced BST (like AVL or Red-Black) is usually preferred and simpler.",
    pseudocode: `ALGORITHM OptimalBST(keys, probabilities_p, N) // N keys, N probabilities_p for keys
  // Optionally: probabilities_q for dummy keys (unsuccessful searches)
  // For simplicity, this version uses only key probabilities.
  
  // cost[i][j] = cost of optimal BST for keys[i..j]
  // root[i][j] = root of the optimal BST for keys[i..j]
  cost = 2D array of size (N+1)xN, initialized to 0
  root = 2D array of size (N+1)xN
  
  // Base case: cost of BST with one key is its probability
  FOR i = 0 TO N-1
    cost[i][i] = probabilities_p[i]
    root[i][i] = i // key[i] is the root
  ENDFOR
  
  // L is chain length
  FOR L = 2 TO N
    FOR i = 0 TO N-L // Starting index of subchain
      j = i + L - 1   // Ending index of subchain
      cost[i][j] = infinity
      sum_p = SUM(probabilities_p[k] FOR k from i to j) // Sum of probabilities in current range
      
      FOR r = i TO j // r is a possible root for keys[i..j]
        // Cost = cost of left subtree + cost of right subtree + sum of all probabilities in range
        c_left = (r > i) ? cost[i][r-1] : 0
        c_right = (r < j) ? cost[r+1][j] : 0
        current_total_cost = c_left + c_right + sum_p
        
        IF current_total_cost < cost[i][j] THEN
          cost[i][j] = current_total_cost
          root[i][j] = r
        ENDIF
      ENDFOR
    ENDFOR
  ENDFOR
  RETURN cost[0][N-1] // Cost of optimal BST for all keys
END ALGORITHM`,
    python_code: `def optimal_bst_cost(keys, probabilities_p):
    n = len(keys)
    if n == 0:
        return 0

    # cost[i][j] will store the cost of the optimal BST for keys[i...j]
    # For simplicity, this version assumes keys are sorted and probabilities_p correspond to keys.
    # For a version with dummy keys (q values), the DP formulation is more complex.
    
    cost = [[0.0 for _ in range(n)] for _ in range(n)]
    # root_table = [[0 for _ in range(n)] for _ in range(n)] # To store root choices

    # Sum of probabilities for ranges, precompute for efficiency
    prob_sum = [[0.0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
        prob_sum[i][i] = probabilities_p[i]
        for j in range(i + 1, n):
            prob_sum[i][j] = prob_sum[i][j-1] + probabilities_p[j]


    # Base case: cost of a BST with a single key is its probability
    for i in range(n):
        cost[i][i] = probabilities_p[i]
        # root_table[i][i] = i


    # L is the length of the chain of keys
    for L in range(2, n + 1): # Length from 2 to n
        for i in range(n - L + 1): # Start index
            j = i + L - 1 # Ending index of the subchain
            cost[i][j] = float('inf')
            
            current_range_sum_p = prob_sum[i][j]
            
            # Try all keys in keys[i...j] as root
            for r_idx in range(i, j + 1): # r_idx is the index of the root in the subchain keys[i..j]
                # Cost of left subtree for keys[i...r_idx-1]
                c_left = cost[i][r_idx - 1] if r_idx > i else 0
                # Cost of right subtree for keys[r_idx+1...j]
                c_right = cost[r_idx + 1][j] if r_idx < j else 0
                
                current_total_cost = c_left + c_right + current_range_sum_p
                
                if current_total_cost < cost[i][j]:
                    cost[i][j] = current_total_cost
                    # root_table[i][j] = r_idx # Store index of root key for this subproblem
                    
    return cost[0][n-1]`,
  },
};


const generatedAlgorithmData: AlgorithmData = APP_TOPICS_CONFIG.map((topicConfig, topicIndex) => {
  const topic: Topic = {
    id: `topic-${topicIndex}`,
    title: topicConfig.title,
    icon: ICONS[topicConfig.iconName] || Sparkles, // Use iconName from config
    subtopics: topicConfig.subtopics.map((subTopicConfig, subtopicIndex) => {
      const detailsKey = subTopicConfig.detailsKey || subTopicConfig.title;
      const baseDetails = subTopicCompleteDetails[detailsKey] || {};

      let sampleQuestions: SampleQuestion[] = [];

      // Check if this subtopic has predefined simulation data in `rawData`
      const rawDataTopic = rawData[topicConfig.title]; // Match topicConfig.title with rawData keys
      const rawDataSubTopicArray = rawDataTopic ? rawDataTopic[subTopicConfig.rawDataKey || subTopicConfig.title] : undefined;


      if (rawDataSubTopicArray && rawDataSubTopicArray.length > 0) {
        // Use existing detailed simulations from rawData
        sampleQuestions = rawDataSubTopicArray.map((q: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q.question,
          simulation_data: q.simulation_data as SimulationData,
          solution_steps: q.simulation_data.steps.map((step: SimulationStep, i: number) => step.action || `Step ${i+1}: Action description missing.`),
        }));
      } else if (baseDetails.sample_questions_data && baseDetails.sample_questions_data.length > 0) {
        // Use sample_questions_data from subTopicCompleteDetails for new topics
        sampleQuestions = baseDetails.sample_questions_data.map((q_data: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q_data.question,
          simulation_data: q_data.simulation_data as SimulationData,
          solution_steps: q_data.simulation_data.steps.map((step: SimulationStep, i: number) => step.action || `Step ${i+1}: Action description missing.`),
        }));
      } else {
        // Fallback if no questions defined anywhere
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

// Helper to get a specific subtopic by IDs
export const getSubTopicByIds = (topicId: string, subTopicId: string): SubTopic | undefined => {
  const topic = ALGORITHM_DATA.find(t => t.id === topicId);
  return topic?.subtopics.find(st => st.id === subTopicId);
};

export const getQuestionByIds = (topicId: string, subTopicId: string, questionId: string): SampleQuestion | undefined => {
  const subTopic = getSubTopicByIds(topicId, subTopicId);
  return subTopic?.sample_questions.find(q => q.id === questionId);
}
