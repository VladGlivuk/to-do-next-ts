export interface ITodoStore {
  allTodo: AllTodo;
  displayingState: TODO__TO__SHOW;

  fetchTodo: () => Promise<void>;
  changeDisplayingState: (state: TODO__TO__SHOW) => void;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  changeCompleteState: (id: string) => void;
}

type AllTodo = {
  records: Array<Todo>;
  total: number;
};

export type Todo = {
  userId?: number;
  title: string;
  completed: boolean;
  timeToDo?: string;
  description?: string | null;
  id: string;
};

export enum TODO__TO__SHOW {
  AllTodo = 1,
  CompletedTodo = 2,
  UncompletedTodo = 3,
}
