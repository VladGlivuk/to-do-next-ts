import { nanoid } from 'nanoid';
import { observable, configure, runInAction } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
//types
import { ITodoStore, Todo, TODO__TO__SHOW } from 'core/types/stores';
import { AxiosResponse } from 'axios';
import { API } from 'core/API';

// strict mode
configure({ enforceActions: 'always' });

// there is no window object on the server
enableStaticRendering(typeof window === 'undefined');

const todoObservable: ITodoStore = {
  allTodo: { records: [], total: 0 },
  displayingState: TODO__TO__SHOW.AllTodo,

  addTodo(todo: Todo) {
    this.allTodo.records = [...this.allTodo.records, todo];
    this.allTodo.total = this.allTodo.total += 1;
  },

  deleteTodo(id: string) {
    this.allTodo.records = this.allTodo.records.filter((todo) => todo.id !== id);
    this.allTodo.total = this.allTodo.total -= 1;
  },

  changeCompleteState(id: string) {
    this.allTodo.records = this.allTodo.records.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    console.log(this.allTodo.records.find((todo) => todo.id === id));
  },

  changeDisplayingState(state: TODO__TO__SHOW) {
    if (state !== this.displayingState) this.displayingState = state;
  },

  async fetchOneTodo() {
    try {
      const response: AxiosResponse<Todo> = await API.get('todos/1');

      if (response) {
        runInAction(() => {
          const todoWithNewParams = (response.data = { ...response.data, id: nanoid(), description: 'created by jsonPlaceholder' });

          this.allTodo.records = [...this.allTodo.records, todoWithNewParams];
          this.allTodo.total = this.allTodo.total += 1;
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  async fetchTwoHundredTodo() {
    try {
      const response: AxiosResponse<Array<Todo>> = await API.get('todos');

      if (response) {
        runInAction(() => {
          const todoWithNewId = response.data.map((todo) => {
            return { ...todo, id: nanoid(), description: 'created by jsonPlaceholder' };
          });

          this.allTodo.records = [...this.allTodo.records, ...todoWithNewId];
          this.allTodo.total = this.allTodo.total += response.data.length;
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

const TodoStore = observable(todoObservable);

export default TodoStore;
