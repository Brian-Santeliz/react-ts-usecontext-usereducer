export interface Todo {
  id?: number;
  name: string;
  description: string;
  done: boolean;
}
export interface TodoState {
  todos: Todo[];
  pending: number; 
}