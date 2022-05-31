import { FC } from 'react';
//store
import TodoStore from 'stores/TodoStore';
//styles
import styles from './FetchTodo.module.scss';

const FetchTodo: FC = () => {
  const fetchOneTodoClickHandler = () => TodoStore.fetchOneTodo();
  const fetchTwoHundredTodoClickHandler = () => TodoStore.fetchTwoHundredTodo();

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={fetchOneTodoClickHandler}>
        Fetch One Todo
      </button>
      <button className={styles.button} onClick={fetchTwoHundredTodoClickHandler}>
        Fetch 200 Todo
      </button>
    </div>
  );
};

export default FetchTodo;
