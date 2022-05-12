import { FC } from "react";
//store
import TodoStore from "stores/TodoStore";
//styles
import styles from "./FetchTodo.module.scss";

const FetchTodo: FC = () => {
  const fetchTodoClickHandler = () => TodoStore.fetchTodo();
  return (
    <div>
      <button className={styles.button} onClick={fetchTodoClickHandler}>
        Fetch Todo
      </button>
    </div>
  );
};

export default FetchTodo;
