
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
    iconName: "LayoutDashboard",
    subtopics: [
      { title: "Control Structures", detailsKey: "Control Structures" },
      { title: "Algorithm Analysis", detailsKey: "Algorithm Analysis (Intro)" }, // Renamed for map key clarity
      { title: "Recurrence Relations", detailsKey: "Recurrence Relations (Intro)" }, // Renamed for map key clarity
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
    brief_explanation: "Fundamental constructs like loops (for, while) and conditionals (if-else) that dictate the sequence of operations in an algorithm.",
    pseudocode: `// Conditional
IF condition THEN
  Execute A
ELSE
  Execute B
ENDIF

// Loop
FOR i = 1 TO N
  Process item(i)
ENDFOR`,
    python_code: `def control_flow_example(items):
  for item in items:
    if item % 2 == 0:
      print(f"{item} is even")
    else:
      print(f"{item} is odd")`,
    time_complexity: "Varies (e.g., O(1) for if, O(n) for a simple loop over n items)",
    space_complexity: "O(1) typically, unless data structures are created within them",
    advantages: "Essential for logic and repetition. Allows algorithms to adapt to different inputs.",
    disadvantages: "Deeply nested structures can reduce readability and increase complexity.",
    sample_questions_data: [{
      question: "Given an array, print all even numbers and count the odd numbers.",
      simulation_data: {
        type: "ControlStructures",
        initial_array: [1, 2, 3, 4, 5, 6],
        steps: [
          { action: "Start. odd_count = 0.", odd_count: 0 },
          { action: "Item: 1. Odd. odd_count = 1.", current_array_item: 1, odd_count: 1 },
          { action: "Item: 2. Even. Print 2.", current_array_item: 2, output: "Printed: 2" },
          { action: "Item: 3. Odd. odd_count = 2.", current_array_item: 3, odd_count: 2 },
          { action: "Item: 4. Even. Print 4.", current_array_item: 4, output: "Printed: 4" },
          { action: "Item: 5. Odd. odd_count = 3.", current_array_item: 5, odd_count: 3 },
          { action: "Item: 6. Even. Print 6.", current_array_item: 6, output: "Printed: 6" },
          { action: "End. Final odd_count: 3.", final_odd_count: 3 }
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
  "Max-Min": { // Under "Introduction to Algorithms" now for simplicity, was D&C
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
  RETURN MAX(max1, max2), MIN(min1, min2)`,
    python_code: `def find_max_min_dc(arr, low, high):
    if low == high:
        return arr[low], arr[low]
    elif high == low + 1:
        return (arr[high], arr[low]) if arr[low] < arr[high] else (arr[low], arr[high])
    else:
        mid = (low + high) // 2
        max1, min1 = find_max_min_dc(arr, low, mid)
        max2, min2 = find_max_min_dc(arr, mid + 1, high)
        return max(max1, max2), min(min1, min2)`,
    time_complexity: "O(n) (approx. 3n/2 - 2 comparisons)",
    space_complexity: "O(log n) for recursion stack",
    advantages: "Fewer comparisons than finding max and min independently (which takes 2n-2 comparisons).",
    disadvantages: "Recursive overhead. An iterative version can achieve similar comparison counts.",
    sample_questions_data: [{
      question: "Find max and min in [10, 5, 30, 1, 50, 0] using Divide and Conquer.",
      simulation_data: {
        type: "MaxMin", initial_array: [10, 5, 30, 1, 50, 0],
        steps: [
          { action: "Divide: [10, 5, 30] and [1, 50, 0]", left_segment: [10,5,30], right_segment: [1,50,0]},
          { action: "Recurse on [10, 5, 30] -> max1=30, min1=5", max_val:30, min_val:5, array_segment:[10,5,30]},
          { action: "Recurse on [1, 50, 0] -> max2=50, min2=0", max_val:50, min_val:0, array_segment:[1,50,0]},
          { action: "Combine: MAX(30,50)=50, MIN(5,0)=0. Final: Max=50, Min=0", final_max:50, final_min:0}
        ]
      }
    }]
  },
  "Merge Sort": { /* Details from existing rawData used, but can be augmented here */
    brief_explanation: "A stable, comparison-based sorting algorithm using the divide and conquer paradigm. It divides the array into halves, recursively sorts them, and then merges the sorted halves.",
    time_complexity: "O(n log n) in all cases (worst, average, best)",
    space_complexity: "O(n) due to the auxiliary space required for merging",
    advantages: "Guaranteed O(n log n) performance. Stable sort. Good for linked lists.",
    disadvantages: "Requires O(n) extra space. Not in-place. Can be slower than Quick Sort on average for arrays due to data movement and memory allocation.",
    // python_code and pseudocode can be pulled from existing if available or added here
  },
  "Quick Sort": { /* Details from existing rawData used */
    brief_explanation: "An efficient, in-place (typically) sorting algorithm using divide and conquer. It picks an element as a pivot and partitions the array around the pivot.",
    time_complexity: "Average: O(n log n), Worst: O(n^2) (e.g., if pivot is always smallest/largest or array is sorted/reverse sorted)",
    space_complexity: "O(log n) on average (due to recursion stack), O(n) in worst case for recursion stack.",
    advantages: "Fast on average. In-place (Lomuto/Hoare partitioning). Low constant factors.",
    disadvantages: "Worst-case O(n^2) is possible. Not stable. Performance depends heavily on pivot selection.",
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
    python_code: `def strassen(A, B):
    # Base case: if matrices are 1x1
    # Partition matrices A and B
    # Calculate P1 to P7 recursively
    # Calculate C11, C12, C21, C22
    # Combine C submatrices
    return "Python code for Strassen's to be implemented."`,
    time_complexity: "O(n^log2(7)) which is approximately O(n^2.807)",
    space_complexity: "O(n^2) for storing submatrices or O(log n) if implemented carefully for recursion stack on submatrix views.",
    advantages: "Asymptotically faster than standard matrix multiplication for large n.",
    disadvantages: "Higher constant factor, so standard algorithm is faster for small n. More complex to implement. Numerical stability issues. Requires n to be a power of 2 (or padding).",
    sample_questions_data: [{
        question: "Explain the 7 recursive calls in Strassen's algorithm for 2x2 matrices.",
        simulation_data: { type: "Strassen", steps: [{ action: "Illustrate P1 to P7 calculations for 2x2 submatrices.", description: "P1=(A11+A22)(B11+B22)..."}] }
    }]
  },
  // --- Greedy Method ---
  "Fractional Knapsack": {
    brief_explanation: "Greedy algorithm to maximize total value in a knapsack where items can be taken in fractions. Sort items by value-to-weight ratio and pick highest ratio items first.",
    time_complexity: "O(n log n) due to sorting items by ratio.",
    space_complexity: "O(1) if input array can be modified for sorting, O(n) if a copy is made.",
    advantages: "Simple, efficient, and guarantees an optimal solution for the fractional version.",
    disadvantages: "Greedy approach does not work for the 0/1 Knapsack problem (where items must be taken entirely or not at all).",
  },
  "Activity Selection": {
    brief_explanation: "Select the maximum number of non-overlapping activities from a set, given their start and finish times. Greedy approach: sort by finish times, pick the first, then pick the next compatible activity.",
    pseudocode: `ACTIVITY_SELECTOR(s, f) // s: start times, f: finish times
  n = s.length
  Sort activities by finish times (f)
  A = {activity_1} // Select first activity
  k = 1 // Index of last selected activity
  FOR m = 2 TO n
    IF s[m] >= f[k] THEN // If activity m starts after activity k finishes
      A = A U {activity_m}
      k = m
    ENDIF
  ENDFOR
  RETURN A`,
    python_code: `def activity_selection(activities): # activities is list of [start, finish]
    activities.sort(key=lambda x: x[1]) # Sort by finish time
    selected = []
    if not activities: return selected
    
    selected.append(activities[0])
    last_finish_time = activities[0][1]
    
    for i in range(1, len(activities)):
        if activities[i][0] >= last_finish_time:
            selected.append(activities[i])
            last_finish_time = activities[i][1]
    return selected`,
    time_complexity: "O(n log n) if sorting is needed, O(n) if already sorted by finish times.",
    space_complexity: "O(n) for storing sorted activities or O(1) if sorted in-place and output is just count.",
    advantages: "Simple, efficient, and provides an optimal solution.",
    disadvantages: "Requires activities to be sorted by finish times.",
    sample_questions_data: [{
      question: "Given activities with (start, finish) times: (1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11), (8,12), (2,14), (12,16). Find max non-overlapping activities.",
      simulation_data: { type: "ActivitySelection", items: [{"start":1,"finish":4},{"start":3,"finish":5},{"start":0,"finish":6},{"start":5,"finish":7},{"start":3,"finish":9},{"start":5,"finish":9},{"start":6,"finish":10},{"start":8,"finish":11},{"start":8,"finish":12},{"start":2,"finish":14},{"start":12,"finish":16}], steps: [
          {action: "Sort by finish times: [(1,4), (3,5), (0,6), (5,7), (6,10), (8,11), (5,9), (3,9), (8,12), (2,14), (12,16)] (example order, real sort needed)"},
          {action: "Select (1,4). Last finish: 4. Selected: [(1,4)]"},
          {action: "Consider (3,5). 3 < 4 (No)."},
          {action: "Consider (0,6). 0 < 4 (No)."},
          {action: "Consider (5,7). 5 >= 4 (Yes). Select (5,7). Last finish: 7. Selected: [(1,4), (5,7)]"},
          {action: "Consider (6,10). 6 < 7 (No)."},
          {action: "Consider (8,11). 8 >= 7 (Yes). Select (8,11). Last finish: 11. Selected: [(1,4), (5,7), (8,11)]"},
          {action: "Consider (12,16). 12 >= 11 (Yes). Select (12,16). Last finish: 16. Selected: [(1,4), (5,7), (8,11), (12,16)]"},
          {action: "Final selected: [(1,4), (5,7), (8,11), (12,16)]"}
      ]}
    }]
  },
   "Job Sequencing": {
    brief_explanation: "Schedule unit-time jobs with deadlines and profits to maximize total profit. Greedy: Sort jobs by profit. For each job, schedule it in the latest possible available time slot before its deadline.",
    pseudocode: `JOB_SEQUENCING(jobs, deadlines, profits, n)
  Create pairs (job_id, deadline, profit)
  Sort jobs in decreasing order of profit
  
  result = array of size max_deadline, initialized to -1 (empty slot)
  total_profit = 0
  
  FOR each job (j_id, d, p) in sorted_jobs
    FOR slot_time = MIN(d, max_deadline) - 1 DOWNTO 0
      IF result[slot_time] == -1 THEN // Slot is free
        result[slot_time] = j_id
        total_profit += p
        BREAK // Job scheduled
      ENDIF
    ENDFOR
  ENDFOR
  RETURN total_profit, scheduled_jobs_in_result_array`,
    python_code: `def job_sequencing(jobs): # jobs is list of [id, deadline, profit]
    jobs.sort(key=lambda x: x[2], reverse=True) # Sort by profit desc
    max_deadline = 0
    for job in jobs:
        if job[1] > max_deadline:
            max_deadline = job[1]
    
    time_slots = [-1] * max_deadline # To store job IDs
    total_profit = 0
    scheduled_jobs_count = 0

    for job in jobs:
        # Find a free slot for this job (from last possible slot to first)
        for j in range(min(max_deadline, job[1]) - 1, -1, -1):
            if time_slots[j] == -1:
                time_slots[j] = job[0]
                total_profit += job[2]
                scheduled_jobs_count +=1
                break
    return total_profit, [job_id for job_id in time_slots if job_id != -1]`,
    time_complexity: "O(n^2) in worst case (sorting + slot finding). Can be O(n log n) with Disjoint Set Union for slot finding.",
    space_complexity: "O(max_deadline) for time slots array.",
    advantages: "Simple greedy strategy. Works well for this specific problem.",
    disadvantages: "Naive slot finding can be quadratic. More complex data structures needed for O(n log n).",
    sample_questions_data: [{
      question: "Jobs (ID, Deadline, Profit): (J1,2,100), (J2,1,19), (J3,2,27), (J4,1,25), (J5,3,15). Maximize profit.",
      simulation_data: { type: "JobSequencing", items: [{"id":"J1","deadline":2,"profit":100},{"id":"J2","deadline":1,"profit":19},{"id":"J3","deadline":2,"profit":27},{"id":"J4","deadline":1,"profit":25},{"id":"J5","deadline":3,"profit":15}], steps: [
          {action: "Sort by profit: J1(100), J3(27), J4(25), J2(19), J5(15)"},
          {action: "Job J1 (d=2, p=100). Slot available at t=1. Schedule J1. Profit=100. Slots: [_, J1]", current_job: "J1", schedule: ["J1 at slot 1 (index 1)"], current_profit: 100},
          {action: "Job J3 (d=2, p=27). Slot available at t=0. Schedule J3. Profit=127. Slots: [J3, J1]", current_job: "J3", schedule: ["J3 at slot 0 (index 0)"], current_profit: 127},
          {action: "Job J4 (d=1, p=25). No slot <=0 available that is free. (Slot 0 taken by J3). Cannot schedule J4.", current_job: "J4"},
          {action: "Job J2 (d=1, p=19). No slot <=0 available. Cannot schedule J2.", current_job: "J2"},
          {action: "Job J5 (d=3, p=15). Slot available at t=2. Schedule J5. Profit=142. Slots: [J3, J1, J5]", current_job: "J5", schedule: ["J5 at slot 2 (index 2)"], current_profit: 142},
          {action: "Final Profit: 142. Scheduled: J3, J1, J5"}
      ]}
    }]
  },
  // Add placeholders for other subtopics
  "Coin Change (Greedy)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(N) or O(N*M)", space_complexity: "O(1) or O(M)", advantages: "Simple for canonical coin systems.", disadvantages: "Doesn't work for all coin systems.", sample_questions_data: [{ question: "Make change for 30 using coins {1, 5, 10, 25}.", simulation_data: { type: "CoinChangeGreedy", steps: [{action:"Details to be added."}]} }] },
  "Huffman Coding": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(n log n)", space_complexity: "O(n)", advantages: "Optimal prefix code.", disadvantages: "Requires knowledge of frequencies.", sample_questions_data: [{ question: "Generate Huffman codes for chars with frequencies: A:5, B:9, C:12, D:13, E:16, F:45.", simulation_data: { type: "HuffmanCoding", steps: [{action:"Details to be added."}]} }] },
  "Kruskal’s Algorithm": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(E log E) or O(E log V)", space_complexity: "O(V+E)", advantages: "Simple. Works on disconnected graphs.", disadvantages: "Sorting edges can be slow.", sample_questions_data: [{ question: "Find MST for a given graph using Kruskal's.", simulation_data: { type: "Kruskal", steps: [{action:"Details to be added."}]} }] },
  "Prim’s Algorithm": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(E log V) or O(V^2)", space_complexity: "O(V+E)", advantages: "Faster for dense graphs (with adjacency matrix and no heap).", disadvantages: "Slightly more complex than Kruskal's for sparse graphs.", sample_questions_data: [{ question: "Find MST for a given graph using Prim's.", simulation_data: { type: "Prim", steps: [{action:"Details to be added."}]} }] },
  "Dijkstra’s Algorithm": {
    brief_explanation: "Finds the shortest paths from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.",
    time_complexity: "O(V^2) with adjacency matrix, O((V+E)logV) or O(E logV) with adjacency list and priority queue.",
    space_complexity: "O(V) for storing distances and visited set.",
    advantages: "Efficient for non-negative weights. Guarantees shortest paths.",
    disadvantages: "Does not work correctly if there are negative edge weights (use Bellman-Ford instead).",
  },

  // --- DP ---
  "DP Foundations": { brief_explanation: "Covers Principle of Optimality, Overlapping Subproblems, and Memoization vs. Tabulation.", pseudocode: "// Conceptual", python_code: "// Conceptual", time_complexity: "N/A", space_complexity: "N/A", advantages: "Key to solving many complex problems efficiently.", disadvantages: "Identifying DP structure can be hard.", sample_questions_data: [{ question: "Explain Overlapping Subproblems with an example.", simulation_data: { type: "Generic", steps: [{action:"Details to be added."}]} }] },
  "Fibonacci (DP)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(n) with DP", space_complexity: "O(n) or O(1) for tabulation", advantages: "Efficiently calculates Fibonacci numbers.", disadvantages: "Recursive without memoization is O(2^n).", sample_questions_data: [{ question: "Calculate F(10) using DP.", simulation_data: { type: "Fibonacci", steps: [{action:"Details to be added."}]} }] },
  "0/1 Knapsack": {
    brief_explanation: "Given items with weights and values, determine the items to include in a knapsack of fixed capacity to maximize total value, without taking fractions of items.",
    time_complexity: "O(N*W) where N is number of items, W is capacity.",
    space_complexity: "O(N*W) for DP table, can be optimized to O(W).",
    advantages: "Guarantees optimal solution for 0/1 version.",
    disadvantages: "Pseudo-polynomial time (depends on capacity value).",
  },
  "Coin Change (DP)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(num_coins * amount)", space_complexity: "O(amount)", advantages: "Finds minimum coins for any coin system.", disadvantages: "Can be less intuitive than greedy for simple cases.", sample_questions_data: [{ question: "Min coins for 11 with {1,2,5}.", simulation_data: { type: "CoinChangeDP", steps: [{action:"Details to be added."}]} }] },
  "LCS": {
    brief_explanation: "Find the longest subsequence common to two sequences. Solved using dynamic programming by building a table representing lengths of LCS for prefixes.",
    time_complexity: "O(m*n) where m and n are lengths of the two strings.",
    space_complexity: "O(m*n) for DP table, can be optimized to O(min(m,n)) if only length is needed.",
    advantages: "Solves the problem optimally. Table can be used to reconstruct the LCS.",
    disadvantages: "Space complexity can be high for very long sequences.",
  },
  "Matrix Chain Multiplication": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(n^3)", space_complexity: "O(n^2)", advantages: "Finds optimal parenthesization.", disadvantages: "DP state can be tricky.", sample_questions_data: [{ question: "Optimal order for A(10x30)B(30x5)C(5x60).", simulation_data: { type: "MatrixChainMultiplication", steps: [{action:"Details to be added."}]} }] },
  "TSP (DP)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(n^2 * 2^n)", space_complexity: "O(n * 2^n)", advantages: "Solves TSP optimally for moderate n.", disadvantages: "Exponential, impractical for large n.", sample_questions_data: [{ question: "Solve TSP for 4 cities with given cost matrix using DP.", simulation_data: { type: "TSP", steps: [{action:"Details to be added."}]} }] },
  "Floyd-Warshall Algorithm": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(V^3)", space_complexity: "O(V^2)", advantages: "Finds all-pairs shortest paths. Handles negative edges (no negative cycles).", disadvantages: "High time complexity for large graphs.", sample_questions_data: [{ question: "Find all-pairs shortest paths for a graph.", simulation_data: { type: "FloydWarshall", steps: [{action:"Details to be added."}]} }] },
  "Bellman-Ford Algorithm": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(VE)", space_complexity: "O(V)", advantages: "Handles negative edge weights. Detects negative cycles.", disadvantages: "Slower than Dijkstra for non-negative weights.", sample_questions_data: [{ question: "Find shortest paths from source in a graph with negative edges.", simulation_data: { type: "BellmanFord", steps: [{action:"Details to be added."}]} }] },

  // --- Backtracking & Branch-and-Bound ---
  "N-Queens Problem": {
    brief_explanation: "Place N chess queens on an N×N chessboard so that no two queens threaten each other. Solved using backtracking by trying to place queens column by column (or row by row).",
    time_complexity: "Roughly O(N!) in worst-case without optimizations, but pruning helps significantly.",
    space_complexity: "O(N) for storing queen positions on the board or in an array.",
    advantages: "Illustrates backtracking effectively. Finds all solutions.",
    disadvantages: "Can be slow for large N due to exponential nature.",
  },
  "Graph Coloring": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "Exponential O(m^V)", space_complexity: "O(V)", advantages: "Solves graph coloring problem.", disadvantages: "NP-hard.", sample_questions_data: [{ question: "Color a graph with M colors.", simulation_data: { type: "GraphColoring", steps: [{action:"Details to be added."}]} }] },
  "Subset Sum Problem": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(2^n)", space_complexity: "O(n) for recursion stack", advantages: "Finds if a subset sums to target.", disadvantages: "NP-complete.", sample_questions_data: [{ question: "Find subset of {2,4,6,10} that sums to 16.", simulation_data: { type: "SubsetSum", steps: [{action:"Details to be added."}]} }] },
  "Hamiltonian Cycle": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(N!)", space_complexity: "O(N)", advantages: "Finds Hamiltonian cycles.", disadvantages: "NP-complete.", sample_questions_data: [{ question: "Find a Hamiltonian cycle in a graph.", simulation_data: { type: "HamiltonianCycle", steps: [{action:"Details to be added."}]} }] },
  "15-Puzzle Problem": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "Exponential", space_complexity: "Exponential", advantages: "Classic search problem.", disadvantages: "Large state space.", sample_questions_data: [{ question: "Solve a 15-Puzzle instance.", simulation_data: { type: "FifteenPuzzle", steps: [{action:"Details to be added."}]} }] },
  "0/1 Knapsack (BB)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "Exponential (worst-case)", space_complexity: "Depends on nodes in search tree", advantages: "Can be faster than DP for some instances.", disadvantages: "Complex bounding function needed.", sample_questions_data: [{ question: "Solve 0/1 Knapsack using Branch and Bound.", simulation_data: { type: "ZeroOneKnapsackBB", steps: [{action:"Details to be added."}]} }] },
  "TSP (BB)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "Exponential (worst-case)", space_complexity: "Depends on search tree", advantages: "Can solve larger TSP instances than DP.", disadvantages: "Reliant on good bounding.", sample_questions_data: [{ question: "Solve TSP using Branch and Bound.", simulation_data: { type: "TSPBB", steps: [{action:"Details to be added."}]} }] },
  "Job Sequencing (BB)": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "Details to be added.", space_complexity: "Details to be added.", advantages: "Details to be added.", disadvantages: "Details to be added.", sample_questions_data: [{ question: "Details to be added.", simulation_data: { type: "JobSequencingBB", steps: [{action:"Details to be added."}]} }] },

  // --- String Matching ---
  "Naive String Matching": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(m*(n-m+1))", space_complexity: "O(1)", advantages: "Simple.", disadvantages: "Inefficient for many cases.", sample_questions_data: [{ question: "Find 'ABC' in 'ABXABC'.", simulation_data: { type: "NaiveStringMatching", steps: [{action:"Details to be added."}]} }] },
  "Rabin-Karp Algorithm": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "Average O(n+m), Worst O(nm)", space_complexity: "O(1) or O(p) for pattern hash", advantages: "Efficient on average. Good for multiple pattern matching.", disadvantages: "Worst case can be bad. Relies on good hash function.", sample_questions_data: [{ question: "Find 'test' in 'this is a test' using Rabin-Karp.", simulation_data: { type: "RabinKarp", steps: [{action:"Details to be added."}]} }] },
  "KMP Algorithm": {
    brief_explanation: "An efficient string matching algorithm that preprocesses the pattern to create an LPS (Longest Proper Prefix which is also Suffix) array, avoiding redundant comparisons.",
    time_complexity: "O(n+m) where n is text length, m is pattern length.",
    space_complexity: "O(m) for LPS array.",
    advantages: "Very efficient, linear time complexity. Avoids re-comparing characters unnecessarily.",
    disadvantages: "Preprocessing step (LPS array) can be non-trivial to understand initially.",
  },
  "Finite Automata Matching": { brief_explanation: "Details to be added.", pseudocode: "Details to be added.", python_code: "Details to be added.", time_complexity: "O(n) after O(m*|Alphabet|) preprocessing", space_complexity: "O(m*|Alphabet|)", advantages: "Very fast matching.", disadvantages: "Preprocessing can be complex and space-consuming.", sample_questions_data: [{ question: "Match pattern using FA.", simulation_data: { type: "FiniteAutomataStringMatching", steps: [{action:"Details to be added."}]} }] },
  "String Matching Concepts": { brief_explanation: "Covers concepts like Prefix/Suffix Analysis and Rolling Hash.", pseudocode: "// Conceptual", python_code: "// Conceptual", time_complexity: "N/A", space_complexity: "N/A", advantages: "Fundamental to understanding advanced string algorithms.", disadvantages: "N/A", sample_questions_data: [{ question: "Explain Rolling Hash.", simulation_data: { type: "Generic", steps: [{action:"Details to be added."}]} }] },
  
  // --- Advanced Topics ---
  "Optimal BST": {
    brief_explanation: "Constructs a binary search tree with minimal expected search cost, given keys and their access probabilities. Solved using dynamic programming.",
    time_complexity: "O(n^3) typically, or O(n^2) with Knuth's optimization.",
    space_complexity: "O(n^2) for DP tables.",
    advantages: "Finds the absolute best BST structure for given probabilities.",
    disadvantages: "Complex. Requires knowledge of access probabilities which might not be available or static.",
  },
};


const generatedAlgorithmData: AlgorithmData = APP_TOPICS_CONFIG.map((topicConfig, topicIndex) => {
  const topic: Topic = {
    id: `topic-${topicIndex}`,
    title: topicConfig.title,
    icon: ICONS[topicConfig.title] || Sparkles, // Fallback icon
    subtopics: topicConfig.subtopics.map((subTopicConfig, subtopicIndex) => {
      const detailsKey = subTopicConfig.detailsKey || subTopicConfig.title;
      const baseDetails = subTopicCompleteDetails[detailsKey] || {};

      let sampleQuestions: SampleQuestion[] = [];

      // Check if this subtopic has predefined simulation data in `rawData`
      const rawDataTopic = rawData[topicConfig.title];
      const rawDataSubTopicArray = rawDataTopic ? rawDataTopic[subTopicConfig.rawDataKey || subTopicConfig.title] : undefined;

      if (rawDataSubTopicArray) {
        // Use existing detailed simulations from rawData
        sampleQuestions = rawDataSubTopicArray.map((q: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q.question,
          simulation_data: q.simulation_data as SimulationData,
          solution_steps: q.simulation_data.steps.map((step: SimulationStep, i: number) => step.action || `Step ${i+1}: Perform operation.`),
        }));
      } else if (baseDetails.sample_questions_data) {
        // Use sample_questions_data from subTopicCompleteDetails for new topics
        // @ts-ignore because sample_questions_data is not strictly on SubTopic but on our helper type
        sampleQuestions = baseDetails.sample_questions_data.map((q_data: any, questionIndex: number) => ({
          id: `question-${topicIndex}-${subtopicIndex}-${questionIndex}`,
          question: q_data.question,
          simulation_data: q_data.simulation_data as SimulationData,
          solution_steps: q_data.simulation_data.steps.map((step: SimulationStep, i: number) => step.action || `Step ${i+1}: Perform operation.`),
        }));
      } else {
        // Fallback if no questions defined anywhere
        sampleQuestions = [{
          id: `question-${topicIndex}-${subtopicIndex}-0`,
          question: `Sample question for ${subTopicConfig.title}. (Details to be implemented)`,
          simulation_data: { type: "Generic", steps: [{ action: "Simulation details to be implemented for this new topic." }] },
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
