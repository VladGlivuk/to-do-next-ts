import { NextPage } from "next";
//types
import { Todo } from "core/types/stores";
//stores
import TodoStore from "stores/TodoStore";
//components
import CustomLink from "shared/components/CustomLink";
//styles
import styles from "./Todo.module.scss";

type TodoProps = {
  todo: Todo;
  link: string;
};

const Todo: NextPage<TodoProps> = ({ todo, link }) => {
  const { title, completed, timeToDo, id } = todo;

  const onCompleteValueChange = () => TodoStore.changeCompleteState(id);

  const deleteTodoClickHandler = () => TodoStore.deleteTodo(id);

  return (
    <div className={styles.todo}>
      <div className={styles.todo__title}>{title}</div>
      <input
        type="checkbox"
        checked={completed}
        className={styles.todo__isCompleted}
        onChange={onCompleteValueChange}
      />

      {!!timeToDo && <span className={styles.todo__timeToDo}>Time to do - {timeToDo} </span>}

      <CustomLink
        link={link}
        title="Show More"
        parentClassName={styles.todo__showMore}
      />

      <button
        type="submit"
        onClick={deleteTodoClickHandler}
        className={styles.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
