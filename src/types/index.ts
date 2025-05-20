
export interface SimulationStep {
  // Common
  action?: string;
  description?: string;

  // Array-based (Merge Sort, Quick Sort)
  array?: (number | string)[];
  merged?: (number | string)[];
  highlight?: number[];
  pivot_index?: number;
  pivot_value?: number | string;
  partitioning?: (number | string)[];
  less?: (number | string)[];
  greater?: (number | string)[];
  equal?: (number | string)[];

  // Knapsack (Fractional, 0/1)
  item_index?: number;
  item?: { value: number; weight: number; ratio?: number; name?: string };
  fraction?: number;
  current_weight?: number;
  current_value?: number;
  dp_row?: number[]; // for 0/1 Knapsack table row

  // Graph (Dijkstra)
  current_node?: string;
  distances?: Record<string, number | string>; // Infinity can be string
  visited_nodes?: string[];
  path?: string[];
  updated_distance_for?: string;
  new_distance?: number;
  edge_considered?: [string, string, number];

  // DP Table (LCS, 0/1 Knapsack)
  row?: number;
  col?: number;
  value?: number | string;
  cell_coords?: [number, number]; // For highlighting current cell

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

  // String Matching (KMP, Rabin-Karp)
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

  // Optimal BST
  stage?: string; // e.g., "initial", "length_1", "final"
  cost_matrix_cell?: { i: number; j: number; value: number };
  root_matrix_cell?: { i: number; j: number; value: number };
  sub_problem?: { i: number; j: number; k_min: number; cost: number };
  current_tree_structure?: any; // Simplified tree structure
}


export interface SimulationData {
  // Common
  type: 'MergeSort' | 'QuickSort' | 'FractionalKnapsack' | 'Dijkstra' | 'ZeroOneKnapsack' | 'LCS' | 'NQueens' | 'SubsetSum' | 'KMP' | 'RabinKarp' | 'OptimalBST';
  steps: SimulationStep[];

  // Specific initial data
  initial_array?: (number | string)[]; // MergeSort, QuickSort
  pivot_strategy?: 'first' | 'last'; // QuickSort
  capacity?: number; // Knapsack
  items?: { value: number; weight: number; ratio?: number; name?: string }[]; // Knapsack
  order?: string; // FractionalKnapsack (e.g., "value_per_weight")
  graph?: Record<string, [string, number][]>; // Dijkstra
  nodes?: string[]; // Dijkstra
  start_node?: string; // Dijkstra
  end_node?: string; // Dijkstra (optional)
  dp_table_dimensions?: { rows: number; cols: number }; // 0/1 Knapsack, LCS
  string1?: string; // LCS
  string2?: string; // LCS
  board_size?: number; // N-Queens
  set?: number[]; // Subset Sum
  target_sum?: number; // Subset Sum
  text?: string; // KMP, Rabin-Karp
  pattern?: string; // KMP, Rabin-Karp
  lps_array?: number[]; // KMP
  hash_function_description?: string; // Rabin-Karp
  keys?: number[]; // OptimalBST
  probabilities?: number[]; // OptimalBST
  initial_dp_table?: (number | string)[][]; // For 0/1 Knapsack and LCS to show initial state
}

export interface SampleQuestion {
  id: string;
  question: string;
  simulation_data: SimulationData;
  brief_explanation?: string;
  pseudocode?: string;
  python_code?: string;
  solution_steps?: string[]; // Textual explanation for each step
}

export interface SubTopic {
  id: string;
  title: string;
  sample_questions: SampleQuestion[];
  brief_explanation?: string;
  pseudocode?: string;
  python_code?: string;
}

export interface Topic {
  id: string;
  title: string;
  icon?: React.ElementType;
  subtopics: SubTopic[];
}

export type AlgorithmData = Topic[];
