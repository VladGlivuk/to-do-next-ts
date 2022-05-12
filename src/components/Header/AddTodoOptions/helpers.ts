import { Todo } from "../../../core/types/stores";
import { nanoid } from "nanoid";

export const makeNewTodo = (
  title: string,
  date: string,
  description: string
): Todo => {
  const todo: Todo = {
    title: title,
    timeToDo: date,
    completed: false,
    description: description || null,
    id: nanoid(),
  };
  return todo;
};
