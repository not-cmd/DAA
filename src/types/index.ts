
export interface SimulationStep {
  // Common
  action?: string;
  description?: string;

  // Array-based (Merge Sort, Quick Sort, Max-Min)
  array?: (number | string)[];
  merged?: (number | string)[];
  highlight?: number[];
  pivot_index?: number;
  pivot_value?: number | string;
  partitioning?: (number | string)[];
  less?: (number | string)[];
  greater?: (number | string)[];
  equal?: (number | string)[];
  
  // ControlStructures specific
  current_array_item?: number | string | null; 
  output_log?: string[]; 
  variable_states?: Record<string, string | number | boolean | null | undefined>;

  // Max-Min specific
  array_segment?: (number | string)[]; 
  left_segment?: (number | string)[]; 
  right_segment?: (number | string)[]; 
  max_val?: number | string; 
  min_val?: number | string; 
  final_max?: number | string; 
  final_min?: number | string; 


  // Knapsack (Fractional, 0/1)
  item_index?: number;
  item?: { value: number; weight: number; ratio?: number; name?: string; deadline?: number; profit?: number; char?: string; freq?: number; start_time?: number; finish_time?:number; id?: string; }; // Added more fields for various items
  fraction?: number;
  current_weight?: number;
  current_value?: number;
  dp_row?: number[]; // for 0/1 Knapsack table row

  // Graph (Dijkstra, Kruskal, Prim, BellmanFord, FloydWarshall, TSP, Hamiltonian, GraphColoring)
  current_node?: string;
  distances?: Record<string, number | string>; // Infinity can be string
  visited_nodes?: string[];
  path?: string[]; // For Hamiltonian, TSP BB path
  updated_distance_for?: string;
  new_distance?: number;
  edge_considered?: [string, string, number] | {from: string, to: string, weight: number}; // Allow object for MST edges
  mst_edges?: { from: string; to: string; weight: number }[]; // For Prim/Kruskal final MST
  total_mst_cost?: number; // For Prim/Kruskal
  final_distances?: Record<string, number | string>; // For Dijkstra/BellmanFord final
  negative_cycle_detected?: boolean; // For BellmanFord
  final_coloring?: Record<string, number | string>; // For Graph Coloring
  hamiltonian_cycle_path?: string[]; // For Hamiltonian Cycle
  tsp_tour?: string[]; // For TSP DP/BB
  tsp_tour_cost?: number; // For TSP DP/BB
  
  // DP Table (LCS, 0/1 Knapsack, FloydWarshall, OptimalBST)
  row?: number;
  col?: number;
  value?: number | string;
  cell_coords?: [number, number]; // For highlighting current cell
  dp_table?: (number | string | {value: any, highlight?: boolean, type?: string, arrowFrom?: string[]})[][]; // For showing full table in a step, made cell more generic
  lcs_reconstruction_path?: {row: number, col: number}[]; // Path for LCS reconstruction highlight
  final_lcs_string?: string; // The final LCS string

  // N-Queens
  board_state?: (number | string)[][]; // 0 for empty, 1 or 'Q' for queen
  queen_placements?: { row: number; col: number; valid: boolean }[];
  backtrack_from?: { row: number; col: number };
  solution_found?: boolean;

  // Subset Sum
  current_subset?: number[];
  current_sum?: number;
  item_considered?: number;
  included?: boolean; // true if item_considered is included

  // String Matching (KMP, Rabin-Karp, Finite Automata)
  text_pointer?: number;
  pattern_pointer?: number;
  comparison_result?: 'match' | 'mismatch';
  pattern_shift?: number;
  match_found_at_index?: number;
  current_text_window?: string;
  current_pattern_segment?: string;
  text_hash?: number | string;
  pattern_hash?: number | string;
  spurious_hit?: boolean;
  automaton_path?: string; // Sequence of states in FA
  current_fa_state?: number | string; // For FA

  // Optimal BST
  stage?: string; // e.g., "initial", "length_1", "final"
  cost_matrix_cell?: { i: number; j: number; value: number };
  root_matrix_cell?: { i: number; j: number; value: number };
  sub_problem?: { i: number; j: number; k_min: number; cost: number };
  current_tree_structure?: any; // Simplified tree structure
  optimal_cost?: number;

  // Strassen's Matrix Multiplication
  matrix_a?: number[][];
  matrix_b?: number[][];
  sub_matrix_id?: string; // e.g., A11, P1
  operation?: string; // e.g., "A11 + A22", "M1 * M2"
  result_matrix?: number[][];

  // Fibonacci
  fib_n?: number;
  fib_val?: number;
  dp_table_fib?: (number | string)[]; // For Fibonacci tabulation

  // Coin Change Greedy
  coins_used?: number[];
  total_coins?: number;
  remaining_amount?: number;

  // Huffman Coding
  huffman_codes?: Record<string, string>;
  huffman_tree_description?: string; // Textual description of tree construction

  // Matrix Chain Multiplication
  optimal_parenthesization?: string;
  min_multiplications?: number;

  // 15-Puzzle (Branch and Bound)
  puzzle_board_state?: (number | string)[][];
  puzzle_path?: string[]; // Sequence of moves
  puzzle_cost?: number;
  puzzle_heuristic?: number;

  // Branch and Bound Generic
  bb_node_id?: string;
  bb_profit?: number;
  bb_weight?: number;
  bb_upper_bound?: number;
  bb_decision?: string; // e.g. "Include item X", "Exclude item Y"
  bb_pruned?: boolean;
  bb_solution_items?: any[]; // For 0/1 Knapsack BB
  bb_max_profit?: number; // For Job Sequencing BB
  bb_scheduled_jobs?: any[]; // For Job Sequencing BB
}


export interface SimulationData {
  // Common
  type: 'MergeSort' | 'QuickSort' | 'FractionalKnapsack' | 'Dijkstra' | 'ZeroOneKnapsack' | 'LCS' | 'NQueens' | 'SubsetSum' | 'KMP' | 'RabinKarp' | 'OptimalBST' | 'ControlStructures' | 'MaxMin' | 'Strassen' | 'ActivitySelection' | 'JobSequencing' | 'CoinChangeGreedy' | 'HuffmanCoding' | 'Kruskal' | 'Prim' | 'Fibonacci' | 'CoinChangeDP' | 'MatrixChainMultiplication' | 'TSP' | 'FloydWarshall' | 'BellmanFord' | 'GraphColoring' | 'HamiltonianCycle' | 'FifteenPuzzle' | 'ZeroOneKnapsackBB' | 'TSPBB' | 'JobSequencingBB' | 'NaiveStringMatching' | 'FiniteAutomataStringMatching' | 'RecurrenceRelations' | 'AlgorithmAnalysis' | 'Generic';
  steps: SimulationStep[];

  // Specific initial data
  initial_array?: (number | string)[]; // MergeSort, QuickSort, MaxMin, ControlStructures
  initial_variables?: Record<string, string | number | boolean | null | undefined>; // For ControlStructures initial state
  pivot_strategy?: 'first' | 'last'; // QuickSort
  capacity?: number; // Knapsack
  items?: { value: number; weight: number; ratio?: number; name?: string; deadline?: number; profit?: number; char?: string; freq?: number; start_time?: number; finish_time?:number; id?: string; }[]; // Knapsack, JobSequencing, HuffmanCoding, ActivitySelection
  order?: string; // FractionalKnapsack (e.g., "value_per_weight")
  graph?: Record<string, [string, number][]>; // Dijkstra, Kruskal, Prim, BellmanFord, FloydWarshall, TSP
  nodes?: string[]; // Dijkstra, Kruskal, Prim
  start_node?: string; // Dijkstra, BellmanFord
  end_node?: string; // Dijkstra (optional)
  dp_table_dimensions?: { rows: number; cols: number }; // 0/1 Knapsack, LCS
  string1?: string; // LCS
  string2?: string; // LCS
  board_size?: number; // N-Queens
  num_colors?: number; // GraphColoring
  set?: number[]; // Subset Sum
  target_sum?: number; // Subset Sum
  text?: string; // KMP, Rabin-Karp, Naive, FiniteAutomata
  pattern?: string; // KMP, Rabin-Karp, Naive, FiniteAutomata
  lps_array?: number[]; // KMP
  hash_function_description?: string; // Rabin-Karp
  keys?: number[]; // OptimalBST
  probabilities?: number[]; // OptimalBST
  initial_dp_table?: (number | string | {value: any})[][]; // For 0/1 Knapsack and LCS to show initial state, made cell more generic
  matrix_a?: number[][]; // Strassen
  matrix_b?: number[][]; // Strassen
  num_jobs?: number; // Job Sequencing
  job_profits?: number[]; // Job Sequencing
  job_deadlines?: number[]; // Job Sequencing
  coins?: number[]; // CoinChange
  amount?: number; // CoinChange
  n_fibonacci?: number; // For Fibonacci
  matrices_dimensions?: number[]; // MatrixChainMultiplication
  num_nodes?: number; // TSP, HamiltonianCycle, GraphColoring
  cost_matrix?: (number | string)[][]; // TSP, Assignment Problem (related to Branch&Bound), FloydWarshall
  initial_board?: (number | string)[][]; // 15-Puzzle
  goal_board?: (number | string)[][]; // 15-Puzzle
  alphabet?: string[]; // For Finite Automata
}

export interface SampleQuestion {
  id: string;
  question: string;
  simulation_data: SimulationData;
  solution_steps?: string[]; // Textual explanation for each step
}

export interface SubTopic {
  id: string;
  title: string;
  sample_questions: SampleQuestion[];
  brief_explanation?: string;
  pseudocode?: string;
  python_code?: string;
  time_complexity?: string;
  space_complexity?: string;
  advantages?: string;
  disadvantages?: string;
}

export interface Topic {
  id: string;
  title: string;
  icon?: React.ElementType;
  subtopics: SubTopic[];
}

export type AlgorithmData = Topic[];

    